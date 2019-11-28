import Vue from 'vue'
import App from './App'

// 引用
import request from './tool/utils/request.js'  //请求配置
import api from './tool/module/index.js' //接口入口
import url from './tool/common/config.js' //接口地址配置

// 注册组件
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
Vue.component('uni-nav-bar', uniNavBar)

// 全局挂载
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

console.log('接口地址:', url)

// 全局样式
import 'static/css/style.css'
import 'static/css/app.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
