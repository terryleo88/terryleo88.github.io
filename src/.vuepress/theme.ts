import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    // 主题选项
    hostname: "https://terryleo88.github.io",
    author: {
      name: "terryleo88",
      url: "https://terryleo88.github.io",
    },

    favicon: "/favicon.ico",
    logo: "/logo.svg",

    // 网站文章的版权声明
    license: "CC BY-NC-ND 4.0",

    copyright: `
  版权声明：自由转载 - 非商用 - 非衍生 - 保持署名<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">（创意共享 4.0 许可证）</a>|
  Copyright © 2025-present terryleo88</a>
  `,
    displayFooter: true,

    // 是否全局启用路径导航
    breadcrumb: false,

    // 页面元数据
    contributors: false,
    lastUpdated: true,
    editLink: false,

    // 深色模式配置
    darkmode: "switch",
    // 全屏按钮
    fullscreen: true,

    // 默认为 GitHub
    repo: "terryleo88/terryleo88.github.io",
    repoLabel: "GitHub",
    repoDisplay: true,
    // 文档存放路径
    docsDir: "src",

    // navbar
    navbar: navbar,
    // 导航栏布局
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["SocialLink", "Repo", "Outlook", "Search"],
    },

    // sidebar
    sidebar: sidebar,

    // 页面布局 Frontmatter 配置
    pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],

    // 主题功能选项
    blog: {
      articleInfo: ["Date", "PageView", "Category", "Tag", "ReadingTime"],
      name: "terryleo88",
      avatar: "/avatar_self.webp",
      description: "个人学习笔记与知识库",
      intro: "/intro.html",
      medias: {
        GitHub: "https://github.com/terryleo88",
      },
    },

    markdown: {
      align: true,
      attrs: true,
      mark: true,
      sup: true,
      sub: true,
      include: true,
      footnote: true,
      tasklist: true,
      component: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      hint: true,
      alert: true,
    },

    plugins: {
      blog: true,

      icon: {
        assets: "iconify",
      },

      // 评论配置（如不需要可删除）
      comment: {
        provider: "Giscus",
        repo: "terryleo88/terryleo88.github.io",
        repoId: "",
        category: "Comments",
        categoryId: "",
      },

      // 组件库
      components: {
        components: ["Badge", "BiliBili"],
      },

      // 本地搜索
      slimsearch: {
        indexContent: true,
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
        count: 10,
        sorter: (a, b) => Number(b.frontmatter.date) - Number(a.frontmatter.date),
      },
    },

    // 加密配置
    encrypt: {
      config: {
        "/encrypt/": {
          password: ["1234", "5678"],
          hint: "从 xxx 获取密码",
        },
        "/apps/encrypt03.html": {
          password: "1234",
          hint: "从 xxx 获取密码",
        },
      },
    },

    // 开发模式下是否启动热更新
    hotReload: true,
  },
  { custom: true }
);
