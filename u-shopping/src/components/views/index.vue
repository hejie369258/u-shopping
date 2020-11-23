<template>
  <div>
    

    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
  <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
  <van-tabbar-item icon="search" to='/cart'>购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to='/mine'>我的</van-tabbar-item>
 
</van-tabbar>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      active:0
    };
  },
};
</script>

<style  lang="" scoped>
.van-tabbar{
  width: 100%;
  /* height: 3rem; */
}
/* .van-tabbar-item{
  width: 3rem;
  height: 2rem;
} */
.active {
  color: rgb(92, 92, 2);
  /* background-color: yellowgreen; */
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
.footer .active  p{
  color: #ff5a05;
}
.footer .active span{
  color: #ff5a05;
}
.icon-shouye,.icon-wode,.icon-gouwuche{
font-size: .53rem;
 color: #929292;
}

</style>
