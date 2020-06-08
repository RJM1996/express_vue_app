<template>
  <div>
    {{childValue}}
    <form action="" v-for="(item, index) in items" :key="index">
      <span>{{item.key + ": "}}</span>
      <input v-if="item.type === 'input'" type="text" :key="index" :value="childValue[item.key]" @input="returnBackFn($event.target.value, item.key)">
      <select v-if="item.type === 'select'" :key="index" :value="childValue[item.key]" @change="selectChange($event.target.value, item.key)">
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
    value: {
      handler(newValue) {
        console.log('watch value')
        this.childValue = newValue
      },
      immediate: true,
      deep: true
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
    selectChange(value, key) {
      console.log('触发change')
      this.childValue[key] = value
      // console.log(key, value)
      // this.$set(this.childValue, key, value)
      this.$emit('input', this.childValue)
    },
    returnBackFn(value, key) {
      console.log('触发input')
      this.childValue[key] = value
      // this.$set(this.childValue, key, value)
      //input是默认双向绑定事件，select控件也可以用input给父组件传递数据
      this.$emit('input', this.childValue)
    },
  },
}
</script>