<template>
  <div>
    <div class="page">
      <van-nav-bar
        title="分类"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
        @click-right="$router.push('/register')"
      />
      <div class="list">
      <!-- 左侧边栏  循环一件分类商品-->
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item :title="item.catename" v-for="item in firstList" :key="item.id" />
      </van-sidebar>
      <!-- 二级分类宫格 -->
      <!-- <van-grid>
        <van-grid-item icon="photo-o" text="文字" v-for="item in secondList" :key="item.id" />
        <van-grid-item icon="photo-o" text="文字" />
   
      </van-grid> -->
<van-grid :border="false" :column-num="3">
  <van-grid-item v-for="item in secondList" :to='"/list?id="+item.id' :key="item.id">
    <van-image :src="item.img? $imgUrl+item.img :'https://img.yzcdn.cn/vant/apple-1.jpg'" />
    <span class="cont">{{item.catename}}</span>
  </van-grid-item>
</van-grid>

</div>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../../util/axios";
export default {
  data() {
    return {
      activeKey: 0,
      firstList: [],
      secondList: [],
    };
  },
  mounted() {
    this.getCateTreeList();
  },
  methods: {
    onChange(e) {
      this.secondList = this.firstList[e].children;
    },
    getCateTreeList() {
      getCateTree().then(res=> {
        console.log(res, "树");
        if (res.code == 200) {
          this.firstList = res.list;
          this.secondLiist = res.list[this.activeKey].children;
        }
      });
    },
  }
}
</script>

<style  lang="" scoped>
@charset "utf-8";
/* 包裹盒 */
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.van-grid{
  flex: 1;
}
.list{
  display: flex;
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
.headCon {
  display: flex;
  justify-content: space-between;
  height: 0.88rem;
  background: #f26b11;
  align-items: center;
  padding: 0.4rem 0.28rem 0 0.35rem;
  border-bottom: 0.02rem solid #f1f1f1;
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
.main {
  display: flex;
  margin-bottom: 1.2rem;
}
.main .type {
  padding-bottom: 0.84rem;
  padding-top: 0.38rem;
  border-right: 1px solid #d9d9d9;
  width: 1.63rem;
  flex-shrink: 0;
}
.main .type li {
  text-align: center;
  border-left: 0.08rem solid transparent;
  margin-bottom: 0.62rem;
}
.main .type li a {
  display: block;
  font: 0.26rem/0.52rem "微软雅黑";
  color: #666;
}
.main .type .active {
  border-left-color: #f26b11;
}
.main .type .active a {
  color: #f26b11;
}
.main .sortItems {
  padding-top: 0.07rem;
}
.main .sortItems .smallItems h4 {
  position: relative;
  font: 0.26rem/1.2rem "微软雅黑";
  color: #454545;
  margin-left: 0.55rem;
  display: flex;
  justify-content: space-between;
}
.main .sortItems .smallItems h4 a {
  display: block;
  font: 0.24rem/1.2rem "微软雅黑";
  color: #666666;
  margin-right: 0.6rem;
}
.main .sortItems .smallItems h4::after,
.main .sortItems .smallItems h4::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 0.06rem solid#000;
  border-top: 0.06rem solid transparent;
  border-bottom: 0.06rem solid transparent;
  position: absolute;
  right: 0.44rem;
  bottom: 0.53rem;
}
.main .sortItems .smallItems h4::after {
  right: 0.45rem;
  border-left-color: #fff;
}
.main .sortItems .smallItems ul {
  display: flex;
  justify-content: space-around;
  padding: 0 0.26rem;
  flex-wrap: wrap;
}
.main .sortItems .smallItems ul li {
  width: 30%;
  text-align: center;
  padding-bottom: 0.17rem;
}
.main .sortItems .smallItems ul li a {
  display: block;
}
.main .sortItems .smallItems ul li a img {
  width: auto;
  height: 1.52rem;
}
.main .sortItems .smallItems ul li a p {
  font: 0.24rem/0.59rem "微软雅黑";
  color: #868686;
}
.main .sortItems .smallItems1 {
  padding-bottom: 0.5rem;
}
</style>
