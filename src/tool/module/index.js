
// 登录模块
import login from "./login";
import task from "./task";
import project from "./project";

const api = {
    ...login,
    ...task,
    ...project,
}

console.log(api);

export default api