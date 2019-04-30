# 安装pm2及使用

### 简介
> pm2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。

### 安装pm2
```bash
npm install -g pm2 --registry https://registry.npm.taobao.org
```

### 查看当前版本
```bash
pm2 -v
```

### 运行
```bash
pm2 -v app.js --name app
```
`app.js`是项目启动文件，`app`是自定义的进程名

### 停止进程
```bash
pm2 stop app
```


### 开机启动
+ 运行`pm2 startup`，即在`/etc/init.d/`目录下生成pm2-root的启动脚本，且自动将pm2-root设为服务。
+ 运行`pm2 save`，会将当前pm2所运行的应用保存在`/root/.pm2/dump.pm2`下，当开机重启时，运行pm2-root服务脚本，并且到`/root/.pm2/dump.pm2`下读取应用并启动。

### --END--
