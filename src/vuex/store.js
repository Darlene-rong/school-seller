//引入vue和vuex，初始化对象
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
    count: 0
}
const getters = {
    add(state) {
        return state.count;
    }
}
const store = new Vuex.Store({
    state,getters
})

export default store