<template>
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
                <!-- 中部 -->
                <div>
                    <Row>
                        <i-col span="22" class="content">
                            <div style="font-weight:bold;padding-left:44px;height:120px;line-height:120px">个人资料</div>
                            <!--  -->
                            <Row>
                                <i-col span="12" style="padding-left:45px">
                                    <div style="height:296px;background:#858383;margin-top:64px;"></div>
                                </i-col>
                                <i-col span="9">
                                    <div style="margin-left:38px;margin-top:105px;font-size:14px">
                                        <span style="font-size:22px;font-weight:bold">用户名六个字</span><button class="redact"></button><br />
                                        <div class="data">
                                            性别: &nbsp;<span>男</span><button class="redact"></button><Br />
                                        </div>
                                        <div class="data">
                                             生日:
                                            <Select style="width:64px;margin-left:6px" size="small">
                                                <Option v-for="year in years" :value = "year.value" :key="year.value">{{year.label}}</Option>
                                            </Select>   
                                            <Select style="width:64px;margin-left:6px" size="small">
                                                <Option v-for="month in months" :value = "month.value" :key="month.value">{{month.label}}</Option>
                                            </Select>
                                            <Select style="width:64px;margin-left:6px" size="small">
                                                <Option v-for="day in days" :value = "day.value" :key="day.value">{{day.label}}</Option>
                                            </Select>
                                            <button class="redact"></button><Br />
                                        </div>
                                        <div class="data">
                                             <span>实名认证: &nbsp;未认证</span> <a style="float:right;color:#01338d">去认证</a>
                                        </div>
                                        <div class="data">
                                            <span>酒业会员: &nbsp;V1</span>
                                        </div>
                                       <div class="data">
                                            <span>手机验证: &nbsp;150****0976</span> <a style="float:right;color:#01338d">立即修改</a>
                                        </div>
                                    </div>
                                </i-col>
                                <i-col span="3">&nbsp;</i-col>
                            </Row>
                            <!-- 地址管理 -->
                            <div style="width:700px;margin-left:auto;margin-right:auto;margin-top:82px;">
                                <h4 style="text-align:center">收货地址管理</h4>
                                <div class="detail"  v-for="item in goodaddress" >
                                    <div>
                                        <span style="color:#595959">{{item.consignee}}</span> <a style="float:right" @click="deleteaddress_m(item.id)"> 删除</a>
                                    </div>
                                    <div style="padding-left:13px;margin-top:20px">
                                         收货人: &nbsp;<span style="color:#595959">{{item.consignee}}</span>
                                    </div>
                                    <div style="margin-top:8px">
                                        所在地区: &nbsp;<span style="color:#595959">{{areaData[item.country][item.province]+areaData[item.province][item.city]+areaData[item.city][item.district]+areaData[item.district][item.street]}}</span>
                                    </div>
                                    <div style="margin-top:8px">
                                        详细地址: &nbsp;<span style="color:#595959">{{item.address}}</span>
                                    </div>
                                    <div style="margin-top:8px">
                                        手机号码: &nbsp;<span style="color:#595959">{{item.mobile}}</span>
                                    </div>
                                    <div style="margin-top:8px">
                                        固定电话: &nbsp;<span style="color:#595959">{{item.tel}}</span>
                                    </div>
                                    <div style="float:right;">
                                        <a style="color:#023491;padding-right:10px">设为默认</a>
                                        <a style="color:#023491" @click="updateaddress_m(item)">编辑</a>
                                    </div>
                                </div>
                                
                                <Card style="width:600px;margin-left:auto;margin-right:auto;" v-show="!site" >
                                  <div>
                                  收货人:<Br />
                                  <Input type="text" style="width:230px" clearable v-model="consignee_d"></Input><Br />
                                  所在地区:<Br />
                                  <al-selector  v-model="resArr"/>
                                  详细地址:<Br />
                                  <Input type="text" style="width:474px" clearable v-model="address_d"></Input><Br />
                                  <div style="float:left">
                                      手机号码:<Br />
                                      <Input type="text" style="width:230px" clearable v-model="mobile_d"></Input>
                                  </div>
                                  <span style="margin-left:15px" >固定电话:</span>
                                  <Br />
                                  <Input type="text"  style="width:230px;margin-left:15px" clearable v-model="tel_d"></Input><Br />
                                  邮箱:<Br />
                                  <Input type="text" style="width:230px" clearable v-model="email_d"></Input><Br />
                                  <!-- 地址别名:<Br /> -->
                                  <!-- <Input type="text" style="width:230px" clearable ></Input><Br /><Br /> -->
                                   <Button @click="address_m" v-show="btn">保存收货地址</Button>
                                   <Button @click="update(rowId)" v-show="!btn">更新收货地址</Button>
                                   
                                  </div>
                                </Card> 

                                <div style="text-align:center;">
                                    <Button style="background:#f8fcff;margin-top:20px" @click="site=false">添加收货地址</Button>
                                </div>
                            </div>
                        </i-col>
                        <!-- <i-col span="3">&nbsp;</i-col> -->

                    </Row>
                </div>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import areaData from 'area-data';
export default {
  data() {
    return {
      resArr: [],
      site: true,
      goodaddress: [],
      consignee_d: "",
      address_d: "",
      mobile_d: "",
      tel_d: "",
      email_d: "",
      pca:{},
      rowId:"",
      btn:true,

      years: [
        {
          value: "2011",
          label: "2011"
        },
        {
          value: "2010",
          label: "2010"
        },
        {
          value: "2009",
          label: "2009"
        },
        {
          value: "2008",
          label: "2008"
        },
        {
          value: "2007",
          label: "2007"
        },
        {
          value: "2006",
          label: "2006"
        }
      ],
      months: [
        {
          value: "1月",
          label: "1月"
        },
        {
          value: "2月",
          label: "2月"
        },
        {
          value: "3月",
          label: "3月"
        },
        {
          value: "4月",
          label: "4月"
        },
        {
          value: "5月",
          label: "5月"
        },
        {
          value: "6月",
          label: "6月"
        },
        {
          value: "7月",
          label: "7月"
        },
        {
          value: "8月",
          label: "8月"
        },
        {
          value: "9月",
          label: "9月"
        },
        {
          value: "10月",
          label: "10月"
        },
        {
          value: "11月",
          label: "11月"
        },
        {
          value: "12月",
          label: "12月"
        }
      ],
      days: [
        {
          value: "1日",
          label: "1日"
        },
        {
          value: "2日",
          label: "2日"
        },
        {
          value: "3日",
          label: "3日"
        },
        {
          value: "4日",
          label: "4日"
        },
        {
          value: "5日",
          label: "5日"
        },
        {
          value: "6日",
          label: "6日"
        },
        {
          value: "7日",
          label: "7日"
        },
        {
          value: "8日",
          label: "8日"
        },
        {
          value: "9日",
          label: "9日"
        },
        {
          value: "10日",
          label: "10日"
        },
        {
          value: "11日",
          label: "11日"
        },
        {
          value: "12日",
          label: "12日"
        },
        {
          value: "13日",
          label: "13日"
        },
        {
          value: "14日",
          label: "14日"
        },
        {
          value: "15日",
          label: "15日"
        },
        {
          value: "16日",
          label: "16日"
        },
        {
          value: "17日",
          label: "17日"
        },
        {
          value: "18日",
          label: "18日"
        },
        {
          value: "19日",
          label: "19日"
        },
        {
          value: "20日",
          label: "20日"
        },
        {
          value: "21日",
          label: "21日"
        },
        {
          value: "22日",
          label: "22日"
        },
        {
          value: "23日",
          label: "23日"
        },
        {
          value: "24日",
          label: "24日"
        },
        {
          value: "25日",
          label: "25日"
        },
        {
          value: "26日",
          label: "26日"
        },
        {
          value: "27日",
          label: "27日"
        },
        {
          value: "28日",
          label: "28日"
        },
        {
          value: "29日",
          label: "29日"
        },
        {
          value: "30日",
          label: "30日"
        },
        {
          value: "31日",
          label: "31日"
        }
      ]
    };
  },
  mounted (){
    this.areaData=areaData;
  },
  methods: {
    //添加地址
    address_m() {
      var self = this;
      this.site = true;
      this.ajax
        .post("/api/address", {
          consignee: self.consignee_d,
          email: self.email_d,
          tel: self.tel_d,
          mobile: self.mobile_d,
          address: self.address_d,
          province: self.resArr[0].code,
          city: self.resArr[1].code,
          district: self.resArr[2].code,
          street: self.resArr[3].code,
          
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
        .delete("/api/address/"+id)
        .then(function(res) {
          self.goodaddress = res.data.address
        })
        .catch(function(err) {
          if (err.status_code == 403) {
            alert(err.message);
          }
        });
    },
    //修改地址
    updateaddress_m(item) {
      var self = this;
      this.site = false;
      this.btn = false;
      self.consignee_d = item.consignee;
      self.email_d = item.email;
      self.mobile_d = item.mobile;
      self.address_d = item.address;
      self.tel_d = item.tel;
      
      self.rowId = item.id;
      console.log(item.province);
    },
    //确认修改
    update(id) {
        var self = this;
        this.site = true;
        
        this.ajax.put("/api/address/"+id,{
          consignee: self.consignee_d,
          email: self.email_d,
          mobile: self.mobile_d,
          address: self.address_d,
          tel:self.tel_d,
          province: self.resArr[0].code,
          city: self.resArr[1].code,
          district: self.resArr[2].code,
          street: self.resArr[3].code,
          
        })
        .then(function(res){
            self.goodaddress = res.data.address 
            console.log(res.data.address)

        }).catch(function(err){
            if (err.status_code == 403) {
            alert(err.message);
          }
        })
    }


  }
};
</script>
<style scoped>
.ivu-layout {
  width: 100%;
  height: 1368px;
  background: url(../static.huijinjiu.com/personal/personImg.jpg) no-repeat;
  background-size: 100% 1368px;
  font-size: 16px;
}
.sider {
  height: 1368px;
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
  margin-left: 24px;
  height: 1236px;
  margin-top: 10px;
  background: url(../static.huijinjiu.com/personaldata/bj.png) no-repeat;
  background-size: 100% 100%;
}
.content .redact {
  width: 16px;
  height: 16px;
  background: url(../static.huijinjiu.com/personaldata/redact.png) no-repeat 100% 100%;
  border: none;
  outline: none;
  margin-left: 14px;
}
.content .data {
  margin-top: 20px;
}
.content .detail {
  width:100%;
  border: 2px solid #bfbfbf;
  height: 196px;
  margin-top: 56px;
  padding: 8px;
  font-size: 12px;
  color: #8c8c8c;
  
  
  
}
</style>

