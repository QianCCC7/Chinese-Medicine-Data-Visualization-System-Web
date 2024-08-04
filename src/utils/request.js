import axios from 'axios';

const qs = require('qs');

const service = axios.create({
    timeout: 5000, // 请求超时时间
    // 错误写法，不需要再加上后端的ip和端口号
    // baseURL: 'http://127.0.0.1:8081/api',
    baseURL: '/api',
    // 作用示例:将参数对象 {id: 123, tags: ['a', 'b', 'c']}转换为 URL查询字符串的形式：'?id=123&tags=a&tags=b&tags=c'
    paramsSerializer: params =>
        qs.stringify(params, {
            arrayFormat: 'repeat'
        })
});

// request拦截器
service.interceptors.request.use(
    config => {
        // 如果是put/post请求，用qs.stringify序列化参数
        const isPutOrPost = config.method === 'put' || config.method === 'post'; // 判断是否为 put或 post请求
        const isJson = config.headers['Content-Type'] === 'application/json'; // 判断请求头中的 Content-Type是否为 application/json
        const isFile = config.headers['Content-Type'] === 'multipart/form-data';// 判断请求头中的 Content-Type是否为 multipart/form-data
        if (isPutOrPost && isJson) { // 将请求体序列化为 json对象
            config.data = JSON.stringify(config.data);
        }
        if (isPutOrPost && !isFile && !isJson) { // 将请求体序列化为 URL查询字符串的形式，同时设置数组参数的处理方式为重复添加到 URL查询字符串中。
            config.data = qs.stringify(config.data, {
                arrayFormat: 'repeat'
            });
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// response拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response); // 将响应对象封装成一个解析后的 Promise对象，并返回
        } else {
            return Promise.reject(response); // 将响应对象封装成一个拒绝后的 Promise对象，并返回
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 404:
                    break;
                // 其他错误，直接抛出错误提示
                default:
            }
            return Promise.reject(error.response);
        }
    }
);

export const Method = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

export default function request(options) {
    return service(options);
}
