---
author:
title: Github Actions部署vuepress
isOriginal: true
date: 2025-11-05
icon: logos:github-actions
cover:
order:
tags:
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
```
![这张图片用来测试是否可行](../assets/EAEKCCAKCOGOAM-1.png)
```
