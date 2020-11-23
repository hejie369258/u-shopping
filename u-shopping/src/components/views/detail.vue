<template>
 
<div>
     <div>
      <van-nav-bar
        :title="$route.meta.name"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
      >
          <template #right>
        <van-icon name="search" size="18" />
      </template>
      </van-nav-bar>
      <!-- 商品详情渲染 -->
      <div class="goods" v-if="goodsInfo">
      <img
        class="goodsImg"
        :src="goodsInfo.img? $imgUrl + goodsInfo.img:'https://img.yzcdn.cn/vant/apple-1.jpg'
        " alt=""/>
      <p class="goodsName">商品名称：{{ goodsInfo.goodsname }}</p>
      <p class="goodsName">价格：￥{{ goodsInfo.price }}</p>
      <p class="goodsName">
        <!-- 步进器 -->
        购买数量：<van-stepper v-model="value" />
      </p>
      <p>商品属性</p>
      <p>
        <span>{{ goodsInfo.specsname }}</span>
        规格：<van-tag
          plain
          v-for="item in specsAttr"
          :key="item"
          type="success"
          >{{ item }}</van-tag>
      </p>
      <div>
        <p>商品详情</p>
        <p v-html="goodsInfo.description"></p>
      </div>
</div>
    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button
        @click="addCart"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</div>
</template>

<script>
import { getGoodsInfo, getCartAdd } from "../../util/axios";
import{ Toast } from "vant";
export default {
  data() {
    return {
      goodsInfo: [],
      value: 1,
      specsAttr: [],
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getGoodsInfo({
        id: this.$route.query.id,
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.goodsInfo = res.list[0];
      
         this.specsAttr = this.goodsInfo.specsattr
            ? this.goodsInfo.specsattr.split(",")
            : [];
          console.log(this.goodsInfo);
        }
      });
    },
    // 封装加入购物车事件
    addCart() {
      console.log(sessionStorage.getItem("userInfo"));
      if (sessionStorage.getItem("userInfo")) {
        // 登录了  调取加入购物车的接口，在跳转到购物车列表
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goodsInfo.id,
          num: this.value,
        }).then(res => {
          Toast.success(res.msg);
          this.$router.push({
            path: "/cart",
            query: {
              id: JSON.parse(sessionStorage.getItem("userInfo")).uid,
            },
          });
        });
      } else {
        Toast.fail("当前未登录，请先登录");
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style  lang="" scoped>
@charset "utf-8";
/* 包裹盒 */
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.goodsImg {
  width: 100%;
  height: 5rem;
}
.goods p {
  font-size: 18px;
  margin-top: .5rem;
}
.van-stepper {
  display: inline;
  float: right;
}
.headCon .menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}
.headCon .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  background: #000;
  border-radius: 50%;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 1.2rem;
  padding: 0 0.5rem;
  background: #fff;
  border-top: 1px solid #ebebeb;
}
.footer a {
  display: block;
  text-align: center;
}
.footer a img {
  width: auto;
  height: 0.53rem;
}
.footer a p {
  font: 0.2rem/0.42rem "微软雅黑";
  color: #929292;
}
.footer .active p {
  color: #ff5a05;
}
body {
  background: #f0f0f0;
}
.headCon {
  display: flex;
  justify-content: space-between;
  height: 0.88rem;
  background: #f26b11;
  align-items: center;
  padding: 0.4rem 0.28rem 0 0.35rem;
}
.headCon .back img {
  width: auto;
  height: 0.29rem;
}
.headCon h2 {
  font: 0.35rem/0.88rem "微软雅黑";
  color: #fff;
}
.headCon .menu span {
  background: #fff;
}
.intro {
  background: #fff;
  padding-bottom: 0.06rem;
  margin-bottom: 0.17rem;
}
.intro .goodPic {
  display: block;
}
.intro .goodPic img {
  width: 100%;
  height: auto;
}
.intro .goodName {
  display: block;
  padding: 0.22rem 0.45rem 0 0.36rem;
  font: 0.3rem/0.48rem "微软雅黑";
  color: #323232;
}
.intro p {
  display: flex;
  font: 0.22rem/0.81rem "微软雅黑";
  color: #878787;
}
.intro p span {
  display: block;
  padding-left: 0.36rem;
  padding-right: 0.16rem;
  font: 0.3rem/0.81rem Arial;
  color: #e43a3b;
}
.main {
  background: #fff;
  margin-bottom: 0.21rem;
}
.main .discount {
  display: flex;
  height: 0.98rem;
  margin-right: 0.21rem;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  background: url(../../assets/images/arrow.jpg) no-repeat right center;
  background-size: 0.24rem 0.14rem;
}
.main .discount dt {
  font: 0.26rem/0.35rem "微软雅黑";
  color: #454545;
  text-indent: 0.25rem;
}
.main .discount dd {
  display: flex;
  font: 0.24rem/0.35rem "微软雅黑";
  color: #454545;
}
.main .discount dd span {
  display: block;
  margin: 0 0.16rem 0 0.28rem;
  width: 0.64rem;
  height: 0.35rem;
  border: 1px solid #b1271a;
  color: #b1271a;
  font: 0.2rem/0.35rem "微软雅黑";
  text-align: center;
  border-radius: 0.04rem;
  letter-spacing: 0.06rem;
}
.main .number {
  display: flex;
  height: 1.08rem;
  padding: 0 0.3rem 0 0.25rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.main .number dt {
  font: 0.26rem/0.35rem "微软雅黑";
  color: #454545;
}
.main .number dd {
  display: flex;
}
.main .number dd span {
  display: block;
  text-align: center;
  font: 0.2rem/0.57rem Arial;
}
.main .number dd .one {
  width: 0.79rem;
  height: 0.57rem;
  border-top: 1px solid #505050;
  border-bottom: 1px solid #505050;
}
.main .number dd .addOrDesc {
  width: 0.62rem;
  height: 0.57rem;
  text-align: center;
  border: 1px solid #505050;
}
.main .number dd .add {
  border-radius: 0.04rem 0 0 0.04rem;
}
.main .number dd .desc {
  border-radius: 0 0.04rem 0.04rem 0;
}
.main .attribute {
  padding: 0.13rem 0 0.38rem 0;
  margin-right: 0.21rem;
  background: url(../../assets/images/arrow.jpg) no-repeat right 0.45rem;
  background-size: 0.24rem 0.14rem;
}
.main .attribute dt {
  font: 0.26rem/0.8rem "微软雅黑";
  color: #454545;
  text-indent: 0.25rem;
}
.main .attribute dd {
  display: flex;
  font: 0.24rem/0.59rem "微软雅黑";
  color: #b4b4b4;
  padding-left: 0.26rem;
}
.main .attribute dd span {
  display: block;
}
.main .attribute dd .red {
  margin-left: 0.7rem;
  margin-right: 0.15rem;
  width: 1.5rem;
  height: 0.59rem;
  background: #e43a3d;
  text-align: center;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  border-radius: 3px;
}
.main .attribute dd .grey {
  width: 1.17rem;
  height: 0.59rem;
  background: #e1e1e3;
  text-align: center;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  border-radius: 3px;
}
.detail {
  background: #fff;
  margin-bottom: 0.3rem;
}
.detail h3 {
  font: 0.3rem/1rem "微软雅黑";
  color: #454545;
  text-indent: 0.25rem;
}
.detail img {
  display: block;
  width: 100%;
  height: auto;
}
.comment {
  background: #fff;
  margin-bottom: 1.14rem;
}
.comment h4 {
  margin: 0 0.25rem 0 0.23rem;
  font: 0.3rem/0.93rem "微软雅黑";
  color: #454545;
  border-bottom: 1px solid #eeeeee;
}
.comment .userName {
  display: block;
  padding-top: 0.14rem;
  padding-left: 0.26rem;
  font: 0.26rem/0.55rem Arial;
  color: #666666;
}
.comment .con {
  display: block;
  padding-left: 0.26rem;
  font: 0.26rem/0.55rem "微软雅黑";
  color: #474747;
}
.comment .pic {
  padding: 0.18rem 0 0.09rem 0.32rem;
}
.comment .pic img {
  width: auto;
  height: 1.51rem;
  margin-right: 0.19rem;
}
.comment .date {
  font: 0.26rem/0.76rem Arial;
  color: #999;
  margin: 0 0.23rem;
  border-bottom: 1px solid #eee;
}
.comment .num {
  display: flex;
  justify-content: space-between;
  padding: 0 0.51rem 0.1rem 0.23rem;
}
.comment .num p {
  display: flex;
  font: 0.24rem/0.81rem "微软雅黑";
  color: #999;
}
.comment .num p span {
  display: block;
  font: 0.26rem/0.81rem Arial;
}
.comment .num .more {
  position: relative;
  display: block;
  font: 0.23rem/0.81rem "微软雅黑";
  color: #999999;
}
.comment .num .more::after,
.comment .num .more::before {
  position: absolute;
  right: -0.23rem;
  top: 0.35rem;
  content: "";
  width: 0;
  height: 0;
  border-top: 0.06rem solid transparent;
  border-left: 0.06rem solid #999;
  border-bottom: 0.06rem solid transparent;
}
.comment .num .more::after {
  border-left-color: white;
  right: -0.22rem;
}
.foot {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 1.14rem;
  align-items: center;
  background: #fff;
}
.foot .active {
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 1.72rem;
}
.foot .active > div {
  position: relative;
  display: inline-block;
}
.foot .active > div img {
  width: auto;
  height: 0.53rem;
}
.foot .active > div span {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 0.24rem;
  height: 0.24rem;
  font: 0.19rem/0.24rem Arial;
  background-color: #e6393d;
  color: #fff;
  border-radius: 50%;
}
.foot .active p {
  font: 0.18rem/0.44rem "微软雅黑";
  color: #878787;
}
.foot .btn {
  display: flex;
}
.foot .btn .cart {
  display: block;
  width: 2.89rem;
  background: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  text-align: center;
}
.foot .btn .now {
  display: block;
  width: 2.89rem;
  background: #e43a3d;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  text-align: center;
}
</style>
