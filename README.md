# react_express_mongodb_demo
`采用React + Node.js + Express + mongoskin + MongoDB技术开发的一个示例`

##源码使用方法：

###1.安装Node.js

在Node.js官网下载并安装Node.js

###2.安装MongoDB数据库

在MongoDB官网下载并安装MongoDB

###3.下载示例源码

在Github下载本示例源码

###4.运行

#####1)在下载后的源码的解压目录，运行以下命令安装依赖的Node.js模块：

npm install

#####2)初始化MongoDB数据库

在MongoDB的bin目录的父目录下建立data目录（即让data目录与bin目录成为兄弟目录）。

在bin目录中运行以下命令启动数据库服务器：

mongod --dbpath ../data

运行bin目录下的mongo.exe启动客户端窗口，在该窗口中运行以下命令来建立示例程序使用的数据库：

use dota_new_year

#####3)启动示例程序

在示例程序源码的解压目录，运行以下程序启动Node.js服务器：

node app.js

#####4)访问页面

访问[http://localhost:3000/](http://localhost:3000/)，点击表格中的红色或绿色色块，颜色变化后刷新页面，如果刷新后显示的页面与刚才操作后相同，则表示颜色的变化已经保存到数据库中，至此示例程序运行成功。


##参考：

* [react入门教程](http://www.ruanyifeng.com/blog/2015/03/react.html)

* [express文档](http://www.expressjs.com.cn/4x/api.html)

* [mongoskin模块示例](http://www.hacksparrow.com/mongoskin-tutorial-with-examples.html)

* [mongoDB中文文档](http://docs.mongoing.com/manual-zh/)


##联系我：

* QQ 892390913