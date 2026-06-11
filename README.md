# Design.md 工作流对比

同一参考页（[IBM Documentation](https://www.ibm.com/docs/en)）、同一尺寸（**375×812**）下，对比 5 种 AI 工作流生成的移动端作品集主页。对比变量：**设计规范来源**。

本地预览：

```bash
python3 -m http.server 8765
# http://localhost:8765
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `design-md`），不要勾选「Add a README」。
2. 推送本仓库：

```bash
git init
git add .
git commit -m "Initial commit: tool comparison archive"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 仓库 **Settings → Pages → Build and deployment**：
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
4. 等待几分钟后访问：`https://<你的用户名>.github.io/<仓库名>/`

> 站内路径均为相对路径，可直接用于 GitHub Pages 项目站点，无需改 base URL。

## 结构

```
index.html          总览页（工具列表 + 双机预览 + 详情）
css/overview.css
js/versions.js      版本数据
js/overview.js
versions/vN/        各工具生成结果
reference/          参考页移动端快照（外链无法 iframe）
```

## 新增版本

1. 新建 `versions/vN/index.html`（375×812）
2. 在 `js/versions.js` 的 `VERSIONS` 末尾追加记录
