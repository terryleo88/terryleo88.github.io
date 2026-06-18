import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default navbar([
  { text: "博客", icon: "fa6-solid:blog", link: "/blog.md" },
  {
    text: "应用",
    icon: "fa6-solid:bars-staggered",
    prefix: "/",
    children: [
      "apps/Applist",
      {
        text: "常用扩展",
        icon: "fa6-brands:chrome",
        link: "apps/Chrome",
      },
      {
        text: "设计",
        icon: "fa6-solid:paintbrush",
        link: "apps/design",
      },
      {
        text: "工具箱",
        icon: "fa6-solid:toolbox",
        link: "apps/toolbox",
      },
    ],
  },
  {
    text: "开发",
    icon: "fa6-solid:code",
    children: [
      {
        text: "页面开发",
        icon: "fa6-solid:globe",
        prefix: "/web/",
        children: ["Comments", "VuePress", "docsify"],
      },
      {
        text: "网站部署",
        icon: "fa6-solid:cloud",
        prefix: "/deploy/",
        children: ["Static", "CloudServices", "VPS", "GitHub", "Cloudflare", "MySQL", "DNS"],
      },
      {
        text: "代码编程",
        icon: "fa6-solid:laptop-code",
        prefix: "/code/",
        children: ["README", "Markdown", "Electron", "AutoHotkey", "Regex", "Vue", "HTML", "Javascript", "Python"],
      },
    ],
  },
  {
    text: "生活",
    icon: "fa6-solid:bed-pulse",
    prefix: "/family/",
    children: ["Diet", "Coupon", "Life"],
  },
  {
    text: "日常",
    icon: "fa6-solid:clock",
    children: [
      { text: "日常习惯", icon: "fa6-solid:list-check", link: "/DailyRoutine" },
      { text: "健身", icon: "fa6-solid:dumbbell", link: "/Fitness" },
    ],
  },
]);
