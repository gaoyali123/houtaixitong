
<template>
  <div class="app-container">
   <el-tabs type="border-card">
        <el-tab-pane label="待办">
          <!-- 待办表格 -->
                <!-- 搜索 -->
          <div class="filter-container" style="margin-bottom:20px">
            <el-input v-model="listQuery.title" placeholder="Title" style="width: 300px;" class="filter-item" @keyup.enter.native="handleFilter" />

            <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
              搜索
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary"   @click="dialogTableVisible = true" >
              添加
            </el-button>
          </div>         

                <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="id"
                  label="id"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="orderno"
                  label="工单编号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="title"
                  label="工单标题">
                </el-table-column>

                <el-table-column
                  prop="remark"
                  label="备注">
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="工单类型">
                </el-table-column>
                <el-table-column
                  prop="attachment"
                  label="文件附件">
                </el-table-column>



                <el-table-column
                  prop="state"
                  label="工单状态">
                  <!-- 工单状态（1：待审核 1：退回 3：交办信息 4：已完成 5：已评价） -->
                <template slot-scope="scope">
                    <el-button type="danger" size="small">待审核</el-button>
                </template>
                </el-table-column>

              
              </el-table>
        </el-tab-pane>






    <el-tab-pane label="已办">
          <!--已办 表格 -->
                <!-- 搜索 -->
          <div class="filter-container" style="margin-bottom:20px">
            <el-input v-model="listQuery.title" placeholder="Title" style="width: 300px;" class="filter-item" @keyup.enter.native="handleFilter" />

            <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
              搜索
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary"   @click="dialogTableVisible = true" >
              添加
            </el-button>
          </div>

            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="id"
              label="id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderno"
              label="工单编号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="title"
              label="工单标题">
            </el-table-column>

            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column
              prop="type"
              label="工单类型">
            </el-table-column>
            <el-table-column
              prop="attachment"
              label="文件附件">
            </el-table-column>


            <el-table-column
              prop="satisfactiondegree"
              label="满意度">
            </el-table-column>
            <el-table-column
              prop="appraise"
              label="评价内容">
            </el-table-column>

            <el-table-column
              prop="state"
              label="工单状态">
              <!-- 工单状态（1：待审核 1：退回 3：交办信息 4：已完成 5：已评价） -->
            <template slot-scope="scope">
                <el-button type="danger" size="small">待审核</el-button>
            </template>
            </el-table-column>

          
          </el-table>
    </el-tab-pane>
    <!-- 全部 -->
    <el-tab-pane label="全部">
          <!--全部 表格 -->
          <!--已办 表格 -->
                          <!-- 搜索 -->
          <div class="filter-container" style="margin-bottom:20px">
            <el-input v-model="listQuery.title" placeholder="Title" style="width: 300px;" class="filter-item" @keyup.enter.native="handleFilter" />

            <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
              搜索
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary"   @click="dialogTableVisible = true" >
              添加
            </el-button>
          </div>

            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="id"
              label="id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderno"
              label="工单编号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="title"
              label="工单标题">
            </el-table-column>

            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column
              prop="type"
              label="工单类型">
            </el-table-column>
            <el-table-column
              prop="attachment"
              label="文件附件">
            </el-table-column>


            <el-table-column
              prop="satisfactiondegree"
              label="满意度">
            </el-table-column>
            <el-table-column
              prop="appraise"
              label="评价内容">
            </el-table-column>

            <el-table-column
              prop="state"
              label="工单状态">
              <!-- 工单状态（1：待审核 1：退回 3：交办信息 4：已完成 5：已评价） -->
            <template slot-scope="scope">
                <el-button type="danger" size="small">待审核</el-button>
            </template>
            </el-table-column>

          
          </el-table>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>


<script>
import { fetchList } from "@/api/article";
import elDragDialog from "@/directive/el-drag-dialog"; // base on element-ui
import waves from "@/directive/waves"; // waves directive
import { log } from "util";
import { METHODS } from "http";


export default {
  directives: { waves }, 
  name:'zhengcewenjian',
  data() {
    return {
      policy:[],
      policys:[],
      tableData :[],
      //搜索框
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      }
    };
  },
  methods: {
    //搜索框
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },

    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    bianji(){
      this.$router.push({name:'bianji'})
    }
  }
};
</script>

<style lang="less"  scoped>

</style>
