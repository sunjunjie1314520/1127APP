import request from '@/tool/utils/request.js'

const config = {}

config.add = params => request.globalRequest(`/project/${params.project_id}/company`, 'POST', params, 1)

export default config