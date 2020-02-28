import $api from '../module/index.js' //接口入口
var config = {}

// 设置登录状态
config.signToggle = (state, pyload) => {
    state.login.loginStatus = pyload
}

config.set_projects = (state, pyload) => {
    state.basicSet.projects = pyload
    state.basicSet.projects_status = true
}

config.my_projects_move = (state, pyload) => {
    state.basicSet.projects[pyload.data].forEach((item)=>{
        item.move_x_resut = '0upx'
        item.isopen = 0
    })
    if (pyload.all){
        state.basicSet.projects[pyload.data][pyload.index]['move_x_resut'] = pyload.move
        state.basicSet.projects[pyload.data][pyload.index]['isopen'] = pyload.open
    }
}

config.set_participation = (state, pyload) => {
    state.basicSet.participation = pyload
}

export default config