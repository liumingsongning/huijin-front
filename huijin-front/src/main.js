import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import store from './store';
import {router} from './router/index';
import iviewArea from 'iview-area';
import Cookies from 'js-cookie';

Vue.use(iviewArea)
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
// const RouterConfig = {
//     mode: 'history',
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     Util.title(to.meta.title);
//     next();
// });

// router.afterEach(() => {
//     iView.LoadingBar.finish();
//     window.scrollTo(0, 0);
// });


Vue.prototype.ajax=Util.ajax;


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted () {
        var user=Cookies.getJSON('user');
        if(user&&Object.keys(user).length>0&&Object.keys(this.$store.state.user.userinfo).length===0){
            this.$store.commit(
                "synStore",
                user,
              );
        };
    }
});