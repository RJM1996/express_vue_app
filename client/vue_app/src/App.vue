<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <get-form></get-form>
    <post-form></post-form>
    <div>
      <p>自定义组件v-model</p>
      <Father></Father>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GetForm from './components/GetForm.vue'
import PostForm from './components/PostForm.vue'
import Father from './components/Father'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GetForm,
    PostForm,
    Father
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
