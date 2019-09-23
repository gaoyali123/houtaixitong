<template>
  <div class="app-container">
       <div class="lunbotu">
         
       <!-- 弹出框 -->
           <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address"  >
                <div class="demo-input-suffix">
                    <span class="tit" > 标题： </span>
                    <el-input
                      class="ljIpt"
                      placeholder="请输入内容"
                      v-model="input10"
                      clearable>
                    </el-input> 
                </div>

                <div class="demo-input-suffix">
                    <span class="tit" > 跳转链接：</span>
                    <el-input
                      class="ljIpt"
                      placeholder="请输入内容"
                      v-model="input10"
                      clearable>
                    </el-input> 
                </div>
                
                 <div class="demo-input-suffix">
                    <span class="tit">排序：</span>
                    <el-input
                      class="ljIpt"
                      placeholder="请输入内容"
                      clearable>
                    </el-input> 
                 </div>               

                 <!-- <div class="demo-input-suffix "  style="margin-bottom:100px;">
                    <span class="tit">缩略图</span>
                     <button type="file" class="sltBOx" @click='imgShow'>
                        <img src="" alt=""   v-if="true"  class="uploadImg">
                     </button>
                 </div>                   -->

                 <div class="demo-input-suffix ">
                          <span class="tit sl"  style="display:block">缩略图：</span>
                          <a href="javascript:;" class="file" style="display: none;">
                            <input type="file" name="img"   ref="file">
                            选择上传文件
                          </a>
                          <span class="lbl">&nbsp;&nbsp;<img src="/public/img/no_img.jpg" width="150" class="uploadImg"  height="97" style="margin-left:50px;"   @click="img_open()"></span>
                 </div> 

                 <div class="demo-input-suffix ">
                          <span class="tit sl"  style="display:block">大图：</span>
                          <a href="javascript:;" class="file" style="display: none;">
                            <input type="file" name="img"    ref="file">
                            选择上传文件
                          </a>
                          <span class="lbl">&nbsp;&nbsp;<img src="/public/img/no_img.jpg" width="150" height="97" class="uploadImg"  style="margin-left:50px;"    @click="img_open()"></span>
                 </div> 

                <div style="margin-top:50px">
                      <el-button type="primary" size="small" >确定</el-button>
                      <el-button type="default"  size="small"  style="margin-left:60px">返回</el-button>
                </div>

            </el-dialog>
       <!-- 弹出框end -->

                  <!-- 搜索框 -->
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
                    prop="date"
                    label="序号"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="orderid"
                    width="100"
                    label="排序">
                  </el-table-column> 
                  <el-table-column
                    prop="smallimg"
                    label="缩略图"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="img"
                    label="大图"
                    width="180">
                  </el-table-column>                 
                  <el-table-column
                    prop="url"
                    label="跳转链接">
                  </el-table-column>
                  <el-table-column
                    prop="islink"
                    label="是否跳转">
                      <template slot-scope="scope">
                        <el-button type="warning" size='mini' >否</el-button>
                    </template>
                  </el-table-column>   

                  <el-table-column
                    prop="name"
                    label="标题">

                  </el-table-column> 

                  <el-table-column
                    prop="datetime"
                    label="添加时间">
                  </el-table-column>   
                   <el-table-column
                    prop="operatorname"
                    label="操作人">
                  </el-table-column> 



                  <el-table-column
                    fixed="right"
                    label="操作"
                    width=" ">
                    <template slot-scope="scope">
                      <el-button type="danger" size='mini'>删除</el-button>
                      <el-button type="success" size='mini' @click="dialogTableVisible = true">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
       </div>

  </div>
</template>

<script>
import { fetchList} from '@/api/article'
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import waves from '@/directive/waves' // waves directive
import { log } from 'util'

  const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

  export default {
     directives: { elDragDialog }, 
     directives: { waves }, 
    data() {
      return {

        dialogTableVisible: false,
         input10: '',
          importanceOptions: [1, 2, 3],
          calendarTypeOptions,
          sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
        listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
        tableData: [{
          date: '01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
          fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }]
      }

    },
      methods: {
        img_open(){
          this.$refs['file'].click();
        },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
        handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
      }


  }
</script>

<style lang="less"  scoped>

  .lunbotu {
           .demo-input-suffix {
              margin: 20px 0;

          /deep/   .el-dialog {
              width: 30%;
            }
             .tit {
               display: inline-block;
               width: 90px;
               text-align: right;
             }
             .sl {
                display: block;
                margin-left: 82px
             }
           }

    /deep/ .el-dialog__body {
      text-align: center;
      width: 500px;
    }

     /deep/ .el-dialog__title {
        display:none;
      }
      .ljIpt {
        width:200px;
      }

      .sltBOx {
        position: relative;
        width: 100px;
        height: 100px;

      .uploadImg {
        display: block;
      }

      }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }

</style>