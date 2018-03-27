import Vue from 'vue'
import Router from 'vue-router'
import MainEntrance from '@/components/SellersPage/MainEntrance'
import appentrance from '@/components/appentrance'
//主页
import homepage from '@/components/homePage/homepage.vue'

//校友圈
import school from '@/components/schoolPage/school.vue'
import todayDetails from '@/components/schoolPage/page/todayDetails.vue'
//订单
import order from '@/components/orderPage/order.vue'
import looking from '@/components/orderPage/looking.vue'

//个人信息
import personal from '@/components/personalPage/personal.vue'
import enter from '@/components/part/enter.vue'
import helpCenter from '@/components/part/helpCenter.vue'
import about from '@/components/part/about.vue'
import agreement from '@/components/part/agreement.vue'
import privercy from '@/components/part/agreement.vue'
import download from '@/components/part/download.vue'
import register from '@/components/personalPage/page/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appentrance',
      component: appentrance,
      redirect: '/homepage',
      children: [
        {
          path: 'homepage',
          component: homepage
        },
        {
          path: 'school',
          component: school
        },
        {
          path: 'order',
          component: order
        },
        {
          path: 'personal',
          component: personal
        }
      ]
    },
    //购物页面
    {
      path: '/MainEntrance',
      name: 'MainEntrance',
      component: MainEntrance,
      redirect:'/goods',
      children: [
        {
          path:'/goods',
          component:resolve =>{
            require(['../components/SellersPage/goods/goods.vue'],resolve)
          }
        },
        {
          path:'/rathings',
          component: resolve =>{
            require(['../components/SellersPage/rathings/rathings.vue'],resolve)
          }
        },
        {
          path:'/seller',
          component: resolve =>{
            require(['../components/SellersPage/seller/seller.vue'],resolve)
          }
        },
        {
          path: '/food',
          component: resolve => {
            require(['../components/SellersPage/food detalis/food.vue'],resolve)
          }
        }
      ]
    },
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: helpCenter
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/privercy',
      name: 'privercy',
      component: privercy
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/register',
      name:'register',
      component: register
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/todayDetails',
      name: 'todayDetails',
      component: todayDetails
    },
    {
      path: '/looking',
      name: 'looking',
      component: looking
    }
  ]
})
