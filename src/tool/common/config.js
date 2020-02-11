let url_config = null

// 显示环境信息
console.log(process.env);

var serverURL = 'http://www.gczzz.cn:9990/'

if(process.env.NODE_ENV === 'development'){
    // 开发环境
	url_config = serverURL + 'api'
    
    // #ifdef H5
        url_config = 'dev/api'
    // #endif
	
}else{
    // 生产环境
    url_config = serverURL + 'api'
}

export default url_config

export { serverURL }