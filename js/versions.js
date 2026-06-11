/**
 * Design.md 工作流对比档案
 *
 * 版本编号从 v1 起连续递增，与 versions/v1、v2… 文件夹一一对应。
 *
 * 新增版本：
 * 1. 新建 versions/vN/index.html（375×812）
 * 2. 在 VERSIONS 末尾追加记录（id / preview 与文件夹名一致）
 *
 * 命名约定：tool = 对比变量，note = 规范来源差异（一句话，统一句式）
 *
 * referencePage.mobilePreview = 本地 375×812 参考页快照（外链通常无法 iframe）
 */
const IBM_DOCS_REFERENCE = {
  label: "IBM Documentation",
  url: "https://www.ibm.com/docs/en",
  mobilePreview: "reference/ibm-docs-en/index.html",
};

const VERSIONS = [
  {
    id: "v1",
    date: "2026-06-11",
    status: "exploration",
    tool: "Cursor",
    note: "无规范 · 只给链接",
    toolDetail: "无粘贴设计规范，直接让 Agent 根据参考链接生成",
    referencePage: { ...IBM_DOCS_REFERENCE },
    summary:
      "Carbon tokens + IBM Plex，文档式搜索与 topic tiles，深色顶栏 + 浅色内容区，英文界面。",
    description:
      "IBM Documentation 首页结构：logo、全局搜索、topic tiles、精选资源卡与文档索引列表。375×812 固定画布，含完整 hover / active / focus-visible 状态。",
    prompt:
      "https://www.ibm.com/docs/en 参考IBM风格设计一个设计师作品集移动端app主页（宽高写死，宽375高812），输出为html",
    tools: ["Cursor", "HTML / CSS"],
    references: [
      { label: "IBM Documentation", url: "https://www.ibm.com/docs/en" },
      { label: "Carbon Design System", url: "https://carbondesignsystem.com/" },
    ],
    preview: "versions/v1/index.html",
  },
  {
    id: "v2",
    date: "2026-06-11",
    status: "exploration",
    tool: "design-md-chrome",
    note: "规范全文 · 手动粘贴",
    toolDetail: "Chrome 扩展提取设计规范 → Cursor Skill 驱动生成",
    referencePage: { ...IBM_DOCS_REFERENCE },
    summary:
      "IBM Plex Sans + token 体系，文档式信息层级与深色首屏，强调可访问性与落地规范感。",
    description:
      "参考 IBM Documentation 设计规范：黑底 Hero、灰底内容区、IBM Blue 交互色。含顶栏、分类 Chip、精选卡片、项目列表与底部 CTA。",
    prompt: `参考以下风格设计一个设计师作品集移动端app主页（宽高写死，宽375高812），输出为html

# IBM Documentation

## Mission
Create implementation-ready, token-driven UI guidance for IBM Documentation that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: IBM Documentation
- URL: https://www.ibm.com/docs/en
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: \`font.family.primary=IBM Plex Sans\`, \`font.family.stack=IBM Plex Sans, system-ui, -apple-system, system-ui, .SFNSText-Regular, sans-serif\`, \`font.size.base=14px\`, \`font.weight.base=400\`, \`font.lineHeight.base=18.0001px\`
- Typography scale: \`font.size.xs=12px\`, \`font.size.sm=13.33px\`, \`font.size.md=13.71px\`, \`font.size.lg=14px\`, \`font.size.xl=16px\`, \`font.size.2xl=20px\`, \`font.size.3xl=28px\`, \`font.size.4xl=32px\`
- Color palette: \`color.text.primary=#161616\`, \`color.text.secondary=#525252\`, \`color.text.tertiary=#ffffff\`, \`color.text.inverse=#0f62fe\`, \`color.surface.base=#000000\`, \`color.surface.muted=#f4f4f4\`, \`color.surface.strong=#393939\`
- Spacing scale: \`space.1=0.5px\`, \`space.2=1px\`, \`space.3=6px\`, \`space.4=12px\`, \`space.5=14px\`, \`space.6=15px\`, \`space.7=16px\`, \`space.8=32px\`
- Radius/shadow/motion tokens: \`motion.duration.instant=70ms\`, \`motion.duration.fast=110ms\`, \`motion.duration.normal=150ms\`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: cards (223), links (38), buttons (5), inputs (1).

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.`,
    tools: ["Cursor", "HTML / CSS"],
    references: [
      { label: "IBM Documentation", url: "https://www.ibm.com/docs/en" },
    ],
    preview: "versions/v2/index.html",
  },
  {
    id: "v3",
    date: "2026-06-11",
    status: "exploration",
    tool: "designmaxxing",
    note: "现场提取 · 自动生成规范",
    toolDetail: "designmaxxing extract 后，用提取结果作为 prompt 上下文",
    referencePage: { ...IBM_DOCS_REFERENCE },
    summary:
      "IBM Carbon tokens, leadspace hero, brand card grid, project list, and bottom tab bar — native app shell on 375×812.",
    description:
      "Mobile portfolio homepage in pure English: dark masthead, IBM Blue featured card, docs-style tile grid, recent projects, and contact CTA. Fixed 375×812 canvas.",
    prompt:
      "参考刚刚提取的风格设计一个设计师作品集移动端app主页（宽高写死，宽375高812），纯英文，输出为html",
    tools: ["Cursor", "HTML / CSS"],
    references: [
      { label: "IBM Documentation", url: "https://www.ibm.com/docs/en" },
      { label: "Carbon Design System", url: "https://carbondesignsystem.com/" },
    ],
    preview: "versions/v3/index.html",
  },
  {
    id: "v4",
    date: "2026-06-11",
    status: "exploration",
    tool: "awesome-design-md",
    note: "预置规范 · 无需现场提取",
    toolDetail:
      "从 awesome-design-md 复制 ibm/DESIGN.md → Cursor 读取文件后生成页面",
    referencePage: { ...IBM_DOCS_REFERENCE },
    summary:
      "IBM 营销页节奏：hero 双 CTA、product-tab、feature-card 纵列、客户 marquee、newsletter、蓝色 cta-banner、inverse footer。",
    description:
      "仅依据 awesome-design-md 的 ibm/DESIGN.md 独立生成；不复用其他 versions 的布局与文案。无搜索框、无底栏 Tab、无模拟 iOS 状态栏。375×812。",
    prompt: `只读 versions/v4/DESIGN.md，严格遵循其中的颜色、字体、组件规则。
不要参考项目中 versions/v1、v2、v3 的任何文件。

设计一个设计师作品集移动端 App 主页（宽 375、高 812），纯英文，输出为单个 HTML 文件。`,
    tools: ["Cursor", "HTML / CSS"],
    references: [
      { label: "IBM Documentation", url: "https://www.ibm.com/docs/en" },
      {
        label: "awesome-design-md / ibm",
        url: "https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ibm",
      },
      { label: "Carbon Design System", url: "https://carbondesignsystem.com/" },
    ],
    preview: "versions/v4/index.html",
  },
  {
    id: "v5",
    date: "2026-06-11",
    status: "exploration",
    tool: "skillui",
    note: "现场提取 + 预置规范",
    toolDetail:
      "skillui --url 静态提取 IBM Docs → 读取 DESIGN.md + SKILL.md → Cursor 生成页面",
    referencePage: { ...IBM_DOCS_REFERENCE },
    summary:
      "Dark Carbon shell, IBM Plex Sans/Mono, 1px borders, #0043ce CTA, stats row, featured card, project list, bottom tab bar.",
    description:
      "依据 skillui 从 ibm.com/docs/en 提取的 DESIGN.md 独立生成。深色 #161616 画布、方角卡片、蓝色强调色、英文作品集结构。375×812。",
    prompt:
      "参考刚刚提取的风格设计一个设计师作品集移动端app主页（宽高写死，宽375高812），纯英文，输出为html，不要受其他项目影响",
    tools: [
      "skillui",
      { label: "skillui (GitHub)", url: "https://github.com/amaancoderx/npxskillui" },
      "Cursor",
      "HTML / CSS",
    ],
    references: [
      { label: "IBM Documentation", url: "https://www.ibm.com/docs/en" },
      { label: "skillui", url: "https://github.com/amaancoderx/npxskillui" },
    ],
    preview: "versions/v5/index.html",
  },
];
