<template >
  <Layout class="layout">

    <Card style="width:90%;margin:auto;margin-top:20%;margin-bottom:20px">
      <table border="1" style="width:100%;margin-bottom:5%">
        <tr>
          <td class='span'>订单号</td>
          <td class='input'>{{out_trade_no}}</td>
        </tr>
        <tr>
          <td class='span'>单价</td>
          <td class='input'>{{price}}</td>
        </tr>
        <tr>
          <td class='span'>数量</td>
          <td class='input'><input style="text-align:center" v-model="number"></td>
        </tr>
        <tr>
          <td class='span'>金额</td>
          <td class='input'>{{total_fee}}</td>
        </tr>
      </table>
      <a target="_blank" :href="'http://api.huijinjiu.com/test?out_trade_no='+out_trade_no+'&total_fee='+total_fee">
        <Button type="primary" long>提交</Button>
      </a>
    </Card>
    <Carousel  autoplay loop style="margin-top:20px">
      <CarouselItem>
        <div class="demo-carousel"><img src="http://p8htjuaac.bkt.clouddn.com/321e4de096d66a69cd4d1b862ea754b.jpg" style="width:100%"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="http://p8htjuaac.bkt.clouddn.com/321e4de096d66a69cd4d1b862ea754b.jpg" style="width:100%"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="http://p8htjuaac.bkt.clouddn.com/321e4de096d66a69cd4d1b862ea754b.jpg" style="width:100%"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="http://p8htjuaac.bkt.clouddn.com/321e4de096d66a69cd4d1b862ea754b.jpg" style="width:100%"></div>
      </CarouselItem>
    </Carousel>
  </Layout>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Age cannot be empty"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please enter a numeric value"));
        } else {
          if (value < 18) {
            callback(new Error("Must be over 18 years of age"));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    return {
     
      out_trade_no: "",
      price: 1,
      number: 1,
      formCustom: {
        passwd: "",
        passwdCheck: 1
        // age: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        age: [{ validator: validateAge, trigger: "blur" }]
      }
    };
  },
  mounted() {
    20180612;
    var len = 4;
    var $chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var maxPos = $chars.length;
    var pwd = "";
    for (var i = 0; i < len; i++) {
      //0~32的整数
      pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
    }
    var dat = new Date();
    var year = dat.getFullYear();
    var time = dat.getTime();
    var month = dat.getMonth();
    var date = dat.getDate();
    this.out_trade_no = year + "" + month + "" + date + time + pwd;
    var arr = new Array(
      "199",
      "299",
      "399",
      "499",
      "599",
      "699",
      "799",
      "899",
      "999"
    );

    this.price = arr[Math.floor(Math.random() * 9)];
    // this.price=arr[Math.floor(Math.random()*9)];
  },
  computed: {
    total_fee: function() {
      return this.price * this.number;
    }
  },
  methods: {
    handleSubmit(name) {
      // var self=this
      //  self.ajax
      //       .post("/test", {
      //         out_trade_no: self.formCustom.passwd,
      //         total_fee: self.total_fee
      //       })
      //       .then(response => {
      //       })
      //       .catch(error => {
      //         if (error.status_code == 403) {
      //           self.$Message.error(error.message);
      //           LUOCAPTCHA.reset();
      //         }
      //       });
      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     this.$Message.success("Success!");
      //   } else {
      //     this.$Message.error("Fail!");
      //   }
      // });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style scoped>
.layout {
  height: 100%;
  background-image: url("http://p8htjuaac.bkt.clouddn.com/297651089001782160.png");
}
.span {
  border: 1px solid #000;
  height: 30px;
  text-align: center;
}
.input {
  border: 1px solid #000;
  height: 30px;
  width: 70%;
  text-align: center;
}
</style>
<style>
html,body{height:100%;}
#app{
  height:100%
}
</style>
