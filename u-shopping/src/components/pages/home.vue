<template>
  <div>
    <div class="page" id="box" v-cloak>
      <!-- header头部 -->
      <header class="headCon">
        <a class="logo" href="index.html"
          ><img src="../../assets/images/logo.jpg" alt="logo"
        /></a>
        <input class="search" type="search" placeholder="寻找商品" />
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- nav导航 -->
      <nav class="navbar">
        <ul class="clearfix">
      
          <!-- 轮播图 -->
          

          <router-link activeClass="active" to="/detail">
            <li><a href="#">商品详情</a></li>
          </router-link>
          <router-link activeClass="active" to="/list">
            <li><a href="#">商品列表</a></li>
          </router-link>
          <router-link activeClass="active" to="/orderConfirm">
            <li><a href="#">确认订单</a></li>
          </router-link>
          <router-link activeClass="active" to="/login">
            <li><a href="#">登录</a></li>
          </router-link>
          <router-link activeClass="active" to="/register">
            <li><a href="#">注册</a></li>
          </router-link>

          <router-link activeClass="active" to="/cart">
            <li><a href="#">购物车</a></li>
          </router-link>
          <router-link activeClass="active" to="/mine">
            <li><a href="#">我的</a></li>
          </router-link>
          <li><a href="#">女装</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">女装</a></li>
        </ul>
 
      </nav>

      <!-- banner -->
             <div >  

          <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
  <van-swipe-item v-for="item in bannerList1" :key="item.id">
                  <img :src="$imgUrl + item.img" />
            </van-swipe-item>
</van-swipe>
        <!-- <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.id">
                  <img :src="$imgUrl + item.img" />
            </van-swipe-item>
          </van-swipe> -->
          </div>
      <!-- <div class="banner">
        <a href="#"><img src="../../assets/images/banner.jpg" alt="banner" /></a>
      </div> -->

      <ul class="icons">
        <li>
          <a href="#">
            <img src="../../assets/images/indexicon1.jpg" alt="icons" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/indexicon2.jpg" alt="icons" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/indexicon3.jpg" alt="icons" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <router-link activeClass="active" to="/sort">
            <!-- <a href="sort.html"> -->
            <img src="../../assets/images/indexicon4.jpg" alt="icons" />
            <p>商品分类</p>
            <!-- </a> -->
          </router-link>
        </li>
      </ul>

<van-grid route>
  <van-grid-item to="/cart" icon="todo-list" text="限时抢购" />
  <van-grid-item to="/orderConfirm" icon="shop-collect" text="积分商城" />
  <van-grid-item to="/mine" icon="phone-circle" text="联系我们" />
  <van-grid-item to="/sort" icon="balance-list" text="商品分类" />
</van-grid>


      <!-- 限时秒杀limitTime -->
      <div class="limitTime">
        <div class="itemsL">
          <h3>
            <a href="#">限时秒杀</a>
          </h3>
          <p class="txt">
            <a href="#">每天零点场 优惠秒不停</a>
          </p>
          <p class="time clearfix">
            <span class="dotted">02</span>
            <span class="dotted">16</span>
            <span>45</span>
            <span class="yellow"> 秒杀 </span>
          </p>
          <div class="img">
            <a href="#"
              ><img src="../../assets/images/shop_5.jpg" alt="shop_5"
            /></a>
          </div>
          <div class="posi">&yen;14.8</div>
        </div>
        <div class="itemsR">
          <div class="brand">
            <div class="txt">
              <h3>
                <a href="#">品牌上新</a>
              </h3>
              <p><a href="#">每日九点 抢大牌</a></p>
              <a href="#" class="pic"
                ><img src="../../assets/images/brand.jpg" alt="brand"
              /></a>
            </div>
            <a href="#" class="picR"
              ><img src="../../assets/images/indexshop.jpg" alt="shop"
            /></a>
          </div>
          <div class="item">
            <div class="left">
              <h3><a href="#">每日十件</a></h3>
              <p><a href="#">只为你选好货</a></p>
              <a href="#" class="itemPic"
                ><img src="../../assets/images/indexship2.jpg" alt="shop"
              /></a>
            </div>
            <div class="right">
              <h3><a href="#">拼啊</a></h3>
              <p><a href="#">超级好价拼团</a></p>
              <a href="#" class="itemPic2"
                ><img src="../../assets/images/shop_3.jpg" alt="shop"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <!-- ads -->
      <div class="ads">
        <a href="#">
          <img src="../../assets/images/bar.jpg" alt="ads" />
        </a>
      </div>

    <!-- table标签 -->
<van-tabs type="card">
  <van-tab title="发现新品">
    <!-- 商品卡片 -->
    <van-card 
  v-for="item in newsList"
  :key="item.id"
  num="2"
  price='2'
  market_price='233'
  desc="描述信息"
  :title='item.goodsname'
  :thumb="item.img ?$imgUrl+item.img:'https://img.yzcdn.cn/vant/ipad.jpeg'"
  /></van-tab>
  <van-tab title="热门推荐">
 <!-- 商品卡片 -->
    <van-card 
  v-for="item in hotsList"
  :key="item.id"
  num="2"
  price='1999'
  market_price='2999'
  desc="描述信息"
  :title='item.goodsname'
  :thumb="item.img?$imgUrl+item.img:'https://img.yzcdn.cn/vant/ipad.jpeg'"
  />
  </van-tab>
  <van-tab title="所有商品">
     <!-- 商品卡片 -->
    <van-card 
  v-for="item in goodsList"
  :key="item.id"
  num="2"
  price='1999'
  market_price='2999'
  desc="描述信息"
  :title='item.goodsname'
  :thumb="item.img?$imgUrl+item.img:'https://img.yzcdn.cn/vant/ipad.jpeg'"
  />
  </van-tab>
</van-tabs>

<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="search">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
</van-tabbar>

    </div>
  </div>
</template>

<script>
 import {getBanner,getIndexGoods}  from '../../util/axios'
 import axios from 'axios'
 import {Toast} from 'vant'
export default {
 
  data() {
    return {
      bannerList1:[],
      newsList:[],
      hotsList:[],
      goodsList:[], 
        active:0
    };
  },
   mounted() {
    //组件加载获取轮播图接口
    //组件加载获取商品信息
    /* 
    并发处理
    import axios from 'axios'
    axios.all([接口1，接口2...])
    .then(axios.spread((响应1,响应2)=>{

    }))
    */
    //并发处理
    axios.all([getBanner(), getIndexGoods()]).then(
      axios.spread((bannerList, indexGoods) => {
        console.log(bannerList, "响应1");
        console.log(indexGoods, "响应2");
        if (bannerList.code == 200) {
          this.bannerList1 = bannerList.list;
          console.log(this.bannerList1);
          //   Toast.success(bannerList.msg);
        } else {
          Toast.fail(bannerList.msg);
        }
        if (indexGoods.code == 200) {
          this.newsList = indexGoods.list[0].content;
          this.hotsList = indexGoods.list[1].content;
          this.goodsList = indexGoods.list[2].content;
        } else {
          Toast.fail(indexGoods.msg);
        }
      })
    );
  },

};
</script>

<style  lang="" scoped>
@charset "utf-8";
.van-swipe{
  height: 2.4rem;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    position: absolute;
    z-index: 1000;
  }
.van-swipe-item img{
  width: 100%;
  height: 2.4rem;
  
}
.icon{
  font-size: 24px;
}
.todo-list{
  color: #f26b11;
}
/* 包裹盒 */
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.van-tab{
  width: 3rem;
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

body {
  background: #f1f1f1;
}
.headCon {
  height: 0.88rem;
  padding: 0.4rem 0.23rem 0;
  background: #fff;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
}
.headCon .logo img {
  width: auto;
  height: 0.29rem;
}
.headCon .search {
  width: 3.04rem;
  height: 0.39rem;
  background: #eee;
  font: 0.18rem/0.39rem "微软雅黑";
  color: #bbb;
  text-align: center;
  border-radius: 0.06rem;
}
.navbar {
  position: relative;
  overflow: hidden;
  background: #fff;
  padding-left: 0.12rem;
}
.navbar ul {
  padding-top: 0.23rem;
  width: 100rem;
}
.navbar ul li {
  float: left;
}
.navbar ul li a {
  display: block;
  font: 0.18rem/0.32rem "微软雅黑";
  color: #2d2d2d;
  margin: 0 0.2rem;
  padding-bottom: 0.17rem;
  border-bottom: 0.04rem solid transparent;
}
.navbar ul .active {
  position: relative;
}
.navbar ul .active a {
  border-bottom-color: #ff003e;
  color: #b60033;
}
.navbar ul .active::after {
  content: "";
  width: 1px;
  height: 0.32rem;
  background: #f1f1f1;
  position: absolute;
  right: 0;
  top: 0;
}
.navbar div {
  position: absolute;
  top: 0.06rem;
  right: 0;
  width: 0.75rem;
  height: 0.69rem;
  background: #ffffff url(../../assets/images/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.banner a {
  display: block;
}
.banner a img {
  width: 100%;
  height: auto;
}
.icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1.79rem;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.icons li {
  text-align: center;
}
.icons li a {
  display: block;
}
.icons li a img {
  width: auto;
  height: 0.62rem;
}
.icons li a p {
  font: 0.28rem/0.69rem "微软雅黑";
  color: #5a5a5a;
}
.limitTime {
  display: flex;
  background: #fff;
  border-bottom: 0.02rem solid #f0f0f0;
}
.limitTime > div {
  flex-grow: 1;
}
.limitTime .itemsL {
  position: relative;
  padding-top: 0.14rem;
  padding-left: 0.17rem;
  border-right: 1px solid #f0f0f0;
}
.limitTime .itemsL h3 {
  position: relative;
}
.limitTime .itemsL h3 a {
  display: block;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff064f;
  text-indent: 0.45rem;
}
.limitTime .itemsL h3::before {
  content: "";
  width: 0.33rem;
  height: 0.31rem;
  background: url(../../assets/images/timer.jpg) no-repeat left top;
  background-size: 0.33rem 0.31rem;
  position: absolute;
  left: 0;
  top: 0.03rem;
}
.limitTime .itemsL .txt {
  padding-bottom: 0.04rem;
}
.limitTime .itemsL .txt a {
  display: block;
  font: 0.22rem/0.29rem "微软雅黑";
  color: #808080;
}
.limitTime .itemsL .time {
  padding-left: 0.03rem;
}
.limitTime .itemsL .time span {
  display: block;
  float: left;
  width: 0.43rem;
  height: 0.43rem;
  background: #27272f;
  color: #fff;
  border-radius: 0.06rem;
  text-align: center;
  line-height: 0.43rem;
  margin-right: 0.17rem;
}
.limitTime .itemsL .time .dotted {
  position: relative;
}
.limitTime .itemsL .time .dotted::after,
.limitTime .itemsL .time .dotted::before {
  content: "";
  width: 0.03rem;
  height: 0.03rem;
  background: #27272f;
  position: absolute;
  right: -0.1rem;
  top: 0.16rem;
}
.limitTime .itemsL .time .dotted::after {
  top: 0.24rem;
}
.limitTime .itemsL .time .yellow {
  width: 0.96rem;
  background: url(../../assets/images/bg.jpg) no-repeat center;
  background-size: 0.96rem 0.4rem;
  margin: 0 0 0 0.26rem;
  color: #59460b;
}
.limitTime .itemsL .img {
  padding: 0.31rem 0 0 0.42rem;
}
.limitTime .itemsL .img img {
  height: 2rem;
  width: auto;
}
.limitTime .itemsL .posi {
  position: absolute;
  right: 0.3rem;
  bottom: 0.29rem;
  width: 0.84rem;
  height: 0.84rem;
  background: #ff327a;
  color: #fff;
  text-align: center;
  font: 0.26rem/0.84rem "微软雅黑";
  border-radius: 50%;
}
.limitTime .itemsR .brand {
  border-bottom: 1px solid #efefef;
  display: flex;
}
.limitTime .itemsR .brand .txt h3 {
  padding-top: 0.14rem;
  position: relative;
}
.limitTime .itemsR .brand .txt h3 a {
  display: block;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff064f;
  text-indent: 0.18rem;
}
.limitTime .itemsR .brand .txt h3::after {
  content: "折";
  width: 0.33rem;
  height: 0.25rem;
  font: 0.18rem/0.25rem "微软雅黑";
  background: #fe175b;
  color: #fff;
  text-align: center;
  position: absolute;
  left: 1.48rem;
  top: 0.2rem;
}
.limitTime .itemsR .brand .txt p a {
  display: block;
  font: 0.22rem/0.29rem "微软雅黑";
  color: #808080;
  text-indent: 0.18rem;
}
.limitTime .itemsR .brand .txt .pic {
  padding: 0.19rem 0 0 0.19rem;
  display: block;
}
.limitTime .itemsR .brand .txt .pic img {
  width: auto;
  height: 0.32rem;
}
.limitTime .itemsR .brand .picR {
  display: block;
  padding: 0.05rem 0 0.05rem 0.33rem;
}
.limitTime .itemsR .brand .picR img {
  width: auto;
  height: 1.78rem;
}
.limitTime .itemsR .item {
  display: flex;
}
.limitTime .itemsR .item > div {
  flex-grow: 1;
  padding-top: 0.14rem;
}
.limitTime .itemsR .item > div h3 a {
  display: block;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff064f;
  text-indent: 0.18rem;
}
.limitTime .itemsR .item > div p a {
  display: block;
  font: 0.22rem/0.29rem "微软雅黑";
  color: #808080;
  text-indent: 0.18rem;
}
.limitTime .itemsR .item .left {
  border-right: 1px solid #f0f0f0;
}
.limitTime .itemsR .item .left .itemPic {
  display: block;
  padding: 0.04rem 0 0 0.59rem;
}
.limitTime .itemsR .item .left .itemPic img {
  width: auto;
  height: 1.02rem;
}
.limitTime .itemsR .item .right .itemPic2 {
  display: block;
  padding: 0.13rem 0 0.09rem 0.42rem;
}
.limitTime .itemsR .item .right .itemPic2 img {
  width: auto;
  height: 1.02rem;
}
.ads {
  margin: 0.28rem 0;
}
.ads a {
  display: block;
}
.ads a img {
  width: 100%;
  height: auto;
}
.goods {
  background: #fff;
  padding-bottom: 0.28rem;
  margin-bottom: 1.2rem;
}
.goods .title {
  display: flex;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
}
.goods .title > li {
  flex-grow: 4;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  text-align: center;
}
.goods .title > li a {
  display: block;
  font: 0.28rem/0.68rem "微软雅黑";
  color: #0c0c0c;
}
.goods .title .active {
  border: none;
  background: #f26b11;
}
.goods .title .active a {
  font: 0.28rem/0.68rem "微软雅黑";
  color: #fff;
}
.goods .con {
  padding: 0 0.17rem;
}
.goods .con > li {
  display: flex;
  padding: 0.31rem 0 0.25rem 0.36rem;
  box-shadow: 0 0 0.1rem #eaeaea;
  margin-bottom: 0.34rem;
}
.goods .con > li .goodPic img {
  padding: 0.23rem 0.51rem 0 0;
  width: auto;
  height: 2.2rem;
}
.goods .con > li .goodInfo h4 a {
  font: 0.28rem/0.57rem "微软雅黑";
  color: #363636;
}
.goods .con > li .goodInfo .price {
  font: 0.26rem/0.52rem "微软雅黑";
  color: #f03546;
}
.goods .con > li .goodInfo .bought {
  font: 0.2rem/0.58rem "微软雅黑";
  color: #949494;
  padding-bottom: 0.13rem;
}
.goods .con > li .goodInfo .btn {
  display: block;
  width: 1.64rem;
  height: 0.52rem;
  color: #fff;
  font: 0.24rem/0.52rem "微软雅黑";
  background: #f26b11;
  text-align: center;
  border-radius: 0.06rem;
}
.goods .con .marB0 {
  margin-bottom: 0;
}
.active {
  color: #f26b11;
}
</style>
