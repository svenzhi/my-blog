import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客",
    icon: "streamline-ultimate:pen-write",
    link: "/article/",
  },
  {
    text: "分类",
    icon: "iconamoon:category",
    // prefix: "/posts/",
    children: [
      { text: "分类", icon: "iconamoon:category", link: "/category/" },
      { text: "标签", icon: "iconamoon:badge-light", link: "/tag/" },
      { text: "时间线", icon: "streamline-freehand:business-workflow-project-management", link: "/timeline/" },
    ],
  },
  {
    text: "归档",
    icon: "mynaui:archive",
    link: "/posts/",
  },
  {
    text: "项目",
    icon: "flat-color-icons:idea",
    link: "/projects",
  },
  {
    text: "站点",
    icon: "streamline-freehand-color:website-development-monitor-www-web",
    link: "/website-navigation",
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/about.html",
  },
  {
    text: "Go",
    icon: "meteor-icons:link",
    prefix: "/docs/",
    children: [
      { text: "Iconify", icon: "line-md:iconify2-static", link: "https://icon-sets.iconify.design" },
      { text: "Obsidian", icon: "logos:obsidian-icon", link: "https://publish.obsidian.md/help-zh/" },
      { text: "阿里云", icon: "ant-design:aliyun-outlined", link: "https://home.console.aliyun.com/home/dashboard/ProductAndService" },

    ],
  },
  // {
  //   text: "Docs",
  //   icon: "icon-park:toolkit",
  //   prefix: "/docs/",
  //   children: [
  //     { text: "工具", icon: "icon-park:toolkit", link: "tools/README.md" },
  //   ],
  // },
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
