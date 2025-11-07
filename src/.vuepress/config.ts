import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  // base: "/my-docs/",


  lang: "zh-CN",
  title: "itsven",
  description: "itsven blog，由 Svenzhi（司文智 / Wenzhi Si）创建。一个程序员的个人博客，记录工作科研与生活随笔。",

  theme,

  head: [
    [
      'script',
      {
        defer: '',
        src: 'https://u.itsven.cn/my-analytics.js',
        'data-website-id': '719acfab-7aa1-42a8-bceb-b2ccd27628b1',
      },
    ],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

