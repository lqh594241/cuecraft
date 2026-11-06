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

当前正式域名为 `https://cuecraft.luqihang594241.workers.dev/`，记录在 `package.json` 的 `homepage` 中。构建默认使用此域名生成 canonical、og:url、sitemap.xml 和带 Sitemap 声明的 robots.txt；遗漏 `SITE_URL` 也会生成文件。改域名时设置构建环境变量 `SITE_URL=https://新的正式域名`（不含子路径）后重新构建发布，变量优先于 `homepage`。源码根目录也已提供当前域名的 `sitemap.xml` 和 `robots.txt`，支持直接发布；直接发布源码且更换域名时需同步更新两文件和 `homepage`。

## 广告与统计

`ads.js` 已接入本次提供的 Cuecraft 专属 HilltopAds 横幅与弹窗链接。横幅在页面顶部正常占位、全宽，可用 × 关闭；空广告位或加载失败时折叠，不覆盖工具。宽幅广告在手机上等比缩放。

首次真实点击 `#convert`（Prepare subtitles）、`#save`（Download subtitles）或 `#copy`（Copy output）时尝试打开一次广告新标签页；每次页面加载最多一次，不拦截原功能。示例、清空、导航、文件选择与横幅关闭均不触发。浏览器可能限制弹窗，页面不会反复重试。

`index.html` 保留了你已有的 Ahrefs 代码和网站验证 meta，未重复添加。隐私说明已更新。构建会自动包含 `ads.js`。广告投放内容和是否填充由广告平台控制。

## 范围

Local UTF-8 SRT/WebVTT parsing, conversion, timestamp shift, optional frame-rate duration scaling, negative-time trimming, overlap checking and optional shortening repair. No automatic transcription, translation or remote processing; VTT metadata/style blocks are omitted.

没有验证关键词的真实搜索量、竞争度或收益，不承诺收录、排名或 AI 引用。英文静态页面提供公式、使用说明、限制、FAQ、隐私与条款。

## 搜索引擎站点地图检查

更新 GitHub 并等待 Cloudflare 部署成功后，打开 https://cuecraft.luqihang594241.workers.dev/sitemap.xml ，应显示 XML 网址列表，不能是首页或 404。然后在对应 Google Search Console 网站属性的 Sitemaps 中提交 `sitemap.xml`，检查状态是否为 Success；也可向 Bing Webmaster Tools 提交同一地址。提交成功提示仅代表接受请求，成功读取也不保证收录、排名或流量。
