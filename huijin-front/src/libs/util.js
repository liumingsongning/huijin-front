import axios from 'axios';
import env from '../config/env';
import store from '../store/index';
import {router} from '../router/index';
import qs from 'qs';
import Cookies from 'js-cookie';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : '汇金酒庄';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://api.huijinjiu.com' :
    env === 'production' ?
    'http://api.huijinjiu.com' :
    'https://debug.url.com';

var ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {
        'Accept': 'application/vnd.huijin.v1+json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
});
// http request 拦截器
ajax.interceptors.request.use(
    config => {
        if ( Cookies.get('token')) {
            config.headers.authorization = `Bearer ${Cookies.get('token')}`;
        }
        if (config.method=="post"){
            config.data = qs.stringify(config.data);
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
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
                    // store.commit('logout');
                 
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

util.ajax=ajax; 

export default util;