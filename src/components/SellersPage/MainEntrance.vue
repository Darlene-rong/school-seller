<template>
<!-- 总商品购买页面 -->
  <div>
    <div class="headerbar" >
        <i class="iconfont font" @click="comeback">&#xe697</i>
        <p>{{nameType}}</p>
    </div>
    <div id="shime">     
      <main-view :seller="seller"></main-view>
      <div class="tab">
        <div class="tab-item" v-for="item in items">
          <router-link :to="{path:item.path}"><p>{{item.name}}</p></router-link>
        </div>
      </div>
      <keep-alive>
          <router-view :seller="seller"></router-view>    
      </keep-alive>
    </div>    
  </div>

</template>

<script>
import mainView from './header/mainView.vue'
import {refresh} from '../../common/js/public'
import data from '../../util/mock'
import axios from 'axios'
// import headerBar from '../../components/part/headerBar'
//flex布局
export default{
  name:'app',
  data() {
    return{
      items:[
        {
          name: '商品',
          path:'/goods',
        },
        {
          name: '评论',
          path:'/rathings',
        },
        {
          name: '商家',
          path:'/seller',
        }
      ],
      seller:{},
      nameType: ''
    }
  },
  created() {
    refresh('校园在线超市');
    console.log('ff')
    const _this = this;
    axios({
      method:'post',
      url:'/api',
    }).then(res=>{
      _this.seller = res.data.seller;
      _this.nameType = res.data.seller.name;
    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {
    comeback() {
      
    }
  },
  components:{
      mainView,
  },
}
</script>

<style lang="scss" scoped>
    .headerbar {
        display: flex;
        height: 0.4rem;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        background-color: #ffc400;
        font-size: 0.19rem;
        text-align: center;
        .font {
            color: #fff;
            font-size: 0.25rem;
            padding-top: 0.05rem;
            padding-left: 0.1rem;
        }
        p {
            padding-top: 0.05rem;
            font-weight: 600;
            color: #fff;
            flex:2
        }
    }
#shime{
  top: 0.48rem;
  .tab{
    display: flex;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem rgba(7,17,27,0.1)  solid;   
    .tab-item{
      flex: 1;
      text-align: center;      
      a{
        display: block;
        font-size: 0.14rem;
      }
    }
  }
  @keyframes fadein{
    0%{
      width: 50%;
    }
    100%{
     width:100%;
    }
  }
  .router-link-exact-active{
    color: rgb(247, 132, 112);
    border-bottom: 0.01rem rgb(0, 153, 255) solid; 
    animation-name: fadein;
    animation-duration: 0.5s;
    animation-timing-function: linear;
  }

}
</style>
