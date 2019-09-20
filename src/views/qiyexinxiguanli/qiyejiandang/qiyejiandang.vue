
<template>
  <div class="app-container">
    <div class="qiyejiandang">
      <!-- 搜索框 -->
      <div class="filter-container">
        <div class="filter-item el-input el-input--medium" style="width: 200px;">
          <el-input v-model="input" placeholder="请输入内容" ></el-input>
        </div>
        <el-select v-model="value2" placeholder="请选择"  class="sel">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>

        <button type="button" class="el-button filter-item el-button--primary el-button--medium">
          <!---->
          <i class="el-icon-search"></i>
          <span>搜索</span>
        </button>
        <button
          type="button"
          class="el-button filter-item el-button--primary el-button--medium"
          style="margin-left: 10px;"
        >
          <!---->
          <i class="el-icon-edit"></i>
          <span>添加</span>
        </button>
        <button type="button" class="el-button filter-item el-button--primary el-button--medium">
          <!---->
          <i class="el-icon-download"></i>
          <span>导入</span>
        </button>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="图标" width="180"></el-table-column>
        <el-table-column prop="name" label="企业名称" width="180"></el-table-column>
        <el-table-column prop="farenxingming" label="法人姓名" width="160"></el-table-column>
        <el-table-column prop="phone" label="法人手机号" width="160"></el-table-column>
        <el-table-column prop="address" label="企业地址"></el-table-column>
        <el-table-column prop="address" label="公司简介"></el-table-column>
        <el-table-column prop="address" label="所属园区"></el-table-column>
        <el-table-column prop="address" label="审核状态"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       input: '',
       value2:'',
      tableData: [ ],
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
        }
      ]
    };
  }
};
</script>

<style lang="less"  scoped>
.qiyejiandang {
  .filter-container {
    padding-bottom: 10px;

/deep/     .el-input__inner {
      height: 36px !important;
      line-height: 36px !important;
    }
  }
}
</style>