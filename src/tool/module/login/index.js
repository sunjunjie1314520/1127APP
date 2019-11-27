import request from '@/tool/utils/request.js'

const config = {}

config.login = params => request.globalRequest('/signin', 'POST', params, 1)
config.register = params => request.globalRequest('/register', 'POST', params, 1)
config.getcode = params => request.globalRequest(`/code/phone/${params.phone}`, 'POST', params, 1)

export default config