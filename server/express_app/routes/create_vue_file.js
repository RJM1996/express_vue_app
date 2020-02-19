var express = require('express');
var router = express.Router();
var file = require('../public/javascripts/file')

// 创建vue文件的请求
router.get('/', function (req, res, next) {
  file.createVue()
  res.json({
    code: 200,
    msg: '创建成功'
  })
});

module.exports = router;
