This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

进入src目录 run `yarn start`
localhost:3000


### 整个项目结构
├── models(mongoos.js model,宗旨上以数据表名一一对应)
├── routes(接口)
├── service (服务层,一般用于需要封装的独立服务,比如db)
├── src (前端工程)
│   |── src (前端源码)
│   |── components (公用自定义组件，以文件夹为单位)
│   |── img (图片)
│   |── pages (页面级别组件，以文件夹为单位)
│   |── service (前端的Ajax请求函数封装)
│   |── style (核心样式表-总)
│   |── tools (前端工具函数)
│   |── index.js (入口)
│   |── router.js (前端路由表)
│   |── README.md 
├── app.js (入口)
├── README.md