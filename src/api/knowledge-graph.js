import request, {Method} from "@/utils/request";

// 初始化关系图
export function initGraph() {
    return request({
        url: `/initGraph`,
        method: Method.GET,
        headers: {'Content-Type': 'application/json'},
    })
}

// 当用户点击图例时，修改展示的节点
export function changeDisplayedNodes(selected) {
    return request({
        url: `/changeDisplayedNodes`,
        method: Method.POST,
        headers: {'Content-Type': 'application/json'},
        data: { // 注意传递的数据必须为 data
            selected
        }
    })
}