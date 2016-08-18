var express = require('express');
var path = require('path');
//中间件，可以用于请求网页的logo
var favicon = require('serve-favicon');
/*
 * 在express 默认生成的代码中，变量名为logger（记录器）,
 * 主要功能是：在控制台中，显示req请求的信息
 */
var logger = require('morgan');
//cookie
var cookieParser = require('cookie-parser');
/*
 * bodyParser用于解析客户端请求的body中的内容,
 * 内部使用JSON编码处理,url编码处理以及对于文件的上传处理
 */
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
//视图引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html',require('ejs').__express);
//app.use(favicon(__dirname + '/public/favicon.ico'));

//加载环境变量
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//加载路由
app.use('/',routes);
app.use('/users',users);

//加载错误处理解决办法
app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if(app.get('env') === 'development'){
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message : err.message,
            error : err
        })
    });
}
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message : err.message,
        error : {}
    });
});

app.listen(8888);
module.exports = app;
