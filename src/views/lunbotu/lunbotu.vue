<template>
  <div class="app-container">
       <div class="lunbotu">
                <div >
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChange"
                    :file-list="fileList3">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
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
                      <el-button type="primary" size='mini' >编辑</el-button>
                      <el-button type="danger" size='mini'>删除</el-button>
                      <el-button type="success" size='mini'>添加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
       </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      }
    }

  }
</script>

<style lang="less"  scoped>
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
</style>