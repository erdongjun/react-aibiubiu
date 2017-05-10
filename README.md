react项目脚手架 

webpack+react相关配置
===========================



部署步骤

前提:本地安装好git 以及 node

1. 进入终端  git clone https://github.com/Davau/react-aibiubiu.git 

2. 下载完成 进入项目目录  执行 npm install 命令 安装项目依赖库 

3. 安装完成 执行 npm start 编译项目 

4. 浏览器输入 http:localhost:8000  查看效果;

5. 在当前目录下新开终端 执行 npm run mock  开启本地接口测试

6. 编译打包: 执行 npm run build 命令

7. 查看打包后效果, 执行 cd build 命令,进入 build 目录, 执行 http-server -p 8001 命令, 

   浏览器输入http:localhost:8001  查看效果;


### proxy 跨域代理配置

 webpack.config.js中 

 分别设置 mock模拟数据配置 和 代理服务器配置;

 通过设置 isMock true 或 false 来匹配对应的配置

 

V1.0.0 版本

暂无...
