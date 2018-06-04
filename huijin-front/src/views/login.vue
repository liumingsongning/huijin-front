<template>
<div class="layout">
       <Layout>
       		<!--头部-->
       		<Header class="header">
       			<Row>
       				<Col span="3" offset="1">
						<img src="http://static.huijinjiu.com/805351264090795932.png"  class="logo"/>
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
						<Row style="border-bottom:2px solid #bfbfbf;height:49px">
							<Col span="18" offset="3">
								<ul>
									<Col span="12" >
										<li @click="phone_login" class="phone_login">
											<!-- {{phone_login1}} -->
											手机登录
										</li>
										
									</Col>
									<Col span="12" >
										<li @click="account_login" class="account_login">
											<!-- {{account_login1}} -->
											账户登录
										</li>
									</Col>
								</ul>

							</Col>
							<Col span="3">&nbsp;</Col>
							
						</Row>
						<!--手机号-->
						<Row style="margin-top: 28px;" >
							<Col span="3" offset="1" >
								<button type="button" class="personal"></button>
							</Col>
							<Col span="17">
								<input type="text" class="phone" placeholder="请输入手机号码" v-model="phone"/>
							</Col>
							<Col span="2">
								<button type="button" class="delete"></button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
						<Row v-show="phone.length==11">
							<div class="l-captcha" data-site-key="a61ebded8b92ba71b5272a5f60fc1be7" data-callback='getCaptchaResponse'></div>
						</Row>
						<!-- <Row v-show="codeShow0">
							<Col span="12" offset="6">
								<div>验证码已发送，{{time}}s后重新发送</div>
							</Col>
							<Col span="6">&nbsp;</Col>
						</Row> -->
						<Row style="margin-top:20px" v-show="codeShow0">
							<Col span="6" offset="1" >
								<button type="button" style="outline:none;border:1px solid #a6a6a6;height:40px;background:transparent;border-right:none;width:100%">手机验证码</button>
							</Col>
							<Col span="9">
								<input type="text" placeholder="输入手机验证码" style="text-align:center;height:40px;width:100%;outline:none;border:1px solid #a6a6a6;border-left:none;">
							</Col>
							<Col span="7">
								<button type="button" style="height:40px;width:100%;background:transparent;outline:none;border:1px solid #a6a6a6;border-left:none">{{time}}s后重新获取</button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>
						 
						<!--密码-->
						<Row style="margin-top: 15px;" v-show="codeShow2">
							<Col span="3" offset="1" >
								<button type="button" class="pwd"></button>
							</Col>
							<Col span="17">
								<input type="password" class="phone" placeholder="请输入密码" v-model="code"/>
							</Col>
							<Col span="2">
								<button type="button" class="delete"></button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row>

						<!--忘记密码-->
						<!-- <Row>
							<Col span="4" offset="19">
								<button type="button" class="forget">
									忘记密码
								</button>
							</Col>
							<Col span="1">&nbsp;</Col>
						</Row> -->
						<!--登录按钮-->
						<Row>
							<Col span="22" offset="1"> 
							<!-- v-show="code.length==4" -->
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
										<div>
											<img src="../static.huijinjiu.com/login/qq.png" style="vertical-align: middle;"/>QQ
										</div>
									</Col>
									<Col span="4" offset="2">
										<div>
											<img src="../static.huijinjiu.com/login/wchat.png" style="vertical-align: middle;"/>微信
										</div>
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
       
    
       
   </div>



</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
		phone:'',
		code:'',
		codeShow0:true,
		codeShow1:true,
		codeShow2:false,
		time:60,
	};
  },	
  mounted() {
    var SCRIPT_URL = `//captcha.luosimao.com/static/dist/api.js`;
    var scriptHeat = document.createElement("script");
    scriptHeat.type = "text/javascript";
    scriptHeat.src = SCRIPT_URL;
    scriptHeat.onload = onload;
    document.body.appendChild(scriptHeat);
	window.getCaptchaResponse = this.getCaptchaResponse;
	
  },
  methods: {
	phone_login () {
		this.codeShow0 = true
		this.codeShow2 = false
		
	},
	account_login () {
		this.codeShow0 = false		
		this.codeShow1 = false		
		this.codeShow2 = true
	},
    login() {
		var self=this
      this.ajax
        .post("/api/login",{
                phone:self.phone,code: self.code
            })
        .then(response => {
          this.$store.commit("login", response.data.token);
        })
        .catch(error => {
           if(error.status_code==403){
				alert(error.message);
				LUOCAPTCHA.reset()
			}
        });
    },
    //人机验证成功返回
    getCaptchaResponse(resp) {
		var self=this;
		 this.ajax.post('/api/sendcode', {
                phone:self.phone,captcha: resp
            }).then(function (response) {
				self.Interval();
			   	self.codeShow=true;
            }).catch(function (error) {
                if(error.status_code==400){
					alert(error.message);
					LUOCAPTCHA.reset()
				}
            })
    },
    test() {
      this.$router.push({
        name: "test"
      });
    },
	Interval(){
		var self=this;
		var fun=function(){
			self.time--;
			if(self.time==0){
				clearInterval(interval);
				self.time=60;
				LUOCAPTCHA.reset()                                            
			}
		}
		var interval=setInterval(fun, 1000);
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
<style scoped>
	.ivu-layout {
		width: 100%;
		height: 100%;
		background:  url(http://static.huijinjiu.com/467763290700598377.png) no-repeat;
		background-size: 100% 918px;
	}
	/*头部*/
	.header {
		width: 100%;
		height: 120px;
		background-color: transparent;
	}
	.header .logo {
		margin-top: 32px;
	}
	/*内容*/
	.content {
		width: 100%;
		height: 648px;
		background: url(http://static.huijinjiu.com/9919146688478019.png) no-repeat;
		background-size: 100% 648px;
		
	}
	.content ul li{
		list-style: none;
		cursor: pointer;
	}
	/* .content ul li:hover{
		color: red
	} */
	.content .loginPage {
		height: 340px;
		background-color: #ffffff;
		margin-top: 76px;
	}
	/* 手机登录 */
	.content .phone_login {
		text-align: center;
		font-size: 18px;
		/* color: #ff6f6e; */
		margin-top: 12px;
		border-right: 2px solid #a6a6a6
	}
	/* 账户登录 */
	.content .account_login{
		font-size: 18px;
		margin-top: 12px;
		text-align: center;
		
	}
	.content .personal {
		width: 100%;
		height: 40px;
		border: 1px solid #a6a6a6;
		background: url(../static.huijinjiu.com/login/people.png) no-repeat center;
		background-color: #f3f3f3;
		outline: none;
	}
	.content .phone{
		width: 100%;
		height: 40px;
		border: 1px solid #a6a6a6;
		border-left: 0;
		border-right: 0;
		outline: none;
		text-indent: 1em;
		font-size: 14px;
	}
	.content .delete{
		width: 100%;
		height: 40px;
		background: url(../static.huijinjiu.com/login/delete.png) no-repeat center;
		outline: none;
		border: 1px solid #a6a6a6;
		border-left: none;
		
	}
	.content .pwd {
		width: 100%;
		height: 40px;
		border: 1px solid #a6a6a6;
		background: url(../static.huijinjiu.com/login/pwd.png) no-repeat center;
		background-color: #f3f3f3;
		outline: none;
		/*background-size: 100% 40px;*/
	}
	.content .forget{
		width: 100%;
		font-size: 12px;
		margin-top: 23px;
		border: none;
		outline: none;
		background-color: transparent;
	}

	.content .clickVerify{
		width: 100%;
		height: 40px;
		border-radius: 0;
		border: 1px solid #a6a6a6;
		outline:0;
		font-size: 14px;
		background-color: white;
		margin-top: 40px
	}
	.content .login{
		width: 100%;
		height: 40px;
		border: 1px solid #ff3430;
		outline: none;
		background-color: #fe706e;
		font-size: 19px;
		color: white;
		margin-top: 26px;
		letter-spacing: 10px
	}
	.content .reg{
		width: 100%;
		font-size: 12px;
		border: none;
		outline: none;
		background-color: transparent;
		color: red
		
	}
	
	/*脚部*/
	.footer{
		width: 100%;
		height: 40px;
		background: transparent;
		margin-top: 22px;
	}
	.footer ul{
		margin-top: -20px;
	}
	.footer ul li{
		list-style: none;
		float: left;
		border-right: 3px solid #8f618f;
		font-size: 12px;
		text-align: center;
	}
	.footer ul li:last-child{
		border-right: none;
	}
	.footer ul li a{
		color: #626262;
	}
	
	@media screen and (min-width: 1920px) {
		.footer ul{
			letter-spacing: 3px;
		}
		.phone_login{
			letter-spacing: 10px;
		}
	}
	@media screen and (min-width: 1366px) {
		.phone_login{
			letter-spacing: 2px;
		}
	}
	.active{
		color: red
	}
</style>
