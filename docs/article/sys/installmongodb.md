# 安装MongoDB

## CentOS环境
创建文件yum配置文件
```bash
vim /etc/yum.repos.d/mongodb.repo
```

添加文件内容
```bash
[mongodb-org]
name=MongoDB Repository
baseurl=http://mirrors.aliyun.com/mongodb/yum/redhat/7Server/mongodb-org/3.2/x86_64/
gpgcheck=0
enabled=1
```

更新yum源，非必须但是更新一下无害
```bash
yum -y update
```

安装mongodb
```bash
yum -y install mongodb-org
```

启动mongodb
```bash
service mongod start
```

设置开机启动
```bash
chkconfig mongod on
```

### --END--
