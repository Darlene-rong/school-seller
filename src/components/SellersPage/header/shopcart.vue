<template>
    <div>
        <div class="shopcart">
            <!-- 底部购物车 -->
            <div class="content" >
                <div class="content-left" @click="showList">
                    <div class="cicrl">
                        <div class="logo" :class="{ 'heightlight' :totalCount>0 }">
                            <i class="iconfont icon-style" :class="{'heightlight' :totalCount>0}">&#xe600</i>
                        </div>     
                        <div class="number" v-show="totalCount>0"> {{ totalCount }} </div>         
                    </div>
                    <div class="money" :class="{ 'heightlight' :totalCount>0 }">
                    ￥{{totalPrice}}
                    </div>
                    <div class="price">另外需要配送费{{deliveryPrice}}元</div>
                </div>
                <div class="content-right" :class="{ 'change' :totalPrice>minprice }" @click="balancePrice">
                    {{payPrice}}  
                </div>
            </div>
            <!-- 购物车详情列表 -->
            <transition name="fold">
                <div class="shopcart-list" v-show="listShow">
                    <div class="list-header">
                        <h1 class="title"  @click="hiddenContent">隐藏</h1>
                        <p class="empty" @click="empty">清空</p>
                    </div>
                    <div class="list-content" ref="shoplist">
                        <ul>
                            <li class="food" v-for="food in selectfoods">
                                <span class="name">{{food.name}}</span>
                                <div class="price">
                                    <p class="price-money">￥{{food.price*food.count}}</p>   
                                    <shopcount :food="food" class="shopcount-wrapper"></shopcount>                         
                                </div>                       
                            </li>
                        </ul>
                    </div>
                </div>             
            </transition>
      
        </div> 
        <transition name="fade">
            <div  class="background-blur" v-show="listShow" translate="fade"></div>         
        </transition>      
    </div>


</template>

<script>
import shopcount from './shopcount'
import BScroll from 'better-scroll'

    export default {
        name: 'shopcart',
        data() {
            return {
                fold: true
            }
        },
        created() {
        },
        components: {
            shopcount
        },
        props: {
            selectfoods: {
                type: Array,
                default() {
                    return [];
                },   
            },
            //配送费
            deliveryPrice: {
                type: Number,
                default: 0
            },
            //起送费
            minprice: {
                type: Number,
                default: 0
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.selectfoods.forEach((food) => {
                    total += food.price*food.count;
                })
                return total;
            },
            totalCount() {
                let count = 0;
                this.selectfoods.forEach((food) => {
                    count += food.count;
                });
                return count;
            },
            payPrice() {
                if(this.minprice === 0) {
                    //反引号
                    return `￥${this.minprice}送起`
                }else if(this.totalPrice < this.minprice) {
                    let diff = this.minprice - this.totalPrice
                    return `还差￥${diff}元起送`
                }else{
                    return '去结算';
                }
            },
            listShow() {
                if(!this.totalCount) {
                    this.fold = true;
                    return false;
                }
                let show = !this.fold;
                //
                if (show) {
                    this.$nextTick(() => {
                        if (!this.scroll) {
                            this.scroll = new BScroll(this.$refs.shoplist, {
                                click: true
                            });
                        } else {
                             // 重新计算better-scroll高度
                            this.scroll.refresh();
                        }
                    })
                }
                return show;
            }       
        },
        methods: {
            showList() {
                if(!this.totalCount) {
                    return;
                }
                this.fold = !this.fold;
            },
            empty() {
                this.selectfoods.forEach((food) => {
                    food.count = 0;
                })
            },
            hiddenContent() {
                console.log('ee');
                if(!this.totalCount) {
                    return;
                }
                this.fold = true;

            },
            balancePrice() {
                this.$router.push({
                    path:'/balance',
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .shopcart {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        height: 0.48rem;
        width: 100%;
        .content {
            display: flex;
            background: #141d27;
            color: rgba(255, 255, 255, .4);
            height: 0.48rem;
            .content-left {
                display: flex;
                flex: 1;
                .cicrl{      
                    flex: 0 0 0.56rem;    
                    position: relative;
                    top: -0.1rem;
                    margin: 0 0.12rem;
                    padding: 0.06rem;
                    height: 0.56rem;
                    width: 0.56rem;
                    box-sizing: border-box;
                    vertical-align: top;
                    border-radius: 50%;
                    background-color: #141d27;
                    .logo {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background-color: #2b343c;
                        text-align: center;
                        &.heightlight {
                            background-color: rgb(255, 196, 0);
                        }
                        .icon-style{
                            vertical-align: top;
                            font-size: 0.24rem;
                            line-height: 0.44rem;
                            color: #f4f4f4;
                            &.heightlight {
                                color: #fff;
                            }
                        }
                    }
                    .number {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 0.28rem;
                        height: 0.19rem;
                        text-align: center;
                        border-radius: 0.16rem;
                        line-height: 0.16rem;
                        font-size: 0.09rem;
                        font-weight: 700;
                        color: #fff;
                        background-color: red;
                        box-shadow: 0 0.02rem 0.08rem 0 rgba( 0, 0, 0, 0.4 );
                    }
                }
                .money{
                    vertical-align: top;
                    flex: 0 0 0.36rem;
                    font-size: 0.16rem;
                    font-weight: 700;
                    line-height: 0.24rem;
                    margin-top: 0.12rem;
                    box-sizing: border-box;
                    padding-right: 0.12rem;
                    border-right: 0.01rem rgba(255,255,255,0.1) solid;
                    &.heightlight {
                        color: #fff;
                    }
                }
                .price{    
                    font-size: 0.1rem; 
                    font-weight: 400;
                    padding: 0.09rem 0.1rem;
                    line-height: 0.25rem;
                }
            }
            .content-right {
                flex: 0 0 1.05rem;
                width: 1.05rem;
                background-color: #2c333b;
                font-size: 0.13rem;
                font-weight: 700;
                text-align: center;
                padding-left: 0.08rem ;
                padding-right: 0.08rem;
                padding-top: 0.13rem;
                &.change{
                    background-color: rgb(255, 196, 0);
                    color: #fff;
                }
            }
            // .ball-container{
            //     .ball{
            //         position: fixed;
            //         left: 0.32rem;
            //         bottom: 0.22rem;
            //         z-index: 200;
            //         &.drop-transition {
            //             transition: all 0.4s;
            //             .inner {
            //                 width: 0.16rem;
            //                 height: 0.16rem;
            //                 border-radius: 50%;
            //                 background: #ffc400;
            //                 transition: all 0.4s;
            //             }
            //         }
            //     }
            // }  
        }
        .shopcart-list {
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                width: 100%;
                font-size: 0.12rem;
                margin-top: -2rem;
                background-color: #fff;
                &.fold-transition {
                    transition: all 0.5s; 
                    transform: translate3d(0, -100%, 0);
                    //不定高
                }
                &.fold-enter, &.fole-leave {
                    transform: translate3d(0, 0, 0);
                }    
                .list-header {
                    display: flex;
                    height: 0.4rem;
                    font-weight: 200;
                    background-color: #f3f5f7;
                    border-bottom: 0.01rem rgba(7,17,27,0.1) solid;
                    align-items: center;
                    justify-content: space-between;
                    .title, .empty {
                        font-size: 0.14rem;
                        font-weight: 200;
                        color: #ffc400;
                        padding: 0 0.18rem;
                    }
                }
                .list-content {
                    padding: 0 0.1rem;
                    height: 2.17rem;
                    background-color: #fff;
                    overflow: hidden;
                    .food {
                        display: flex;
                        align-items: center;             
                        border-bottom: 0.01rem rgba(7,17,27,0.1) solid;
                        // height: 0.48rem;
                        justify-content: space-between;
                        .name {
                            font-size: 0.14rem;
                            color: rgb(7,17,27);                          
                        }
                        .price {
                            display: flex;
                            align-items: center;
                            .price-money {
                                padding-right: 0.12rem;
                            }
                            .shopcount-wrapper {
                                padding-top: 0.1rem;
                            }
                        }
                    }
                }
        }
    }
    .background-blur {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 40;
        background-color:rgba(7, 17, 27, .6);
        &.fade-enter-active, .fade-leave-active {
            transition: all .5s;
        }
        .fade-enter, .fade-leave-active {
            opacity: 0;
        }
    }
            
</style>
