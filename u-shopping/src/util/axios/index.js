import http from './axios'
// 封装接口
// 封装前台轮播图接口

export function getBanner(){
    return http.get('/getbanner')
}

// 封装获取商品信息(首页)
export function getIndexGoods(){
    return http.get('/getindexgoods')
}
// 封装获取分类树形结构
export function getCateTree(){
    return http.get('/getcatetree')
}
// 封装获取分类商品
export function getGoods(params){
    return http.get('/getgoods',{
        params
    })
}
// 封装获取一个商品信息
export function getGoodsInfo(params){
    return http.get('/getgoodsinfo',{
        params
    })
}
// 封装登录接口
export function getLogin(data){
    return http.post('/login',data)
}
// 封装注册接口
export function getRegister(data){
    return http.post('/register',data)
}
// 封装购物车列表
export function getCartlist(params){
    return http.get('/cartlist',{
        params
    })
}
// 封装购物车添加
export function getCartAdd(data){
    return http.post('/cartadd',data)
}
// 封装购物车删除
export function getCartDelete(data){
    return http.post('/cartdelete',data)
}