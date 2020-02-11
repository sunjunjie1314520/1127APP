import $api from '../module/index.js' //接口入口
var config = {}

// 设置登录状态
config.signToggle = (state, pyload) => {
    state.login.loginStatus = pyload
}


export default config