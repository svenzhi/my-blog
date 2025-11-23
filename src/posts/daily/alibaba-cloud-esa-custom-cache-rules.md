---
author:
title: 「玩透ESA」站点配置阿里云ESA全站加速+自定义规则缓存
date: 2025-11-20
icon:
cover:
order:
category:
  - daily
tags:
  - 阿里云ESA
  - CDN
  - Cache缓存
footer:
copyright:
sticky: false
star: false
uid: FBFLDDFBFFLHLH
imageNameKey: FBFLDDFBFFLHLH
---

## 1.需求梳理

> 博主有一个简易文件存储站点，用来作图床与公开文件存放，但碍于服务器带宽限制，外链大文件加载速度属实不佳，刚好最近阿里云ESA有征文试用活动，便决定把该站点解析到阿里云ESA试试效果如何。
> 本文参与「玩透 ESA」有奖征文活动，活动详情见：http://event.alibabacloud-esa.com/

大致有如下需求：
1. 全站存储外链文件、全站前端引用资源（如js、css、图片），需要缓存；
2. 特定页面不缓存（文件列表页等动态加载页面）；
3. 存在特定`cookie`、`session`时不缓存；
4. 特定引用资源不缓存（如流量统计js）；
5. 特定路径的外链文件不缓存（如用来作其它服务远程配置的外链文件）

> 二次整理需求，主要明确缓存白名单，让缓存规则更简单，也更保守。
> 这一步可参考[默认缓存策略和缓存生效逻辑-边缘安全加速(ESA)-阿里云帮助中心](https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/default-cache-rule)

**缓存白名单：**
1. 上传的外链文件分为`/cdn/`和`/no/`（`no-cache`或`no-cdn`）两个目录，仅对`/cdn/`目录下上传的指定后缀文件进行缓存（如`.jpg`、`.pdf`、`.zip`等）；
2. 站点自身引用的静态资源，进行缓存，如`.js`、`.css`；

**不缓存内容（黑名单）:**
1. 全站页面路径（即无后缀路径），默认不缓存（站点页面都是动态PHP展示文件列表）；
2. 存在特定`cookie`、`session`时不缓存；
3. 自定义指定路径资源，不缓存（如指定路径、扩展文件、资源、流量统计js等）；

这样缓存配置就比较简单了，可以先只配置缓存白名单和存在指定`cookie`、`session`是不缓存。

**AI总结**
```
采用“静态资源缓存白名单 + 特定路径排除”策略：
只有明确允许的文件后缀会被缓存，其余全部不缓存；同时对于白名单中的某些路径或具体文件仍然可以排除，以确保动态页面、后台内容与敏感资源不缓存。

if path matches SpecialExcludePath:
    no-cache
else if extension in Blacklist:
    no-cache
else if has login cookie:
    no-cache
else if no extension:
    no-cache
else if extension in Whitelist:
    cache
else:
    no-cache   # fallback
```

```
后期黑名单可进一步扩展如下内容
php cgi pl py rb
json xml txt
api action do
asp aspx
```



## 2.ESA接入

### 站点添加
ESA站点添加支持CNAME、NS两种方式，同时支持国内、全球加速，较为简单，这里跳过。

![](../assets/FBFLDDFBFFLHLH-2.png)

### DNS解析

> 1.在ESA站点管理-DNS记录中找到添加记录；
![](../assets/FBFLDDFBFFLHLH-3.png)

> 2.进入添加记录页面后，按提示填写；

![](../assets/FBFLDDFBFFLHLH-4.png)
> 3.选择站点类型，由于我这个外链站除了有文件外链、下载功能外，还有动态页面以及文件访问统计等API，所以选择了`网站页面`而非`图片视频`类型的纯静态类型；
![](../assets/FBFLDDFBFFLHLH-5.png)


>4.由于我的站点是CNAME接入的，所以还需要去解析验证，按提示操作即可。
![](../assets/FBFLDDFBFFLHLH-6.png)

### 配置SSL证书

> ESA提供了Let’s Encrypt、Digicert免费证书，这里我们申请Let’s Encrypt证书；

![](../assets/FBFLDDFBFFLHLH-7.png)

> 同样是证书申请页面下发，建议开启强制 HTTPS
![](../assets/FBFLDDFBFFLHLH-8.png)


## 3.缓存配置

> 接下来回到文章开头提及的缓存需求，并进行配置。

### 仅缓存指定路径+后缀

> 这里我们要缓存/cdn/目录下的内容，当然这里后缀名并不完善，只是写了我可能用到的。
> 表达式如下，注意这里的`www.example.com`要更换成你自己的。
> 常见后缀名也可以参考阿里云文档：
> [默认缓存策略和缓存生效逻辑-边缘安全加速(ESA)-阿里云帮助中心](https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/default-cache-rule)

![](../assets/FBFLDDFBFFLHLH-9.png)

```
(http.host in {"www.example.com"} and starts_with(http.request.uri, "/cdn") and lower(http.request.uri.path.extension) in {"doc" "docx" "ppt" "pptx" "pdf" "csv" "bmp" "gif" "ico" "jpeg" "jpg" "svg" "svgz" "tif" "tiff" "webp" "mp3" "flac" "mid" "midi" "avi" "mp4" "mkv" "webm" "7z" "gz" "rar" "tar" "zip" "zst"})
```

![](../assets/FBFLDDFBFFLHLH-10.png)

### 设置默认不缓存路径

> 由于在缓存需求梳理那里，规则设置较为粗暴，所以这里直接设置开头不为`/cdn`的均不缓存；

![](../assets/FBFLDDFBFFLHLH-13.png)

### 设置存在指定`cookie`、`session`时不缓存

> 表达式如下，注意这里的`www.example.com`要更换成你自己的。

```
(http.host in {"www.example.com"} and lower(http.cookie) contains "admin_session") or (http.host in {"www.example.com"} and lower(http.cookie) contains "dir_passwd") or (http.host in {"www.example.com"} and lower(http.cookie) contains "PHPSESSID")
```

![](../assets/FBFLDDFBFFLHLH-15.png)


## 4.缓存测试

> 分别查看缓存目录和不缓存目录下的文件，可以看到ESA的返回头差异。

> 在缓存文件的响应头中可以看到，`x-site-cache-status`为命中缓存，`x-swift-cachetime=864000秒`正是设置的缓存有效期10天。

![](../assets/FBFLDDFBFFLHLH-19.png)

> 非缓存文件则可以看到`x-site-cache-status=DYNAMIC`


![](../assets/FBFLDDFBFFLHLH-20.png)


## 5.站点测速
![](../assets/FBFLDDFBFFLHLH-21.png)



## 总结

本篇文章记录了将个人外链文件站点接入阿里云 ESA（Edge Security Acceleration）的完整过程，并重点介绍如何基于“缓存白名单 + 路径排除”策略实现精细化缓存控制。站点的主要诉求是在带宽受限的情况下提升大文件外链、前端静态资源加载速度，同时保证动态页面、后台管理与敏感资源不被缓存。

文中首先梳理了缓存需求，通过将上传文件区分为 `/cdn/` 与 `/no/` 目录，仅对白名单中的静态资源与特定后缀文件启用缓存；同时针对无后缀路径、存在特定 cookie/session、统计脚本等内容进行全局排除。随后介绍了 ESA 的站点接入、DNS 解析、SSL 证书配置流程，并给出了可直接使用的缓存表达式示例。

最后通过响应头验证缓存命中情况，并展示接入 ESA 后的加速效果。整体方案简单、可控、安全，适合中小型文件站点快速获得显著的访问加速体验。