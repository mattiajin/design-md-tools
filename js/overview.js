(function () {
  const listEl = document.getElementById("version-list");
  const sharedRefEl = document.getElementById("shared-ref");
  const sharedRefLink = document.getElementById("shared-ref-link");
  const countEl = document.getElementById("version-count");
  const iframe = document.getElementById("preview-frame");
  const referenceFrame = document.getElementById("reference-frame");
  const openLink = document.getElementById("open-preview");
  const openReference = document.getElementById("open-reference");
  const referenceColumn = document.getElementById("reference-column");
  const phoneFit = document.getElementById("phone-fit");
  const phoneCompareOuter = document.getElementById("phone-compare-outer");
  const phoneCompare = document.getElementById("phone-compare");
  const compareBar = document.getElementById("compare-bar");
  const previewModeEl = document.getElementById("preview-mode");
  const previewModeCompare = document.getElementById("preview-mode-compare");
  const previewModeSolo = document.getElementById("preview-mode-solo");
  const comparePrev = document.getElementById("compare-prev");
  const compareNext = document.getElementById("compare-next");
  const compareContext = document.getElementById("compare-context");
  const copyPromptBtn = document.getElementById("copy-prompt");

  const PREVIEW_MODE_KEY = "design-md-preview-mode";
  const TOOL_COLOR_MAP = {
    "裸 prompt": "#bf4800",
    "design-md-chrome": "#0071e3",
    designmaxxing: "#248a3d",
    "awesome-design-md": "#8944ab",
    skillui: "#d70015",
    "手写 DESIGN.md": "#1d7a5c",
  };

  const VERSION_SECTIONS = [
    { axis: "none", label: "无规范" },
    { axis: "spec", label: "规范来源" },
  ];

  let currentId = null;
  let allSameRef = false;
  let hasRefPreview = false;
  let currentRefLabel = "";
  let previewMode = "solo";

  function loadPreviewMode() {
    try {
      const stored = localStorage.getItem(PREVIEW_MODE_KEY);
      return stored === "compare" ? "compare" : "solo";
    } catch {
      return "solo";
    }
  }

  function savePreviewMode(mode) {
    try {
      localStorage.setItem(PREVIEW_MODE_KEY, mode);
    } catch {
      /* ignore */
    }
  }

  function isCompareVisible() {
    return hasRefPreview && previewMode === "compare";
  }

  function getCompareSize() {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const single = !isCompareVisible();
    const w = parseFloat(
      style.getPropertyValue(single ? "--phone-compare-single-w" : "--phone-compare-w")
    );
    const h = parseFloat(
      style.getPropertyValue(single ? "--phone-compare-single-h" : "--phone-compare-h")
    );
    return { w: w || 890, h: h || 856 };
  }

  function getReferencePreview(ref) {
    return (ref && ref.mobilePreview) || null;
  }

  function fitPhonePreview() {
    if (!phoneFit || !phoneCompareOuter || !phoneCompare) return;

    const { w, h } = getCompareSize();
    const availW = phoneFit.clientWidth;
    const availH = phoneFit.clientHeight;
    const scale = Math.min(1, availW / w, availH / h);

    phoneCompareOuter.style.width = w * scale + "px";
    phoneCompareOuter.style.height = h * scale + "px";
    phoneCompare.style.transform = "scale(" + scale + ")";
  }

  function syncPreviewModeTabs() {
    if (previewModeCompare) {
      previewModeCompare.setAttribute(
        "aria-selected",
        previewMode === "compare" ? "true" : "false"
      );
    }
    if (previewModeSolo) {
      previewModeSolo.setAttribute(
        "aria-selected",
        previewMode === "solo" ? "true" : "false"
      );
    }
  }

  function updatePreviewLayout() {
    const compareOn = isCompareVisible();

    if (referenceColumn) {
      referenceColumn.hidden = !compareOn;
    }
    if (phoneCompare) {
      phoneCompare.classList.toggle("phone-compare--single", !compareOn);
    }
    if (previewModeEl) {
      previewModeEl.hidden = !hasRefPreview;
    }
    if (compareBar) {
      compareBar.classList.toggle("compare-bar--no-mode", !hasRefPreview);
    }

    syncPreviewModeTabs();
    fitPhonePreview();
  }

  function setPreviewMode(mode) {
    if (!hasRefPreview) {
      previewMode = "solo";
    } else {
      previewMode = mode === "solo" ? "solo" : "compare";
    }
    savePreviewMode(previewMode);
    updatePreviewLayout();
    if (currentId) updateCompareBar(currentId);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  function statusLabel(status) {
    const map = {
      exploration: "探索中",
      refined: "已打磨",
      final: "定稿",
    };
    return map[status] || status;
  }

  function getToolName(v) {
    return v.tool || (v.tools && v.tools[0]) || "—";
  }

  function getReferencePage(v) {
    if (v.referencePage) return v.referencePage;
    if (v.references && v.references[0]) return v.references[0];
    return { label: "—", url: "#" };
  }

  function getToolColor(toolName) {
    return TOOL_COLOR_MAP[toolName] || "#0071e3";
  }

  function groupVersionsByAxis(versions) {
    return VERSION_SECTIONS.map((section) => ({
      label: section.label,
      versions: versions.filter((v) => v.axis === section.axis),
    })).filter((section) => section.versions.length > 0);
  }

  function renderVersionButton(v) {
    const toolName = getToolName(v);
    const color = getToolColor(toolName);

    return (
      '<button type="button" class="version-btn" data-id="' +
      escapeAttr(v.id) +
      '" aria-current="false">' +
      '<span class="version-btn__head">' +
      '<span class="version-btn__tool" style="color:' +
      escapeAttr(color) +
      '">' +
      escapeHtml(toolName) +
      "</span>" +
      '<span class="version-btn__id">' +
      escapeHtml(v.id) +
      "</span>" +
      "</span>" +
      (v.note
        ? '<span class="version-btn__note">' + escapeHtml(v.note) + "</span>"
        : "") +
      "</button>"
    );
  }

  function isRuntimeTool(toolItem, primaryTool) {
    if (typeof toolItem === "string") {
      return toolItem !== primaryTool;
    }
    return toolItem.label !== primaryTool;
  }

  function updateCompareBar(id) {
    const idx = VERSIONS.findIndex((v) => v.id === id);
    if (idx < 0) return;

    const v = VERSIONS[idx];
    const toolName = getToolName(v);
    const toolColor = getToolColor(toolName);

    if (compareContext) {
      let html =
        '<span class="compare-bar__tool" style="color:' +
        escapeAttr(toolColor) +
        '">' +
        escapeHtml(toolName) +
        "</span> · " +
        (idx + 1) +
        "/" +
        VERSIONS.length;

      if (isCompareVisible() && currentRefLabel) {
        html += ' · 对照 <span class="compare-bar__ref">' + escapeHtml(currentRefLabel) + "</span>";
      }

      compareContext.innerHTML = html;
    }

    if (comparePrev) comparePrev.disabled = idx <= 0;
    if (compareNext) compareNext.disabled = idx >= VERSIONS.length - 1;
  }

  function renderDetail(v) {
    const toolName = getToolName(v);
    const ref = getReferencePage(v);
    const toolColor = getToolColor(toolName);

    document.getElementById("detail-tool").textContent = toolName;
    document.getElementById("detail-tool").style.color = toolColor;

    const toolDetailEl = document.getElementById("detail-tool-detail");
    toolDetailEl.textContent = v.toolDetail || "";
    toolDetailEl.hidden = !v.toolDetail;

    const toolsEl = document.getElementById("detail-tools");
    const runtimeTools = (v.tools || []).filter((t) => isRuntimeTool(t, toolName));
    toolsEl.innerHTML = runtimeTools
      .map((t) => {
        if (typeof t === "string") {
          return '<li class="tool-chain__item">' + escapeHtml(t) + "</li>";
        }
        return (
          '<li class="tool-chain__item"><a href="' +
          escapeAttr(t.url) +
          '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(t.label) +
          "</a></li>"
        );
      })
      .join("");
    const toolsSub = document.getElementById("detail-tools-sub");
    if (toolsSub) toolsSub.hidden = runtimeTools.length === 0;

    const refSection = document.getElementById("detail-ref-section");
    if (refSection) refSection.hidden = allSameRef;

    const refCard = document.getElementById("detail-ref-page");
    refCard.href = ref.url;
    document.getElementById("detail-ref-label").textContent = ref.label;
    document.getElementById("detail-ref-url").textContent = ref.url.replace(
      /^https?:\/\//,
      ""
    );

    const extraRefs = (v.references || []).filter((r) => r.url !== ref.url);
    const refsEl = document.getElementById("detail-refs");
    refsEl.innerHTML = extraRefs
      .map(
        (r) =>
          '<li><a class="ref-list__link" href="' +
          escapeAttr(r.url) +
          '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(r.label) +
          "</a></li>"
      )
      .join("");
    refsEl.hidden = extraRefs.length === 0;

    document.getElementById("detail-version-id").textContent = v.id;
    const noteEl = document.getElementById("detail-version-note");
    if (noteEl) {
      noteEl.textContent = v.note || "";
      noteEl.hidden = !v.note;
    }
    document.getElementById("detail-status").textContent = statusLabel(v.status);
    document.getElementById("detail-status").dataset.status = v.status;
    document.getElementById("detail-summary").textContent = v.summary;
    document.getElementById("detail-prompt").textContent = v.prompt;
  }

  function selectVersion(id) {
    const v = VERSIONS.find((item) => item.id === id);
    if (!v) return;

    currentId = id;
    const toolName = getToolName(v);

    listEl.querySelectorAll(".version-btn").forEach((btn) => {
      btn.setAttribute("aria-current", btn.dataset.id === id ? "true" : "false");
    });

    const ref = getReferencePage(v);
    const refPreview = getReferencePreview(ref);

    hasRefPreview = Boolean(refPreview);
    currentRefLabel = ref.label || "";

    if (!hasRefPreview && previewMode === "compare") {
      previewMode = "solo";
    }

    if (referenceFrame && refPreview) {
      referenceFrame.src = refPreview;
    }
    if (openReference && ref) {
      openReference.href = ref.url;
    }

    iframe.src = v.preview;
    if (openLink) openLink.href = v.preview;
    document.title = toolName + " — Design.md 工作流对比";
    location.hash = id;
    renderDetail(v);
    updatePreviewLayout();
    updateCompareBar(id);
  }

  function selectByOffset(delta) {
    const idx = VERSIONS.findIndex((v) => v.id === currentId);
    const next = VERSIONS[idx + delta];
    if (next) selectVersion(next.id);
  }

  previewMode = loadPreviewMode();

  if (!Array.isArray(VERSIONS) || VERSIONS.length === 0) {
    document.querySelector(".archive").innerHTML =
      '<p class="archive-empty">暂无对比版本。在 <code>versions/</code> 下放入生成网页，并在 <code>js/versions.js</code> 中记录工具与参考页面。</p>';
    return;
  }

  const firstRef = getReferencePage(VERSIONS[0]);
  allSameRef = VERSIONS.every((v) => getReferencePage(v).url === firstRef.url);

  if (countEl) {
    countEl.textContent = "无规范对照 + 规范来源";
  }

  if (allSameRef && sharedRefEl && sharedRefLink) {
    sharedRefEl.hidden = false;
    sharedRefLink.href = firstRef.url;
    sharedRefLink.textContent = firstRef.label;
  }

  function getInitialId() {
    const hash = location.hash.replace("#", "");
    if (hash && VERSIONS.some((v) => v.id === hash)) return hash;
    return VERSIONS[0].id;
  }

  groupVersionsByAxis(VERSIONS).forEach((section) => {
    const heading = document.createElement("li");
    heading.className = "version-section";
    heading.innerHTML =
      '<p class="version-section__label">' + escapeHtml(section.label) + "</p>";
    listEl.appendChild(heading);

    section.versions.forEach((v) => {
      const li = document.createElement("li");
      li.className = "version-list__item";
      li.innerHTML = renderVersionButton(v);
      listEl.appendChild(li);
    });
  });

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".version-btn");
    if (btn) selectVersion(btn.dataset.id);
  });

  if (comparePrev) {
    comparePrev.addEventListener("click", () => selectByOffset(-1));
  }
  if (compareNext) {
    compareNext.addEventListener("click", () => selectByOffset(1));
  }

  if (previewModeEl) {
    previewModeEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-mode]");
      if (btn) setPreviewMode(btn.dataset.mode);
    });
  }

  if (copyPromptBtn) {
    copyPromptBtn.addEventListener("click", async () => {
      const v = VERSIONS.find((item) => item.id === currentId);
      if (!v || !v.prompt) return;
      try {
        await navigator.clipboard.writeText(v.prompt);
        copyPromptBtn.textContent = "已复制";
        setTimeout(() => {
          copyPromptBtn.textContent = "复制";
        }, 1500);
      } catch {
        copyPromptBtn.textContent = "失败";
        setTimeout(() => {
          copyPromptBtn.textContent = "复制";
        }, 1500);
      }
    });
  }

  window.addEventListener("hashchange", () => {
    const id = location.hash.replace("#", "");
    if (id && VERSIONS.some((v) => v.id === id)) selectVersion(id);
  });

  window.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea, pre")) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectByOffset(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      selectByOffset(1);
    } else if ((e.key === "c" || e.key === "C") && hasRefPreview) {
      e.preventDefault();
      setPreviewMode(previewMode === "compare" ? "solo" : "compare");
    }
  });

  window.addEventListener("resize", fitPhonePreview);
  if (iframe) iframe.addEventListener("load", fitPhonePreview);
  if (referenceFrame) referenceFrame.addEventListener("load", fitPhonePreview);

  selectVersion(getInitialId());
  fitPhonePreview();
  requestAnimationFrame(fitPhonePreview);
})();
