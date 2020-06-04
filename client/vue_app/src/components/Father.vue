<template>
  <div id="app">
    <p>{{fatherValue}}</p>
    <!-- <div>父组件输入框：<input type="text" v-model="fatherValue"></div> -->
    <child-component v-model="fatherValue" :items="items"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  name: 'app',
  components: {
    ChildComponent
  },
  data() {
    return {
      fatherValue: {},
      items: []
    }
  },
  watch: {
    items: {
      handler(val) {
        console.log('watch items')
        val.forEach(element => {
          this.$set(this.fatherValue, element.key, element[element.key] || '')
        });
      }
    }
  },
  
  created() {
    this.items = [
      {
        type: 'input',
        key: 'name'
      },
      {
        type: 'input',
        key: 'age'
      },
      {
        type: 'select',
        key: 'sex',
        opts: [
          {
            label: '男',
            value: 'man'
          },
          {
            label: '女',
            value: 'woman'
          },
          {
            label: '保密',
            value: 'Confidential'
          }
        ]
      }
    ]
  }
}
</script>