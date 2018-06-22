<<template>
    <div class="layout">
        <Layout>
            <!-- 侧边栏 -->
            <Sider class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px">
                <div class="side">
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
                <!-- 内容 -->
                <Row>
                    <i-col span="22"  class="content">
                        <div style="height:95px;border-bottom:4px solid #4a5b77;padding:45px;font-weight:bold">
                            <span>提交订单</span>
                        </div>
                        <!-- 收货人信息 -->
                        <div style="margin-top:32px;height:258px;">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">收货人信息</span>
                            </div>

                            <!-- 地址展示 -->
                            <div v-show="goodaddress.length>0" 
                                style="width:320px;border:4px solid red;padding:10px;font-size:12px;margin-left:47px;margin-top:40px;position:absolute;z-index:1" 
                                v-for="item in goodaddress" >
                                <div style="margin-top:10px;">
                                    <div style="float:left">
                                        收货人: &nbsp;<span style="color:#595959;">{{item.consignee}}</span>
                                    </div>
                                    <div style="float:right">
                                        <a style="color:red" @click="updateaddress_m">修改</a>
                                        <a style="color:red" @click="deleteaddress_m(item.id)">删除</a>
                                    </div>
                                </div>
                                <Br />
                                <div style="margin-top:8px">
                                    所在地区: &nbsp;<span style="color:#595959" >{{areaData['86'][item.country]+areaData[item.country][item.province]+areaData[item.province][item.city]+areaData[item.city][item.district]}}</span>
                                </div>
                                <div style="margin-top:8px">
                                    详细地址: &nbsp;<span style="color:#595959">{{item.address}}</span>
                                </div>
                                <div style="margin-top:8px">
                                    手机号码: &nbsp;<span style="color:#595959">{{item.mobile}}</span>
                                </div>
                            </div>
                            <Button v-show="status||goodaddress.length>0" @click="click" style="background:#f8fcff;margin-top:15px;margin-left:47px">添加收货地址</Button>
                            
                            <Row>
                                <i-col span="14" offset="4" >
                                    <!-- 添加地址 -->
                                    <Card style="width:650px;margin-left:auto;marin-right:auto;font-size:13px;position:fixed;z-index:999" v-show="!site||goodaddress.length==0">
                                        <div>
                                            &nbsp;&nbsp;&nbsp;收货人 <Input type="text" style="width:220px" v-model="consignee_d"></Input><Br />
                                        </div>
                                        <div style="margin-top:5px">
                                            <div style="float:left;margin-top:6px">所在地区</div><al-selector v-model="resArr" style="width:500px;float:left"/>
                                            <Br /><Br />
                                        </div>
                                        <div style="margin-top:5px">
                                            详细地址 <Input type="text" style="width:400px" v-model="address_d"></Input><Br />
                                        </div>
                                        <div style="margin-top:5px;">
                                            <div style="float:left;margin-top:6px">手机号码</div> &nbsp;<Input type="text" style="width:220px;" v-model="mobile_d"></Input>
                                        </div>
                                        <div style="margin-left:60px;margin-top:15px">
                                            <Button style="background:#fe706e;border-color:#ff4948;color:white;width:70px" @click="address_m">确定</Button>
                                            <Button style="margin-left:10px;background:#eeeeee;border-color:#a6a6a6;color:#acacac;width:70px">取消</Button>
                                        </div>
                                    </Card>
                                </i-col>
                                <i-col spa="6"></i-col>
                            </Row> 

                        </div>

                        <!-- 商品列表 -->
                        <div style="width:100%;margin-top:68px;height:220px;font-size:12px">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">商品列表</span>
                            </div>
                            <table style="width:100%;border-collapse:collapse;margin-top:18px;color:#898989;">
                                <tr style="height:35px;background:#f5f5f5">
                                    <th>商品名称</th>
                                    <th>属性</th>
                                    <th>价格</th>
                                    <th>购买数量</th>
                                    <th>总计</th>
                                </tr>
                                <tr v-for="(item,index) in orders" >
                                    <td style="width:400px">
                                        <div style="width:60px;height:60px;background:black;margin-left:50px;margin-top:10px;float:left"></div>
                                        <div style="margin-top:10px;flaot:left;margin-left:120px"> 
                                            <span>{{item.model.goods_id}} &nbsp; 精装酒</span><Br />
                                            <span>生产日期:2008年5月21日 10年 浓度50%</span>
                                        </div>
                                    </td>
                                    <td style="text-align:center">
                                        属性
                                    </td>
                                    <td style="text-align:center">
                                        ¥30.00
                                    </td>
                                    <td style="text-align:center">
                                        10
                                    </td>
                                    <td style="text-align:center">
                                        ¥300.00
                                    </td>
                                </tr>

                            </table>
                            <div style="width:100%;background:#f5f5f5;height:35px;margin-top:22px;color:red;line-height:35px;padding-left:50px">
                                    公司直销 &nbsp;预计增值: &nbsp;¥110.00
                            </div>

                        </div>

                        <!-- 支付方式 -->
                        <div style="margin-top:32px;height:110px;">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">支付方式</span>
                            </div>
                            <div style="margin-left:58px;margin-top:20px">
                                <Button style="width:96px;height:40px;">支付宝</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button style="width:96px;height:40px">微信支付</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button style="width:96px;height:40px">线下支付</Button>
                            </div>
                        </div>
                        <!-- 储藏 -->
                        <div style="margin-top:50px;height:170px;font-size:12px">
                             <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">是否储藏</span> &nbsp;<a style="color:#898989">储藏说明</a>
                                <table style="width:100%;border-collapse:collapse;margin-top:18px;color:#898989;">
                                    <tr style="height:35px;background:#f5f5f5">
                                        <th>是否储藏</th>
                                        <th>价格/月</th>
                                        <th>时间/月</th>
                                        <th>小计</th>
                                    </tr>
                                    <tr style="text-align:center">
                                        <td style="width:300px">
                                            <Radio style="margin-top:18px">储藏此酒</Radio><Br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<Radio style="margin-top:26px">不需要储藏</Radio>
                                        </td>
                                        <td>¥110.00</td>
                                        <td style="width:100px">
                                            <Select>
                                                <Option v-for="month in months" :value = "month.value" :key="month.value">{{month.label}}</Option>
                                            </Select>
                                        </td>
                                        <td>¥110.00</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <!-- 运费 -->
                        <div style="margin-top:42px;height:125px;font-size:12px">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">相关运费</span> &nbsp;<a style="color:#898989">运费说明</a>
                            </div>
                            <div style="margin-top:50px;margin-left:105px">
                                运费价格: &nbsp;¥888.00
                            </div>
                        </div>

                        <!-- 费用总计 -->
                        <div style="margin-top:80px;height:96px">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">费用总价</span>
                            </div>
                            <div style="margin-top:48px;float:right;margin-right:108px;font-size:12px">
                                商品总价: &nbsp;<span style="color:red;font-size:16px">¥88888.00</span>
                            </div>
                        </div>

                        <div style="margin-top:114px;text-align:center">
                            <Button style="font-size:20px;color:white;background:#fe706e;border-color:#ff4948;">提交订单</Button>
                        </div>
                    </i-col>
                    <!-- <i-col span="2">&nbsp;</i-col> -->
                </Row>
            </Layout>

        </Layout>
    </div>
</template>
<script>
import areaData from 'area-data';
export default {
  data() {
    return {
      months: [
        {
          value: "1个月",
          label: "1个月"
        },
        {
          value: "2个月",
          label: "2个月"
        },
        {
          value: "3个月",
          label: "3个月"
        },
        {
          value: "4个月",
          label: "4个月"
        },
        {
          value: "5个月",
          label: "5个月"
        },
        {
          value: "6个月",
          label: "6个月"
        },
        {
          value: "7个月",
          label: "7个月"
        },
        {
          value: "8个月",
          label: "8个月"
        },
        {
          value: "9个月",
          label: "9个月"
        },
        {
          value: "10个月",
          label: "10个月"
        },
        {
          value: "11个月",
          label: "11个月"
        },
        {
          value: "12个月",
          label: "12个月"
        }
      ],
      resArr: [],
      site: true,
      goodaddress: [],
      consignee_d: "",
      address_d: "",
      mobile_d: "",
      status: true,
      orders: [],
      pca:{}
    };
  },
  mounted() {
    this.ordershow_m();
    this.getaddress();
    this.areaData=areaData;
  },
  methods: {
    getaddress() {
      var self = this;
      this.ajax
        .get("/api/address")
        .then(function(res) {
          console.log(234243);
          self.goodaddress = res.data.address;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    },
    ordershow_m() {
      var self = this;
      this.ajax
        .get("/api/cart/getAssign", {
          params: { rowIds: self.$route.query.rowId }
        })
        .then(function(res) {
          console.log(res.data.cart);
          self.orders = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    },
    click() {
      this.site = false;
      this.status = false;
    },
    // 添加地址
    address_m() {
      var self = this;
      this.site = true;
      this.status = true;
      this.ajax
        .post("/api/address", {
          consignee: self.consignee_d,
          email: self.email_d,
          mobile: self.mobile_d,
          address: self.address_d,
          country: self.resArr[0].code,
          province: self.resArr[1].code,
          city: self.resArr[2].code,
          district: self.resArr[3].code
        })
        .then(function(res) {
          console.log(res.data);
          self.goodaddress = res.data.address;
        })
        .catch(function(err) {
          if (err.status_code == 403) {
            alert(err.message);
          }
        });
    },
    //删除地址
    deleteaddress_m(id) {
      var self = this;
      this.ajax
        .delete("/api/address/" + id)
        .then(function(res) {
          self.goodaddress = "";
        })
        .catch(function(err) {
          if (err.status_code == 403) {
            alert(err.message);
          }
        });
    },
    // 修改地址
    updateaddress_m(id) {
      this.site = false;
      var self = this;
      this.ajax
        .put("/api/address/" + id)
        .then(function(res) {
          self.goodaddress = res.data.address;
        })
        .catch(function(err) {
          if (err.status_code == 403) {
            alert(err.message);
          }
        });
    }
  }
};
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

.content {
  height: 1636px;
  margin-top: 10px;
  background: #fff;
  margin-left: 32px;
}
.icon {
  width: 6px;
  height: 36px;
  border-left: 6px solid red;
  float: left;
  margin-left: 45px;
}
</style>

