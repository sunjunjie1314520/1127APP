import request from '@/tool/utils/request.js'

const config = {}

config.AllContract = params => request.globalRequest(`/project/${params.project_id}/contract`, 'GET', params, 1)
config.Newly = params => request.globalRequest(`/project/${params.project_id}/contract`, 'POST', params, 1)
config.Update = params => request.globalRequest(`/project/${params.project_id}/contract/${params.project_contract_id}`, 'POST', params, 1)

export default config