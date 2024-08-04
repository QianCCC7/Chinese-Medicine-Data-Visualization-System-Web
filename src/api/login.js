import request, {Method, } from "@/utils/request";

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