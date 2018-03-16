<template>
  <div class="mainview">
      <!-- 头衔内容区域 -->
      <!-- 商品页头部 -->
      <div class="content-wrapper">
            <div class="left-avatar">
                <img :src="seller.avatar"  :onerror="defaultImg">
                <!-- <img src="../../../assets/img/mainView/darlene.jpg" alt=""> -->
            </div>
            <div class="right-content">
                <div class="title-content">
                        <img src="../../../assets/img/mainView/brand@2x.png" alt="品牌">  
                        <span class="name">{{seller.name}}</span>
                </div>
                <div class="discription">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[3].type]"></span>
                    <span class="text">{{seller.supports[3].description}}</span>
                </div>
            </div>
            <div class="support-content" v-if="seller.supports" @click="showDatil">
                <span class="connt()">{{seller.supports.length}}个&nbsp></span>
            </div>
      </div>
      <!-- 主题条，显示公告条 -->
      <div class="notice-wrapper" @click="showDatil">
            <img src="../../../assets/img/mainView/bulletin@2x.png" alt="">
            <span class="notice-text">{{seller.notice}}</span>
            <i class="iconfont icon-style">&#xe65f</i>
      </div>
      <!-- 背景模糊图片 -->
      <div class="background">
            <img src="../../../assets/img/mainView/darlene.jpg" width="100%" height="100%"> 
      </div>
      <!-- detail 详情 -->
      <transition name="fade">
            <div class="detail" v-show="detailShow">     
                    <div class="detail-wrapper clearfix">
                        <div class="detail-main">
                            <h1 class="name">{{seller.name}}</h1>
                            <div class="star-wrapper">
                                <star :size="48" :score="seller.score" class="star-main"></star>
                            </div>
                            <div class="me-discount">
                                <div class="line"></div>
                                <div class="title">优惠信息</div>
                                <div class="line"></div>
                            </div>
                            <div class="me-message" v-if="seller.supports">
                                <span v-for="(item, index) in seller.supports" class="message-title">
                                    <p class="icon" :class="classMap[seller.supports[index].type]"></p>
                                    <p class="text">{{ seller.supports[index].description }}</p>
                                </span>
                            </div>
                            <div class="me-discount">
                                <div class="line"></div>
                                <div class="title">商家公告</div>
                                <div class="line"></div>
                            </div>
                            <div class="me-content">
                                <p>{{ seller.notice }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-close">
                        <i class="iconfont font-two" @click="closeDetail">&#xe69a</i>
                    </div>    
            </div>      
      </transition>

  </div>
</template>

<script>
import star from '../star/star';

export default{
    name:'mainview',
    data() {
        // 定义data 为function   会返回一个object
        return {
            defaultImg: 'this.src="' + require('../../../assets/img/mainView/darlene.jpg') + '"',
            detailShow: false, 
        }
    },
    components: {
        star
    },
    props: {
        seller: {
            type: Object,
        }
    },
    created() {
        this.classMap = ['decrease','discount','guarantee','invoice','special']
    },
    methods: {
        showDatil() {
            this.detailShow = true;
        },
        closeDetail() {
            this.detailShow = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.mainview {
    position: relative;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.5);
    color: #FFF;
    .content-wrapper {
        position: relative;
        display: flex;
        height: 0.9rem;
        padding: 0.24rem 0.12rem 0rem 0.24rem;
        .left-avatar {
            padding-right: 0.16rem;
            img {
                height: 0.64rem;
                width: 0.64rem;
                border-radius: 0.2rem;
                vertical-align: top;
            }
        }
        .right-content {
            font-size: 0.14rem;
            .title-content {
                display: flex;
                img {
                    height: 0.16rem;
                    width: 0.32rem;
                    padding:0.02rem 0.06rem 0 0 ;
                }
                .name{
                    font-size: 0.16rem;
                    color: rgb(255,255,255);
                    font-weight: bold;
                    line-height: 0.18rem;
                }
            }
        }
        .discription {
            padding-top: 0.08rem;
            font-size: 0.12rem;
            color: rgb(255,255,255);
            font-weight: 200;
            line-height: 0.12rem;
        }
        .support {
            display: flex;
            padding-top: 0.1rem;
            .icon {
                height: 0.12rem;
                width: 0.12rem;
                background-size: 0.12rem 0.12rem;
                background-repeat: no-repeat;
                margin-top: 0.02rem;
            }
            .text {
                font-size: 0.1rem;
                font-weight: 200;
                line-height: 0.16rem;
                padding-left: 0.04rem;
            }
        }
        .support-content {
            height: 0.24rem;
            width: 0.44rem;
            position: absolute;
            top: 0.66rem;
            right: 0.12rem;
            bottom: 0.14rem;
            font-size: 0.1rem;
            font-weight: 200;
            color: rgb(255,255,255);
            background-color: rgba(0,0,0,0.2);
            border-radius: 0.2rem;
            margin-right: -0.07rem;
            line-height: 0.24rem;
            span {
                padding-left: 0.08rem;
            }
        }
    }
    .notice-wrapper {
        position: relative;//相对定位
        height: 0.28rem;
        display: flex;
        padding: 0 0.22rem 0 0.12rem;
        background: rgba(7, 17, 27, 0.2);
        line-height: 0.28rem;
        img {
            width: 0.22rem;
            height: 0.12rem;
            margin-top: 0.09rem;
        }
        .notice-text {
            font-size: 0.1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 0 0.04rem;
        }
        .icon-style {
            position: absolute;//绝对定位
            font-size: 0.1rem;
            top: 0.01rem;
            right: 0.10rem;
        }
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(0.1rem);
    }
    .detail {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(7, 17, 27, 0.8);
        // filter: blur(0.1rem);
        font-size: 0.1rem;
        .detail-wrapper {
            min-height: 100%;
            width: 100%;
            .detail-main {
                margin-top: 0.64rem;
                padding-bottom: 0.64rem;
                .name {
                    font-size: 0.16rem;
                    font-weight: 700;
                    color: rgb(255,255,255);
                    line-height: 0.16rem;
                    text-align: center;
                }
                .star-wrapper {
                    margin-top: 0.18rem;
                    padding: 0.02rem 0;
                    text-align: center;
                }
                .me-discount {
                    display: flex;
                    width: 80%;
                    margin: 0.28rem auto 0.24rem;
                    .line {
                        flex: 1;
                        position: relative;
                        top: -0.1rem;
                        border-bottom: 0.01rem solid rgba(255, 255, 255, 0.2);
                    }
                    .title {
                        padding: 0 0.12rem;
                        font-weight: 600;
                        font-size: 0.14rem;
                    }

                }
                .me-message {
                    margin: 0.32rem;
                    .message-title {
                        display: flex;
                        .icon {
                            height: 0.16rem;
                            width: 0.16rem;
                            background-size: 0.16rem 0.16rem;
                            background-repeat: no-repeat;
                            // 上 右 下 左
                            margin: 0 0.06rem 0.12rem 0.16rem;
                        }
                        .text {
                            font-size: 0.12rem;
                            font-weight: 200;
                            color: rgb(255,255,255);
                            // line-height: 0.12rem;
                        }        
                    }
                }
                .me-content {
                    margin: 0.24rem auto;
                    width: 80%;                    
                    p {
                        padding: 0 0.12rem; 
                        font-size: 0.12rem;
                        font-weight: 200;
                        color: rgb(255,255,255);
                        line-height: 0.2rem;
                    }
                }
            }
        }
        .detail-close {
            position: relative;
            width: 0.32rem;
            height: 1.0rem;
            margin: auto;
            font-size: 0.32rem;
            .font-two {
                font-size: 0.32rem;
                color: rgba(255,255,255,0.5);
            }
        }
    }
}
//v-enter-active：定义过度的状态
.fade-enter-active, .fade-leave-active {
    // transform: scale(0.9,0.9);
    transition: all .5s ease;

}
.fade-enter, .fade-leave-to {
    transform: translateX(10px);
  opacity: 0;
}
.decrease{
    background-image: url('../../../assets/img/mainView/decrease_2@2x.png')
}
.discount{
    background-image: url('../../../assets/img/mainView/discount_2@2x.png')
}
.guarantee{
    background-image: url('../../../assets/img/mainView/guarantee_2@2x.png')
}
.invoice{
    background-image: url('../../../assets/img/mainView/invoice_2@2x.png')
}
.special{
    background-image: url('../../../assets/img/mainView/special_2@2x.png')
}
</style>
