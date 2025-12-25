import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
    {
      text: "itsven's blog",
      link: "/",
    },
    {
      text: "分类",
      link: "/category/",
      icon: "iconamoon:category",
    },
    {
      text: "标签",
      link: "/tag/",
      icon: "iconamoon:badge-light",
    },
    {
      text: "归档",
      link: "/archive.html",
      icon: "mynaui:archive",
    },
    {
      text: "星标文章",
      link: "/star/",
      icon: "mdi:star-outline",
    },
    {
      text: "时间线",
      link: "/timeline/",
      icon: "streamline-freehand:business-workflow-project-management",
    },
    {
      text: "关于",
      link: "/about.html",
      icon: "mdi:about-circle-outline",
    },
  ],
  "/posts/": [
    {
      text: "目录",
      prefix: "/",
      link: "/archive.html",
    },
    {
      text: "日常",
      prefix: "daily",
      children: "structure",
      collapsible: true,
    },
    {
      text: "文档",
      prefix: "docs",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Python",
      prefix: "python",
      children: "structure",
      collapsible: true,
    }
  ],
  "/archive.html": [
    {
      text: "目录",
      prefix: "/",
      link: "/archive.html",
    },
    {
      text: "日常",
      prefix: "/posts/daily",
      children: "structure",
      collapsible: true,
    },
    {
      text: "文档",
      prefix: "/posts/docs",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Python",
      prefix: "/posts/python",
      children: "structure",
      collapsible: true,
    }
  ],
});
