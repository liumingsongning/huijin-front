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
                            <Col span="6">
                            <li>
                                <a href="">商城首页</a>
                            </li>
                            </Col>
                            <Col span="6">
                            <li>
                                <a href="">最新资讯</a>
                            </li>
                            </Col>
                            <Col span="6">
                            <li>
                                <a href="">酒品分类</a>
                            </li>
                            </Col>
                            <Col span="6">
                            <li>
                                <a href="">个人中心</a>
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
                         <Table :columns="columns1" ></Table>
                    </Col>
                    <Col span="3">

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
            columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                       
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
        }
    }
};
</script>
<style scoped>
.ivu-layout {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: url(../static.huijinjiu.com/shopcart/beijing.jpg) no-repeat;
  background-size: 100% 768px;
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
  margin-top: 51px;
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
.content{
    height: 637px;
    background: url(../static.huijinjiu.com/shopcart/diwen.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 10px
}
</style>


