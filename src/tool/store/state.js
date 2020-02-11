import login from "./initState/login.js";
import basicSet from "./initState/basicSet.js";
import siteManage from "./initState/siteManage.js";
const state = {

    ...{
        login
    },
    ...{
        basicSet
    },
    ...{
        siteManage
    }

}

export default state