import request from '@/tool/utils/request.js'

const config = {}

config.newTask = params => request.globalRequest('/newTask/', 'POST', params, 1)

export default config