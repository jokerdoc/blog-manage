# GIS离线地图

> 地图功能在互联网项目中非常常用，例如外卖APP定位找到附近的商家，物流通过定位精准送货上门等等，都是地图的应用。企业级别的项目，尤其是那些保密性特别强的项目，是上不了外网的。这个时候就有这样的场景，他们需要通过地图来统计各个地方的数据情况，又不想通过网络来查看地图。离线地图就有它的使用场景。

### 第三方开源库
有两个知名的GIS地图库`leaflet`和`openlayers`。两个库的功能不相上下，根据项目特点我选择了`leaflet`。

### 安装
```sh
npm install leaflet --save
# OR
yarn add leaflet
```

### 示例
```js
import L from 'leaflet';

let map = L.map('map').setView([23.13, 113.27], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);     // 地址可修改！！！后面把这个地址改成本地部署地址

L.marker([23.13, 113.27]).addTo(map)
    .bindPopup('现在所在的地方是广东省广州市')
    .openPopup();
```
![Image](~@/public/gis.png)


### 使用瓦片图
在示例中的地址还是外网的，我们可以通过[瓦片地图下载器](http://www.locaspace.cn/)，下载需要的地图，图片文件会很大，只下载适合自己的。文件有包含层级、经纬度数据，格式是`{z}/{x}/{y}.png`，会自动加载相应的瓦片图。图片下载完毕，开启静态站点服务即可。以本地`localhost:8080`为例。
```js
L.tileLayer('http://localhost:8080/{z}/{x}/{y}.png').addTo(map);
```

### --END--
