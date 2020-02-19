var fs = require("fs");
// var path = require("path");

var filePath = "/Users/rongjunming/work/code/project/express_vue_app/client/vue_app/src/components/TestCreate.vue"
var file = {
  data: "<template></template>",
  // filePath: "/Users/rongjunming/work/code/project/express_vue_app/client/vue_app/src/components/TestCreate.vue",
  createVue: function() {
    console.log('开始创建...')
    fs.writeFile(filePath, this.data, function (err) {
      if (err) {
        console.error(err)
      }
      console.log('文件写入成功, 读取文件如下...')
      fs.readFile(filePath, function (err, data) {
        if (err) {
          return console.error(err);
        }
        console.log(data.toString());
      });
    })
  }
}

module.exports = file