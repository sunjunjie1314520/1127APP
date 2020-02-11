
// 登录注册
import login from "./login";

// 基本设置
import basicSet from "./basicSet";

// 任务派发
import task from "./task";

// 上传图片
import publib from "./publib";


const api = {
    ...{
        login
    },
    ...{
        basicSet
    },
    ...{
        task
    },
    ...{
        publib
    },
}

console.log(api);

export default api