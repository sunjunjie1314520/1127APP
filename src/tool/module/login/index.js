import request from '@/tool/utils/request.js'

const config = {}

config.sign = params => request.globalRequest('/signin', 'POST', params, 1)
config.register = params => request.globalRequest('/register', 'POST', params, 1)
config.getcode = params => request.globalRequest(`/code?phone=${params.phone}`, 'GET', params, 1)

export default config