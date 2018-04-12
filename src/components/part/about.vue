<template>
    <div class="aboutebar">
        <div class="about-main">
            <header-bar mold="register" monickor="关于喵超人"></header-bar>
            <div class="about-logo">
                <p>LOGO努力设计中</p>
            </div>
            <p class="logo">喵超人</p>
            <split></split>
            <div class="about-item" @click="tranform">
                <p>喵超人校园在线超市服务协议</p>
                <i class="iconfont font">&#xe6a7</i>
            </div>
            <div class="about-item">
                <p>版本检测</p>
                <p style="color:red">已是最新版本1.0.1</p>
            </div>
            <div class="about-item" @click="_privercy">
                <p>隐私权政策</p>
                <i class="iconfont font">&#xe6a7</i>
            </div>
        </div>
        <!-- 服务协议 -->
        <div class="agreement" ref="agreement" v-show="test">
            <div class="agree-main">
                <div class="bar headbar">
                    <i class="iconfont font" @click="hidden">&#xe697</i>  
                    <p>喵超人校园在线超市服务协议</p>
                </div>

                <div class="agree-page" v-show="agreement">
                    <p class="title">{{title}}</p>
                    <div class="name">
                        <p>版本生效日期：2018年03月09日</p>
                        <pre>·提示条款</pre>
                        <p  v-for="item in items">{{item.title}}</p>
                    </div>
                </div>   
                <!-- 隐私权政策 -->
                <div class="agree-page" v-show="privercy">
                    <p class="title">{{title01}}</p>
                    <div class="name">
                        <p>版本生效日期：2018年03月09日</p>
                        <pre>·提示条款</pre>
                        <p  v-for="item in items01">{{item.title}}</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import headerBar from './headerBar'
import split from '../SellersPage/assembly/split'


    import BScroll from 'better-scroll'
    export default {
        name: 'aboutebar',
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
                ],
                test: false,
                agreement: false,
                privercy: false,
                title01: '法律声明及隐私权政策',
                items01: [
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
            headerBar,split
        },
        methods: {
            tranform() {
                this.test = true;
                this.agreement =true;
            },
            hidden() {
                this.test = false;
                this.agreement =false;
            },
            _privercy () {
                this.test = true;
                this.privercy =true;
            }
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
        },
    }   
</script>

<style lang="scss" scoped>
    .aboutebar {
        .about-main {
            .about-logo {
                font-size: 0.15rem;
                padding-top: 0.3rem;
                display: flex;
                justify-content: center;
                p {
                    background-color: #f56767;
                    width: 0.9rem;
                    box-shadow: 2px 4px 10px #9e0c26;
                    border-radius: 20px;
                    padding-top: 0.3rem;
                    padding-bottom: 0.3rem;
                    color: #fff;
                    padding-left: 0.10rem;
                    padding-right: 0.03rem;
                }
            }
            .logo {
                font-size: 0.2rem;
                width: 100%;
                text-align: center;
                color: rgb(34, 33, 33);
                padding-top: 0.1rem;
                padding-bottom: 0.3rem;
            }
            .about-item {
                font-size: 0.17rem;
                display: flex;
                height: 0.48rem;
                // margin: 0.1rem 0.1rem 0.1rem 0.1rem;
                margin-left: 0.15rem;
                margin-right: 0.15rem;
                // background-color: pink;
                justify-content: space-between;
                border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                color: rgb(44, 42, 43);
                p {
                   padding-top: 0.1rem;
                }
                .font {
                    font-size: 0.25rem;
                    padding-top: 0.1rem;
                }
            }
        }  
    }

    .agreement {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0.48rem; 
        background-color: #fff;
        z-index: 100;
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

    .bar {
            display: flex;
            height: 0.48rem;
            width: 100%;
            position: relative;
            z-index: 100;
            top: 0;
            left: 0;
            font-size: 0.19rem;
            text-align: center;
            // box-shadow: 0px 3px 1px #afafaf;
        }
        .headbar {
            background-color: #ffc400;
            text-align: center;
            // align-items: center;
            .font {
                color: #fff;
                font-size: 0.25rem;
                padding-top: 0.10rem;
                padding-left: 0.1rem;
            }
            p {
                padding-top: 0.1rem;
                font-weight: 600;
                color: #fff;
                flex:2;
                padding-right: 0.2rem;
            }            
        }
</style>
