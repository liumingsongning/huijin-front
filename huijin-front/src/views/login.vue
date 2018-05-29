<template>

  <div>
    <h1 @click='test'>这是测试</h1>
    <div class="l-captcha" data-site-key="a61ebded8b92ba71b5272a5f60fc1be7" data-callback='getCaptchaResponse'></div>
  </div>

</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {};
  },
  mounted() {
    var SCRIPT_URL = `//captcha.luosimao.com/static/dist/api.js`;
    var scriptHeat = document.createElement("script");
    scriptHeat.type = "text/javascript";
    scriptHeat.src = SCRIPT_URL;
    scriptHeat.onload = onload;
    document.body.appendChild(scriptHeat);
    window.getCaptchaResponse = this.getCaptchaResponse;
    // this.login();
  },
  methods: {
    login() {
      this.ajax
        .post("/api/login")
        .then(response => {
          //   Cookies.set('token', response.data.token);
          this.$store.commit("login", response.data.token);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //人机验证成功返回
    getCaptchaResponse(resp) {
      this.ajax
        .post("/api/checkluosimao", { luotest_response: resp }, function(res) {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    test() {
      this.$router.push({
        name: "test"
      });
    }
    //     Cookies.set('user', this.form.userName);
    //     Cookies.set('password', this.form.password);
    //  this.$store.commit('login',response.data.token)
    //     this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
    //     if (this.form.userName === 'iview_admin') {
    //         Cookies.set('access', 0);
    //     } else {
    //         Cookies.set('access', 1);
    //     }
    //     this.$router.push({
    //         name: 'home_index'
    //     });
    // })
  }
};
</script>
