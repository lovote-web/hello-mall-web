import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'

// 用于嵌套的路由组件
import ProductList from "../views/user/ProductList";
import AddProduct from "../views/user/AddProduct";
import ProductBrand from "../views/user/ProductBrand";
import ProductCategory from "../views/user/ProductCategory";
import orderList from "../views/order/orderList";
import mainPage from "../views/main/mainPage";
import register from "../views/register";
import cartList from "../views/main/cartList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 后台首页
      path: '/main',
      name: 'Main',
      component: Main,
      // 配置嵌套路由
      children: [
        {path: '/user/productBrand', component: ProductBrand},
        {path: '/user/productList', component: ProductList},
        {path: '/user/addProduct',component: AddProduct},
        {path: '/user/productCategory',component: ProductCategory},
        {path: '/order/listAll',component: orderList}
      ]
    },
    {
      //前台首页
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      //购物车页面
      path: '/cart',
      name: 'cartList',
      component: cartList
    },
    {
      //注册页面
      path: '/register',
      name: 'register',
      component: register
    }
  ]
});
