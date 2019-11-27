let url_config = ""

// 显示环境信息
console.log(process.env);

if(process.env.NODE_ENV === 'development'){
    // 开发环境
	url_config = 'http://49.70.249.49:23957/api'
    
    // #ifdef H5
        url_config = 'dev/api'
    // #endif
	
}else{
    // 生产环境
    url_config = 'http://49.70.249.49:23957/api'
}

export default url_config
