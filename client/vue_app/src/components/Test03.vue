<template>
  <div>
    <h1>{{this.msg}}</h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Test03",
  data() {
    return {
      msg: '新增vue页面'
    }
  },
  created() {
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
