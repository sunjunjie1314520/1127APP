
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'

console.log('%c%s', 'background-color:#3a89ff;color:#fff;', 'state => ');
console.log(state);
console.log('%c%s', 'background-color:#3a89ff;color:#fff;', 'mutations => ');
console.log(mutations);
console.log('%c%s', 'background-color:#3a89ff;color:#fff;', 'actions => ');
console.log(actions);

const store = new Vuex.Store({
    state: {
        ...state
    },
    mutations: {
        ...mutations
    },
    actions:{
        ...actions
    }
})

export default store