<template>
  <div class="app-container">
      <div class="jiaobanrenling">

      <!-- 搜索框 -->
      <div class="filter-container" style="margin-bottom:20px">
        <el-input
          v-model="listQuery.title"
          placeholder="Title"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
         <el-input
          v-model="listQuery.title"
          placeholder="Title"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
            <el-cascader
            expand-trigger="hover"
            :options="options"
            v-model="selectedOptions2"
            @change="handleChange">
          </el-cascader>

            <el-button
              v-waves
              class="filter-item"
              type="primary"
              @click="handleFilter"
            >搜索</el-button>
            <el-button
              class="filter-item"
              style="margin-left: 10px;"
              type="primary"
              @click="dialogTableVisible = true"
            >添加
            </el-button>
        </div> 

          <!--  -->
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

      </div>
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
      tableData :[],
               options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
       selectedOptions: [],
        selectedOptions2: [],
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
    },
    handleChange(value) {
        console.log(value);
      }
  }
};
</script>


