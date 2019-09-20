
<template>
  <div class="app-container">
   <el-tabs type="border-card">
    <el-tab-pane label="已发布">
<!--      表格-->
      <el-table
        :data="policy.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="40">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="300">
        </el-table-column>
        <el-table-column
          prop="fabudanwei"
          label="发布单位"
          width="100">
        </el-table-column>
        <el-table-column
          prop="isreprint"
          label="是否转载"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="审核状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="publishtime"
          label="发布时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="publishname"
          label="发布人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="addtime"
          label="添加时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="classnumber"
          label="分类编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="addman"
          label="添加人"
          width="150">
        </el-table-column>
        <el-table-column
          prop="pageview"
          label="浏览量"
          width="150">
        </el-table-column>
        <el-table-column label="正文" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="待发布">
      <el-table
        :data="policys.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="40">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="300">
        </el-table-column>
        <el-table-column
          prop="fabudanwei"
          label="发布单位"
          width="100">
        </el-table-column>
        <el-table-column
          prop="isreprint"
          label="是否转载"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="审核状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="publishtime"
          label="发布时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="publishname"
          label="发布人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="addtime"
          label="添加时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="classnumber"
          label="分类编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="addman"
          label="添加人"
          width="150">
        </el-table-column>
        <el-table-column
          prop="pageview"
          label="浏览量"
          width="150">
        </el-table-column>
        <el-table-column label="正文" width="100">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column label="发布" width="100">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.id)">发布</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
    name:'zhengcewenjian',
    data(){
        return {
            policy:[],
            policys:[]
        }
    }
}
</script>


<style lang="less"  scoped>

</style>
