import url_config from '../common/config.js'

const request = {}
// 头部
const headers = {}

request.globalRequest = (url, method, data, power) => {
    switch (power){
        case 1:
            const user = uni.getStorageSync('user');
			if (user) {
				headers['Authorization'] = user.cookie
			}else{
                headers['Authorization'] = '...'
			}
            break;
        default:
            headers['Authorization'] = 'Need to log in'
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

request.globalChooseImage = (url, data = {}, power) => {
    switch (power) {
        case 1:
            const user = uni.getStorageSync('user');
            if (user) {
                headers['Authorization'] = user.cookie
            } else {
                headers['Authorization'] = '...'
            }
            break;
        default:
            headers['Authorization'] = 'Need to log in'
            break;
    }


    return new Promise((resolve) => {
        uni.chooseImage({
            success: (chooseImageRes) => {
                const tempFilePaths = chooseImageRes.tempFilePaths;
                uni.showLoading({
                    title: '上传中',
                    mask: true
                })
                uni.uploadFile({
                    url: url_config + url,
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: data,
                    header: headers,
                    success: (uploadFileRes) => {
                        let data = JSON.parse(uploadFileRes.data)
                        if(data.code){
                            uni.showToast({
                                "title": '上传成功',
                            })
                        }else{
                            uni.showToast({
                                "title": '文件名重复',
                            })
                        }

                        resolve(data)
                    },
                });
            },
            error:function(){
                console.log('select imgage error ~~~');
            }
        });

    })
    
}

export default request
