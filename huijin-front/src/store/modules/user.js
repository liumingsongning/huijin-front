import Cookies from 'js-cookie';

const user = {
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        login (state, data) {
            // localStorage.token = data;
          
            Cookies.set('token', data);
            state.token = data;
       
        },
        logout (state, vm) {
            // Cookies.remove('user');
            // Cookies.remove('password');
            // Cookies.remove('access');
            Cookies.remove('token');
            state.token = null;
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
