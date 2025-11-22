---
author:
title: Docker部署Umami：自建Umai实现站点流量统计+可视化数据分析
date: 2025-11-08
icon:
cover: /assets/posts/FBFLDDBRDDBRFD-cover2.png
order:
category:
  - daily
tags:
  - Umami
  - Docker部署
footer:
copyright:
sticky: false
star: false
uid: FBFLDDBRDDBRFD
imageNameKey: FBFLDDBRDDBRFD
---

>博主有两三个长期使用的自建站点，近日想加一个流量统计脚本，体验了几个云厂商的都不甚满意，偶然发现了[Umami](https://umami.is/)。
>
>它是一个开源的网络分析工具，提供了关于网站流量、用户行为和性能的数据统计与可视化分析功能，并且拥有极简的UI风格。
>
>试用了官方的Demo后，让博主甚是喜欢，便决定使用Docker部署Umami。

## 部署

> Umami官方提供了Docker镜像，但同时需要搭配数据库使用，这样一来，还是使用docker compose更方便一点，博主的`docker-compose.yml`如下。
> 
> 更多环境变量配置可见官方文档：[https://umami.is/docs/environment-variables](https://umami.is/docs/environment-variables)
> 
> 注意：博主使用的是2.19版本，本文发布时，官方发布了最新的V3版本，且不再支持MySQL，大家下载镜像时记得区分，官方V3更新说明见[Umami v3 ](https://umami.is/blog/umami-v3)

```
services:
  umami:
    image: ghcr.io/umami-software/umami:postgresql-v2.19.0
    ports:
      - "9012:3000"
    environment:
      DATABASE_URL: postgresql://umami:umami@db:5432/umami
      DATABASE_TYPE: postgresql
      APP_SECRET: "string" # 自定义的密钥
      TRACKER_SCRIPT_NAME: my-analytics.js # 自定义脚本名称
    depends_on:
      db:
        condition: service_healthy
    restart: always

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: umami
    volumes:
      - ./umami-db-data:/var/lib/postgresql/data
    restart: always
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB}"]
      interval: 5s
      timeout: 5s
      retries: 5
```


>容器运行成功之后，便可以登录了。
>默认用户名：admin
>密码：umami
![](../assets/FBFLDDBRDDBRFD-1.png)


## 站点统计添加、管理

> 登录之后，点击 `设置-网站-添加网站`填写站点名称与站点地址，便可以获得统计代码。
> 将代码放到需统计站点合适的页面位置，就可以做到流量统计啦。

![](../assets/FBFLDDBRDDBRFD-2.png)

## 反代配置

若部署后后发现不能获取IP省市信息，可以参考如下反代配置.

```
location ^~ / {
    proxy_pass http://127.0.0.1:9012; 
    proxy_set_header Host $host; 


    proxy_set_header REMOTE-HOST $remote_addr; 
    proxy_set_header Upgrade $http_upgrade; 
    proxy_set_header Connection $http_connection; 

    proxy_set_header X-Forwarded-Port $server_port; 
    proxy_http_version 1.1; 
    add_header X-Cache $upstream_cache_status; 
    add_header Cache-Control no-cache; 


    proxy_ssl_name $proxy_host; 
    add_header Strict-Transport-Security "max-age=31536000"; 

    proxy_buffering on;
    proxy_ssl_session_reuse off;
    proxy_ssl_server_name on;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Host  $host;
}
```

## 深入配置：站点跟踪配置细节

Umami还支持对站点统计的一些细节做配置，如排除链接参数、避免页面哈希变化导致访问量统计失真、函数回调、以及数据标签（这个很不错，可以做简单的页面埋点区分）等功能。


大家可以参考[跟踪器配置 --- Tracker configuration](https://umami.is/docs/tracker-configuration)。


> UI展示

![](../assets/FBFLDDBRDDBRFD-3.png)