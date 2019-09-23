<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="已发布">
        <div style="padding: 20px">
          <div class="serch_left">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input21">
            </el-input>
          </div>
          <div class="serch_right">
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
        <!--      表格-->
        <el-table
          :data="policy"
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
            width="150">
          </el-table-column>
          <el-table-column
            prop="isreprint"
            label="是否转载"
            width="150">
          </el-table-column>
          <el-table-column
            prop="state"
            label="审核状态"
            width="150">
          </el-table-column>
          <el-table-column
            prop="publishtime"
            label="发布时间"
            width="150">
          </el-table-column>
          <el-table-column
            prop="publishname"
            label="发布人"
            width="150">
          </el-table-column>
          <el-table-column
            prop="classnumber"
            label="分类编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="pageview"
            label="浏览量"
            width="150">
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row.id)">撤回</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待发布">
        <div style="padding: 20px">
          <div class="serch_left">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input21">
            </el-input>
          </div>
          <div class="serch_right">
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
        <el-table
          :data="policys"
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
            width="150">
          </el-table-column>
          <el-table-column
            prop="isreprint"
            label="是否转载"
            width="150">
          </el-table-column>
          <el-table-column
            prop="state"
            label="审核状态"
            width="150">
          </el-table-column>
          <el-table-column
            prop="publishtime"
            label="发布时间"
            width="150">
          </el-table-column>
          <el-table-column
            prop="publishname"
            label="发布人"
            width="150">
          </el-table-column>
          <el-table-column
            prop="classnumber"
            label="分类编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="pageview"
            label="浏览量"
            width="150">
          </el-table-column>
          <el-table-column label="操作" width="200">
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
    name:'banshizhinan',
    data(){
      return {
        policy:[],
        policys:[],
        input:''
      }
    }
  }
</script>


<style lang="less"  scoped>
  .serch_left{
    float: left;
    width: 20%;
  }
  .serch_right{
    float: left;
    margin-left: 50px;
  }
</style>
