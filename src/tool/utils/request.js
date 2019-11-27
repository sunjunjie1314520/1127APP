import url_config from '../common/config.js'


const request = {}
// 头部
const headers = {'content-type':'application/x-www-form-urlencoded'}

request.globalRequest = (url, method, data, power) => {
    switch (power){
        case 1:
			const user = uni.getStorageSync('user');
			if (user) {
				headers['Authorization'] = user.cookie
			}else{
				headers['Authorization'] = '未登录'
			}
            break;
        default:
            headers['Authorization'] = '未登录'
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
		// console.log(res)
		if(res[0]){
			throw {
				msg:'请求数据出错'
			}
		}else if (res[1].statusCode == 200) {
			return res[1].data
        } 
		else{
			throw res[1]
        }
    }).catch(parmas => {
        // console.log(parmas);
        switch (parmas.statusCode) {
		    case 401:
				uni.clearStorageSync()
　　　　　　　　　break
		    case 404:
				uni.showToast({
				    title: parmas.data,
				    icon: 'none'
                })
                break
　　　　　　 default:
                console.log('error');
	　　　　　　　return Promise.reject()
　　　　　　}
　　})
 } 

export default request
