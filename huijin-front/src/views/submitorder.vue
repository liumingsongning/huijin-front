<<template>
    <div class="layout">
        <Layout>
            <Sider class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px">
                <div class="side">
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
                </div>
	          </Sider>
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
  height: 1768px;
  background: url(../static.huijinjiu.com/personal/personImg.jpg) no-repeat;
  background-size: 100% 1768px;
  font-size: 16px;
}

.sider {
  height: 1768px;
  background: url(../static.huijinjiu.com/personal/siderImg.png) no-repeat;
  background-size: 100% 100%;
}
.side {
  width: 100%;
  height: 100%;
}
.side .bk {
  width: 100%;
  height: 100%;
  background: url(../static.huijinjiu.com/personal/head.png) no-repeat center;
  margin-top: 102px;
}
.side .col1 {
  color: #000000;
  font-weight: bold;
  margin-top: 12px;
}
.side .col2 {
  font-weight: bold;
  color: #000000;
  font-size: 11px;
  margin-top: 9px;
}
.side ul {
  margin-top: 40px;
}
.side ul li {
  list-style: none;
  margin-top: 51px;
  font-size: 12px;
}
.side ul li a {
  font-weight: bold;
  color: #000000;
}
</style>

