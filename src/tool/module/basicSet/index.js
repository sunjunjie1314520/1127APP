import request from '@/tool/utils/request.js'

const config = {}

// 项目详情

config.MyProjects = params => request.globalRequest('/myprojects', 'GET', {}, 1)
config.NewProject = params => request.globalRequest('/project', 'POST', params, 1)
config.projectDetail = params => request.globalRequest(`/project/${params.project_id}`, 'GET', {}, 1)
config.projectModify = params => request.globalRequest(`/project/${params.project_id}`, 'POST', params, 1)


// 合同管理
config.allContract = params => request.globalRequest(`/project/${params.project_id}/contract`, 'GET', {}, 1)
config.newContract = params => request.globalRequest(`/project/${params.project_id}/contract`, 'POST', params, 1)

config.updateContract = params => request.globalRequest(`/project/${params.project_id}/contract/${params.project_contract_id}`, 'POST', params, 1)

// 发票管理
config.allInvoice = params => request.globalRequest(`/project/${params.project_id}/contract/${params.contract_id}/invoice`, 'GET', {}, 1)
config.newInvoice = params => request.globalRequest(`/project/${params.project_id}/contract/${params.contract_id}/invoice`, 'POST', params, 1)

config.Update = params => request.globalRequest(`/project/${params.project_id}/contract/${params.project_contract_id}`, 'POST', params, 1)

// 参建单位
config.allParticipation = params => request.globalRequest(`/project/${params.project_id}/company`, 'GET', {}, 1)
config.addParticipation = params => request.globalRequest(`/project/${params.project_id}/company`, 'POST', params, 1)
config.addGroup = params => request.globalRequest(`/project/${params.project_id}/company_group?group_name=${params.group_name}`, 'GET', params, 1)

// 人员管理
config.Person = params => request.globalRequest(`/project/${params.project_id}/person`, 'GET', {}, 1)
config.GroupName = params => request.globalRequest(`/project/${params.project_id}/person_group?group_name=${params.group_name}`, 'GET', {}, 1)
config.Invite = params => request.globalRequest(`/project/${params.project_id}/invite`, 'POST', params, 1)
config.UpdateGroupName = params => request.globalRequest(`/project/${params.project_id}/person_group/${params.group_id}?group_name=${params.group_name}`, 'GET', {}, 1)

// 移动分组
config.moveLeave = params => request.globalRequest(`/project/${params.project_id}/person/${params.project_person_id}/move/${params.project_person_group_id}`, 'GET', {}, 1)
// 离职
config.quitLeave = params => request.globalRequest(`/project/${params.project_id}/person/${params.project_person_id}/leave`, 'GET', {}, 1)
// 上岗
config.revokeLeave = params => request.globalRequest(`/project/${params.project_id}/person/${params.project_person_id}/cancel_leave`, 'GET', {}, 1)


// 搜索用户
config.searchUser = params => request.globalRequest(`/search/user?phone=${params.phone}`,'GET',{}, 1)

// 项目移交
config.Transfer = params => request.globalRequest(`/project/${params.project_id}/transfer/${params.to_user_id}`, 'GET', {}, 1)

// 权限设置
    // # 更新人员权限
    config.UpdateSee = params => request.globalRequest(`/project/${params.project_id}/person/${params.project_person_id}/permission/${params.project_person_permission_id}?permission_level=${params.permission_level}
    `, 'GET', {}, 1)



export default config