import Vue from 'vue'
import App from './App'

// 引用
import api from './tool/module/index.js' //接口入口
import url from './tool/common/config.js' //接口地址配置

import store from './tool/store'
import assist from './tool/utils/play.js'

// 注册组件
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
import uniFooter from "@/components/uni-footer/uni-footer.vue";
import uniPartialRefresh from "@/components/type-compon/PartialRefresh.vue";
Vue.component('uni-nav-bar', uniNavBar)
Vue.component('uni-footer', uniFooter)
Vue.component('uni-refresh', uniPartialRefresh)

// 全局挂载
Vue.prototype.$api = api
Vue.prototype.$url = url
Vue.prototype.$store = store
Vue.prototype.$assist = assist

// debug
console.log('接口地址:', url)

// 全局样式
import 'static/css/style.css'
import 'static/css/app.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
