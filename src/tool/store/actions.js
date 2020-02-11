import $api from '../module/index.js' //接口入口
var config = {}

// uni.setStorageSync('home',res.data)


// 首页
config['UpdataHome'] = (state,pyload) =>{
    $api.st.getBaseInfo()
    .then(res=>{
        state.home = res.data 
    })
}


export default config