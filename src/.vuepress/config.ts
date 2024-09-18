import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Blog ziming",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    // "/": {
    //   lang: "zh-CN",
    //   title: "子冥博客",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "子冥博客(NW)",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
