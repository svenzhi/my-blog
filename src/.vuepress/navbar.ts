import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  { text: "Blog", icon: "material-symbols-light:article-sharp", link: "/article/" },
  "/docs/",
  '/projects',
  {
    text: "Go",
    icon: "meteor-icons:link",
    prefix: "/docs/",
    children: [
      { text: "Iconify", icon: "line-md:iconify2-static", link: "https://icon-sets.iconify.design" },
      { text: "Obsidian", icon: "logos:obsidian-icon", link: "https://publish.obsidian.md/help-zh/" },
      { text: "阿里云", icon: "ant-design:aliyun-outlined", link: "https://home.console.aliyun.com/home/dashboard/ProductAndService" },

    ],
  }
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
