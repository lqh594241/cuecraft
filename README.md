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

`index.html` 中 `AHREFS_ANALYTICS_START/END`、`AD_HEAD_START/END`、`AD_BANNER_START/END`、`AD_BODY_START/END` 均预留为空。顶部横幅是正常文档流的全宽区域，可关闭；粘贴本站专属广告位代码后移除 `#ad-banner` 的 hidden。不要复制其他站的广告位或重复添加同一脚本。启用后更新隐私说明。本站未加载真实广告或统计。

## 范围

Local UTF-8 SRT/WebVTT parsing, conversion, timestamp shift, optional frame-rate duration scaling, negative-time trimming, overlap checking and optional shortening repair. No automatic transcription, translation or remote processing; VTT metadata/style blocks are omitted.

没有验证关键词的真实搜索量、竞争度或收益，不承诺收录、排名或 AI 引用。英文静态页面提供公式、使用说明、限制、FAQ、隐私与条款。
