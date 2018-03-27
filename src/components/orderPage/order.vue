<template>
    <div class="order" ref="order">
        <div>
            <header-bar mold="order" monickor="订单"></header-bar>
            <div class="order-main">
                <div class="order-img">
                    <img src="../../assets/img/mainView/darlene.jpg" alt="">
                </div>
                <div class="order-time">
                    <h1>香锅锅超市</h1>
                    <p class="one">下单时间:2013-11-11 12:32</p>
                    <p>商品类型:化妆品</p>
                    <p class="two">总价:￥12.2</p>
                </div>
                <div class="order-state">
                    <p>已完成</p>
                    <router-link :to="{path: '/looking'}">
                        <div class="looking">查看详情</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import headerBar from '../part/headerBar.vue'
import { refresh } from '../../common/js/public';
    refresh('校友圈');
    export default {
        name: 'order',  
        created() {
            refresh('我的订单')
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.order, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
        },
        components: {
            headerBar
        }
    }
</script>

<style lang="scss" scoped>
    .order {
        position: fixed;
        top: 0;
        bottom: 0.48rem;
        width: 100%;
        background-color: #fff;

    }
    .order-main {
        padding:0.10rem 0.10rem 0.15rem 0.10rem;
        border-bottom: 0.01rem solid rgba(7, 17, 27,0.1);
        display: flex;  
        // height: 0.9rem;
        .order-img {
            flex: 0.5;
            padding-right: 0.1rem;
            position: absolute;
            img {
                height: 0.7rem;
                width: 0.7rem;
                border-radius: 25px;
                vertical-align: top;
            }
        }
        .order-time {
            flex:3;
            padding-left: 0.8rem;
            h1 {
                color: #333;
                font-weight: 700; 
                font-size: 0.2rem;               
            }
            p {
                color: #999;
                font-size: 0.13rem;
                padding-top: 0.05rem;
            }
        }
        .order-state {
            font-size: 0.15rem;
            flex:1;
            color: rgb(63, 205, 205);
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .looking {
                margin-top: 0.4rem;
                border: solid 0.01rem rgb(255, 166, 0);
                // padding: 0.02rem;
                color: orange;
                text-align: center;
                padding:0.01rem;
            }
        }
    }
</style>
