<template>
    <div class="todays">
        <div class="todays-item"  v-show="today">
            <div class="today-header">
                <div class="to-img">
                    <img src="../../../assets/img/timg.jpg" alt="">
                </div>
                <div class="to-content">
                    <div class="name">
                        <P>李佳星</P>
                        <sex mold="girl" grade="10"></sex>                        
                    </div>
                    <div class="to-time">
                        <p>2个小时前[来自南华大学船山学院]</p>
                    </div>
                </div>
                <div class="top-img" @click="hidden" v-show="mold === 'hiShow'">
                    <i class="iconfont teo">&#xe612</i>
                </div>
            </div>
            <div class="today-text">
                <p>
                    新出炉的二手网球拍二十块钱，刚从别人哪里买回来的，又买了一个，低价出售。
                </p>
            </div>
            <!-- <div class="today-img" v-show="mold === 'img'">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
            </div> -->
            <div class="today-icon">
                <div class="icon-one">
                    <i class="iconfont one">&#xe65e</i>
                    <p>{{countTwo}}</p>
                </div>        
                <router-link :to="{path: '/todayDetails'}">
                    <div class="icon-one">
                        <i class="iconfont one">&#xe891</i>
                        <p>{{countOne}}</p>   
                    </div>   
                </router-link>
                <div class="icon-one" @click="loveBeng()">
                    <i class="iconfont two" v-show="icon02">&#xe870</i> 
                    <i class="iconfont two" v-show="icon01">&#xe86f</i>
                    <p style="color:pink">{{count}}</p>  
                </div>                
            </div>
            <split></split> 
        </div>

    </div>
</template>

<script>
    import sex from './sex.vue'
    import split from '../../SellersPage/assembly/split.vue'
    export default {
        name: 'todays',
        data() {
            return {
                count:100,
                countOne: 4343,
                countTwo:23234,
                today:true,
                icon01: false,
                icon02: true,
            }
        },
        components: {
            sex,split
        },
        methods: {
            hidden() {
                this.today = false;
            },
            loveBeng(val) {
                this.icon02 = !this.icon02;
                this.icon01 = !this.icon01;
                if(this.icon01) {
                    this.count++;
                }
                if(this.icon02) {
                   this.count--;
                }
            }
        },
        props: {
            mold: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-img {
        position: absolute;
        top: 0.07rem;
        left: 92%;
        color: #9b9b9b;
        .teo {
            font-size: 0.2rem;
        }
        
    }
    .todays {
        position: relative;
        // bottom: 0.48rem;
    }
    .todays-item {
        // margin-top: 0.48rem;
    }
    .today-header {
        font-size: 0.13rem;
        display: flex;
        padding: 0.1rem;
        .to-img {
            padding-right: 0.15rem;         
            img {
                height: 0.5rem;
                width: 0.5rem;
                border-radius: 50px;
            }
        }
        .to-content {
            font-size: 0.15rem;
            padding-top: 0.05rem;
            .name {
                display: flex;
            }
            .to-time {
                color: #aeb1b0;
                p {
                    font-size: 0.12rem;
                }
            }

        }
    }
    .today-text {
        padding: 0 0.1rem 0.2rem 0.1rem;
        
        p {
            font-size: 0.15rem;
            line-height: 0.2rem;
        }
    }
    .today-icon {
        display: flex;
        font-size: 0.15rem;
        justify-content: space-between;
        padding:0.1rem 0.2rem 0.1rem 0.2rem;
        border-top: dashed rgba(7, 17, 27, 0.1) 0.01rem;
        .icon-one {
            display: flex;
            text-align: center;
            color: #97a6f3;
            .one {
                font-size: 0.18rem;
            }
            .two {
                font-size: 0.18rem;
                color:pink;
            }
            p {
                padding-top: 0.02rem;
                font-size: 0.12rem;
                padding-left: 0.02rem;
            }
        }
    }
    .today-img {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 0.1rem;
            padding-left: 0.2rem;
            // padding-right: 0.2rem;
        img {
            width: 1rem;
            height: 1rem;
            padding: 0.05rem;
        }
    }
</style>
