import Cookies from 'js-cookie';

const user = {
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        login (state, data,user) {
            // localStorage.token = data;
            Cookies.set('token', data);
            Cookies.set('user', user);
            state.user=user
            state.token = data;
       
        },
        logout (state, vm) {
            // Cookies.remove('user');
            // Cookies.remove('password');
            // Cookies.remove('access');
            Cookies.remove('token');
            Cookies.remove('user');
            state.token = null;
            state.user = null;
            // 恢复默认样式
            // let themeLink = document.querySelector('link[name="theme"]');
            // themeLink.setAttribute('href', '');
            // // 清空打开的页面等数据，但是保存主题数据
            // let theme = '';
            // if (localStorage.theme) {
            //     theme = localStorage.theme;
            // }
            localStorage.clear();
            // if (theme) {
            //     localStorage.theme = theme;
            // }
        }
    }
};

export default user;
