const routers = [
	{
		path: '/wineclass',
	    meta: {
	        title: '酒品分类'
	    },
	    component: (resolve) => require(['../views/wineclass.vue'], resolve)
	},
	{
		path: '/personal',
	    meta: {
	        title: '个人主页'
	    },
	    component: (resolve) => require(['../views/personal.vue'], resolve)
	},
	
	{
		path: '/mall',
	    meta: {
	        title: '商城首页'
	    },
	    component: (resolve) => require(['../views/mall.vue'], resolve)
	},
	{
    path: '/detail',
    name:'good_detail',
    meta: {
        title: '商品详情'
    },
    component: (resolve) => require(['../views/detail.vue'], resolve)
	},
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
        name:'home',
        meta: {
            title: ''
        },
        component: (resolve) => require(['../views/index.vue'], resolve)
    },
   
];
export default routers;