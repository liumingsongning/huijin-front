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
                            <span style="float:left">提交订单</span>
                            <img style="float:right" src="../static.huijinjiu.com/submitorder/web1.png" />
                        </div>
                        <!-- 收货人信息 -->
                        <div style="margin-top:32px;">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">收货人信息</span>
                            </div>

                            <!-- 地址展示 -->
                            <div style="display:flex;flex-wrap:wrap">
                                <div v-show="goodaddress.length>0" 
                                    class="address_show" 
                                    v-for="(item,index) in goodaddress" v-bind:class="{'active':ind === index}" @click = "change(index)" >
                                    <div style="margin-top:10px;">
                                        <div style="float:left">
                                            收货人: &nbsp;<span style="color:#595959;">{{item.consignee}}</span>
                                        </div>
                                        <div style="float:right">
                                            <a style="color:red" @click="updateaddress_m(item)">修改</a>
                                            <a style="color:red" @click="deleteaddress_m(item.id)">删除</a>
                                        </div>
                                    </div>
                                    <Br />
                                    <div style="margin-top:8px">
                                        所在地区: &nbsp;<span style="color:#595959" >{{areaData[item.country][item.province]+areaData[item.province][item.city]+areaData[item.city][item.district]+areaData[item.district][item.street]}}</span>
                                    </div>
                                    <div style="margin-top:8px">
                                        详细地址: &nbsp;<span style="color:#595959">{{item.address}}</span>
                                    </div>
                                    <div style="margin-top:8px">
                                        手机号码: &nbsp;<span style="color:#595959">{{item.mobile}}</span>
                                    </div>
                                </div>
                            </div>

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
                                            <Button style="background:#fe706e;border-color:#ff4948;color:white;width:70px" @click="address_m" v-show="btn">确定</Button>
                                            <Button style="background:#fe706e;border-color:#ff4948;color:white;width:80px" @click="update(rowId)" v-show="!btn">确认修改</Button>
                                            <Button style="margin-left:10px;background:#eeeeee;border-color:#a6a6a6;color:#acacac;width:70px" @click="site=true" >取消</Button>
                                        </div>
                                    </Card>
                                </i-col>
                                <i-col spa="6"></i-col>
                            </Row> 
                            <!-- <Button v-show="status||goodaddress.length>0" @click="click" style="background:#f8fcff;margin-top:15px;margin-left:47px">添加收货地址</Button> -->
                            <Button v-show="goodaddress.length>0" @click="site=false" style="background:#f8fcff;margin-top:15px;margin-left:47px"  v-if="goodaddress.length==6?false:true">添加收货地址</Button>
                        </div>

                        <!-- 商品列表 -->
                        <div style="width:100%;margin-top:68px;font-size:12px">
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
                                <tr v-for="(item,index) in orders">
                                    <td style="width:400px">
                                        <div style="width:60px;height:60px;margin-left:50px;margin-top:10px;float:left">
                                            <img :src="item.model.goods_img+'?imageView2/1/w/100/h/100'" style="width:100%">
                                        </div>
                                        <div style="margin-top:10px;flaot:left;margin-left:120px"> 
                                            <span>{{item.model.goods_id}} &nbsp; 精装酒</span><Br />
                                            <span>生产日期:2008年5月21日 10年 浓度50%</span>
                                        </div>
                                    </td>
                                    <td style="text-align:center">
                                        属性
                                    </td>
                                    <td style="text-align:center">
                                        {{item.price}}
                                    </td>
                                    <td style="text-align:center">
                                        {{item.qty}}
                                    </td>
                                    <td style="text-align:center">
                                        ¥{{item.subtotal}}
                                    </td>
                                </tr>

                            </table>
                            <div style="width:100%;background:#f5f5f5;height:35px;margin-top:22px;color:red;line-height:35px;padding-left:50px">
                                    公司直销 &nbsp;预计增值: &nbsp;¥0.00
                            </div>

                        </div>

                        <!-- 支付方式 -->
                        <div style="margin-top:50px;">
                            <div class="icon"></div>
                            <div>
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">支付方式</span>
                            </div>
                            <div style="margin-left:58px;margin-top:20px">
                                <Button style="width:96px;height:40px;" v-bind:class="{'select': pay_d}" @click="alipay_m" >支付宝</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button style="width:96px;height:40px"  v-bind:class="{'select': pay1_d}"  @click="wxpay_m">微信支付</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button style="width:96px;height:40px" v-bind:class="{'select': pay2_d}" @click="offlinepay_m">线下支付</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button style="width:96px;height:40px" v-bind:class="{'select': pay3_d}" @click="balance_m">余额支付</Button>
                            </div>
                        </div>
                       

                        <!-- 运费 -->
                        <div style="margin-top:60px;font-size:12px">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">相关运费</span> &nbsp;<a style="color:#898989">运费说明</a>
                            </div>
                            <div style="margin-top:50px;margin-left:105px">
                                运费价格: &nbsp;¥888.00
                            </div>
                        </div>
                        
                         <!-- 发票信息 -->
                        <div style="margin-top:50px;font-size:12px">
                             <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">发票信息</span>
                                <div style="margin-top:50px;margin-left:105px;">
                                    普通发票&nbsp;&nbsp;(电子) &nbsp;&nbsp;个人发票 &nbsp;&nbsp;<a @click="update_inv">修改</a>
                                </div>
                            </div>
                        </div>
                        <!-- 发票 -->
                        <Card v-if="inv_show" style="width:650px;margin-left:auto;margin-right:auto;">
                            <div>
                                <Button @click="eleinv_m" v-bind:class="{select:invoice_d}">电子普通发票</Button>
                                <Button @click="taxinv_m" v-bind:class="{select:!invoice_d}">增值税专用发票</Button>
                            </div>
                            <!-- 电子普通发票 -->
                            <div v-show="invoice_d">
                                <div style="background:#fffaea;margin-top:15px">
                                    我公司依法开具发票,请您按照税法规定使用发票.<Br />
                                    <a>发票制度说明</a> &nbsp;&nbsp;&nbsp;&nbsp;<a>首次开具增值税专用发票</a><Br />
                                    如商品由第三方卖家销售,发票类型和内容将由该卖家决定,发票由卖家开具并提供.<a>发票信息相关问题</a>
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                    开票方式 <Button v-bind:class="{select:invoice_d}"  style="margin-left:20px">订单完成后开票</Button><Br />
                                </div>
                                <div style="margin-top:10px;margin-left:50px">
                                    发票内容 <Button v-bind:class="{select:invoice_d}" style="margin-left:20px;width:115px">商品明细</Button><Br />
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                     单位名称 
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:22px;margin-top:10px">
                                      纳税人识别码 
                                    <Input type="text"style="width:240px;margin-left:20px" >
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                     注册地址
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                     注册电话 
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                     开户银行 
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                    银行账户
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:36px;margin-top:10px">
                                     收票人姓名
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>
                                <div style="margin-left:36px;margin-top:10px">
                                    收票人手机
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div>    
                            </div>
                            <!-- 增值税专业用发票 -->
                            <div v-show="!invoice_d">
                                 <div style="background:#fffaea;margin-top:15px">
                                    电子普通发票平和纸质普通发票具备同等法律效力,可支持报销入账,全面启动电子普通发票<Br />
                                    非京东自营发票由第三防商家实际开具. <a>电子普通发票相关信息>></a><Br />
                                    如商品由第三方卖家销售,发票类型及内容将由卖家决定. <a>发票信息相关问题>></a>
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                    发票抬头 <Input type="text" style="width:240px;margin-left:20px"></Input><Br /><Br />
                                            <Input type="text" placeholder="请写公司发票抬头" style="width:240px;margin-left:80px"></Input>
                                </div>
                                <div style="margin-left:50px;margin-top:10px">
                                    发票内容 <Button @click="content_d=true" v-bind:class="{select:content_d}" style="margin-left:20px">商品明细</Button>&nbsp;&nbsp;
                                            <Button @click="content_d=false" v-bind:class="{select:!content_d}">商品类别</Button>
                                </div>
                                 <div style="margin-left:36px;margin-top:10px">
                                    收票人手机
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input><Br />
                                </div> 
                                 <div style="margin-left:36px;margin-top:10px">
                                    收票人邮箱
                                    <Input type="text" style="width:240px;margin-left:20px">
                                        
                                    </Input>
                                </div> 
                            </div>
                            <div style="margin-top:30px;margin-left:50px">
                                <Button style="width:100px" v-show="invoice_d" @click="complete">完成</Button>
                                <Button style="width:100px" v-show="!invoice_d" @click="save">保存</Button>
                                <Button style="width:100px" @click="cancel">取消</Button>
                            </div>
                            
                        </Card>

                        <!-- 费用总计 -->
                        <div style="margin-top:100px;">
                            <div class="icon"></div>
                            <div style="height:36px">
                                <span style="padding-left:10px;line-height:36px;color:red;font-size:20px">费用总计</span>
                            </div>
                            <div style="margin-top:48px;float:right;margin-right:108px;font-size:12px">
                                商品总价: &nbsp;<span style="color:red;font-size:16px">¥88888.00</span>
                            </div>
                        </div>

                        <div style="margin-top:114px;text-align:center">
                            <Button @click="addorder_m" style="font-size:20px;color:white;background:#fe706e;border-color:#ff4948;">提交订单</Button>
                        </div>
                    </i-col>
                    <i-col span="2">&nbsp;</i-col>
                </Row>
            </Layout>

        </Layout>
    </div>
</template>
<script>
import areaData from "area-data";
export default {
  data() {
    return {
      btn1: "",
      payId: "",
      invoice_d: true,
      content_d: true,
      inv_show: false,
      ind: "",
      resArr: [],
      site: true, //显示收货地址的状态
      goodaddress: [],
      consignee_d: "",
      address_d: "",
      mobile_d: "",
      status: true, //按钮的状态
      orders: [],
      pca: {},
      btn: true, //确认修改按钮的状态
      rowId: "",
      pay_d: false,
      pay1_d: false,
      pay2_d: false,
      pay3_d: false,
      invtype: "", //发票类型
      address_number: "",
      addorder: "",
      cartype: "" //立即购买/加入购物车
    };
  },
  mounted() {
    //如果是立即购买的话调用getnow方法,
    if (this.$route.query.type == "buynow") {
      this.getnow();
      this.cartype = "buynow";
    } else {
      //如果是加入购物车的话,调用getassign_m方法
      this.getassign_m();
      this.cartype = "shopping";
    }
    this.getaddress();
    this.areaData = areaData;
  },
  methods: {
    //电子发票
    eleinv_m() {
      this.invoice_d = true;
      this.invtype = "电子发票";
    },
    taxinv_m() {
      this.invoice_d = false;
      this.invtype = "增值税专用发票";
    },
    //点击修改发票
    update_inv() {
      this.inv_show = true;
    },
    //完成
    complete() {
      console.log(1);
    },
    // 保存
    save() {
      console.log(1);
    },
    //取消
    cancel() {
      this.inv_show = false;
    },
    //地址选中出现红框
    change(i) {
      this.ind = i;
      this.address_number = i;
    },
    // 获取地址
    getaddress() {
      var self = this;
      this.ajax
        .get("/api/address")
        .then(function(res) {
          // console.log(res.data)
          self.goodaddress = res.data.address;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    },
    // 商品分类
    getassign_m() {
      var self = this;
      this.ajax
        .get("/api/cart/getAssign", {
          params: { rowIds: self.$route.query.rowId }
        })
        .then(function(res) {
          //   console.log(res.data.cart);
          self.orders = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    },
    //点击立即购买获取数据
    getnow() {
      var self = this;
      this.ajax
        .get("/api/BuyNowCart/cart")
        .then(function(res) {
          console.log(res.data);
          self.orders = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            console.log(err.message);
          }
        });
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
          province: self.resArr[0].code,
          city: self.resArr[1].code,
          district: self.resArr[2].code,
          street: self.resArr[3].code
        })
        .then(function(res) {
          self.goodaddress = res.data.address;
          console.log(self.goodaddress);
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
          self.goodaddress = res.data.address;
        })
        .catch(function(err) {
          if (err.status_code == 403) {
            alert(err.message);
          }
        });
    },
    // 修改地址
    updateaddress_m(item) {
      var self = this;
      this.site = false;
      this.btn = false;
      self.consignee_d = item.consignee;
      self.email_d = item.email;
      self.mobile_d = item.mobile;
      self.address_d = item.address;
      self.rowId = item.id;
    },
    //确认修改
    update(id) {
      var self = this;
      this.site = true;
      this.ajax
        .put("/api/address/" + id, {
          consignee: self.consignee_d,
          email: self.email_d,
          mobile: self.mobile_d,
          address: self.address_d,
          province: self.resArr[0].code,
          city: self.resArr[1].code,
          district: self.resArr[2].code,
          street: self.resArr[3].code
        })
        .then(function(res) {
          self.goodaddress = res.data.address;
          console.log(res.data.address);
        })
        .catch(function(err) {
          if (err.status_code == 403) {
            alert(err.message);
          }
        });
    },
    // 支付宝
    alipay_m() {
      var self = this;
      self.pay_d = true;
      self.pay1_d = false;
      self.pay2_d = false;
      self.pay3_d = false;
      self.payId = 1;
    },
    //微信支付
    wxpay_m() {
      var self = this;
      self.pay_d = false;
      self.pay1_d = true;
      self.pay2_d = false;
      self.pay3_d = false;
      self.payId = 6;
    },
    // 线下支付
    offlinepay_m() {
      var self = this;
      self.pay_d = false;
      self.pay1_d = false;
      self.pay2_d = true;
      self.pay3_d = false;
      self.payId = 8;
    },
    //余额支付
    balance_m() {
      var self = this;
      self.pay_d = false;
      self.pay1_d = false;
      self.pay2_d = false;
      self.pay3_d = true;
    },
    //添加订单
    addorder_m() {
      var self = this;
      var i = this.address_number;
      this.ajax
        .post("/api/order/add", {
          consignee: self.goodaddress[i].consignee,
          mobile: self.goodaddress[i].mobile,
          address: self.goodaddress[i].address,
          referer: "self_site",
          rowIds: self.$route.query.rowId,
          pay_id: self.payId,
          cart_type: self.cartype,
          province: self.goodaddress[i].province,
          city: self.goodaddress[i].city,
          district: self.goodaddress[i].district,
          street: self.goodaddress[i].street
        })
        .then(function(res) {
          self.addorder = res.data.order;
          self.$Message.success("添加订单成功");
          console.log(self.addorder);
          self.$router.push({
            name: "immediatepay",
            query: { id: self.addorder.id }
          });
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            alert(err.message);
          }
        });
    }
  }
};
</script>
<style scoped>
.address_show {
  border: 3px solid grey;
  width: 320px;
  padding: 8px;
  font-size: 12px;
  margin-left: 47px;
  margin-top: 40px;
  position: relative;
  z-index: 1;
}
.active {
  background-image: url(../static.huijinjiu.com/submitorder/active.png);
  background-size: 100% 100%;
  border: none;
}
.select {
  color: red;
  border: 1px solid red;
}
.ivu-layout {
  width: 100%;
  height: 100%;
  background: url(../static.huijinjiu.com/personal/personImg.jpg) no-repeat;
  background-size: 100% 1768px;
  font-size: 16px;
}

.sider {
  background: url(../static.huijinjiu.com/personal/siderImg.png) no-repeat;
  background-size: 100% 100%;
}
.side {
  width: 100%;
  height: 100%;
}
.side .bk {
  width: 100%;
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

