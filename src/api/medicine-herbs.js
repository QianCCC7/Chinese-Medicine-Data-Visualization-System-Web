import request, {Method} from "@/utils/request";

export function getAllMedicineHerbs() {
    return request({
        url: `/medicine-herbs`,
        method: Method.GET,
    })
}