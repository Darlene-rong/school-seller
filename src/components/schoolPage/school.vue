<template>
  <div class="school">
        <div>
            <div class="school-header">
                <div class="class">
                    <i class="iconfont one">&#xe7c0</i>
                    <span>我的动态</span>
                    <!-- <span>发现</span> -->
                    <i class="iconfont one">&#xe636</i>                    
                </div>

            </div>
            <div class="school-main" ref="school">
                <div>
                    <router-link :to="{path: '/'}">
                        <div class="school-bar">
                            <div class="bar-img">
                                <img src="../../assets/img/mainView/darlene.jpg" alt=""> 
                            </div>
                            <div class="bar-content">
                                <div class="bar-name">
                                    <h1>露露露</h1>
                                    <sex mold="boy" grade="8"></sex>
                                </div>
                                <p class="text">圆规为什么能画圆？因为，他的心一直在中心</p>  
                                <div class="fans">
                                    <span>关注1</span>
                                    <span>|</span>    
                                    <span>粉丝3</span>
                                </div> 
                            </div>   
                            <div class="bar-person">
                                <span>个人主页</span>
                                <i class="iconfont ddd">&#xe6a7</i>
                            </div>                         
                        </div>
                    </router-link>
                    <split></split>
                    <toubu title="今日动态"></toubu>
                    <todays mold="hiShow"></todays>
                </div>
            </div>          
          </div>
        </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import split from '../SellersPage/assembly/split.vue'
    import todays from './page/todays.vue'
    import sex from './page/sex.vue'
    import {refresh} from '../../common/js/public'
    import toubu from '../commonePage/toubu.vue'
    export default {
        name: 'school',
        data() {
            return {

            }
        },
        created () {
            refresh('校友圈');
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.school, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
        },
        components: {
            split,todays,sex,toubu
        }
    }
</script>

<style lang="scss" scoped>
    .school-header {
        width: 100%;
        height: 0.48rem;
        font-size: 0.2rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        .class {
            display: flex;
            justify-content: space-between;
            background-color: #ffc400;
            color: #fff;
            height: 0.49rem;
            span {
                padding-top: 0.1rem;
                border-bottom: 0.03rem solid #fff;
            }
            .one {
                padding-left: 0.1rem;
                padding-right: 0.1rem;
                padding-top: 0.1rem;
                font-size: 0.25rem;
            }
        }
    } 
    .school-main {
        position: fixed;
        width: 100%;
        top:0.48rem;
        left: 0;
        bottom: 0.48rem;
        background-color: #fff;

    }
    .school-bar {
        font-size: 0.15rem;
        display: flex;
        padding:0.2rem 0rem 0.1rem 0.1rem;
        .bar-img {
            padding-right: 0.15rem;
            img {
                height: 0.6rem;
                width: 0.6rem;
                border-radius: 50px;
            }
        }
        .bar-content {
            .bar-name {
                display: flex;
                font-size: 0.18rem;
                color:black;               
            }
            .text {
                color: rgb(174, 177, 176);
                font-size: 0.12rem;
                width: 1.8rem;
                white-space: nowrap; 
                overflow: hidden;
                text-overflow:ellipsis;
                padding-top: 0.01rem;
                padding-bottom: 0.05rem;
            }
        }
        .fans {
            font-size: 0.12rem;
            color: rgb(174, 177, 176);
            
        }
        .bar-person {
            font-size: 0.14rem;
            color: rgb(252, 209, 19);
            padding-top: 0.1rem;
            padding-left: 0.20rem;
            .ddd {
                font-size: 0.14rem;
                padding-top: 0.03rem;
            }
        }
    }


</style>