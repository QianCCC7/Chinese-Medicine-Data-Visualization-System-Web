import request, {Method} from "@/utils/request";

export function test() {
    return request({
        url: `/test`,
        method: Method.GET,
        headers: {'Content-Type': 'application/json'},
    })
}