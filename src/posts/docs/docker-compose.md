---
author:
title: Docker-Compose
date: 2025-11-06
icon: catppuccin:folder-docker
cover:
order:
category:
  - docs
tags:
  - Docker
footer:
copyright:
sticky: false
star: false
description: "132123123"
uid: EAEKCCAMEECOEM
imageNameKey: EAEKCCAMEECOEM
---

> 配置检查
```
#检查docker compose文件配置
docker compose config

#只输出服务名称
docker compose config --services

#只输出卷名称
docker compose config --volumes

#其它常用参数，可见docker compose config -h
--environment   #Print environment used for interpolation.
--images       #Print the image names, one per line.
```


> 启动

| 命令                     | 说明                |
| ---------------------- | ----------------- |
| `docker compose up`    | 前台启动              |
| `docker compose up -d` | 创建+启动容器,后台运行      |
| `docker compose start` | 启动已停止容器,配合stop 使用 |

> 停止

| 命令                       | 停止容器 | 删除容器 | 删除数据卷 | 删除网络 | 说明     |
| ------------------------ | ---- | ---- | ----- | ---- | ------ |
| `docker compose stop`    | √    | ×    | ×     | ×    | 不删除容器  |
| `docker compose down`    | √    | √    | ×     | √    | 保留卷数据  |
| `docker compose down -v` | √    | √    | √     | √    | 完全清空环境 |

> 状态查看、管理

| 命令                                   | 说明      |
| ------------------------------------ | ------- |
| `docker compose logs -f`             | 实时日志    |
| `docker compose logs -f servicename` | 某服务日志   |
| `docker compose ps`                  | 查看容器列表  |
| `docker compose top`                 | 查看服务进程  |
|                                      |         |
| `docker compose restart`             | 重启所有服务  |
| `docker compose restart servicename` | 重启某服务   |
| `docker compose up -d servicename`   | 只启动某个服务 |
| `docker compose stop servicename`    | 只停止某个服务 |

> 访问容器

| 命令                                     | 说明        |
| -------------------------------------- | --------- |
| `docker compose exec servicename bash` | 进入容器 bash |
| `docker compose exec servicename sh`   | 进入容器 sh   |
| `docker compose run servicename bash`  | 在新容器运行命令  |


