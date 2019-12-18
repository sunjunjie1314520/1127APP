import url_config from '../common/config.js'

const request = {}
// 头部
const headers = {}

request.globalRequest = (url, method, data, power) => {
    switch (power){
        case 1:
            const user = uni.getStorageSync('user');
            console.log(user);
			if (user) {
				headers['Authorization'] = user.cookie
			}else{
				headers['Authorization'] = '...'
			}
            break;
        default:
            headers['Authorization'] = 'no'
            break;
    }
    return uni.request({
		url: url_config + url,
		method,
		data: JSON.stringify(data),
		dataType: 'json',
		header: headers
	})
	.then(res => {
        // console.log(res);
		if(res[0]){
            throw { statusCode : 500 }
		}else if (res[1].statusCode == 200) {
			return res[1].data
        } 
		else{
			throw res[1]
        }
    })
    .catch(parmas => {
        switch (parmas.statusCode) {
		    case 401:
				uni.clearStorageSync()
　　　　　　　　　break
		    case 404:
				uni.showToast({
				    title: '404 : No Found',
				    icon: 'none'
                })
                break
            case 500:
                uni.showToast({
                    title: '网络接口数据异常',
                    icon: 'none'
                })
　　　　　　 default:
                return Promise.reject()
        }
　　})
 } 

export default request
