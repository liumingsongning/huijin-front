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
                    <i-col span="22" class="content">
                        <div style="font-size:16px;font-weight:bold;border:1px solid #b4b2b3;height:34px;line-height:34px;text-indent:1em">
                            转售商品信息
                        </div>
                        <Card style="width:600px;margin-left:150px;margin-top:60px;background:transparent;">
                            商品名称: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="商品名称不超过30个字"></Input><Br />
                            商品ID: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="请输入商品ID"></Input><Br />
                            生产日期: &nbsp;&nbsp;&nbsp;2013年1月1日 <Br />
                            产品规格: &nbsp;&nbsp;&nbsp;500ml
                            产品浓度: &nbsp;&nbsp;&nbsp;50° <Br />
                            产品类型: &nbsp;&nbsp;&nbsp;收藏版 原酒
                            产品年限: &nbsp;&nbsp;&nbsp;10年 <Br />
                            商品描述: &nbsp;&nbsp;&nbsp;<Input type="textarea" style="width:300px"></Input><Br />
                            收款方式: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="现金结算(收取服务费)"></Input> 服务说明 <a>查看说明>></a> <Br />
                            商品价格: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder=""></Input><Br />
                            
                        </Card>
                    </i-col>
                </Row>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    
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
  height: 970px;
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
  height:937px;
  margin-top: 10px;
  background: url(../static.huijinjiu.com/shopcart/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-left: 32px;
  padding:50px
}
</style>


