---
title: Git
icon: "material-icon-theme:git"
date: 2025-11-03
isOriginal: true
tag:
  - git
---





> 打开全局配置文件

```
git config --global --edit
```



## 用户信息配置

> 查看全局配置

```
git config --global --list
git config --global user.name
git config --global user.email
```

> 设置全局用户名和邮箱

```
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```



---

> 查看当前仓库的配置（局部）

```
git config --local --list
```

> 为某个仓库设置不同的用户名和邮箱

```
git config --local user.name "项目专用用户名"
git config --local user.email "项目专用邮箱@example.com"
```



---

## 代理设置



> 查看当前代理配置

```
git config --global --list
git config --global --get http.proxy
git config --global --get https.proxy
```



> 设置全局代理

```
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

> SOCKS5 代理

```
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080
```

> 取消代理

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```



> 代理特定域名（如 GitHub）

```
git config --global http.https://github.com.proxy http://127.0.0.1:7890
```



> 简单验证代理效果

```
git ls-remote 仓库链接
如
git ls-remote https://github.com/vuepress-theme-hope/vuepress-theme-hope
```

