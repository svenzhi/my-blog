---
title: SSh
icon: "mdi:ssh"
date: 2022-11-10
tag:
  - Linux
  - Ubuntu
  - ssh
---

> 该文于2022-11-10发布在[CSDN](https://blog.csdn.net/weixin_52341477/article/details/127785396)，2025年11月3日同步至此。



[ssh配置免密登录](http://t.csdn.cn/stKHD)

## 1. 安装
```powershell
apt-get update # 更新软件列表
apt-get install openssh-client # 控制别的服务器用
apt-get install openssh-server # 被别的机器控制用
```

## 2. ssh命令
```powershell
# 查看ssh状态
service ssh status

# 启动ssh服务
service ssh start
或
/etc/init.d/ssh start

# 重启ssh服务
service ssh restart
或者
/etc/init.d/ssh restart

停止ssh服务
service ssh stop
```
更多信息可以查看`/etc/init.d/ssh`、`/etc/ssh`或`ssh --help`
## 3. 配置sshd_config文件
文件路径：`/etc/ssh/sshd_config`
```powershell
#PermitRootLogin prohibit-password 给这一行注释掉
PermitRootLogin yes # 允许root用户登录
```
注意，要么准确找到原文中的内容并改掉，要么直接加在配置文件的末尾，放在文件开头的话会被文件后面的这两个原本的配置覆盖掉，以至于不生效。

修改完后重启`service ssh restart`。


## 3. 设置开机启动
**用系统自带功能设置：**
```powershell
systemctl enable ssh # 设置开机自启
systemctl disable ssh # 取消开机自启
```

实际服务器环境下机器是很少重启的，所以最好再手动配置一个启动脚本。

**示例**
`/root/ssh_auto.sh`
```powershell
#!/bin/bash
 
LOGTIME=$(date "+%Y-%m-%d %H:%M:%S")
echo "[$LOGTIME] startup run..." >>/root/run.log
service ssh start >>/root/run.log
```

```powershell
chmod +x ssh_auto.sh
```

然后在`/root/.bashrc`中添加`. /root/ssh_auto.sh`。这样配置的话每打开一个`Shell`都会执行一次。
也可以根据情况，将脚本启动命令放到其它位置。具体可参考：[Linux环境变量详解](http://t.csdn.cn/ry2TW)