<template>
  <div id="app">
    <p>{{fatherValue}}</p>
    <!-- <div>父组件输入框：<input type="text" v-model="fatherValue"></div> -->
    <child-component v-model="fatherValue" :items="items" :testProp="testProp"  :title="title" @on-change="changeHandle"></child-component>
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
      items: [],
      testProp: {
        a: 1,
        b: 2,
        c: 3
      },
      title: 'aaa'
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
  methods: {
    changeHandle() {
      // console.log(JSON.stringify(this.fatherValue))
      console.log(this.title)
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
        key: 'age',
        age: '23'
      },
      {
        type: 'select',
        key: 'sex',
        sex: 'man',
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
    console.log(JSON.stringify(this.testProp))
  }
}
</script>