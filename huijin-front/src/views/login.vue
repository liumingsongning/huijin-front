<template>
  <div>
    <Layout class="layout">
      <!--头部-->
      <Header class="header">
        <Row>
          <Col span="3" offset="1">
          <img src="http://static.huijinjiu.com/805351264090795932.png" class="logo" />
          </Col>
          <Col span="2" offset="1" style="font-size: 23px;margin-top: 30px;"> 欢迎登录
          </Col>
          <Col span="17"></Col>
        </Row>
      </Header>

      <!--内容-->
      <div class="content">
        <Row>
          <Col span="6" offset="9">
          <Card style="width:100%;margin-top:76px">
            <Row style="border-bottom:2px solid #bfbfbf;height:49px">
              <Col span="18" offset="3">
              <ul>
                <Col span="12">
                <li @click="phone_login_d=!phone_login_d" class="phone_login">
                  手机登录
                </li>

                </Col>
                <Col span="12">
                <li @click="phone_login_d=!phone_login_d" class="account_login">
                  账户登录
                </li>
                </Col>
              </ul>
              </Col>
              <Col span="3">&nbsp;</Col>
            </Row>
            <!-- 手机登录 -->
            <div v-show='phone_login_d'>
              <!--手机号-->
              <!-- <Row style="margin-top: 28px;">
                <Col span="3" offset="1">
                <button type="button" class="personal"></button>
                </Col>
                <Col span="17">
                <input type="text" class="phone" placeholder="请输入手机号码" v-model="phone_d" />
                </Col>
                <Col span="2">
                <button type="button" class="delete"></button>
                </Col>
                <Col span="1">&nbsp;</Col>
              </Row> -->
              <Form>
                <Row>
                    <Col span="22" offset="1">
                      <FormItem>
                        <Input type="text"  placeholder="请输入手机号码" class="phone" v-model="phone_d" clearable size="large">
                            <Icon type="iphone" slot="prepend"></Icon>
                        </Input>
                      </FormItem>
                    </Col>
                    <Col span="1">&nbsp;</Col>
                </Row>
                
              </Form>
              <Row v-show="phone_d.length==11" style="margin:0 4%;margin-top:10px;">

                <div class="l-captcha" data-site-key="a61ebded8b92ba71b5272a5f60fc1be7" data-callback='getCaptchaResponse'></div>

              </Row>

              <Row>
                <Col span="6" offset="1">
                <button type="button" style="outline:none;border:1px solid #e9e9e9;height:36px;background:transparent;border-right:none;width:100%;border-top-left-radius:4px;border-bottom-left-radius:4px;font-size:12px">手机验证码</button>
                </Col>
                <Col span="9">
                <input type="text" v-model="code_d" placeholder="输入手机验证码" style="text-align:center;height:36px;width:100%;outline:none;border:1px solid #e9e9e9;border-left:none;font-size:12px">
                </Col>
                <Col span="7">
                <button v-show='!checked_d' type="button" style="height:36px;width:100%;outline:none;border:1px solid #e9e9e9;border-left:none;border-top-right-radius:4px;border-bottom-right-radius:4px;font-size:12px" @click='send_code_m'>发送验证码</button>
                <button v-show='checked_d' type="button" style="height:36px;width:100%;outline:none;border:1px solid #e9e9e9;border-left:none;border-top-right-radius:4px;border-bottom-right-radius:4px;font-size:12px">{{time_d}}s后重新获取</button>
                </Col>
                <Col span="1">&nbsp;</Col>
              </Row>

              <Row>
                <Col span="22" offset="1">
                <Button type="button" class="login" @click="phone_login_m">
                  登录
                </Button>
                </Col>
                <Col span="1">&nbsp;</Col>
              </Row>

            </div>
            <!-- 账号登录 -->
            <div v-show='!phone_login_d'>
              <Form>
                <!-- 账号 -->
                  <Row style="margin-top: 28px">
                      <Col span="22" offset="1">
                             <FormItem>
                                <Input type="text" placeholder="请输入账号" v-model="phone_d" clearable   size="large">
                                   <!-- <Icon type="person" slot="prepend"></Icon> -->
                                  <Icon type="person" slot="prepend" ></Icon>
                                   
                                </Input>
                            </FormItem>
                      </Col>
                      <Col span="1">&nbsp;</Col>
                  </Row>
                  <!-- 密码 -->
                  <Row>
                      <Col span="22" offset="1">
                             <FormItem>
                                <Input type="password"  placeholder="请输入密码" v-model="password_d" clearable size="large">
                                    <Icon type="locked" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                      </Col>
                      <Col span="1">&nbsp;</Col>
                  </Row>
                  <!-- 登录 -->
                  <Row>
                    <Col span="22" offset="1">
                      <FormItem>
                        <Button  class="login1" @click="account_login_m">
                          登录
                        </Button>
                      </FormItem>
                    </Col>
                    <Col span="1">&nbsp;</Col>
                </Row>
              </Form>
              
              
              <Row >
                <Col span="4">
                <div>
                  <img src="../static.huijinjiu.com/login/qq.png" style="vertical-align: middle;" />QQ
                </div>
                </Col>
                <Col span="4" offset="2">
                <div>
                  <img src="../static.huijinjiu.com/login/wchat.png" style="vertical-align: middle;" />微信
                </div>
                </Col>
                <Col span="5" offset="9">
                <button type="button" class="reg">立即注册</button>
                </Col>
              </Row>

            </div>

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
          </Card>
          </Col>
        <Col span="9">&nbsp;</Col>
        </Row>
      </div>
     

      <!--脚部-->
      <Footer class="footer">
        <Row>
          <Col span="14" offset="5">
          <ul>
            <li>
              <a href="">关于我们&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;联系我们&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;人才招聘&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;商家入驻&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;广告服务&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;手机京东&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;友情链接&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;销售联盟&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;京东社区&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;京东公益&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;English Site</a>
            </li>
          </ul>
          </Col>
          <Col span="5">&nbsp;</Col>
        </Row>
        <Row>
          <Col span="6" offset="10" style="margin-top: -15px;"> Copyright&copy;2004-2018 京东JD.com版权所有

          </Col>
          <Col span="8">&nbsp;</Col>
        </Row>
      </Footer>

    </Layout>

  </div>

</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      phone_d: "",
      code_d: "",
      password_d: "",
      time_d: 60,
      phone_login_d: true,
      checked_d: false
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
    phone_login_m() {
      var self = this;
      if(self.phone_d==''){
        alert('手机号不能为空')
      }
      this.ajax
        .post("/api/login", {
          phone: self.phone_d,
          code: self.code_d
        })
        .then(response => {
          this.$store.commit("login", response.data.token);
          if (self.$route.query.redirect) {
            self.$router.push({ path: self.$route.query.redirect });
          } else {
            self.$router.push({
              name: "home"
            });
          }
        })
        .catch(error => {
          if (error.status_code == 403) {
            alert(error.message);
            LUOCAPTCHA.reset();
          }
        });
    },
    account_login_m() {},
    //人机验证成功返回
    getCaptchaResponse(resp) {
      var self = this;
      this.ajax
        .post("/api/checkcaptcha", {
          captcha: resp
        })
        .then(function(response) {
          self.checkcaptcha = true;
        })
        .catch(function(error) {
          if (error.status_code == 400) {
            alert(error.message);
            LUOCAPTCHA.reset();
          }
        });
    },
    send_code_m() {
      var self = this;
      if (self.phone === "") {
        alert("请输入手机号");
        return false;
      }
      this.ajax
        .post("/api/sendcode", {
          phone: self.phone_d,
        })
        .then(function(response) {
          self.Interval();
          self.checked_d = true;
        })
        .catch(function(error) {
          if (error.status_code == 400) {
            alert(error.message);
          }
        });
    },
    Interval() {
      var self = this;
      var fun = function() {
        self.time_d--;
        if (self.time_d == 0) {
          clearInterval(interval);
          self.time_d = 60;
          LUOCAPTCHA.reset();
          self.codeShow = false;
        }
      };
      var interval = setInterval(fun, 1000);
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
.a1{
  height: 40px
};

.layout {
  width: 100%;
  height: 918px;
  background: url(http://static.huijinjiu.com/467763290700598377.png) no-repeat;
  background-size: 100% 100%;
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
.content ul li {
  list-style: none;
  cursor: pointer;
}

/* 手机登录 */
.content .phone_login {
  text-align: center;
  font-size: 18px;
  /* color: #ff6f6e; */
  margin-top: 12px;
  border-right: 2px solid #a6a6a6;
}
/* 账户登录 */
.content .account_login {
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
.content .phone {
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
}
.content .delete {
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
.content .forget {
  width: 100%;
  font-size: 12px;
  margin-top: 23px;
  border: none;
  outline: none;
  background-color: transparent;
}

.content .clickVerify {
  width: 100%;
  height: 40px;
  border-radius: 0;
  border: 1px solid #a6a6a6;
  outline: 0;
  font-size: 14px;
  background-color: white;
  margin-top: 40px;
}
.content .login {
  width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  outline: none;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  margin-top: 26px;
  letter-spacing: 10px;
}
.content .login1 {
  width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  letter-spacing: 10px;
}
.content .reg {
  width: 100%;
  font-size: 12px;
  border: none;
  outline: none;
  background-color: transparent;
  color: red;
}

/*脚部*/
.footer {
  width: 100%;
  height: 40px;
  background: transparent;
  margin-top: 22px;
}
.footer ul {
  margin-top: -20px;
}
.footer ul li {
  list-style: none;
  float: left;
  border-right: 3px solid #8f618f;
  font-size: 12px;
  text-align: center;
}
.footer ul li:last-child {
  border-right: none;
}
.footer ul li a {
  color: #626262;
}

@media screen and (min-width: 1920px) {
  .footer ul {
    letter-spacing: 3px;
  }
  .phone_login {
    letter-spacing: 10px;
  }
}
@media screen and (min-width: 1366px) {
  .phone_login {
    letter-spacing: 2px;
  }
}
.active {
  color: red;
}
</style>
