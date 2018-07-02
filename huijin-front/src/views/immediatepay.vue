<template>
    <div class="layout">
        <Layout>
            <!-- 侧边栏 -->
            <Sider class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px">
                <Row>
                    <i-col span="19" offset="2">
                        <img src="../static.huijinjiu.com/personal/headborder.png" class="bk" />
                    </i-col>
                    <i-col span="3">&nbsp;</i-col>
                </Row>

                <Row>
                    <i-col span="18" offset="3" class="col1">
                        用户名六个字
                    </i-col>
                    <i-col span="3">&nbsp;</i-col>
                </Row>

                <Row>
                    <i-col span="13" offset="5" class="col2">
                        ID:12032123
                    </i-col>
                    <i-col span="6">&nbsp;</i-col>
                </Row>
                <div class="bottom">
                    <Row>
                        <i-col span="11" offset="7">
                            <ul>
                                <li>
                                    <a href="">个人资料</a>
                                </li>
                                <li>
                                    <a href="">我的酒窖</a>
                                </li>
                                <li>
                                    <a href="">全部订单</a>
                                </li>
                                <li>
                                    <a href="">我的主页</a>
                                </li>
                                <li>
                                    <a href="">我的收藏</a>
                                </li>
                                <li>
                                    <a href="">我的购物车</a>
                                </li>
                                <li>
                                    <a href="">退出/切换</a>
                                </li>
                            </ul>
                        </i-col>
                        <i-col span="6"></i-col>
                    </Row>
                </div>
            </Sider>
            <Layout>
                <!-- 头部 -->
                <div class="header">                                                                                                                                            
                    <Row>
                        <i-col span="3" style="padding-left:32px">
                            <img src="../static.huijinjiu.com/personal/LOGO.png" class="logo" />
                        </i-col>
                        <i-col span="13" offset="3">
                            <ul>
                                <i-col span="6">
                                    <li>
                                        <a href="">商城首页</a>
                                    </li>
                                </i-col>
                                <i-col span="6">
                                    <li>
                                        <a href="">最新资讯</a>
                                    </li>
                                </i-col>
                                <i-col span="6">
                                    <li>
                                        <a href="">酒品分类</a>
                                    </li>
                                </i-col>
                                <i-col span="6">
                                    <li>
                                        <a href="">个人中心</a>
                                    </li>
                                </i-col>
                            </ul>
                        </i-col>
                        <i-col span="5">&nbsp;</i-col>
                    </Row>
                </div>

                <!-- 中部内容 -->
                 <Row>
                    <i-col span="22"  class="content">
                        <div style="height:95px;border-bottom:4px solid #4a5b77;padding:45px;font-weight:bold">
                           <span style="float:left">提交订单</span>
                            <img style="float:right" src="../static.huijinjiu.com/submitorder/web2.png" />
                        </div>
                        <div style="margin-top:40px">
                             <div style="float:left;width:80px;height:80px;margin-left:46px;margin-top:10px;background:black">
                                 
                            </div>
                            <div style="font-size:14px;color:black;padding-top:20px;float:left;margin-left:20px">
                                收藏酒汇金酒<Br />
                                浓度:50%<Br />
                                数量:1
                            </div>
                        </div>
                        <Br />
                        <Br />
                        <Br />
                        <Br />
                        <!-- 收货人 -->
                        <div style="width:100%;padding-left:46px;margin-top:40px;height:50px;border-bottom:1px solid #bfbfbf">
                            <div style="font-size:17px;float:left">
                            收货人
                            </div>
                            <div style="padding:3px;width:250px;line-height:30px;margin-left:160px;border:1px solid #b1c1e2;font-size:15px">
                                gxy &nbsp;&nbsp;北京市朝阳区 &nbsp;&nbsp;185****4512
                            </div>
                        </div>
                        <!-- 配送方式 -->
                         <div style="width:100%;padding-left:46px;margin-top:40px;height:50px;border-bottom:1px solid #bfbfbf">
                            <div style="font-size:17px;float:left">
                            配送方式
                            </div>
                            <div style="width:250px;line-height:30px;margin-left:160px;font-size:15px">
                                申通快递 &nbsp;&nbsp;运费 &nbsp;¥ 800.00
                            </div>
                        </div>
                        <!-- 发票信息 -->
                         <div style="width:100%;padding-left:46px;margin-top:40px;height:50px;">
                            <div style="font-size:17px;float:left">
                            发票信息
                            </div>
                            <div style="width:250px;line-height:30px;margin-left:160px;font-size:15px">
                                普通发票 &nbsp;&nbsp;(电子) &nbsp;&nbsp;个人发票 &nbsp;&nbsp;<a>查看</a>
                            </div>
                        </div>
                        <div style="margin-top:50px;margin-left:46px">
                        <Button style="font-size:20px;color:white;background:#fe706e;border-color:#ff4948;">立即付款</Button>
                        </div>
                    </i-col>
                    <i-col span="2">&nbsp;</i-col>
                </Row>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }, 
    mounted() {
        this.ordershow_m();
        this.orderlist_m()
    },
    methods:{
        
        orderlist_m() {
            var self = this;
            this.ajax.get("/api/order")
            .then(function(res){
                console.log(res.data.orders)
            }).catch(function(err){
                 if (err.status_code == 404) {
                    alert(err.message);
                }
            })
        },
        ordershow_m(){
            var self =this;
            // this.ajax.get("/api/order/")
            // .then(function(res){
            //     console.log(res.data)
                
            // }).catch(function(err){
            //      if (err.status_code == 404) {
            //         alert(err.message);
            //     }
            // })
        }
    }
}
</script>
<style scoped>
.ivu-layout {
  width: 100%;
  background: url(../static.huijinjiu.com/shopcart/beijing.jpg) no-repeat;
  background-size: 100% 100%;
  font-size: 16px;
}

.sider {
  width: 100%;
  height: 880px;
  background: url(../static.huijinjiu.com/personal/siderImg.png) no-repeat;
  background-size: 100% 100%;
}
.sider .bk {
  width: 100%;
  height: 100%;
  background: url(../static.huijinjiu.com/personal/head.png) no-repeat center;
  margin-top: 102px;
}
.sider .col1 {
  color: #000000;
  font-weight: bold;
  margin-top: 9px;
}
.sider .col2 {
  font-weight: bold;
  color: #000000;
  font-size: 11px;
  margin-top: 9px;
}
.sider ul {
  margin-top: 40px;
}
.sider ul li {
  list-style: none;
  line-height: 55px;
  font-size: 12px;
}
.sider ul li a {
  font-weight: bold;
  color: #000000;
}

.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 5px 5px #b5b5b5;
  background: transparent
}
.header .logo {
  margin-top: 32px;
}
.header ul li {
  list-style: none;
  float: left;
  line-height: 116px;
  letter-spacing: 2.5px;
}
.header ul li a {
  color: #010101;
}
.header ul li:hover {
  border-bottom: 4px solid #a8d3fe;
}
.content {
  margin-top: 10px;
  background: #fff;
  margin-left: 32px;
}
</style>

