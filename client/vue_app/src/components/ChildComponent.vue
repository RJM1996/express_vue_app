<template>
  <div>
    {{childValue}}
    <form action="" v-for="(item, index) in items" :key="index">
      <span>{{item.key + ": "}}</span>
      <input v-if="item.type === 'input'" type="text" :key="index" v-model="childValue[item.key]" @input="returnBackFn">
      <select v-if="item.type === 'select'" :key="index" v-model="childValue[item.key]" @change="selectChange">
        <option v-for="(opt, index) in item.opts" :key="`opt-${index}`" :value="opt.value">{{opt.label}}</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childValue: {},
    }
  },
  watch: {
    //监听value变化（slect控件不是必要，暂时不明）
    value(newValue) {
      console.log('watch value')
      Object.keys(newValue).forEach(item => {
        this.$set(this.childValue, item.key, item[item.key])
      })
    }
  },
  props: {
    //value是默认双向绑定值，必须在props里面声明
    value: Object,
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  model: {
    prop: 'value',
    // event: 'change'
  },
  methods: {
    selectChange () {
      console.log('触发change')
      this.$emit('input', this.childValue)
    },
    returnBackFn() {
      console.log('触发input')
      //input是默认双向绑定事件，select控件也可以用input给父组件传递数据
      this.$emit('input', this.childValue)
    },
  },
}
</script>