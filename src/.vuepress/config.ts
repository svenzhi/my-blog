import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  // base: "/my-docs/",


  lang: "zh-CN",
  title: "itsven",
  description: "itsven blog",

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

