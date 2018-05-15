import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

var ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});
// http request 拦截器
ajax.interceptors.request.use(
    config => {
        if (store.state.user.token) {
            config.headers.authorization = `Bearer ${store.state.user.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
// http response 拦截器
ajax.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit('logout');
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

util.ajax=ajax; 

export default util;