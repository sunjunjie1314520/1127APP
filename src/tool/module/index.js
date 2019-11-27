
// 登录模块
import login from "./login";
import task from "./task";

const api = {
    ...login,
    ...task,
}

console.log(api);

export default api