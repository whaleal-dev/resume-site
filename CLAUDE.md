# 公开简历站协作规范

## 目录约定

- `index.html` 为首页，`project.html` 为项目详情页入口。
- `project.js` 维护项目内容，`harness.js` 维护首页交互，`harness.css` 维护样式。
- `assets/` 只存放经过检查、可公开的图片与架构图。
- `README.md` 记录使用方式，`ROADMAP.md` 记录真实进度与验证结果。

## 发布约定

- 保持原生 HTML、CSS、JavaScript，不引入构建依赖。
- 本仓库及 GitHub Pages 站点公开可访问，只接收经过脱敏的网站文件。
- 禁止提交原始简历 PDF、Word 文档、学习笔记、手机号、密钥、凭据及私有仓库历史。
- `main` 分支根目录为发布源，`.nojekyll` 用于直接发布静态文件。
- 修改后验证首页、三个详情页、资源加载与移动端布局，并更新 `ROADMAP.md`。
- Commit 使用具体的中文描述和标准前缀，不添加 `Co-Authored-By`。
- 推送与公开发布须获得用户授权。
