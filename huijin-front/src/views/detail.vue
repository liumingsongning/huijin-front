<template>
	<div class="detail">
		<!--头部-->
		<div class="header">
			<Row>
				<i-col span="1"> &nbsp;
				</i-col>
				<i-col span="3">
					<!--<img src="../../../../static.huijinjiu.com/mall/LOGO.png" class="logo"/>-->
				</i-col>
				<i-col span="3">&nbsp;</i-col>
				<i-col span="17">
					<ul>
						<i-col span="5">
							<li>
								<a href="">商城首页</a>
							</li>
						</i-col>
						<i-col span="5">
							<li>
								<a href="">最新资讯</a>
							</li>
						</i-col>
						<i-col span="5">
							<li>
								<a href="">酒品分类</a>
							</li>
						</i-col>
						<i-col span="5">
							<!-- <i-col span="12"> -->
							<li>
								<a href="">个人中心</a>
							</li>
							<!-- </i-col> -->
							<!-- <i-col span='12'> -->
						</i-col>
						<i-col span="4">
							<li>
								<a href="" @click='logout_m'>退出</a>
								<a href="">{{user.userinfo.qq_user?user.userinfo.qq_user.nickname:user.userinfo.name}}</a>
								<a href="" v-show="user.userinfo.qq_user"><img :src="user.userinfo.qq_user?user.userinfo.qq_user.figureurl_qq_1:''" /></a>
							</li>
							<!-- </i-col> -->
						</i-col>

					</ul>
				</i-col>
				<!-- <i-col span="5"></i-col> -->
			</Row>
		</div>
		<!--内容-->
		<div class="content">
			<Row>
				<i-col span="8" offset="1">
					<div class="s1">
						<span style="font-size: 58px;">汇金</span>
						<span style="font-size: 42px;">原浆酒</span>
						<ul>
							<Row>
								<i-col span="6" offset="4">
									<li>芝香清冽</li>
								</i-col>
								<i-col span="6">
									<li>醉时愉悦</li>
								</i-col>
								<i-col span="6">
									<li>醒后喜悦</li>
								</i-col>
							</Row>
						</ul>
						<ol>
							<i-col span="12">&nbsp;</i-col>
							<i-col span="6">
								<li>十年陈酿</li>
							</i-col>
							<i-col span="6">
								<li>惊世绽放</li>
							</i-col>
						</ol>
						<!--分量-->
						<Row>
							<i-col span="18" style="margin-top: 30px;">
								<Row v-for="(item,index) in good.goods_type.order_attr" style="margin-top:5px">
									<i-col span="4" style="text-align:center;font-size: 15px;line-height: 50px;">
										{{item.attr_name}}
									</i-col>

									<i-col span="20" style="margin-top:10px">
										<Button style="margin-left:10px" size="large" :class="{red:isCheck(i.id)}" v-for="(i,index) in item.goods_attr" @click="changeAttr(i.id)" :disabled="stockout(i.id)">{{i.attr_value}}</Button>
									</i-col>
								</Row>
							</i-col>
							<i-col span="6">&nbsp;</i-col>
						</Row>
						<!--价格-->
						<Row>
							<i-col span="12" offset="1">
								<div class="money">
									¥
									<span style="font-size: 28px;">{{good.market_price}}</span>
								</div>
								<i-col span="11">&nbsp;</i-col>
							</i-col>
						</Row>

						<Row>
							<i-col span="6">
								<Button class="buy" @click="buynow_m">立即购买</Button>
							</i-col>
							<i-col span="6" offset="5">
								<Button class="addcart" @click="addcart_m">加入购物车</Button>
							</i-col>
						</Row>
					</div>
				</i-col>

				<i-col span="14">
					<img :src="good.goods_img" class="img1" />
				</i-col>
				<i-col span="2">&nbsp;</i-col>
			</Row>
		</div>

		<!--中部内容-->
		<div class="center">

		</div>
		<!--脚部-->
		<div class="footer">
			<Row>
				<i-col span="6">
					<img src="../static.huijinjiu.com/wineclass/lotus.png" />
				</i-col>

				<i-col span="1">
					<ul>
						<li>
							<a href="">关于我们</a>
						</li>
						<li>
							<a href="">联系我们</a>
						</li>
						<li>
							<a href="">加入我们</a>
						</li>
					</ul>

				</i-col>
				<i-col span="4" offset="2">
					<p class="p1">注意未满十八岁,禁止购买!</p>
				</i-col>
				<i-col span="2" offset="3">
					<div class="gz">
						关注公众号
						<div class="we">
							加入我们
						</div>
					</div>
				</i-col>
				<i-col span="2" offset="1">
					<img src="../static.huijinjiu.com/wineclass/code.png" class="img3" />
				</i-col>
				<i-col span="3">&nbsp;</i-col>
			</Row>
		</div>

	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      good: "",
      goods: ""
    };
  },
  mounted() {
    this.details();
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
		isCheck(id){
			console.log(id);
			console.log(this.good.products[0].goods_attr);
			console.log(this.good.products[0].goods_attr.indexOf(id));
			if(this.good.products[0].goods_attr.indexOf(id)>=0){
				return true;
			}
		},
    changeAttr(id) {},
    stockout(id) {
      var object = this.good.products;
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];

          if (element.goods_attr.indexOf(id) === 0) {
            return false;
          }
        }
      }
    },
    details() {
      var self = this;
      this.ajax
        .get("/api/goods/" + self.$route.params.id)
        .then(response => {
          console.log(response.data.good);
          this.good = response.data.good;
        })
        .catch(error => {
          if (error.status_code == 404) {
            alert(error.message);
          }
        });
    },
    // 加入购物车
    addcart_m() {
      var self = this;
      this.ajax
        .post("/api/cart/add", {
          good_id: self.good.id
        })
        .then(function(res) {
          // console.log(res.data)
          self.$Message.success("添加购物车成功");
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            alert(error.message);
          }
        });
    },
    logout_m() {
      this.$store.commit("logout");
    },
    // 立即购买
    buynow_m() {
      var self = this;

      this.ajax
        .post("/api/BuyNowCart/cart", { good_id: self.good.id })
        .then(function(res) {
          console.log(res.data.cart);
          self.goods = res.data.cart;
          var rowId = [];
          rowId.push(self.goods[0].rowId);
          self.$router.push({
            name: "submitorder",
            query: {
              rowId: rowId,
              type: "buynow"
            }
          });
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    }
  }
};
</script>


<style scoped>
.red{
	border:1px solid #e20909
}
.detail {
  width: 100%;
  height: 2164px;
  background: url(../static.huijinjiu.com/detail/bg.jpg) no-repeat;
  background-size: 100% 2164px;
}
/*头部*/
.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 3px 8px #b5b5b5;
}
.header .logo {
  margin-top: 32px;
}
.header ul li {
  list-style: none;
  float: left;
  font-size: 16px;
  line-height: 116px;
  letter-spacing: 2.5px;
}
.header ul li a {
  color: #010101;
}
.header ul li:hover {
  border-bottom: 4px solid #a8d3fe;
}
/*内容*/
.content {
  width: 100%;
  margin-top: 81px;
  /*border: 1px solid;*/
}
.content .s1 {
  margin-top: 92px;
}
.content ul li,
ol li {
  float: left;
  list-style: none;
  font-size: 17px;
  color: #000000;
  margin-top: 20px;
}

.content .img1 {
  width: 100%;
  height: 521px;
}
.content .weight {
  width: 120px;
  margin-left: 10px;
  /*font-size: 9px;*/
}
.content .font {
  width: 100%;
  border-radius: 0;
  height: 28px;
}
.content .s1 .money {
  font-size: 37px;
  color: red;
  letter-spacing: 2px;
  margin-top: 40px;
}
.content .buy,
.content .addcart {
  border-radius: 0;
  height: 36px;
  color: white;
  background-color: #fc9b8a;
  width: 100%;
}
/*中部内容*/
.center {
  width: 100%;
  height: 1185px;
  /* border: 1px solid red; */
}
/*脚部*/
.footer {
  width: 100%;
  height: 252px;
  /* border: 1px solid red */
}

.footer ul {
  width: 70px;
  height: 70px;
  margin-top: 122px;
}

.footer ul li {
  font-size: 16px;
  list-style: none;
}

.footer ul li a {
  color: #838288;
}

.footer .p1 {
  color: #838288;
  font-size: 16px;
  margin-top: 156px;
}

.footer .gz {
  font-size: 16px;
  margin-top: 122px;
}

.footer .gz .we {
  text-indent: 1em;
  margin-top: 30px;
}

.footer .img3 {
  margin-top: 100px;
}
</style>