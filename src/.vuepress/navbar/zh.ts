import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "技术笔记",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "web/",
        children: [
          { text: "HTML & CSS", icon: "pen-to-square", link: "1" },
          { text: "JavaScript", icon: "pen-to-square", link: "2" },
          { text: "Vue", icon: "pen-to-square", link: "3" },
          { text: "React", icon: "pen-to-square", link: "4" },
          // "3",
          // "4",
        ],
      },
      {
        text: "后端",
        icon: "pen-to-square",
        prefix: "service/",
        children: [
          {
            text: "NodeJS",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Express",
            icon: "pen-to-square",
            link: "2",
          },
          {
            text: "Linux",
            icon: "pen-to-square",
            link: "3",
          },
          {
            text: "C",
            icon: "pen-to-square",
            link: "4",
          },

        ],
      },
      { text: "语雀", icon: "pen-to-square", link: "yuque" },
      { text: "GitHub", icon: "pen-to-square", link: "github" },
      { text: "CSDN", icon: "pen-to-square", link: "csdn" },
      { text: "Flow-us", icon: "pen-to-square", link: "flowus" },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
