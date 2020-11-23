import Vue from 'vue'
import Router from 'vue-router'
  

//引入一级路由
// import index from '../components/views/index'
// import list from '../components/views/list'
// import login from '../components/views/login'
// import register from '../components/views/register'
// import detail from '../components/views/detail'
// import sort from '../components/views/sort'
// import orderConfirm from '../components/views/orderConfirm'
// //引入二级路由
// import  cart from '../components/pages/cart'
// import  home from '../components/pages/home'
// import  mine from '../components/pages/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: ()=>import('@/components/views/list'),
    },
    {
      path: '/index',
      component: ()=>import('@/components/views/index'),
      
      children:[
       {
        path:"/home",
        component:()=>import('@/components/pages/home'),
        meta:{
          name:'首页'
        },
       },
       
       {
        path:"/cart",
        component:()=>import('@/components/pages/cart'),
        meta:{
          name:'购物车'
        },
       },
       {
        path:"/mine",
        component:()=>import('@/components/pages/mine'),
        meta:{
          name:'我的'
        },
       },
      ]
    },
    {
      path: '/login',
      component: ()=>import('@/components/views/login'),
      meta:{
        name:'登录'
      },
    },

     {
      path: '/register',
      component: ()=>import('@/components/views/register'),
      meta:{
        name:'注册'
      },
    },
    {
      path: '/sort',
      component: ()=>import('@/components/views/sort'),
      meta:{
        name:'分类'
      },
    },
     {
      path: '/detail',
      component: ()=>import('@/components/views/detail'),
      meta:{
        name:'详情'
      },
    },

    {
      path: '/orderConfirm',
      component: ()=>import('@/components/views/orderConfirm'),
      meta:{
        name:'首页'
      },
    },

    {
      path:'*',
      redirect:'/index'
    }
  ]
})
