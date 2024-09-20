import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

  base: "/blog/",

  lang: "zh-CN",
  title: "Mr.子冥",
  description: "vuepress-theme-hope 的博客演示",

  // 多语言配置
  // locales: {
  //   // "/": {
  // lang: "zh-CN",
  // title: "子冥博客",
  // description: "vuepress-theme-hope 的博客演示",
  // },
  // "/en/": {
  //   lang: "en-US",
  //   title: "Blog ziming",
  //   description: "A blog demo for vuepress-theme-hope",
  // },
  // },

  theme,
 // 和 PWA 一起启用
  // shouldPrefetch: false,
  
  
});

