<template>
  <div style="padding: 50px">
    <div class="content">
      <div class="title">
        标题:
      </div>
      <div class="input_right">
        <el-input class="serch" placeholder="请输入内容"></el-input>
      </div>

    </div>
    <div class="content">
      <div class="title">
        发布单位:
      </div>
      <div class="input_right">
        <el-input class="serch" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="content">
      <div class="title">
        行业政策分类编号:
      </div>
      <div class="input_right">
        <el-input class="serch" placeholder="请输入内容"></el-input>
      </div>

    </div>
    <div class="warp">
      <span class="int">正文:</span>
      <div class="con">
        <Editor ref="froalaEditor" @on-change="changeContent" v-model="formData.content"></Editor>
      </div>
    </div>
    <div class="content">
      <div class="title">
        关键字:
      </div>
      <div class="input_right">
        <el-input class="serch" placeholder="请输入内容"></el-input>
      </div>

    </div>
    <div class="content">
      <div class="title">
        是否为转载:
      </div>
      <div class="input_right">
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
        </div>

    </div>
    <div class="content">
      <div class="title">
        转载日期:
      </div>
      <div class="input_right">
        <el-input class="serch" placeholder="请输入内容"></el-input>
      </div>

    </div>
    <div class="content">
      <div class="title">
        转载来源:
      </div>
      <div class="input_right">
        <el-input class="serch" placeholder="请输入内容"></el-input>
      </div>

    </div>
    <div class="content">
      <div class="title">
        公告类型:
      </div>
      <div class="input_right">
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div>
    </div>
    <div>
     
    </div>
  </div>
</template>

<script>
import Editor from '../../../components/editor/editor'
  export default {
    name: 'zhengcewenjiandetail',
    data() {
      return {
        radio: '1',
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
        }
        ],
        content:'',
        editorOption:{},
        selectedOptions:'',
        formData:{}
      }
    },
    methods:{
      onEditorBlur(editor){//失去焦点

      },
      onEditorFocus(editor){
        //获得焦点
      },
      onEditorChange({editor,html,text}){
        console.log(this.content)
      },
      handleChange(){},
      init () {

        this.$nextTick(()=>{

        console.log(this.formData.content)

        this.$refs.froalaEditor.setHtml(this.formData.content)

        })


    },

    changeContent (html) {

      this.formData.content = html

      // console.log(html)

    },
    },
    components:{
      Editor
    }
  }
</script>

<style scoped lang="less">
  .content {
    height: 40px;
    line-height: 40px;

    .title {
      font-size: 18px;
    }

    div {
      float: left;
      margin-right: 50px;
    }

    .input_right {
      width: 30%;
    }
  }
  .warp{
    .int{
      height: 40px;
      line-height: 40px;
      float: left;
    }
    .con{
      height: 1000px;
    }
  }
</style>
