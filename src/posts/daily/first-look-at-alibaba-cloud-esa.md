---
author:
title: 2025阿里云ESA初试
date: 2025-11-18
icon:
cover: /assets/posts/EAEKCCCQCEKKAE-cover.png
order:
category:
  - daily
tags:
  - 阿里云
  - CDN
  - ESA
footer:
copyright:
sticky: false
star: false
uid: EAEKCCCQCEKKAE
imageNameKey: EAEKCCCQCEKKAE
description: 本文分享使用阿里云 ESA（Edge Security Acceleration）的首次体验，包括边缘加速性能、DNS 行为、HTTPS 配置以及对 SEO 的影响。同时结合 blog.itsven.cn 的实际部署过程以及与Github Pages对比，提供适用于生产环境的站点防护实践建议。
---


```
国内、国际测速 与 GitHub对比

与服务器直连对比，虽然差一点，但不用裸奔了，更安心

HTTPS难易度
```

## ESA初试

本站最初使用Vuepress编译后，分别部署在Github Pages和Cloudflare Pages体验了一段视角，但由于主要面向国内使用，二者国内虽然能访问，但过于依赖网络环境，图片加载速度过慢，效果不佳。

直接放在我的服务器上，担心暴露IP，上CDN又太贵，担心被刷流量。一番搜索后发现国内腾讯云和阿里云都开始提供免费的边缘加速服务，由于是阿里云忠实用户~~路径依赖~~，在阿里云ESA交流群潜水了一番后，今天终于上手了。

PS：目前阿里云ESA可以免费使用一个月，后续可通过发帖每周领取1个月基础版的等值代金券。

阿里云ESA开启全球加速后，国内效果还是很不错的，与直接解析到服务器速度相差无几。

![阿里云ESA](../assets/EAEKCCCQCEKKAE-5.png)



![Github Pages](../assets/EAEKCCCQCEKKAE-4.png)


## 体验总结

**接入流程简单，支持范围广**
- 备案与否，均可使用；
- 支持CNAME、NS接入，对现有解析无侵入，影响小；
- 加速范围，国内/全球 可自行选择，方便屏蔽境外访问；

![](../assets/EAEKCCCQCEKKAE-1.png)

**SSL/TLS生态齐全**
- 支持自定义证书上传；
- Let's Encrypt、Digicert免费证书自动签发、续期，无需手动更新；

**安全防护、开发友好、操作便捷**
- 支持一键开启`严格防护模式`，将默认对所有HTTP请求做滑块挑战；
- 拥有`开发模式`，开启后，所有请求暂时绕过ESA缓存，便于实时查看源服务器的更改；
- 可暂时禁用所有安全防护，开启后安全配置（WAF、Bot、DDoS）将暂时失效，但不会删除配置。关闭后安全配置可重新生效。

![便捷操作面板](../assets/EAEKCCCQCEKKAE-2.png)