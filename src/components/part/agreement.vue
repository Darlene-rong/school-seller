<template>
    <div class="agreement" ref="agreement">
        <div class="agree-main">
            <header-bar mold="agreement"></header-bar>
            <div class="agree-page">
                <p class="title">{{title}}</p>
                <div class="name">
                    <p>版本生效日期：2018年03月09日</p>
                    <pre>·提示条款</pre>
                    <p  v-for="item in items">{{item.title}}</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import headerBar from './headerBar.vue'
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                title: '喵超人服务协议',
                items: [
                    {
                        title: '【签约动作】当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全部内容，并与淘宝达成一致，成为喵超人平台“用户”。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。'
                    },
                    {
                        title: '【审慎阅读】您在申请注册流程中点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。如您对协议有任何疑问，可向喵超人平台客服咨询。' 
                    },
                    {
                        title: '本协议为《喵超人服务协议》修订版本，自本协议发布之日起，喵超人平台各处所称“喵超人服务协议”均指本协议'
                    },
                    {
                        title: '喵超人平台规则：包括在所有淘宝平台规则频道内已经发布及后续发布的全部规则、解读、公告等内容以及各平台在帮派、论坛、帮助中心内发布的各类规则、实施细则、产品流程说明、公告等。'
                    }
                ]
            }
        },
        components: {
            headerBar
        },
        created() {
            this.$nextTick(() => {
                    if(!this.scroll) {
                        this.scroll = new BScroll(this.$refs.agreement, {
                            click: true
                        });
                    } else {
                        //重新计算
                        this.scroll.refresh();
                    }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .agreement {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0.48rem; 
        background-color: #fff;
        .agree-main {
            background-color: #fff;
            .agree-page {
                padding: 0.1rem;
                .title {
                    font-size: 0.3rem;
                    font-weight: 700;
                    padding-bottom: 0.2rem;
                }
                .name {
                    font-size: 0.15rem;
                    word-wrap: break-word; 
                    word-break: normal;
                    line-height: 0.3rem;
                    padding:0.1rem; 
                }
            }
        }
    }
</style>
