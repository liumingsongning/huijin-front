const routers = [
    {
		path: '/submitorder',
		name: 'submitorder',
	    meta: {
	        title: '提交订单'
	    },
	    component: (resolve) => require(['../views/submitorder.vue'], resolve)
	},
    {
		path: '/shopcart',
		name: 'shopcart',
	    meta: {
	        title: '购物车'
	    },
	    component: (resolve) => require(['../views/shopcart.vue'], resolve)
	},
	{
		path: '/wineclass',
		name: 'wineclass',
	    meta: {
	        title: '酒品分类'
	    },
	    component: (resolve) => require(['../views/wineclass.vue'], resolve)
    },
    {
		path: '/personaldata',
		name: 'personaldata',
	    meta: {
	        title: '个人资料'
	    },
	    component: (resolve) => require(['../views/personaldata.vue'], resolve)
    },
	{
		path: '/personal',
		name: 'personal',
	    meta: {
	        title: '个人主页'
	    },
	    component: (resolve) => require(['../views/personal.vue'], resolve)
    },
	{
		path: '/mall',
		name:"mall",
	    meta: {
	        title: '商城首页'
	    },
	    component: (resolve) => require(['../views/mall.vue'], resolve)
	},
	{
    path: '/detail',
    name:'detail',
    meta: {
        title: '商品详情'
    },
    component: (resolve) => require(['../views/detail.vue'], resolve)
	},
    {
        path: '/test',
        name:'test',
        meta: {
            title: '订单'
        },
        component: (resolve) => require(['../views/test.vue'], resolve)
    },
    {
		path: '/login',
		name:"login",
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
    {
        path: '/bind',
        name:'bind',
        meta: {
            title: '绑定手机号'
        },
        component: (resolve) => require(['../views/bind.vue'], resolve)
    },
   
];
export default routers;