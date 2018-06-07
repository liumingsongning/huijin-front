<template>
    <div class="shopcart">
        <Layout >
            <Sider class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px"> 
                <Row>
                    <Col span="19" offset="2">
                    <img src="../static.huijinjiu.com/personal/headborder.png" class="bk" />
                    </Col>
                    <Col span="3">&nbsp;</Col>
                </Row>

                <Row>
                    <Col span="18" offset="3" class="col1"> 
                        用户名六个字
                    </Col>
                    <Col span="3">&nbsp;</Col>
                </Row>

                <Row>
                    <Col span="13" offset="5" class="col2"> 
                        ID:12032123
                    </Col>
                    <Col span="6">&nbsp;</Col>
                </Row>
                <div class="bottom">
                    <Row>
                        <Col span="11" offset="7">
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
                        </Col>
                        <Col span="6"></Col>
                    </Row>
		        </div>
            </Sider>

            <Layout>
                <!-- 头部 -->
                <div class="header">
                    <Row>
                        <Col span="3" offset="1">
                        <img src="../static.huijinjiu.com/personal/LOGO.png" class="logo" />
                        </Col>
                        <Col span="13" offset="3">
                        <ul>
                            <Col span="5">
                            <li>
                                <a href="">商城首页</a>
                            </li>
                            </Col>
                            <Col span="5">
                            <li>
                                <a href="">最新资讯</a>
                            </li>
                            </Col>
                            <Col span="5">
                            <li>
                                <a href="">酒品分类</a>
                            </li>
                            </Col>
                            <Col span="5">
                            <li>
                                <a href="">个人中心</a>
                            </li>
                            </Col>
                             <Col span="4">
                            <li>
                                <a href="" @click="displaycart_m">购物车</a>
                            </li>
                            </Col>
                        </ul>
                        </Col>
                        <Col span="4">&nbsp;</Col>
                    </Row>
                </div>
               <!-- 内容 -->
               <div >
                <Row>
				    <Col span="20" offset="1" class="content">
                        <div style="font-weight:bold;margin-top:25px">我的购物车</div>
                        <!--  -->
                        <Row>
                            <table style="width:100%" class="tab">
                                <tr>
                                    <Col span="3">
                                        <td>
                                        <Checkbox style="letter-spacing:3px;padding-left:11px">
                                            <!-- 全选 -->
                                        </Checkbox>
                                        </td>
                                    </Col>
                                    <Col span="11">
                                        <td>
                                            商品
                                        </td>
                                    </Col>
                                    <Col span="3">
                                        <td>
                                        单价
                                    </td>
                                    </Col>
                                    <Col span="3">
                                        <td>
                                        数量
                                    </td>
                                    </Col>
                                    <Col span="2">
                                        <td>
                                        小计
                                    </td>
                                    </Col>
                                    <Col span="2">
                                        <td>
                                        操作
                                    </td>
                                    </Col>
                                </tr>
                            </table>
                        </Row>
                        <!--  -->
                        <div style="height:41px;line-height:41px">
                            <Checkbox style="letter-spacing:3px;padding-left:11px">
                                官方商品
                            </Checkbox>
                        </div>
                        <!--  -->
                        <Row>
                            <table style="width:100%" class="tab1">
                                <tr>
                                    <Col span="3">
                                        <td>
                                        <Checkbox style="letter-spacing:3px;margin-left:11px">
                                            
                                        </Checkbox>
                                        </td>
                                    </Col>
                                    <Col span="11">
                                        <td>
                                            <div style="width:79px;height:79px;border:1px solid #aaaaaa;float:left"></div>
                                            <div style="float:left;padding-left:10px">
                                                <span>汇金酒业有限公司储藏酒</span><Br />
                                                <span>出产日期: 2013-07-15</span>
                                                <Br />
                                                <span>储藏年限: 10年</span>
                                                <Br />
                                                <span>1000ml</span>
                                            </div>
                                        </td>
                                    </Col>
                                    <Col span="2">
                                        <td>
                                        ¥200.00
                                    </td>
                                    </Col>
                                    <Col span="4">
                                        <td style="margin-left:20px;">
                                            <button type="button" style="width:24px;height:22px;border:1px solid #aaaaaa">-</button><input type="text" value="1" style="width:50px;text-align:center;border:none;height:22px;border:1px solid #aaaaaa"/><button type="button" style="width:24px;height:22px;border:1px solid #aaaaaa">+</button>
                                        </td>
                                    </Col>
                                    <Col span="2">
                                        <td>
                                        ¥200.00
                                    </td>
                                    </Col>
                                    <Col span="2">
                                        <td>
                                            <a href="" style="color:#939393">删除</a><Br />
                                            <a href="" style="color:#939393">加入收藏</a>
                                        </td>
                                    </Col>
                                </tr>
                            </table>
                        </Row>
                        <!-- 脚部 -->
                            <Row>
                                <div style="width:100%" class="footer">
                                    <Col span="15">
                                        <Checkbox style="letter-spacing:3px;padding-left:11px">
                                            全选
                                        </Checkbox>
                                    </Col>
                                    <Col span="6">
                                        总价: <span style="color:red">¥20000.00</span>
                                    </Col>
                                    <Col span="3">
                                        <button type="button"  style="width:100%;background:red;color:white;border:none;outline:none">结算</button>
                                    </Col>
                                </div>
                            </Row>
                    </Col>
                    <Col span="3">
                        &nbsp;
                    </Col>
                </Row>
               </div>
                
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            good:""
        }
    },
    mounted () {
        this.details()
    },
    methods: {
        details () {
                this.ajax.get("/api/goods/1")
                .then(response => {
                    this.good = response.data.good;
                })
                .catch(error => {
                    if(error.status_code==404){
                        console.log(error.message);
                    }
                })
        },
        displaycart_m () {
            this.ajax.post("/api/cart/display",{
                rowId: this.good.id
            }).then(function(res){
                console.log(res)
            }).catch(function(err){
                if(err.status_code == 422){
                    console.log(error.message);
                }
            })
        }
    }
};
</script>
<style scoped>
::-webkit-scrollbar {
        width: 0px;
    }
.ivu-layout {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: url(../static.huijinjiu.com/shopcart/beijing.jpg) no-repeat;
  background-size: 100% 100%;
  
}
/* 侧边栏 */
.sider {
  width: 100%;
  height: 768px;
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
/* 头部 */
.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 5px 5px #b5b5b5;
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
/* 内容 */
.content {
  height: 637px;
  background: url(../static.huijinjiu.com/shopcart/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  padding: 6px;
}
.content .tab{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  height: 42px;
  color: #939393;
  font-size: 12px;
  margin-top: 5px;
  line-height: 42px;
}
.content .tab1{
  height: 150px;
  color: #939393;
  font-size: 12px;
  border-top:2px solid #aaa;
  border-bottom:2px solid #aaa;
  padding-top:40px
}
/* 脚部 */
.footer{
    height: 40px;
    background-color: #ffffff;
    line-height: 40px;
    margin-top: 300px
}
</style>


