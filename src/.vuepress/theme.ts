import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
// import { enSidebar, zhSidebar } from "./sidebar/index.js";
// import { enNavbar, zhNavbar } from "./navbar/index.js";

// https://file.mo7.cc/api/public/bz

export default hopeTheme({
  // pure: true,//是否开启纯净模式。

  hostname: "https://mister-hope.github.io",

  author: {
    name: "子冥",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  // logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  // logo: '/assets/img/comet.png',
  logo: 'https://fanchens.github.io/vuepress/assets/img/comet.png',

  // repo: "vuepress-theme-hope/vuepress-theme-hope",//gitgub导航图标
  repo: "https://github.com/weijordanNW/blog",//gitgub导航图标

  docsDir: "src",

  // 导航栏
  navbar: zhNavbar,
  
  // 侧边栏
  sidebar: zhSidebar,

   // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "前端开发者,开源项目贡献者",
    intro: "/intro.html",

    medias: {
      GitHub: "https://github.com/weijordanNW",
      Gitee: "https://gitee.com/weijordan",

      Baidu: "https://www.baidu.com/",
      BiliBili: "https://space.bilibili.com/102611372?spm_id_from=333.999.0.0",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://example.com",

      // VuePressThemeHope: {
      //   // icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   icon: "https://fanchens.github.io/vuepress/assets/img/logo.png",
      //   // icon: "./assets/img/logo.png",
      //   link: "https://theme-hope.vuejs.press",
      // },
      // timeline:"昨日不在", //时间轴的顶部文字。
      // articlePerPage:10, //每页的文章数量。
      // articleInfo:["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"], //文章列表中展示的文章信息

    },
  },
  // locales多语言配置
  // locales: {
  //   /**
  //    * 中文配置
  //    */
  //   "/": {
  //     // navbar
  //     navbar: zhNavbar,

  //     // sidebar
  //     sidebar: zhSidebar,

  //     footer: "默认页脚",

  //     displayFooter: true,

  //     blog: {
  //       description: "前端开发者,开源项目贡献者",
  //       intro: "/zh/intro.html",
  //     },

  //     // page meta
  //     metaLocales: {
  //       editLink: "在 GitHub 上编辑此页",
  //     },

  //     // enable RTL layout
  //     // rtl: true,
  //   },


  //   /**
  //    * 英文配置
  //    */
  //   "/en/": {
//     // navbar
  //     navbar: enNavbar,

  //     // sidebar
  //     sidebar: enSidebar,
  //     footer: "默认页脚",
  //     displayFooter: true,
  //     blog: {
  //       description: "前端开发者,开源项目贡献者",
  //       intro: "/intro.html",
  //     },
  //     // enable RTL layout
  //     // rtl: true,

  //     // -------------------
  //     // footer: "Default footer",
  //     // displayFooter: true,
  //     // blog: {
  //     //   description: "A FrontEnd programmer",
  //     //   intro: "/intro.html",
  //     // },
  //     // metaLocales: {
  //     //   editLink: "Edit this page on GitHub",
  //     // },
  //   },
  // },

  // page meta
    // metaLocales: {
    //   editLink: "在 GitHub 上编辑此页",
    // },

  // 加密配置
  encrypt: {
    config: {
      "/demo/": ["1234"],
      "/demo/encrypt.html": ["1234"],
    },
    // config: {
    //   "/demo/encrypt.html": ["1234"],
    //   "/zh/demo/encrypt.html": ["1234"],
    // },
  },

   // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  fullscreen: true,//支持全屏

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // ----------
    searchPro: true,//搜索框
    
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
