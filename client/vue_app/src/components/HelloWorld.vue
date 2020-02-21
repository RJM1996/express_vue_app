<template>
  <div>
    <h1>{{this.msg}}</h1>
    <div>
      <el-form
        ref="file"
        :model="file"
        label-width="100px"
      >
        <el-form-item label="文件名">
          <el-input v-model="file.name"></el-input>
        </el-form-item>
        <el-form-item label="组件名">
          <el-input v-model="file.title"></el-input>
        </el-form-item>
        <el-button
          type="primary"
          @click="createView"
        >创建文件
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
      file: {
        name: '',
        title: ''
      }
    }
  },
  methods: {
    createView() {
      console.log(this.file)
      axios.post('http://localhost:3000/create_vue_file', this.file)
        .then(res => {
          if (res.data.msg === '创建成功') {
            alert('创建成功')
          }
        }).catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    axios.get('http://localhost:3000/get_article_list')
      .then(res => {
        this.msg = res.data
      }).catch(err => {
        console.log(err);
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
