const routers = [
    {
        path: '/test',
        name:'test',
        meta: {
            title: ''
        },
        component: (resolve) => require(['../views/test.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: 'Login - 登录'
        },
        component: (resolve) => require(['../views/login.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['../views/index.vue'], resolve)
    },
   
];
export default routers;