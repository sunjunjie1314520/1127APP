import $api from '../module/index.js' //接口入口
var config = {}


// 项目管理
config.projects = (context, pyload) => {
    $api.basicSet.MyProjects()
    .then(res => {
        uni.hideLoading()
        let data = {}
        const { my_projects, join_projects } = res.data
        my_projects.forEach((item)=>{
            item['move_x_resut'] = '0upx'
            item['isopen'] = 0
        })
        join_projects.forEach((item) => {
            item['move_x_resut'] = '0upx'
            item['isopen'] = 0
        })
        data.my_projects = my_projects
        data.join_projects = join_projects
        context.commit('set_projects', data)
    })
}

config.participationAction = ({commit}, pyload) => {
    $api.basicSet.allParticipation(pyload)
    .then(res => {
        commit('set_participation',res.data.project_company_groups)
    })
}
    
export default config