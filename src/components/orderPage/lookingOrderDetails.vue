<template>
    <div class="order-details" ref="orderDetails">
        <div>
            <router-link :to="{path : 'orderPage'}"><i class="iconfont font">&#xe697</i></router-link> 
            <div class="looking-header">
                <img src="../../assets/img/orderimg/headerimg.jpg" alt="">       
            </div>
            <div class="looking-content">
                <div class="lo-top">
                    <i class="iconfont one-font">&#xe688</i>
                    <p class="one">订单已完成</p>
                    <p class="two">感谢您对喵喵的支持，欢迎再次光临❥</p>
                </div>
                <div class="lo-map">
                    <i class="iconfont four-font">&#xe64f</i>
                    <div class="address">
                        <p>收货人: 周蓉</p>
                        <p>电话：13272304420</p>
                        <p class="address-seller">收货地址: 致远园四栋</p>                        
                    </div>
                </div>
                <split></split>
                <div class="lo-list">
                    <div class="list-title">
                        <img src="../../assets/img/bdd59786ad48ac3c43cae29377b203a81d434035.gif" alt="">
                        <p>开心超市么么哒</p>
                        <i class="iconfont three-font">&#xe65f</i>
                    </div>
                    <div class="list-content">
                        <div class="content-img">
                            <img src="../../assets/img/mainView/darlene.jpg" alt="">   
                            <div class="content-main">
                                <p>可乐</p>
                                <p>x1</p>
                            </div>                            
                        </div>
                        <p class="content-price">￥10</p>
                    </div>


                    <!-- 测试 -->
                    <div class="list-content">
                        <div class="content-img">
                            <img src="../../assets/img/mainView/darlene.jpg" alt="">   
                            <div class="content-main">
                                <p>可乐</p>
                                <p>x1</p>
                            </div>                            
                        </div>
                        <p class="content-price">￥10</p>
                    </div>
                    <div class="list-content">
                        <div class="content-img">
                            <img src="../../assets/img/mainView/darlene.jpg" alt="">   
                            <div class="content-main">
                                <p>可乐</p>
                                <p>x1</p>
                            </div>                            
                        </div>
                        <p class="content-price">￥10</p>
                    </div>
                    <div class="list-content">
                        <div class="content-img">
                            <img src="../../assets/img/mainView/darlene.jpg" alt="">   
                            <div class="content-main">
                                <p>可乐</p>
                                <p>x1</p>
                            </div>                            
                        </div>
                        <p class="content-price">￥10</p>
                    </div>


                    <div class="list-price">
                        <div class="fee">
                            <p>配送费</p>
                            <p>￥2</p>
                        </div>
                        <div class="together">
                            <p>合计</p>
                            <p class="red">￥2</p>
                        </div>
                    </div>
                </div>
                <split></split>
                <div class="lo-bottom" v-for="item in items" >
                    <p class="one">{{item.title}}</p>
                    <p class="two">{{item.main}}</p>
                </div>
            </div>
            <split></split>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import split from '../SellersPage/assembly/split.vue'
    export default {
        name: 'lookingOrderDetails',
        data() {
            return {
                items :[
                    {
                        title: '期望时间',
                        main: '立即配送'
                    },
                    {
                       title: '配送服务',
                        main: '由商家提供配送服务' 
                    },
                    {
                        title: '订单号码',
                        main: '2014 3434 2323 3434'
                    },
                    {
                        title: '订单时间',
                        main: '2018-03-25 19:02:02'
                    },
                    {
                        title: '支付方式',
                        main: '在线支付'
                    }
                ]
            }
        },
        components: {
            split
        },
        created () {
            
            this.$nextTick(() => {
                if(!this.scroll) {
                    this. scroll = new BScroll(this.$refs.orderDetails, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .order-details {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;   
        background-color: #F4F4F4;   
        color: #373737;  
        .font {
            position: absolute;
            font-size: 0.2rem;
            padding-left: 0.05rem;
            padding-top: 0.05rem;
        }
        .looking-header {
            font-size: 0.13rem;
            text-align: center;
            width: 100%;
            background-color: #fff;
            img {
                height: 1.3rem;
                width: 2.0rem;
            }
        }
    }
    .looking-content {
        background-color: #fff;
        .lo-top {
            width: 100%;
            font-size: 0.13rem;
            text-align: center;
            line-height: 0.2rem;
            padding-bottom: 0.2rem;
            border-bottom:  0.01rem rgba(7, 17, 27, 0.1) dashed;           
            .one {
                font-size: 0.16rem;
                font-weight: 700;
                line-height: 0.3rem;
            }
            .one-font {
                color: #ecb0b0;
                font-size: 0.3rem;
            }
            .two {
                color: #9f9f9f;
            }
        }
        .lo-list {
            .list-title {
                font-size: 0.13rem;
                display: flex;
                align-items: center;
                padding: 0.1rem;
                color: #757575;
                border-bottom: 0.01rem rgba(7, 17, 27, 0.1) dashed;
                img {
                    height: 0.3rem;
                    width: 0.3rem;
                    border-radius: 50px;
                    padding-right: 0.15rem;
                }
                .three-font {
                    font-size: 0.13rem;
                    padding-left: 0.05rem;
                    padding-top: 0.02rem;
                    color: #9f9f9f;
                }
            }
            .list-content {
                margin: 0.1rem 0.2rem;
                padding-bottom: 0.1rem;
                font-size: 0.13rem;
                display: flex;
                justify-content: space-between;
                border-bottom: 0.01rem rgba(7, 17, 27, 0.1) solid;
                img {
                    height: 0.7rem;
                    width: 0.7rem;      
                }
                .content-img {
                    display: flex;
                    .content-main {
                        padding-left: 0.1rem;
                    }
                }
            }
            .list-price {
                margin: 0.1rem 0.2rem;
                .fee {
                    display: flex;
                    font-size: 0.14rem;
                    justify-content: space-between;
                    padding-bottom: 0.1rem;
                    border-bottom: 0.01rem rgba(7, 17, 27, 0.1) dashed;
                }
                .together {
                    font-size: 0.2rem;
                    display: flex;
                    padding: 0.1rem 0;
                    justify-content: space-between;
                    .red {
                       color: #EE5A56; 
                    }
                }
            }
        }
        .lo-bottom {
            display: flex;
            margin: 0 0.1rem;
            font-size: 0.15rem;
            line-height: 0.3rem;
            .one {
                color: #9f9f9f;
            }
            .two {
                padding-left: 0.2rem;
            }
        }
        .lo-map {
            font-size: 0.15rem;
            display: flex;
            align-items: center;
            padding: 0.1rem  0.15rem;
            color: #646464;
            .four-font {
                font-size: 0.2rem;
            }
            .address {
                padding-left: 0.2rem;
            }
        }
    }
</style>
