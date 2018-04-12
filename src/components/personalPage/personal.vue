<template>
    <div class="personal" ref="personal">
         <div class="ooorr">
            <!-- dddd -->
            <header-bar mold='personalbar' ></header-bar>
            <!-- 个人信息 -->
            <div class="personal-main">
                <div class="information">
                    <!-- 登录状态 -->
                    <div class="header-portratil">
                        <img src="../../assets/img/mainView/darlene.jpg" alt="">
                    </div>
                    <div class="header-message">
                        <p class="name">__Darlene</p>
                        <p class="change">修改信息></p>
                    </div>
                    <!-- <img src="../../assets/img/Add.gif" alt=""> -->
                    <!-- 未登录状态 -->
                    <div class="header-portratil"   v-show="person === 'd'">
                        <img src="../../assets/img/akari.jpg" alt="">
                    </div>    
                    <div class="header-me"   v-show="person === 'd'" @click="gotoAddress({path:'/register'})">
                        <span class="signin">登录/注册</span>
                    </div>
                </div>
            </div>
            <menu-bar></menu-bar>   
         </div>   
    </div>
</template>

<script>
    import headerBar from '../part/headerBar.vue'

    import split from '../SellersPage/assembly/split.vue'
    import menuBar from '../part/menuBar.vue'
    import BScroll from 'better-scroll'
    import {refresh} from '../../common/js/public'
    export default  {
        name: 'personal',
        components: {
            headerBar,split,menuBar
        },
        created() {
            refresh('我的信息');
        },
        mounted() {
            this.$nextTick(() => {
                    if(!this.scroll) {
                        this.scroll = new BScroll(this.$refs.personal, {
                            click: true
                        });
                    } else {
                        //重新计算
                        this.scroll.refresh();
                    }
                });
        },
        props: {
            person: {
                type: String
            }
        },
        methods: {
            gotoAddress(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .personal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0.48rem; 
        background-color: #fff;
        .ooorr {
            .personal-main {
                width: 100%;
                background: linear-gradient(#ffc400, rgb(250, 104, 6));//渐变色 
                position: relative;
                height: 1.2rem;
                .information {
                    position: relative;
                    display: flex;
                    box-sizing: border-box;
                    padding-top: 0.2rem;
                    .header-portratil { 
                        padding-left: 0.2rem; 
                        img {
                            height: 0.7rem;
                            width: 0.7rem;
                            border-radius: 50px;
                            vertical-align: top;
                        }                        
                    }
                    .header-message {
                        padding-left: 0.15rem;
                        color: #fff;
                        .signin {
                            font-size: 0.2rem;
                            background-color: rgba(7, 17, 27, 0.1);
                            padding:0.06rem;
                            vertical-align: top;
                            position: absolute;
                            top: 0.1rem;
                        }
                        p {
                            padding-bottom: 0.10rem;
                            font-size: 0.2rem;
                        }
                        .change {
                            font-size: 0.09rem;
                            width: 0.6rem;
                            background-color: rgba(7, 17, 27, 0.1);
                            padding:0.06rem;
                            text-align: center;
                        }       
                    }
                    .header-me {
                        padding-left: 0.15rem;
                        color: #fff;
                        position: absolute;
                        top: 0.4rem;
                        left: 0.9rem;
                        height: 0.38rem;
                        .signin {
                            font-size: 0.2rem;
                            background-color: rgba(7, 17, 27, 0.1);
                            padding:0.06rem;
                            vertical-align: top;
                        }
                    }
                }             
            }            
        }


    }
</style>
