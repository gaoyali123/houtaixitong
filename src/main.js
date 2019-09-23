import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control


/**
 * 配置富文本编辑器
 */
　//引入 Froala Editor js file.
　　require('froala-editor/js/froala_editor.pkgd.min')
　　//引入中文语言包
　　require('froala-editor/js/languages/zh_cn')
　　//引入 Froala Editor css files.
　　require('froala-editor/css/froala_editor.pkgd.min.css')
　　require('font-awesome/css/font-awesome.css')
　　require('froala-editor/css/froala_style.min.css')

import jQuery from 'jquery'
　　import VueFroala from 'vue-froala-wysiwyg'
　　window.$ = jQuery
　　Vue.use(VueFroala)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
