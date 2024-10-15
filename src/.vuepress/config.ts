import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

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
  plugins: [
    // 看板娘插件
    oml2dPlugin({
      // 在这里配置选项
      models: [
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
          scale: 0.12,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        }
        // {
        //   path: "https://model.oml2d.com/Pio/model.json",
        //   scale: 0.4,
        //   position: [0, 50],
        //   stageStyle: {
        //     "height": 300
        //   }
        // }
      ]
    })

    //  ...other plugins
  ]

});

