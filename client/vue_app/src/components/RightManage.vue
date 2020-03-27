<template>
  <div>
    <FormUI
      ref="searchForm"
      :formList="searchFormData"
      inline
      :ifShowLable="false"
    >
      <Button type="primary" @click="searchHandler">查询</Button>
    </FormUI>
    <TableUI
      ref="searchTable"
      :columns="columns"
      :data="list"
      :total="total"
      :loading="loading"
      @on-change="pageHandler"
    ></TableUI>
  </div>
</template>
<script>
import TableUI from '@/components/TableUI'
import FormUI from '@/components/FormUI'
import { mapActions, mapState } from 'vuex'
import { searchFormData } from '@/views/datas/RightManage/rightManage'
export default {
  name: 'RightManage',
  data () {
    return {
      searchFormData,
      page: 1,
      pageSize: 10,
      searchResult: {} // 查询条件
    }
  },
  components: {
    TableUI,
    FormUI
  },
  computed: {
    ...mapState('rightManage', [
      'searchData',
      'loading',
      'total',
      'columns',
      'list'
    ])
  },
  methods: {
    ...mapActions('rightManage', [
      'getSearchData',
      'getTableList'
    ]),
    // 条件查询-下拉列表初始化
    searchInit () {
      this.getSearchData().then(() => {
        this.searchFormData.forEach(item => {
          if (item.type === 'select') {
            item.children = [].concat(this.searchData[item.key])
          }
        })
      }).catch(err => {
        this.$Message.error(err || '获取数据失败')
      })
    },
    // 查询表格
    pageHandler (page, pageSize) {
      this.page = page
      this.page = pageSize
      let obj = {
        page,
        pageSize,
        ...this.searchResult
      }
      this.getTableList({ ...obj }).catch(err => {
        this.$Message.error(err || '获取数据失败')
      })
    },
    // 条件查询
    searchHandler () {
      // 获取查询条件
      this.searchResult = {
        ...this.$refs.searchForm.submit()
      }
      this.$refs.searchTable.pageHandler(1)
    }
  },
  created () {
    this.searchInit()
    this.pageHandler(this.page, this.pageSize)
  }
}
</script>
<style lang="less">
</style>
