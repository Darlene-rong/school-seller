<template>
    <div class="rathings" ref="rathing">
        <div class="rathings-content">
            <!-- 综合评分 -->
            <div class="score-wrapper">
                <!-- 左侧商家评分 -->
                <div class="score-left">
                    <h1 class="score">{{ seller.score }}</h1>
                    <div class="title">综合得分</div>
                    <div class="rank">高于周边商家{{ seller.rankRate }}%</div>
                </div>
                <!-- 右侧服务态度评分 -->
                <div class="score-right">
                    <div class="wrapper">
                        <span class="title">服务态度</span>
                        <star :size="36" :score="seller.serviceScore"></star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="wrapper">
                        <span class="title">商品评分</span>
                        <star :size="36" :score="seller.foodScore"></star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="wrapper">
                        <p class="title">送达时间</p>
                        <p class="time">{{seller.deliveryTime}}分钟</p>
                    </div>
                </div>
            </div>
            <split></split>
            <!-- 评论区域 -->
            <div class="bottom-wrapper">
                <!-- 选择区域 -->
                <evaluate mold-one="quoteOne"
                          :select-type="selectType"
                          :rathings="seller.rathings"
                          :only-content="onlyContent"
                          :desc="desc"
                          @selectEmit="gotselect"
                          @onlyEmit="gotswitch"
                ></evaluate>
                <!-- 评价列表区域 -->
                <div class="list-content">
                    <ul v-show="seller.rathings">
                        <li v-show="some(rathing.rateType,rathing.text)" v-for="rathing in seller.rathings" class="rathings-main">
                           <!-- 用户信息 -->
                            <div class="user">
                                    <img src="../../../assets/img/sellerPage/header.png" alt="">
                                    <div class="name">
                                        <p class="username">{{rathing.username}}</p>
                                        <div class="name-star">
                                            <star :size="24" :score="rathing.score"></star>
                                            <p class="minitue">{{rathing.deliveryTime}}分钟送达</p>
                                        </div>
                                    </div>
                                    <div class="service-time">
                                        <p class="time">{{rathing.time}}</p>
                                        <p class="data">{{rathing.data}}</p>
                                    </div>
                            </div>                                
                            <!-- 评价内容 -->
                            <p class="text-page" v-show=" rathing.rateType === 0">{{rathing.text}}</p>
                            <p class="text-page" v-show=" rathing.rateType === 1">{{rathing.sad}}</p>
                            <!-- 点赞区域 -->
                            <div class="praise-list">
                                <i class="iconfont list" v-show=" rathing.rateType === 0" :class="{ 'new': rathing.rateType === 0}">&#xe64d</i>
                                <i class="iconfont list" v-show=" rathing.rateType === 1" :class=" {'old': rathing.rateType === 1}">&#xe635</i>
                                <div v-for="nice in rathing.recommend" class="nice">
                                    <p>{{nice.id}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import split from '../assembly/split.vue'
    import star from '../star/star';
    import BScroll from 'better-scroll';
    import evaluate from '../assembly/evaluate.vue'

    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2; 

    export default{
        name: 'rathings',
        data() {
            return {
                selectType: ALL,
                onlyContent: false,
                desc: {
                    all: '全部',
                    positive: '好评',
                    negative: '差评'
                }
            }
        },
        components: {
            split,star,evaluate
        },
        created() {
            console.log(this.seller.rathings);
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.rathing, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
        },
        props: {
            seller: {
                type: Object
            }
        },
        methods: {
            gotselect(val) {
                this.selectType = val;
            },
            gotswitch(val) {
                this.onlyContent = val;
            },
            some(type, text) {
                if(this.onlyContent && !text) {
                    return false;
                }
                if(this.selectType === ALL) {
                    return true;
                } else {
                    return type === this.selectType;
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .rathings {
        //固定父元素的高度
        position: absolute;
        top: 1.83rem;
        bottom: 0;
        width: 100%;
        left: 0;
        margin-top: 0.4rem;
        overflow: hidden;
        .rathings-content {
            .score-wrapper {
                //弹性布局
                display: flex;
                padding: 0.18rem 0;
                .score-left {
                    flex: 0 0 1.37rem;
                    width: 1.37rem;
                    border-right: 0.01rem solid rgba(7, 17, 27, 0.1);
                    text-align: center;
                    .score {
                        font-size: 0.24rem;
                        color: rgb(255, 153, 0);
                        line-height: 0.28rem;
                    }
                    .title {
                        font-size: 0.12rem;
                        color: rgb(7, 17, 27);
                        line-height: 0.12rem;
                        padding-top: 0.06rem;
                    }
                    .rank {
                        font-size: 0.1rem;
                        color: rgba(71, 85, 100, 0.61);
                        line-height: 0.1rem;
                        padding-top: 0.08rem;
                    }
                }
                .score-right {
                    flex: 1;
                    padding-left: 0.24rem;
                    font-size: 0.12rem;
                    .wrapper {
                        display: flex;
                        padding-top: 0.08rem;
                        .title {
                           color: rgb(7, 17, 27);                      
                        }
                        .score {
                            color: rgb(255, 153, 0);
                        }
                        .time {
                            color: rgb(147, 153, 159);
                            padding-left: 0.12rem;
                        }
                    }
                    
                }
            }
            .bottom-wrapper {
                .list-content {
                    font-size: 0.14rem;
                    .rathings-main {
                        list-style-type: none;
                        margin: 0.18rem;
                        border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                        //用户信息
                        .user {
                                display: flex;
                                img {
                                    width: 0.28rem;
                                    height: 0.28rem;
                                }
                                .name {
                                    padding-left: 0.12rem;
                                    flex: 2;
                                    .username {
                                        font-size: 0.1rem;
                                        color: rgb(7, 17, 27);
                                        line-height: 0.12rem;
                                    }
                                    .name-star {
                                        display: flex;
                                        font-size: 0.1rem;
                                        font-weight: 200;
                                        color: rgb(147, 153, 159);
                                        line-height: 0.12rem;
                                        padding-top: 0.04rem;
                                        .minitue {
                                            padding-left: 0.06rem;
                                        }
                                    }
                                }
                                .service-time {
                                    display:flex;
                                    font-size: 0.1rem;
                                    color: rgb(147, 153, 159);
                                    line-height: 0.12rem;
                                    .data {
                                        padding-left: 0.05rem;
                                    }
                                }
                        }
                        .text-page {
                            font-size: 0.12rem;
                            color: rgb(7, 17, 27);
                            line-height: 0.18rem;
                            padding: 0.06rem 0.46rem;
                        }
                        .praise-list {
                            display: flex;
                            padding: 0.10rem 0.46rem;
                            overflow: hidden;
                            .list {
                                font-size: 0.2rem;
                                line-height: 0.2rem;              
                                &.new {
                                    color: #ff0000b5;
                                }
                                &.old {
                                    color: #999da2;
                                }
                            }
                            .nice {
                                padding-left: 0.08rem;
                                color: rgb(147, 153, 159);
                                p {
                                    font-size: 0.09rem;
                                    padding:0.02rem 0.06rem;
                                    width: 0.44rem;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    border:0.01rem solid rgba(7, 17, 27, 0.1);
                                }
                               
                            }
                        }
                    }
                }
            }
        }
    }
</style>
