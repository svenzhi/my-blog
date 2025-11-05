import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "weui:note-filled",
      link: "docs/README.md"
    },
    {
      text: "书单",
      icon: "ic:outline-book",
      link: "docs/book-list.md"
    },
    {
      text: "课程",
      icon: "hugeicons:course",
      link: "docs/course-list.md"
    },
    {
      text: "收集箱",
      icon: "icon-park:box",
      prefix: "docs/box",
      children: "structure",
    },
    {
      text: "工具",
      icon: "icon-park:toolkit",
      prefix: "docs/tools",
      children: "structure",
    },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
