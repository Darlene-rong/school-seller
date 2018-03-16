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
                title: '法律声明及隐私权政策',
                items: [
                    {
                        title: '您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。鉴此，淘宝网服务提供者（或简称“我们”）制定本《法律声明及隐私权政策》（下称“本政策 /本隐私权政策”）并提醒您：'
                    },
                    {
                        title: '本政策适用于喵超人在线超市平台产品或服务。如我们关联公司（范围详见定义部分）的产品或服务中使用了喵超人在线超市提供的产品或服务（例如直接使用喵超人在线超市账户登录）但未设独立法律声明及隐私权政策的，则本政策同样适用于该部分产品或服务。' 
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
                    text-align: center;
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
