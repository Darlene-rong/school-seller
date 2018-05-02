<template>
  <div class="homepage" ref="homePage">
      <div class="home-page">
            <div class="home-header">
                    <router-link :to="{path:'/chooiceMap'}">
                        <div class="header-one">
                            <i class="iconfont one">&#xe609</i>
                            <p>选择地址</p>
                            <i class="iconfont one">&#xe654</i>                  
                        </div>                 
                    </router-link >
                    <router-link :to="{path:'/register'}" class="header-two">
                        <div class="header-one">
                            <p>登录|注册</p>
                        </div>                    
                    </router-link>
            </div>
            <div class="header-search">
                <router-link  :to="{path:'/searchpage'}">
                    <div class="search">
                        <i class="iconfont one">&#xe653</i>
                        <p>搜索</p>
                    </div>
                </router-link>
            </div>
            <split></split>
            <msitenav></msitenav>
            <split></split>
            <nearby-list></nearby-list>
      </div>
  </div>
</template>

<script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    import BScroll from 'better-scroll'
    import msitenav from './page/msitenav.vue'
    import split from '../SellersPage/assembly/split.vue'
    import nearbyList from './page/nearbyList.vue'
    import {refresh} from '../../common/js/public'
    export default {
        name: 'homepage',
        data() {
            return {

            }
        },
        components: {
            msitenav,split,nearbyList
        },
        created () {
            refresh('首页')
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.homePage, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })            
        },

    }
</script>

<style lang="scss" scoped>
    .homepage {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0.48rem;
        background-color: #fff;
        .home-page {
            
        }
    }
    .home-header {
        font-size: 0.15rem;
        display: flex;
        justify-content: space-between;
        height: 0.48rem;
        background-color: #ffc400;
        padding-left: 0.05rem;
        padding-right: 0.1rem;
        .header-one {
            display: flex;
            padding-top: 0.1rem;
            color: #fff;
            .one {
                font-size: 0.18rem;
                color: #fff;
                padding-left: 0.05rem;
                padding-right: 0.05rem;
            }
        }
    }
    .header-search {
        font-size: 0.15rem;  
        background-color: #fac412;
        height: 0.4rem;
        .search {
            display: flex;
            justify-content: center;
            height: 0.3rem;
            margin-left: 0.1rem;
            margin-right: 0.1rem;
            border-radius: 30px;
            background-color: #fff;
            color:rgb(156, 154, 154);
            .one {
                padding-top: 0.08rem;
                padding-right: 0.05rem;
            }
            p {       
                padding-top: 0.05rem;
            }
        }
    }
</style>
