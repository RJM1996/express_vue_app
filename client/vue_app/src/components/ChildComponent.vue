<template>
  <div id='child-comp'>
    {{childValue}}
    <form action="" v-for="(item, index) in items" :key="index">
      <span class="form-label">{{item.key + ": "}}</span>
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
      testPropData: this.testProp,
      testTitle: this.title
    }
  },
  computed: {
    testPropDataComp () {
      return Object.assign({}, this.testProp)
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
    },
    testProp: Object,
    title: String
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
      // this.$emit('input', this.childValue)
      console.log(JSON.stringify(this.childValue))
      this.$emit('on-change', true)
    },
    returnBackFn(value, key) {
      console.log('触发input')
      this.childValue[key] = value
      // this.$set(this.childValue, key, value)
      //input是默认双向绑定事件，select控件也可以用input给父组件传递数据
      // this.$emit('input', this.childValue)
      console.log(JSON.stringify(this.childValue))
      this.$emit('on-change', true)
    },
  },
  created() {
    // console.log(JSON.stringify(this.testPropDataComp))
    // this.testPropDataComp.a = 100
    // console.log(JSON.stringify(this.testProp))
    // console.log(JSON.stringify(this.testPropDataComp))
    // this.$emit('on-change', true)

    // console.log(this.testTitle)
    // this.testTitle = 'bbb'
    // this.title = 'ccc'
    // console.log(this.title)
    // console.log(this.testTitle)
    // this.$emit('on-change', true)
  }
}
</script>


<style lang="less" scoped>
#child-comp {
  form {
    width: 220px;
    margin: auto;
    .form-label {
      width: 80px;
      display: inline-block;
      text-align: right;
    }
    .form-label::before {
      content: "*";
      color: red;
      display: inline-block;
      margin-right: 4px;
      line-height: 1;
    }
    input {
      float: right;
      border-width: 1px;
      margin: 0px;
      padding: 1px;
      width: 116px;
    }
    select {
      float: right;
      border-width: 1px;
      margin: 0px;
      padding: 1px;
      width: 120px;
    }
  }
}
</style>