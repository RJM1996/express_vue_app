/**
 * 1. 根据模板和数据,渲染生成代码文本
 * 2. 创建文件,并写入渲染结果
 */

// 引入需要的模块 
var fs = require("fs");
var nunjucks = require('nunjucks')
var path = require('path')

// 定义全局变量
const BASE_URL = '/Users/rongjunming/work/code/project/express_vue_app'
const VIEWS_PATH = path.join(BASE_URL, '/server/express_app/views')
// 设置模板存放路径
nunjucks.configure(VIEWS_PATH, {
  autoescape: true
})
const TEMPLATE_FILE = 'test.njk'

var file = {
  data: '',
  fileName: '',
  filePath: '',
  renderData: {},
  initData (req) {
    console.log(req)
    console.log('文件名: ', req.fileName)
    this.fileName = req.fileName
    this.filePath = path.join(BASE_URL, '/client/vue_app/src/components/' + this.fileName) 
    this.renderData = req.renderData
  },
  writeFile () {
    console.log('开始创建并写入文件...')
    fs.writeFile(this.filePath, this.data, function (err) {
      if (err) {
        console.error(err)
      }
    })
  },
  renderFile () {
    console.log('开始渲染...')
    this.data = nunjucks.render(TEMPLATE_FILE, this.renderData)
  }
}

module.exports = file