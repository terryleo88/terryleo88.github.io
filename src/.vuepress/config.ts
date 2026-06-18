import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import theme from "./theme.js";

export default defineUserConfig({
  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "terryleo88 开源笔记",
  // 网站描述
  description: "开源工具、效率方法、自我提升笔记",

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 修改页面模板
  templateBuild: "./src/.vuepress/templateBuild.html",

  // 禁止文件夹生成静态文件
  pagePatterns: ["**/*.md", "!_temp", "!reading", "!.vuepress", "!node_modules"],

  plugins: [
    // 谷歌分析（如不需要可删除）
    // googleAnalyticsPlugin({
    //   id: "G-XXXXXXXXXX",
    // }),
  ],
  bundler: viteBundler(),
});
