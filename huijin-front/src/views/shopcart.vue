<template>
    <div class="shopcart">
        <Layout>
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
                <!-- 内容 -->
                <div>
                    <Row>
                        <i-col span="22" class="content">
                            <div style="font-weight:bold;margin-top:25px">我的购物车</div>
                            <!--  -->
                            <Row>
                                <table style="width:100%" class="tab">
                                    <tr>
                                        <i-col span="3">
                                            <th>
                                                <Checkbox style="letter-spacing:3px;padding-left:11px" :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                                            </th>
                                        </i-col>
                                        <i-col span="11">
                                            <th style="padding-left:80px">
                                                商品
                                            </th>
                                        </i-col>
                                        <i-col span="3">
                                            <th>
                                                单价
                                            </th>
                                        </i-col>
                                        <i-col span="3">
                                            <th>
                                                数量
                                            </th>
                                        </i-col>
                                        <i-col span="2">
                                            <th>
                                                小计
                                            </th>
                                        </i-col>
                                        <i-col span="2">
                                            <th>
                                                操作
                                            </th>
                                        </i-col>
                                    </tr>
                                </table>
                            </Row>
                            <!-- 官方商品 -->
                  
                            <div style="height:41px;line-height:41px">
                                <Checkbox style="letter-spacing:3px;padding-left:11px">
                                    官方商品
                                </Checkbox>
                            </div>
                            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                <!--  -->
                                <Row>
                                    <table style="width:100%" class="tab1">
                                        <tr v-for="(item,index) in carts">
                                            <i-col span="3">
                                                <td style="padding-top:20px">
                                                    <Checkbox :label="index" style="letter-spacing:3px;margin-left:6px" >{{item.model.goods_name}}</Checkbox>
                                                </td>
                                            </i-col>
                                            <i-col span="4">
                                                <td style="float:left;padding-top:20px">
                                                    <!-- <div style="width:79px;height:79px;float:left"><img :src="item.model.goods_img+'?imageView2/1/w/100/h/100'" style="width:100%"></div> -->
                                                    <div style="width:79px;height:79px;float:left"><img :src="item.products.goods_attr_img+'?imageView2/1/w/100/h/100'" style="width:100%"></div>
                                                    
                                                    <div style="float:left;padding-left:10px;line-height:25px">
                                                        <span>{{item.model.goods_name}}</span>
                                                        <Br />
                                                        <span>出产日期: 2013-07-15</span>
                                                        <Br />
                                                        <span>储藏年限: 10年</span>
                                                        <Br />
                                                    </div>
                                                </td>
                                                
                                            </i-col>
                                            <i-col span="7">
                                                <td v-for="i in item.atts" style="margin-left:5px;padding-top:40px">
                                                    {{i.attribute.attr_name}}:{{i.attr_value}}
                                                </td>
                                            </i-col>
                                            <i-col span="2">
                                                <td style="padding-top:20px">
                                                    ¥{{item.price}}
                                                </td>
                                            </i-col>
                                            <i-col span="4">
                                                <td style="padding-left:30px;padding-top:20px">
                                                    <button type="button" class="minus" @click="minuscart_m(item.rowId)">-</button>
                                                    <div class="qty">{{item.qty}}</div>
                                                    <button type="button" class="add" @click="addcart_m(item.rowId)">+</button>
                                                </td>
                                            </i-col>
                                            <i-col span="2">
                                                <td style="padding-top:20px">
                                                    ¥{{item.subtotal}}
                                                </td>
                                            </i-col>
                                            <i-col span="2">
                                                <td style="padding-top:20px">
                                                    <a style="color:#939393" @click="removecart_m(item.rowId)">删除</a>
                                                    <Br />
                                                    <a style="color:#939393">加入收藏</a>
                                                </td>
                                            </i-col>
                                        </tr>

                                    </table>
                                </Row>
                            </CheckboxGroup>
                            <Row>
                                <div style="width:100%" class="footer">
                                    <i-col span="15">
                                        <Button @click="clearcart_m" style="letter-spacing:3px;padding-left:11px">清空购物车</Button>
                                    </i-col>
                                    <i-col span="6">
                                        总价: &nbsp;&nbsp;
                                        <span style="color:red">¥{{totalMoney}}</span>
                                    </i-col>
                                    <i-col span="3">
                                        <button type="button" @click="close" style="width:100%;background:red;color:white;border:none;outline:none">结算</button>
                                    </i-col>
                                </div>
                            </Row>
                        </i-col>
                        <i-col span="2">
                            &nbsp;
                        </i-col>
                    </Row>
                </div>

            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
      carts: [],
      checkedAll: false,
      indeterminate: true,
      checkAllGroup: [],
      cartAll: [],
      checkAll: false
    };
  },
  mounted() {
    this.displaycart_m();
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        var arr = [];
        
        for (const key in this.carts) {
            if (this.carts.hasOwnProperty(key)) {
            arr.push(parseInt(key));
            }
        }
        
        this.checkAllGroup =arr;
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.carts.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    displaycart_m() {
      var self = this;
      this.ajax
        .get("/api/cart/display")
        .then(function(res) {
          var cart = (self.carts = res.data.cart);
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },

    // 删除
    removecart_m(id) {
      var self = this;
      if (confirm("确定要删除吗?")) {
        this.ajax
          .post("/api/cart/remove", {
            rowId: id
          })
          .then(function(res) {
            self.carts = res.data.cart;
          })
          .catch(function(err) {
            if (err.status_code == 422) {
              console.log(err.message);
            }
          });
      }
    },
    // 增加
    addcart_m(id) {
      var self = this;
     
      this.ajax
        .post("/api/cart/plus", {
          rowId: id
        })
        .then(function(res) {
          self.carts = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },
    // 减少
    minuscart_m(id) {
      var self = this;
      this.ajax
        .post("/api/cart/minus", {
          rowId: id
        })
        .then(function(res) {
          self.carts = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },
    // 清空购物车
    clearcart_m() {
      var self = this;
      this.ajax
        .post("/api/cart/clear")
        .then(function(res) {
          self.carts = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },
    //结算
    close() {
      var self = this;
      var rowId=[];
      for (const key in this.checkAllGroup) {
          if (this.checkAllGroup.hasOwnProperty(key)) {
              rowId.push(this.carts[key].rowId);
          }
      }

      this.$router.push({
        name: "submitorder",
        query: {rowId:rowId}
      });
    }
  },
  computed:{
        totalMoney() {
            var total = 0;
            for (const key in this.checkAllGroup) {
                if (this.checkAllGroup.hasOwnProperty(key)) {
                total += this.carts[key].subtotal;
                }
            }
            return total;
        }
  }

};
</script>
<style scoped>

.ivu-layout {
  width: 100%;
  height:960px;
  font-size: 16px;
  background: url(../static.huijinjiu.com/shopcart/beijing.jpg) no-repeat;
  background-size: 100% 100%;
}
/* 侧边栏 */
.sider {
  width: 100%;
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
  /* height: 637px; */
  background: url(../static.huijinjiu.com/shopcart/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  padding: 6px;
  margin-left: 32px;
}
.content .tab {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  height: 42px;
  color: #939393;
  font-size: 12px;
  margin-top: 5px;
  line-height: 42px;
}
.content .tab1 {
  height: 150px;
  color: #939393;
  font-size: 12px;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
  /* padding-top: 20px; */
}

.content .minus {
  width: 24px;
  height: 22px;
  border: 1px solid #aaaaaa;
  outline: 0;
  float: left;
}
.content .qty {
  width: 50px;
  text-align: center;
  border: none;
  height: 22px;
  border: 1px solid #aaaaaa;
  float: left;
  line-height: 22px;
}
.content .add {
  width: 24px;
  height: 22px;
  border: 1px solid #aaaaaa;
  outline: 0;
}
/* 脚部 */
.footer {
  height: 40px;
  background-color: #ffffff;
  line-height: 40px;
  /* margin-top: 200px; */
}
</style>


