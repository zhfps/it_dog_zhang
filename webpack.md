# webpcak 学习记录

1. 相关网站

   http://www.xbhub.com/wiki/webpack

2. 创建项目

   - 初始化项目

     npm init

   - 安装webpack

      npm i webpack webpack-cli -D

   - 创建webpack.config.js

     ```js
     //简单配置
     const path = require('path')
     
     let config = {
         mode: 'none',
         entry: {
             main: path.join(__dirname, './src/main.js')
         },
         output: {
             filename: '[name].bundle.js',
             path: path.join(__dirname, './dist')
         }
     }
     
     module.exports = config
     ```

   - 自动生成项目中的HTML文件

      安装：npm install --save-dev html-webpack-plugin

      ```js
      //简单配置
      const path = require('path')
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      
      const config = {
        mode: 'none',
        entry: {
          main: path.join(__dirname, '../src/main.js')
        },
        output: {
          filename: '[name].bundle.js',
          path: path.join(__dirname, '../dist')
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            inject: true,
            minify: {
              removeComments: true
            }
          })
        ]
      }
      
      module.exports = config
      ```

​             清理dist/

​				安装：npm install clean-webpack-plugin --save-dev



  依赖清单：mini-css-extract-plugin

  babel:es代码转换

  



expose-loader

1. 配置 webpack.config.js

   - entry: 入口

   - mode: 模式/dev/prod

   - output：

     {

     ​	filename:  //打包后的文件名

     ​	path: 打包后的路径

     }

   - devServer:

     {

       port:

       contentBase:

     }

   - plugin: //插件

     [

     ]

   - module: //模块

     {

     rules:[

     ]

     }

2. 配置packag.json

   script:{

    build: "webpack"

   }