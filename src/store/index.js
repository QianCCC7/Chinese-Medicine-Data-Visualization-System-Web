import { createStore } from 'vuex'

export default createStore({
    state: {
        token: localStorage.getItem('token') || '',
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
    },
    mutations: {
        // 存储 token以及存储登录用户信息，
        // mutations函数只能接受两个参数，第一个是 state，第二个是 payload，所以需要作为对象存储
        setUserStatus(state, { token, userInfo }) {
            state.token = token;
            localStorage.setItem('token', token);

            state.userInfo = userInfo;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        },
        // 移除 token以及登录用户信息
        removeUserStatus: (state) => {
            state.token = ''
            state.userInfo = {}
            localStorage.removeItem("token")
            localStorage.removeItem("userInfo")
        },
        // 更新用户信息
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        },
    },
    actions: {
    },
    modules: {
    }
})
