import request, {Method} from "@/utils/request";

// 获取所有的药材
export function getAllMedicineHerbs() {
    return request({
        url: `/medicine-herbs`,
        method: Method.GET,
    })
}

// 分页获取药材数据
export function getMedicineHerbsPage(pageNum, pageSize) {
    return request({
        url: `/medicine-herbs/page?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: Method.GET
    })
}