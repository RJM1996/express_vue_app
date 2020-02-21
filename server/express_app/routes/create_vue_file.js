var express = require('express');
var router = express.Router();
var file = require('../public/javascripts/file')

// 创建vue文件的请求
router.post('/', function (req, res, next) {
  try {
    const data = {
      fileName: req.body.name,
      renderData: {
        title: req.body.title
      }
    }
    file.initData(data)
    file.renderFile()
    file.writeFile()
  } catch (error) {
    console.log(error)
  }
  res.json({
    code: 200,
    msg: '创建成功'
  })
});

module.exports = router;
