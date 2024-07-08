import request, {Method} from "@/utils/request";

// 获取所有菜单
export function getAllMenus() {
    return request({
        url: `/menu`,
        method: Method.GET,
    })
}