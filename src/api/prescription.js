import request, {Method} from "@/utils/request";

// 获取所有的方剂
export function getAllPrescription() {
    return request({
        url: `/prescription`,
        method: Method.GET,
    })
}

// 分页获取方剂数据
export function getPrescriptionPage(pageNum, pageSize) {
    return request({
        url: `/prescription/page?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: Method.GET
    })
}