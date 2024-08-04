import request, {Method, } from "@/utils/request";
import store from '@/store'

// 上传用户头像
export function uploadAvatar(file) {
    const formData = new FormData();
    formData.append('imgFile', file);

    return request({
        url: `/uploadAvatar`, // 这是相对于 baseURL 的路径
        method: Method.POST,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData
    });
}

// 用户登录
export function login(loginUserInfo) {
    return request({
        url: `/login`,
        method: Method.POST,
        headers: {'Content-Type': 'application/json'},
        data: loginUserInfo
    })
}

// 用户退出登录
export function logout() {
    return request({
        url: `logout`,
        method: Method.POST,
        headers: {"Authorization": store.state.token}
    })
}