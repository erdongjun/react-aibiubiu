react项目脚手架 

webpack+react相关配置
===========================



部署步骤

前提:本地安装好git 以及 node


1. 进入终端  git clone https://github.com/Davau/react-aibiubiu.git 

2. 下载完成 进入项目目录  执行 npm install 命令 安装项目依赖库 

3. 安装完成 执行 npm start  webpack编译项目 

4. 打开 http:localhost:8000  查看效果;



###########目录结构描述



 app   						 源码
                        
    actions					 redux action 方法
    components               通用组件
    constants        		 redux 组件状态
    containers               页面组件
    fetch             		 异步数据请求
    reducers         		 数据处理
    router               	 路由配置
    static         			 web静态资源
    store            		 redux 数据集合
    util       				 核心方法类
    index.js         		 项目加载入口
   	index.tmpl.html          打包生成的index.htmld的模板文件

 build						 编译打包的目标文件夹
 docs                         文档
 mock                         模拟接口相关
 test                         测试相关
 node_modules           		 开发依赖
 package.json        
 README.md                    项目相关说明        
 webpack.config.js            webpack开发配置文件
 webpack.production.config.js   webpack打包配置文件





V1.0.0 版本

暂无
