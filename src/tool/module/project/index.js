import request from '@/tool/utils/request.js'

const config = {}

config.project = params => request.globalRequest('/project', 'POST', params, 1)
config.detail = params => request.globalRequest(`/project/${params.project_id}`, 'GET', params, 1)
config.modify = params => request.globalRequest(`/project/${params.project_id}`, 'POST', params, 1)

export default config