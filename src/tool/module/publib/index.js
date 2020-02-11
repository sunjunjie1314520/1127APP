import request from '@/tool/utils/request.js'

const config = {}

config.uploadFile = (params = {}) => request.globalChooseImage(`/upload`, params, 1)

export default config