<template>
    <div>
        <Layout class="layout">
            <Header class="header">
                <Row>
                <Col span="3" offset="1">
                <img src="http://static.huijinjiu.com/805351264090795932.png" class="logo" />
                </Col>
                <Col span="3" style="font-size: 23px;margin-top: 30px;margin-left:30px"> 欢迎注册
                </Col>
                <Col span="3" offset="12" style="color:#8b8b8b;font-size:15px;margin-top:50px">
                    已有账号? &nbsp;<a style="color:red">请登录</a>
                </Col>
                <Col span="2"></Col>
                </Row>
            </Header>
            <div class="content">
                <div style="width:400px;margin-left:auto;margin-right:auto">
                    <Card style="margin-top:76px;">
                        <div style="text-align:center;font-size:17px">请输入手机号绑定</div>
                        <Form ref="phoneFormValidate" :model="phoneFormValidate" :rules="phoneRuleValidate" style="margin-top:20px">
                            <FormItem prop="phone_d">
                                <Input type="text" v-model="phoneFormValidate.phone_d" placeholder="输入常用手机号" size="large" clearable>
                                    <span slot="prepend">中国+86</span>
                                </Input>
                            </FormItem>
                            <FormItem prop="code_d">
                                <Input type="text" v-model="phoneFormValidate.code_d" placeholder="请输入短信验证码" clearable size="large" >
                                    <span slot="prepend">手机验证码</span>
                                    <span slot="append">请先进行人机验证</span>
                                    <!-- <span v-show='checked_d&&!sended_d' slot="append" @click='send_code_m'>发送验证码</span> -->
                                    <!-- <span v-show='sended_d' slot="append">{{time_d}}s后重新获取</span> -->
                                </Input>
                            </FormItem>
                            <FormItem>
                                <Button class='complete' @click="phone_reg_m('phoneFormValidate')">
                                    完成
                                </Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>

            <!-- 脚部 -->

            <div class="footer">
            <div style="width:750px;margin-left:auto;margin-right:auto;height:14px">
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
            </div>
            <div style="width:240px;margin-left:auto;margin-right:auto;padding-top:16px">
                Copyright&copy;2004-2018 京东JD.com版权所有
            </div>
      </div>
        </Layout>

    </div>
</template>
<script>
export default {
    data () {
        return {
            phoneFormValidate: {
                phone_d: "",
                code_d: ""
            },
            phoneRuleValidate: {
                phone_d: [
                { required: true, message: "手机号码不能为空", trigger: "blur" },
                {
                    type: "string",
                    len: 11,
                    message: "请输入11位手机号",
                    trigger: "blur"
                }
                ],
                code_d: [
                { required: true, message: " 验证码不能为空", trigger: "blur" },
                {
                    type: "string",
                    len: 4,
                    message: "请输入四位验证码",
                    trigger: "blur"
                }
                ]
            }
        }
    },
    methods: {
        phone_reg_m (name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success("注册成功");
                }else{
                    this.$Message.error("注册失败");
                }
            })
        }
    }
}
</script>
<style scoped>
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
.content {
  width: 100%;
  height: 652px;
  background: white;
  background-size: 100% 648px;
}
.content .complete{
    width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  outline: none;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  letter-spacing: 10px;
}

.footer {
  width: 100%;
  height: 40px;
  margin-top: 22px;
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
</style>


