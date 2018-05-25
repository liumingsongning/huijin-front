<template>

   <div>
       <h1 @click='test'>这是测试</h1>
   </div>

</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {};
  },
  mounted() {
    
     this.login(); 
  },
  methods: {
    login() {
       
      this.ajax
        .post("/api/login")
        .then(response => {

        //   Cookies.set('token', response.data.token);
          this.$store.commit('login',response.data.token)
        })
        .catch(error => {
            console.log(error)
        });
    },
    test(){
       this.$router.push({
                name: 'test'
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
