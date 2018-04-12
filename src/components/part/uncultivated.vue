<template>
    <div class="helpcenter" ref="helpcenter">
        <div>
            <header-bar mold="register" monickor="帮助/咨询中心"></header-bar>
            <construction></construction>
            <div class="bulding">
                <div class="bulding-title one">
                    <p class="title">售后服务</p>
                </div>
                <div class="bulding-title two">
                    <p class="title">商家入驻</p>
                </div>
                <div class="bulding-title three">
                    <p class="title">常见问题与帮助</p>
                </div>
            </div>
            <div class="bulding">
                <div class="bulding-title four">
                    <p class="title">发布内容被屏蔽</p>
                </div>
                <div class="bulding-title three">
                    <p class="title">联系我们</p>
                </div>
                <div class="bulding-title one">
                    <p class="title">其他问题</p>
                </div>
            </div>  
            <p class="apologize">
                亲爱的喵先生，喵女士们，很抱歉此栏目我们程序媛正在建设中，
                如果有关于账号申诉,用户举报,产品建议,以及商品订单问题,可拨打客服热线
                00-xxxxxxxx进行咨询，Thanks♪(･ω･)ﾉ    
            </p>         
        </div>

    </div>
</template>


<script>
    import headerBar from '../part/headerBar.vue'
    import construction from './construction.vue'
    import BScroll from 'better-scroll'
    export default {
        name: 'helpcenter',
        components: {
            headerBar,
            construction
        },
        created () {
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll (this.$refs.helpcenter, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })   
        }
    }
</script>

<style lang="scss" scoped>

    .helpcenter {
        background-color: #fff;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        .bulding {
            display: flex;
            position: relative;
            top: 0rem;
            justify-content: space-around;
            padding: 0 0.2rem 0.2rem 0.2rem;
            .bulding-title {
                height: 0.9rem;
                width: 0.9rem;
                border-radius: 20px;  
                margin-left: 0.1rem;
                .title {
                    padding: 0.25rem 0.15rem 0.15rem 0.15rem;
                    font-size: 0.15rem;
                    text-align: center;
                    color: #fff;
                }
            }
            .one {
                background-color: #ff76A0;
                -webkit-box-shadow: 1px 6px 15px #f32758;
                box-shadow: 1px 6px 15px #f32758;
            }
            .two {
                background-color: #b575ff;
                -webkit-box-shadow: 1px 6px 15px #af45f7;
                box-shadow: 1px 6px 15px #af45f7;
            }
            .three {
                background-color: #5ebffc;
                -webkit-box-shadow: 1px 6px 15px #4598f7;
                box-shadow: 1px 6px 15px #4598f7;
            }
            .four {
                background-color: #f7c627;
                -webkit-box-shadow: 1px 6px 15px #fda31c;
                box-shadow: 1px 6px 15px #fda31c;
            }
        }
        .apologize {
            font-size: 0.15rem;
            padding: 0.3rem;
            color: #6c7073;
        }
    }
</style>
