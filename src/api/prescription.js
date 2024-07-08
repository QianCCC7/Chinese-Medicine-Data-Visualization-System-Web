import request, {Method} from "@/utils/request";

// 获取所有的方剂
export function getAllPrescription() {
    return request({
        url: `/prescription`,
        method: Method.GET,
    })
}