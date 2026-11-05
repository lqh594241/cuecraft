# Cuecraft

第 8 个英文工具站，源码独立，无运行依赖或付费 API。双击 `index.html` 可用。本站：SRT to VTT Converter, Subtitle Time Shifter & Overlap Checker。

## 本地与构建

无需 npm install。安装 Node.js 后：

```
npm run dev
npm test
npm run build
```

本地地址：http://127.0.0.1:4180。构建输出 `dist`。

## 部署

建议单独 GitHub 仓库，上传本目录内容。Cloudflare Pages：框架 None，构建命令 `npm run build`，输出目录 `dist`。同仓库部署时根目录设为 `cuecraft`。Workers 静态资源目录同样为 `dist`，使用控制台提供的静态资源部署配置。

生产环境设置 `SITE_URL=https://实际域名`（不要路径），构建生成该域名的 canonical、og:url、sitemap 和 robots sitemap 地址。未设置不编造域名。

## 广告与统计

`ads.js` 已接入本次提供的 Cuecraft 专属 HilltopAds 横幅与弹窗链接。横幅在页面顶部正常占位、全宽，可用 × 关闭；空广告位或加载失败时折叠，不覆盖工具。宽幅广告在手机上等比缩放。

首次真实点击 `#convert`（Prepare subtitles）、`#save`（Download subtitles）或 `#copy`（Copy output）时尝试打开一次广告新标签页；每次页面加载最多一次，不拦截原功能。示例、清空、导航、文件选择与横幅关闭均不触发。浏览器可能限制弹窗，页面不会反复重试。

`index.html` 保留了你已有的 Ahrefs 代码和网站验证 meta，未重复添加。隐私说明已更新。构建会自动包含 `ads.js`。广告投放内容和是否填充由广告平台控制。

## 范围

Local UTF-8 SRT/WebVTT parsing, conversion, timestamp shift, optional frame-rate duration scaling, negative-time trimming, overlap checking and optional shortening repair. No automatic transcription, translation or remote processing; VTT metadata/style blocks are omitted.

没有验证关键词的真实搜索量、竞争度或收益，不承诺收录、排名或 AI 引用。英文静态页面提供公式、使用说明、限制、FAQ、隐私与条款。
