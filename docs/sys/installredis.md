# 安装Redis

## CentOS环境
安装最新的Redis，需要安装Remi的软件源，官网地址：http://rpms.famillecollet.com/
```bash
yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
```

然后可以使用下面的命令安装最新版本的Redis
```bash
yum --enablerepo=remi install redis
```

安装完毕后，即可使用下面的命令启动redis服务
```bash
service redis start
# or
systemctl start redis
```

检查Redis服务器系统进程
```bash
ps -aux|grep redis
```

### --END--
