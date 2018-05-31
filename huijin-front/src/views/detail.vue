<template>
	<div class="detail">
		<!--头部-->
		<div class="header">
			<Row>
	    		<Col span="1">&nbsp;</Col>
	    		<Col span="3">
	    			<!--<img src="../../../../images/mall/LOGO.png" class="logo"/>-->
	    		</Col>
	    		<Col span="3">&nbsp;</Col>
	    		<Col span="12">
	    			<ul>
	    				<Col span="6">
	    					<li><a href="">商城首页</a></li>
	    				</Col>
	    				<Col span="6">
	    					<li><a href="">最新资讯</a></li>
	    				</Col>
	    				<Col span="6">
	    					<li><a href="">酒品分类</a></li>
	    				</Col>
	    				<Col span="6">
	    					<li><a href="">个人中心</a></li>
	    				</Col>
	    			</ul>
	    		</Col>
	    		<Col span="5"></Col>
	    	</Row>
		</div>
		<!--内容-->
		<div class="content">
			<Row>
	    		<Col span="8" offset="1">
	    			<div class="s1">
	    				<span style="font-size: 58px;">汇金</span><span style="font-size: 42px;">原浆酒</span>
	    				<ul>
	    					<Row>
		    					<Col span="6" offset="4">
		    						<li>芝香清冽</li>
		    					</Col>
		    					<Col span="6">
		    						<li>醉时愉悦</li>
		    					</Col>
		    					<Col span="6">
		    						<li>醒后喜悦</li>
		    					</Col>
	    					</Row>
	    				</ul>
	    				<ol>
	    					<Col span="12">&nbsp;</Col>
	    					<Col span="6">
	    						<li>十年陈酿</li>
	    					</Col>
	    					<Col span="6">
	    						<li>惊世绽放</li>
	    					</Col>
	    				</ol>
	    				<!--分量-->
	    				<Row>
	    					<Col span="18" style="margin-top: 58px;">
	    						<Row>
	    							<Col span="8">
	    								<Button class="weight">1000ml</Button>
	    							</Col>
	    							<Col span="8">
	    								<Button class="weight">1000ml</Button>
	    							</Col>
	    							<Col span="8">
	    								<Button class="weight">1000ml</Button>
	    							</Col>
	    						</Row>
	    					</Col>
	    					<Col span="6">&nbsp;</Col>
	    				</Row>
	    				<!--价格-->
	    				<Row>
	    					<Col span="12" offset="1">
	    						<div class="money">
	    							¥<span style="font-size: 28px;">20000.00</span>
	    						</div>
	    						<Col span="11">&nbsp;</Col>
	    					</Col>
	    				</Row>
	    				
	    				<Row>
	    					<Col span="6">
	    						<Button class="buy">立即购买</Button>
	    						
	    					</Col>
	    					<Col span="6" offset="5">
	    						
	    						<Button class="shopcar">加入购物车</Button>
	    					</Col>
	    				</Row>
	    			</div>
	    		</Col>

	    		<Col span="14">
	    			<!--<img src="../../../../images/mall/banner.png" class="img1"/>-->
					
	    		</Col>
	    		<Col span="1">&nbsp;</Col>
   			</Row>
		</div>
		
		<!--中部内容-->
		<div class="center">
			
		</div>
		<!--脚部-->
		<div class="footer">
			<Row>
				<Col span="6">
					<!--<img src="../../../../images/wineclass/lotus.png" />-->
				</Col>

				<Col span="1">
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

				</Col>
				<Col span="4" offset="2">
					<p class="p1">注意未满十八岁,禁止购买!</p>
				</Col>
				<Col span="2" offset="3">
				<div class="gz">
					关注公众号
					<div class="we">
						加入我们
					</div>
				</div>
				</Col>
				<Col span="2" offset="1">
					<!--<img src="../../../../images/wineclass/code.png" class="img3" />-->
				</Col>
				<Col span="3">&nbsp;</Col>
			</Row>
		</div>
		
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("1");
    this.details();
  },
  methods: {
    details() {
      this.ajax
        .get("/api/goods/1")
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {});
    }
  }
};
</script>

<style scoped>
.detail {
  width: 100%;
  height: 2164px;
  /*background: url(../../../../images/detail/bg.jpg) no-repeat;*/
  /*background-size: 100% 2164px;*/
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
  border-radius: 0;
  color: red;
  border: 1px solid #b5b5b5;
  height: 28px;
  /*font-size: 9px;*/
}
.content .s1 .money {
  font-size: 37px;
  color: red;
  letter-spacing: 2px;
  margin-top: 40px;
}
.content .buy,
.content .shopcar {
  border-radius: 0;
  height: 36px;
  color: white;
  background-color: #fc9b8a;
  width: 100%;
}
/*中部内容*/
.center {
  width: 100%;
  height: 1202px;
  border: 1px solid red;
}
/*脚部*/
.footer {
  width: 100%;
  height: 252px;
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