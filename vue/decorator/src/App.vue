<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-table
    :data="list">
    <el-table-column
    label="日期"
    prop="date"
    width="180">
    <template
    slot-scope="scope"
    >
    <i class="el-icon-time"> </i>
    <span>{{scope.row.date}}</span>
    </template>
    </el-table-column>

    <el-table-column
    label="姓名"
    prop="name"
    width="180">
    <template slot-scope="scope">
      <el-popover
      trigger="hover"
      placement="top"
      >
      <p>姓名:{{scope.row.name}}</p>
      <p>住址:{{scope.row.address}}</p>
      <div slot="reference" class="name-wrapper">
        <el-tag size="medium">{{scope.row.name}}</el-tag>
      </div>
      </el-popover>
    </template>
    </el-table-column>
    
    <el-table-column
    label="地址"
    prop="address"
    width="180">
    </el-table-column>

    <el-table-column
    label="操作">
      <template slot-scope="scope">
      <el-button 
      size="mini"
      type="danger"
      @click="handleDelete(scope.$index,scope.row)"
      >删除</el-button>
    </template>
    </el-table-column>


    </el-table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {MessageBox} from 'element-ui'
function confrimation( target, name, descriptor){
  // console.log(target, name, descriptor)
  let oldValue = descriptor.value
  descriptor.value = function (...args){
    MessageBox.confirm('你确定要删除吗','提示')
    .then(oldValue.bind(this, ...args))
    .catch(() =>{})
  }
}
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return {
      list:[
        {
        date:"2016-05-02",
        name:'王小虎',
        address:'上海'
      },
              {
        date:"2016-05-03",
        name:'王小虎',
        address:'上海'
      },        {
        date:"2016-05-04",
        name:'王小虎',
        address:'上海'
      }
      ]
    }
  },
  methods:{
    @confrimation
    handleDelete(index,row){
      // console.log(index,row)
      this.list.splice(index,1)
    }
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
