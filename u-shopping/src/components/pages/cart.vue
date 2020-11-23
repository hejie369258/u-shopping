<template>
  <div>
    <div class="page" id="box" v-cloak>
      <!-- <header class="headCon">
        <a href="#" class="back"
          ><img src="../../assets/images/arrowLeft (2).jpg" alt=""
        /></a>
        <h2>购物车</h2>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header> -->

      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
        @click-right="$router.push('/register')"/>

      <van-radio-group v-model="radio">
        <van-radio name="1"></van-radio>
      </van-radio-group>

      <van-swipe-cell v-for="item in cartList" :key="item.id">
        <van-card
          :num="item.num"
          :price="item.price"
          desc="描述信息"
          :title="item.goodsname"
          class="goods-card"
          :thumb="item.img?$imgUrl+item.img:'https://img.yzcdn.cn/vant/cat.jpeg'">
          <template #footer>
            <div>
              <van-stepper
                v-model="goodsNum"
                theme="round"
                button-size="22"
                disable-input
              />
            </div>
          </template>
        </van-card>
        <template #right>
          <van-button @click="del(item.id)" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>

      <van-submit-bar :price="3050" button-text="提交订单" />
 <div v-if="!cartList" >
      <van-empty description="购物车空空如也，快去买买买！！！" />
    </div>
     <div v-else>
      <van-button @click="$router.push('/login')" type="warning">请先登录，再查看</van-button>
    </div>
      <!-- <div class="main">
        <ul>
          <li v-for="(item, i) in list" :key="item.id">
            <div class="good">
              <input type="checkbox" v-model="item.che" @change="che" />
              <img :src="item.img" alt="iconCart" />
              <div class="txt">
                <p class="name">{{ item.title }}</p>
                <p class="grammage">
                  规格：<span>{{ item.grammage }}</span>
                </p>
                <p class="price">&yen;{{ item.price }}</p>
              </div>
            </div>
            <p>
              <button class="addOrDesc desc" @click="sub(i)">-</button>
              <input type="text" class="number" v-model="item.val" />
             <input type="text" placeholder="1" class="number"> -->
      <!-- <button class="addOrDesc add" @click="add(i)">+</button>

              <a href="#" class="del">删除</a>
            </p>
          </li>
          
              
        </ul> -->
      <!-- </div>  -->
      <!-- <div class="settlement">
        <div>
          <p class="btn">
            <input type="checkbox" v-model="allcheck" @change="all" />全选
          </p>
          <div>
            <p class="count">
              总计：<span>{{ allprice }}</span>
            </p>
            <p class="tip">不含运费，已优惠&yen;0.00</p>
          </div>
        </div>
        <router-link activeClass='active' to="/orderconfirm">
        <a href="#">去结算（{{ sl }}）</a>
        </router-link>
      </div> -->
 
  </div>
  </div>
</template>

<script>
import { getCartlist, getCartDelete } from "../../util/axios";
export default {
  data() {
    return {
      // allcheck: false,
      cartList:[],
      userInfo:'',
      radio: "1",
      goodsNum: 1,
    };
  },
  // computed: {
  //   allprice() {
  //     let num = 0;
  //     this.list.map((item) => {
  //       num += item.price * item.val;
  //     });
  //     return num;
  //   },
  //   sl() {
  //     let sl1 = 0;
  //     this.list.map((item) => {
  //       sl1 += item.val;
  //     });
  //     return sl1;
  //   },
  // },
  // mounted:{
  //   this.cartListInfo()
  // },
  mounted(){
// this.userInfo=sessionStorage.getItem('userInfo')? 
// JSON.parse(sessionStorage.getItem('userInfo')):''

 this.cartListInfo()
  },
  methods: {
    //     all() {
    //         this.list.map(item => item.che = this.allcheck)
    //     },
    //     che() {
    //         this.allcheck = this.list.every((item) => item.che)

    //     },
    //     sub(i) {
    //         if (this.list[i].val <= 1) {
    //             alert('可怜可怜，不能再减')
    //         } else { this.list[i].val-- }

    //     },
    //     add(i) {
    //         this.list[i].val++
    //     }
    cartListInfo() {
      console.log(this.$route.query.id);
      getCartlist({
       uid: this.$route.query.id
      }).then((res) => {
        console.log('ssss');
         if (res.code == 200) {
          this.cartList = res.list;
          console.log(this.cartList);
        }
      });
    },
    del(id){
      getCartDelete({id}).then(res=>{
        console.log('ccc');
     getCartlist({uid: this.$route.query.id}).then(res=>{
       this.cartList=  res.list
     })
      })
    }
  },
};
</script>

<style  lang="" scoped>
@charset "utf-8";
/* 包裹盒 */
.van-stepper {
  float: right;
}
.page {
  max-width: 7.5rem;
  margin: 0 auto;
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

.main ul {
  overflow: hidden;
  padding-top: 0.26rem;
  padding-bottom: 3.68rem;
}

.main ul li {
  width: calc(100% + 0.98rem);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 0.1rem #f7f7f7;
}

.main ul li .good {
  display: flex;
}

.main ul li .good input[type="checkbox"] {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  margin: 0.69rem 0.44rem 0 0.24rem;
  display: block;
  float: left;
  width: 0.34rem;
  height: 0.34rem;
  border: 0.02rem solid #666666;
  border-radius: 50%;
}

.main ul li .good input[type="checkbox"]:checked {
  border-color: #b32e1f;
  background: url(../../assets/images/selectCart.jpg) no-repeat center;
  background-size: 0.17rem 0.13rem;
}

.main ul li .good img {
  width: auto;
  height: 0.82rem;
  padding-top: 0.45rem;
}

.main ul li .good .txt {
  width: 2.35rem;
  padding: 0.07rem 0 0.12rem 0.36rem;
}

.main ul li .good .txt .name {
  font: 0.28rem/0.53rem "微软雅黑";
  color: #343434;
}

.main ul li .good .txt .grammage {
  display: flex;
  font: 0.23rem/0.53rem "微软雅黑";
  color: #666666;
}

.main ul li .good .txt .grammage span {
  display: block;
  font: 0.24rem/0.53rem Arial;
  color: #666666;
}

.main ul li .good .txt .price {
  font: 0.32rem/0.47rem Arial;
  color: #e43a3d;
}

.main ul li p {
  display: flex;
}

.main ul li p .number {
  display: block;
  width: 0.79rem;
  height: 0.53rem;
  border-top: 1px solid #515151;
  border-bottom: 1px solid #515151;
  text-align: center;
  font: 0.2rem/0.57rem Arial;
  color: #454545;
  margin-top: 0.89rem;
}

.main ul li p .addOrDesc {
  display: block;
  width: 0.62rem;
  height: 0.57rem;
  outline: none;
  font: 0.2rem/0.57rem Arial;
  border: none;
  text-align: center;
  color: #454545;
  margin-top: 0.89rem;
  border: 1px solid #515151;
}

.main ul li p .desc {
  border-radius: 0.04rem 0 0 0.04rem;
}

.main ul li p .add {
  border-radius: 0 0.04rem 0.04rem 0;
}

.main ul li p .del {
  display: block;
  width: 0.98rem;
  height: 1.72rem;
  font: 0.24rem/1.72rem "微软雅黑";
  background: #e43a3d;
  color: #fff;
  text-align: center;
  margin-left: 0.31rem;
}

.main ul .active {
  transform: translate(-0.98rem, 0);
  margin: 0.3rem 0;
}

.settlement {
  display: flex;
  justify-content: space-between;
  padding-left: 0.24rem;
  margin-bottom: 1.2rem;
}

.settlement > div {
  display: flex;
  justify-content: space-between;
  width: 4.41rem;
  height: 1.14rem;
  align-items: center;
}

.settlement > div .btn {
  display: flex;
  justify-content: space-between;
  width: 0.95rem;
  font: 0.24rem/0.34rem "微软雅黑";
  color: #676767;
}

.settlement > div .btn input[type="checkbox"] {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  display: block;
  width: 0.34rem;
  height: 0.34rem;
  border: 0.02rem solid #666666;
  border-radius: 50%;
}

.settlement > div .btn input[type="checkbox"]:checked {
  border-color: #b32e1f;
  background: url(../../assets/images/selectCart.jpg) no-repeat center;
  background-size: 0.17rem 0.13rem;
}

.settlement > div > div {
  text-align: right;
}

.settlement > div > div .count {
  font: 0.3rem/0.46rem "微软雅黑";
  color: #323232;
}

.settlement > div > div .count span {
  display: inline-block;
  font: 0.3rem/0.46rem "微软雅黑";
  color: #e3393c;
}

.settlement > div > div .tip {
  font: 0.2rem/0.37rem "微软雅黑";
  color: #a4a4a4;
}

.settlement a {
  display: block;
  width: 2.14rem;
  height: 1.14rem;
  background: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #ffffff;
  text-align: center;
}
</style>
