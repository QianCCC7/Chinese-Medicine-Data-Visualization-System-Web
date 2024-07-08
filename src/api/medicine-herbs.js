import request, {Method} from "@/utils/request";

// 获取所有的药材
export function getAllMedicineHerbs() {
    return request({
        url: `/medicine-herbs`,
        method: Method.GET,
    })
}