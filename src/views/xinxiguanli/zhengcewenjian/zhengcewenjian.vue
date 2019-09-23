<template>
  <div class="app-container">
    <div class="serch">
      <div class="serch_input">
        <el-input
          placeholder="请输入内容"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="serch_button">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="info" round @click="bianji">添加</el-button>
        <el-button type="primary" icon="el-icon-edit" circle @click="bianji"></el-button>
      </div>
    </div>
<!--    展示政策文件-->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="departmentid"
        label="发布单位">
      </el-table-column>
      <el-table-column
        prop="departmentid"
        label="发布单位">
      </el-table-column>
      <el-table-column
        prop="keyword"
        label="关键字">
      </el-table-column>
      <el-table-column
        prop="viewcnt"
        label="浏览量">
      </el-table-column>
      <el-table-column
        prop="collectcnt"
        label="收藏量">
      </el-table-column>
      <el-table-column
        prop="istransfer"
        label="是否为转载">
      </el-table-column>
      <el-table-column
        prop="categoryid"
        label="公告类型id">
      </el-table-column>
      <el-table-column
        prop="operatorname"
        label="添加人员">
      </el-table-column>
      <el-table-column
        prop="operatorname"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="publishername"
        label="发布人">
      </el-table-column>
      <el-table-column
        prop="publishertime"
        label="发布时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit( scope.row.id)">查看</el-button>
          <el-button
            size="mini"
            @click="handleEdit( scope.row.id)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete( scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
name:'zhengcewenjian',
  data(){
  return{
    tableData:[],
  }
  },
  methods:{
  handleDelete(id){
    console.log(id)
  },
    //编辑文件页面
    bianji(){
      this.$router.push('zhengcewenjiandetail')
    }
  }
}
</script>
<style scoped lang="less">
  .serch_button{
    float: left;
    margin-left: 100px;
    >*{
      margin-right: 30px;
    }
  }
  .serch_input{
    float: left;
    margin-left: 100px;
    width: 20%;
  }
</style>

