// 引入需要用到的模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getArticleList = require('./routes/get_article_list')
var getForm = require('./routes/get_form.js')
var postForm = require('./routes/post_form.js')
var createVueFile = require('./routes/create_vue_file.js')

// 创建express实例
var app = express();

// 设置模板引擎
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));
nunjucks.configure('views', {
  autoescape: true,  // 控制输出是否被转义
  express: app, // 传入 express 实例初始化模板设置
  watch: true // 启用模板文件监视,文件一旦发生改变,重新编译
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  req.method == "OPTIONS" ? res.send(200) : next()
})

// 设置路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/get_article_list', getArticleList)
app.use('/get_form', getForm)
app.use('/post_form', postForm)
app.use('/create_vue_file', createVueFile)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
