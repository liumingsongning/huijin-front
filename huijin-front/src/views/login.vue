<template>
<div class="layout">
       <Layout>
       		<!--头部-->
       		<Header class="header">
       			<Row>
       				<Col span="3" offset="1">
						<img src="http://p8htjuaac.bkt.clouddn.com/805351264090795932.png"  class="logo"/>
					</Col>
					<Col span="2" offset="1" style="font-size: 23px;margin-top: 30px;">
						欢迎登录
					</Col>
					<Col span="17"></Col>
       			</Row>
       		</Header>

       		<!--内容-->
       		<!--<Content class="content">-->
       		<div class="content">
       			<Row>
					<Col span="6" offset="9" class="loginPage">
						
						<Row>
							<Col span="6" offset="9" class="account_login">
								账号登录
							</Col>
							<Col span="9">&nbsp;</Col>
						</Row>
						<!--手机号-->
						<Row style="margin-top: 28px;">
							<Col span="3" offset="1" >
								<!--<Input class="user" clearable>
								</Input>-->
								<!--<input type="text" class="phone" />-->
								<button type="button" class="personal"></button>
							</Col>
							<Col span="17">
								<!--<Input  clearable style="width: 100%;" v-model="user"></Input>-->
								<input type="text" class="phone" placeholder="请输入手机号码" v-model="userName"/>
							</Col>
							<Col span="2">
								<button type="button" class="delete"></button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
						<!--密码-->
						<Row style="margin-top: 20px;">
							<Col span="3" offset="1" >
								<button type="button" class="pwd"></button>
							</Col>
							<Col span="17">
								<input type="password" class="phone" placeholder="密码" v-model="password"/>
							</Col>
							<Col span="2">
								<button type="button" class="delete"></button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
						<!--忘记密码-->
						<Row>
							<Col span="4" offset="19">
								<button type="button" class="forget">
									忘记密码
								</button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
						<!--登录按钮-->
						<Row>
							<Col span="22" offset="1">
								<button type="button" class="login" @click="login">
									登录
								</button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
						
						<!--QQ以及微信-->
						<Row>
							<Col span="22" offset="1" style="margin-top: 30px;">
								<Row>
									<Col span="3">
										<img src="../images/qq.png" style="vertical-align: middle;"/>QQ
									</Col>
									<Col span="4" offset="2">
										<img src="../images/微信.png" style="vertical-align: middle;"/>微信
									</Col>
									<Col span="5" offset="10">
										<button type="button" class="reg">立即注册</button>
									</Col>
								</Row>
								
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
					</Col>
					<Col span="9">&nbsp;</Col>
       			</Row>
       		</div>
       		<!--</Content>-->
       
       		<!--脚部-->
       		<Footer class="footer">
       			<!--<div class="footer">-->
       				<Row>
						<Col span="14" offset="5">
			       			<ul>
			       				<li><a href="">关于我们&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;联系我们&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;人才招聘&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;商家入驻&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;广告服务&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;手机京东&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;友情链接&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;销售联盟&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;京东社区&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;京东公益&nbsp;&nbsp;</a></li>
			       				<li><a href="">&nbsp;&nbsp;English Site</a></li>
			       			</ul>
						</Col>
						<Col span="5">&nbsp;</Col>
       				</Row>
       				<Row>
       					<Col span="6" offset="10" style="margin-top: -15px;">
       						Copyright&copy;2004-2018 京东JD.com版权所有
       						
       					</Col>
						<Col span="8">&nbsp;</Col>
       					
       				</Row>
       			<!--</div>-->
       		</Footer>
       		
       </Layout>
       
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
