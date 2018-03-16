<template>
    <transition name="change">
        <div class="food" v-show="showFood"  ref="foodscroll">
            <!-- 商品详情页面 -->
            <div class="main-content"  >
                <!-- 头部标题标签 --> 
                <div class="headerbar" >
                    <i class="iconfont font" @click="comeback">&#xe697</i>
                    <p>{{nameType}}</p>
                </div>
                <!-- 主要内容 -->
                <div class="food-content">
                    <div class="image">
                        <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                    </div>
                    <div class="content">
                        <h1 class="title">{{food.name}}</h1>
                        <div class="content-message">
                            <p class="month-sale">月售{{food.sellCount}}份</p>
                            <p class="rating">好评率{{food.reting}}%</p>
                        </div>
                        <div class="price">
                            <p class="new-price">￥{{food.price}}</p>
                            <p class="old-price">￥{{food.oldPrive}}</p>                    
                        </div>
                        <div class="shopcount-food">
                            <shopcount :food="food"></shopcount>                             
                        </div>  
                        <transition name="food-two">
                            <div class="buy" v-show="!food.count || food.count === 0" @click="addfirst" >
                                加入购物车
                            </div>
                        </transition>
                    </div>
                </div>
                <split></split>
                <!-- 商品介绍 -->
                <div class="introduction" v-show="food.info">
                    <h1>商品介绍</h1>
                    <p>{{ food.info }}</p>
                </div>
                <split></split> 
                 <!-- 商品评价 -->
                <evaluate   mold="quote" 
                            :select-type="selectType"
                            :only-content="onlyContent"
                            :desc ="desc"
                            :rathings="food.rathings"
                            @selectEmit="getUser"
                            @onlyEmit="getOnly"
                ></evaluate>  
                <!-- 评价列表          -->
                <div class="evaluate-list">
                    <ul v-show="food.rathings ">
                        <li v-show="evaluateShow(rathing.rateType,rathing.text)"  v-for="rathing in food.rathings" class="evaluate-item">
                            <div class="evaluate-content">
                                <div class="content-time">
                                    <p class="data">{{rathing.time}}</p>
                                    <p class="time">12:33</p>
                                </div>
                                <div class="article">
                                    <i class="iconfont font" v-if="rathing.rateType === 0" :class=" {'happy': rathing.rateType === 0} ">&#xe64d</i>
                                    <i class="iconfont font" v-if="rathing.rateType === 1" :class="{ 'sad': rathing.rateType === 1}">&#xe635</i>
                                    <p class="text" v-show="rathing.rateType === 0">{{rathing.text}}</p>
                                    <p class="text" v-show="rathing.rateType === 1">{{rathing.sad}}</p>
                                </div>
                            </div>
                            <div class="user">
                                <p class="name">{{rathing.username}}</p>
                                <img src="../../../assets/img/sellerPage/header.png" alt="">
                            </div>
                        </li>
                    </ul>
                    <div class="no-evaluate" v-show="!food.rathings">
                        <p>暂无评价</p>
                        <img src="../../../assets/img/sellerPage/emoji-18.png" alt="">
                    </div>
                </div>
            </div>
        </div>   
    </transition>

</template>

<script>
    import BScroll from 'better-scroll';
    import shopcount from '../header/shopcount.vue'
    import split from '../assembly/split.vue'
    import evaluate from '../assembly/evaluate.vue'
    import Vue from 'vue';
    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2;
    export default {
        name: 'food',
        data() {
            return {
               showFood: false, 
               nameType: '商品详情',
               selectType: 2,
               onlyContent: false,
               desc: {
                    all:'全部',
                    positive: '好评',
                    negative: '差评'
               },
               showEvaluate: true,
            }
        },
        components: {
            shopcount,split,evaluate
        },
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            show() {
                this.showFood = true;
                //初始化状态
                this.selectType = ALL;
                this.onlyContent = false;
                //DOM渲染完之后
                this.$nextTick(() => {
                    if(!this.scroll) {
                        this.scroll = new BScroll(this.$refs.foodscroll, {
                            click: true
                        });
                    } else {
                        //重新计算
                        this.scroll.refresh();
                    }
                });
            },
            comeback() {
                this.showFood = false
            },
            addfirst(event) {
                //防止PC点击
                if(!event._constructed) {
                    return;
                };
                //第一次可能没有count  创建Count
                Vue.set(this.food, 'count', 1);
                this.$emit('testtwo',this.food);
                return this.food.count;
            },
            getUser(msg) {
                this.selectType = msg;
                console.log(this.selectType)
            },
            getOnly(msg) {
                this.onlyContent = msg;
            },
            evaluateShow(type, text) {
                //&&与
                if(this.onlyContent && !text){
                    return false;
                }
                if(this.selectType === ALL) {
                    return true;
                }else{
                    return type === this.selectType;
                }
            }
            
        },
    }
</script>

<style lang="scss" scoped>
    .food{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0.48rem;
        z-index: 30;
        width: 100%;
        background-color: #fff;
        &.change-enter-active, &.change-leave-active {
            transition: all 0.3s ease;
        }
        &.change-enter, &.change-leave-active {
            opacity: 0;
            transform: translateX(50px);
        }
        .main-content {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            .food-content {
                position: relative;
                .image {
                    position: relative;//相对定位
                    width: 100%;
                    height: 0;
                    //给padding设置为100%  相当于盒子的宽度   padding-top:100%相当于宽高为100%
                    padding-top: 100%;
                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
                .content {
                    display: block;
                    // border-bottom: 0.01rem rgba(7,17,27,0.1) solid;
                    background-color: #fff;
                    .title {
                        font-size: 0.14rem;
                        font-weight: 700;
                        color: rgb(7,17,27);
                        line-height: 0.14rem;
                        padding: 0.18rem  0 0 0.18rem;
                    }
                    .content-message {
                        display: flex;
                        font-size: 0.1rem;
                        padding: 0.08rem 0 0 0.18rem ;
                        color: rgb(147,153,159);
                        line-height: 0.1rem;
                        .month-sale {
                            padding-right: 0.12rem;
                        }
                    }
                    .price {
                        display: flex;
                        padding: 0.18rem 0 0.18rem 0.18rem;
                        .new-price {
                            font-size: 0.14rem;
                            font-weight: 700;
                            color: rgb(240, 20, 20);
                            line-height: 0.24rem;
                            padding-right: 0.12rem;
                        }
                        .old-price {
                            font-size: 0.1rem;
                            font-weight: normal;
                            color: rgb(147,153,159);
                            line-height: 0.24rem;
                            //text-decoration 属性规定添加到文本的修饰
                            text-decoration: line-through;
                        }              
                    }
                    .shopcount-food {
                        position: absolute;
                        right: 0.1rem;
                        margin-top: -0.5rem;     
                    } 
                }
                .buy {
                    position: absolute;
                    right: 0.18rem;
                    bottom: 0.18rem;
                    z-index: 10;
                    width: 0.74rem;
                    height: 0.26rem;
                    line-height: 0.24rem;
                    font-size: 0.10rem;
                    background-color: #ffc400;
                    border-radius: 12px;
                    color: #fff;
                    text-align: center;
                    &.food-two-enter-active, &.food-two-leave-active {
                        transition: opacity .5s;
                    }
                    &.food-two-enter, &.food-two-leave {
                        opacity: 0;
                    }
                }
            }
            .introduction {
                font-size: 0.14rem;
                padding: 0.18rem;
                h1 {
                    font-size: 0.13rem;
                    font-weight: 600;
                    color: rgb(7, 17, 27);
                }
                p {
                    font-size: 0.12rem;
                    font-weight: 200;
                    color: rgb(77, 85, 93);
                    line-height: 0.24rem;
                }
            }   
            .evaluate-list {
                font-size: 0.13rem;
                .evaluate-item {
                    display: flex;
                    justify-content: space-between;
                    margin: 0.16rem;
                    border-bottom: 0.01rem rgba(17,7,27,0.09) solid;
                    padding-bottom: 0.16rem;
                    .evaluate-content {
                        
                        .content-time {
                            display: flex;
                            font-size: 0.1rem;
                            color: rgb(147,153,159);
                            line-height: 0.12rem;
                            padding-bottom: 0.06rem;
                            .time {
                                padding-left: 0.1rem;
                            }
                        }
                        .article {
                            display: flex;
                            font-size: 0.12rem;
                            .font {                                
                                // color: #ff5b71;
                                padding-right: 0.04rem;
                                line-height: 0.24rem;
                                &.happy {
                                    color: #ff0000b5;
                                }
                                &.sad {
                                    color: #999da2; 
                                }
                            }
                            .text {
                                color: rgb(7, 17, 27);
                                line-height: 0.16rem;
                                padding-top: 0.06rem;

                            }
                        }
                    }
                    .user {
                        display: flex;
                        .name {
                            font-size: 0.1rem;
                            color: rgb(147,153,159);
                            line-height: 0.12rem;
                            padding-right: 0.06rem;
                        }
                        img {
                            width: 0.14rem;
                            height: 0.14rem;
                            border-radius: 50px;
                            line-height: 0.12rem;
                        }
                    }
                }
                .no-evaluate {
                    font-size: 0.12rem;
                    color: rgb(147,153,159);
                    display: flex;
                    justify-content: center;
                    padding: 0.18rem;
                    img {
                        width: 0.18rem;
                        height: 0.18rem;
                        
                    }
                }
            }         
        }
    }
    .headerbar {
        display: flex;
        height: 0.4rem;
        width: 100%;
        // position: absolute;
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
</style>
