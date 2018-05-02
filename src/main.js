// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'//引入
//vue-amap引入
// import VueAMap from 'vue-amap';


Vue.config.productionTip = false
// Vue.use(VueAMap);

// //初始化vue-amap
// VueAMap.initAMapApiLoader({
//   //申请的高德地图的key 
//   key: '20ae9108eb360a7e6041507691d3f0a2',
//   //插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],

// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//注入(store提供的'store选项，这样可以把store的实例注入到所有的子组件)
  template: '<App/>',
  components: { App },

  
})
