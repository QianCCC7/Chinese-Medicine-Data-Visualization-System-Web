import request, {Method} from "@/utils/request";

export function getAllPrescription() {
    return request({
        url: `/prescription`,
        method: Method.GET,
    })
}