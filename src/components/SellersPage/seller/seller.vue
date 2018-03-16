<template>
<!-- 商家详情页面 -->
    <div class="seller" ref="seller">
        <div class="seller-content">
            <div class="wrapper">
                <div class="content-wrapper">
                    <div class="left">
                        <h1>{{seller.name}}</h1>
                        <div class="seller-star">
                            <star :size="24" :score="seller.score"></star>
                            <p class="one-text">({{seller.ratingCount}})</p>
                            <p class="two-text">月售{{seller.sellCount}}}单</p>
                        </div>
                    </div>
                    <div class="right">
                        ddd
                    </div>                    
                </div>
                <div class="wrapper-bottom" >
                    <div class="bottom" >
                        <p class="question">起送价</p>
                        <p class="price">{{seller.minPrice}}元</p>
                    </div>
                    <div class="bottom" >
                        <p class="question">商家配送</p>
                        <p class="price">{{seller.deliveryPrice}}元</p>
                    </div>
                    <div class="bottom" >
                        <p class="question">平均配送时间</p>
                        <p class="price">{{seller.deliveryTime}}分钟</p>
                    </div>
                </div>
            </div>
            <split></split>
            <div class="notice-content">
                 <h1 class="stodd">公告与活动</h1>
                 <p>{{seller.notice}}</p> 
            </div>
            <split></split>
            <div class="picture-content">
                <h1>店铺实景</h1>
                <div class="picture" ref="picWrapper">
                    <div class="pic-wrapper" ref="picList">
                        <ul class="pic-list">
                            <li class="pic-item">
                                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <split></split>
            <div class="message-content">
                <h1>商家信息</h1>
                <div v-for="item in items" class="message-item">{{item.message}}</div>
            </div>
            <split></split>
        </div>
    </div>
</template>

<script>
    import star from '../star/star';
    import BScroll from 'better-scroll'
    import split from '../assembly/split.vue'
    export default{
        name: 'seller',
        data() {
            return{
                items: [
                    {
                        message: '该商家支持开发票'
                    },
                    {
                        message: '营业时间:10:00-20:30'
                    },
                    {
                        message: '欢迎欢迎━(*｀∀´*)ノ亻!'
                    },
                    {
                        message: '欢迎各位校友'
                    }

                ]
            }
        },
        props: {
            seller: {
                type: Object
            }
        },
        components: {
            star,split  
        },
        created() {
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.seller, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            });
            // let picWidth = 120;
            // let margin = 6;
            // let width = (picWidth + margin)*
        }
    }
</script>

<style lang="scss" scoped>
    .seller{
        position: absolute;
        top: 1.83rem;
        bottom: 0;
        width: 100%;
        left: 0;
        margin-top: 0.4rem;
        overflow: hidden;        
        .seller-content{
            .wrapper {
                margin:0.18rem;
                .content-wrapper { 
                    display: flex;
                    font-size: 0.1rem;
                    justify-content: space-between;
                    border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                    padding-bottom: 0.18rem;
                    .left {
                        h1 {
                            font-size: 0.14rem;
                            color: rgb(7, 17, 27);
                            line-height: 0.18rem;
                        }
                        .seller-star {
                            display: flex;
                            font-size: 0.1rem;
                            color: rgb(77, 85, 93);
                            line-height: 0.18rem;
                            padding-top: 0.04rem;
                            .one-text {
                                padding-left: 0.08rem;
                            }
                            .two-text {
                                padding-left: 0.12rem;
                            }
                        }
                    }
                } 
                .wrapper-bottom {
                    padding: 0.18rem 0.18rem 0 0.18rem;
                    font-size: 0.14rem;
                    display: flex;
                    justify-content: space-between;   
                    .bottom {
                        padding-right: 0.2rem;
                        border-right: 0.01rem solid rgba(7, 17, 27, 0.1);
                        .question {
                            font-size: 0.1rem;
                            color: rgb(147, 153, 159);
                            line-height: 0.1rem;
                        }
                        .price {
                            font-size: 0.20rem;
                            font-weight: 400;
                            color: rgb(61, 61, 61);
                            line-height: 0.24rem;
                            padding-top: 0.04rem;
                        }
                    }
                }               
            }
            .notice-content {
                padding: 0.18rem;
                h1 {
                    font-size: 0.14rem;
                    color: rgb(7, 17, 27);
                    line-height: 0.14rem;
                }
                p {
                    font-size: 0.12rem;
                    color: rgb(240, 20, 20);
                    line-height: 0.24rem;
                    padding: 0.12rem;
                }
            }
            .picture-content {
                padding:0.18rem;
                h1 {
                    font-size: 0.12rem;
                    color: rgb(7, 17, 27);
                    line-height: 0.14rem;
                }
                .picture {
                    .pic-wrapper {
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        .pic-list{
                            font-size: 0;
                            padding-top: 0.1rem;
                            .pic-item{
                                display: inline-block;
                                margin-right: 0.06rem;
                                width: 1.2rem;
                                img {
                                    width: 1.2rem;
                                    height: 0.9rem;
                                    margin-right: 0.06rem;
                                }
                            }                            
                        }

                    }
                }
                
            }
            .message-content {
                margin:0.18rem;
                h1 {
                    font-size: 0.12rem;
                    color: rgb(7, 17, 27);
                    line-height: 0.14rem;
                    padding-bottom: 0.12rem;
                    border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                }
                .message-item {
                    font-size: 0.12rem;
                    font-weight: 200;
                    color: rgb(7, 17, 27);
                    line-height: 0.16rem;
                    padding:0.16rem;
                    border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                }
            }
        }
    }
</style>
