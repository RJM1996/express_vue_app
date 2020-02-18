var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.query)
  res.json({
    code: 200,
    msg: '成功'
  })
});

module.exports = router;
