import Vue from 'vue'
import Router from 'vue-router'
import MainEntrance from '@/components/SellersPage/MainEntrance'
import appentrance from '@/components/appentrance'
import balance from '@/components/SellersPage/balancePage/balance'
//主页
import homepage from '@/components/homePage/homepage.vue'
import classifyChannel from '@/components/homePage/classifyPage/classifyChannel.vue'
import chooiceMap from '@/components/homePage/page/chooiceMap.vue'
//校友圈
import school from '@/components/schoolPage/school.vue'
import todayDetails from '@/components/schoolPage/page/todayDetails.vue'
//订单
import orderPage from '@/components/orderPage/orderPage.vue'
import lookingOrderDetails from '@/components/orderPage/lookingOrderDetails.vue'

//个人信息
import personal from '@/components/personalPage/personal.vue'
import uncultivated from '@/components/part/uncultivated.vue'
import about from '@/components/part/about.vue'
import download from '@/components/part/download.vue'
import register from '@/components/personalPage/page/register.vue'
import setting from '@/components/personalPage/page/setting.vue'
import receivingAddress from '@/components/personalPage/page/receivingAddress.vue'
import manageAddress from '@/components/personalPage/page/manageAddress.vue'
import helpcenter from '@/components/personalPage/page/helpcenter.vue'
import helpCenterDetails from '@/components/part/helpCenterDetails.vue'

//搜索页面
import searchpage from '@/components/searchPage/searchpage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    //foot底部栏
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
          path: 'orderPage',
          component: orderPage
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
      path: '/uncultivated',
      name: 'uncultivated',
      component: uncultivated
    },
    {
      path: '/about',
      name: 'about',
      component: about
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
      path: '/todayDetails',
      name: 'todayDetails',
      component: todayDetails
    },
    {
      path: '/lookingOrderDetails',
      name: 'lookingOrderDetails',
      component: lookingOrderDetails
    },
    {
      path: '/classifyChannel',
      name: 'classifyChannel',
      component: classifyChannel
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/receivingAddress',
      name: 'receivingAddress',
      component: receivingAddress
    },
    {
      path: '/helpcenter',
      name: 'helpcenter',
      component: helpcenter
    },
    {
      path: '/helpCenterDetails',
      name: 'helpCenterDetails',
      component: helpCenterDetails
    },
    {
      path: '/manageAddress',
      name: 'manageAddress',
      component: manageAddress
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance
    },
    {
      path: '/chooiceMap',
      name: 'chooiceMap',
      component: chooiceMap
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
    }
  ]
})
