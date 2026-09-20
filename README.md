# 李和平 · Java 高级开发工程师

使用原生 HTML、CSS 和 JavaScript 的个人简历与项目展示网站。

- 站点：https://whaleal.com/resume-site/
- GitHub 默认入口：https://whaleal-dev.github.io/resume-site/ ，自动跳转到组织已有域名。
- 项目：Whaleal Platform、Document Data Transfer、Data Migration Platform。
- 联系邮箱：`mlhp123@outlook.com`。

## 本地预览

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:4173/`。

## 内容维护

- 首页：`index.html`。
- 详情页：`project.html` 与 `project.js`，通过 `?id=wap|ddt|archive` 选择项目。
- 样式与首页交互：`harness.css`、`harness.js`。
- 图片与架构图：`assets/`。

## GitHub Pages

发布源为 `main` 分支的根目录，推送后由 GitHub Pages 自动发布。`.nojekyll` 表示直接发布静态文件，无需安装依赖或执行构建。

组织的 Pages 主站已经绑定 `whaleal.com`，因此本项目自动沿用该域名下的 `/resume-site/` 路径。

本仓库只包含公开网站文件与维护说明，不包含原始简历 PDF、Word 文档或学习笔记。
