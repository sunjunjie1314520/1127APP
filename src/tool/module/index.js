
// 登录注册
import login from "./login";

// 任务派发
import task from "./task";

// 项目详情
import project from "./project";
// 参建单位
import participation from "./participation";
// 合同管理
import contract from "./contract";

const api = {
    ...login,
    ...task,
    ...project,
    ...{
        participation
    },
    ...{
        contract
    }
}

console.log(api);

export default api