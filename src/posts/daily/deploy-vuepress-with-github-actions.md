---
author:
title: Github Actions部署VuePress
isOriginal: true
date: 2025-11-05
icon: logos:github-actions
cover:
order:
category:
  - daily
tags:
  - Github-Actions
  - Github-Pages
  - VuePress
  - VuePress-Theme-Hope
footer:
copyright:
sticky: false
star: false
uid: EAEKCCAKCOGOAM
imageNameKey: EAEKCCAKCOGOAM
---
> [!tip]
> 本站文章中使用的图片等文件资源，放置在项目目录中，并使用相对路径引用。
> 
> 但在使用Github Actions和GitHub Pages部署本站时，遇到一个问题，即希望将文章中的图片等资源文件一同放在GitHub中进行页面编译，但又不想使用Git对其进行管理（不使用Git管理就无法上传GitHub，导致编译时找不到这些图片）。
> 
> 故想了一个略为麻烦的方法：
> 1.文章中引用的图片打包放置在我个人服务器；
> 2.Github Actions进行`npm run docs:build`前先执行下载命令，从我个人服务器下载到对应目录并解压，然后继续编译即可。


![这张图片用来测试是否可行](../assets/EAEKCCAKCOGOAM-1.png)

上图在本地md中的写法：
```md
![这张图片用来测试是否可行](../assets/EAEKCCAKCOGOAM-1.png)
```

经测试，该方法可行，最终代码为
```yml
name: 部署文档
on:
  push:
    branches:
      - main
permissions:
  contents: write
jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true
      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: 安装依赖
        run: |
          corepack enable
          npm ci
      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          wget -O /tmp/assets.zip https://domain.com/assets.zip
          unzip -o /tmp/assets.zip -d src/docs/
          npm run docs:build
          > src/.vuepress/dist/.nojekyll
      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 部署文档
          branch: gh-pages
          folder: src/.vuepress/dist
```