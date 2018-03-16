<template>
    <div class="register">
        <!-- 登录页面 -->
        <div class="register-main" v-show="signIn">
            <header-bar mold="register" monickor="登录"></header-bar>
            <div class="register-image">
                <img src="../../../assets/img/aaa69268272f19bccc616363789ff8a9_r.jpg" alt="">
            </div>
            <form action="post">
                <div class="register-input">
                    <i class="iconfont font">&#xe66c</i>
                    <input type="text" name="name" id="name" placeholder="你的手机号/邮箱" size="20">
                    <i class="iconfont font">&#xe61a</i>
                </div>
                <div  class="register-input">
                    <i class="iconfont font">&#xe649</i>
                    <input v-model="passworde" type="password" ref="passd" name="pass" id="pass" placeholder="密码" size="20">                
                    <i class="iconfont font" @click="chang()" v-show="kawayi1">&#xe677</i>
                    <i class="iconfont font" @click="chang1()" v-show="kawayi2">&#xe60b</i>
                </div>                
            </form>
            <div class="register-login">
                <!-- <router-link :to="{path: '/'}"> -->
                    <p class="sign" @click="showlogin">注册账号</p>
                <!-- </router-link> -->
                <router-link :to="{path: '/'}">
                    <p class="enroll">登录</p>
                </router-link>
            </div>
        </div>
        <!-- 注册页面 -->
        <div class="enroll-main" v-show="encroll">
            <header-bar mold="register" monickor="注册账号"></header-bar>
            <div class="enroll-content">
                <p>请确认你的国家或者地区并输入手机号码</p>
            </div>
            <div class="enroll-number" @click="showPhone">
                <p>{{china}}</p>
                <i class="iconfont">&#xe6a7</i>
            </div>
            <div class="enroll-moblie">
                <p>+86</p>
                <input type="text" placeholder="请输入常用的手机号码">
            </div>
            <div class="enroll-protocol" >
                <p>点击“获取验证码”按钮，即是表示同意<b @click="showProtocol">注册协议</b></p>
            </div>
            <router-link :to="{path:'/'}">
                <div class="enroll-button">
                    <p>获取验证码</p>
                </div>  
            </router-link>
        </div>
        <!-- 手机号码归属地选择 -->
        <transition name="fade">
            <div class="cell-phone" v-show="cellPhone">
                <!-- 地区选择 -->
                <div class="phone-area" v-show="mold">
                    <div class="area-choose">
                        <p>地区选择</p>
                        <p @click="cellClose">取消</p>
                    </div>
                    <div class="cell-main" ref="cellMain">
                        <div>
                            <div class="city" @click="choose(city.title)" v-for="city in cities">
                                <p>{{city.title}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 注册条约 -->
                <div class="phone-area" v-show="Protocol">
                    <div class="area-choose">
                        <p>注册条约</p>
                        <p @click="cellClose">取消</p>
                    </div>
                    <div class="cell-main">
                        <div class="cell-title">
                            <p>
                                用户一旦注册成功，便成为本网站的合法用户，将得到一个密码和帐号。用户应采取合理措施维护其密码和帐号的安全。
                                
                                用户同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国著作权法》、
                                《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、
                                《互联网电子公告服务管理规定》、《信息网络传播权保护条例》等有关计算机及互联网规定的法律、
                                法规、实施办法。在任何情况下可能违反上述法律、法规的，
                                可以在任何时候，不经事先通知终止向该用户提供服务,欢迎用户举报任何违反上述法律或侵犯他人权利的上传内容，
                                一经发现违法或侵权的上传内容，将无条件删除。
                            </p>
                        </div>
                    </div>

                </div>
            </div>        
        </transition>

    </div>
</template>

<script>
    import headerBar from '../../part/headerBar.vue'
    import BScroll from 'better-scroll'
    export default {
        name: 'register',
        data() {
            return {
                kawayi1: true,
                kawayi2: false,
                name: '',
                passworde: '',
                signIn: true,
                encroll: false,
                cellPhone: false,
                mold: false,
                Protocol: false,
                china: '中国大陆',
                cities: [
                    {
                        title: '中国大陆'
                    },
                    {
                        title: '美国'
                    },
                    {
                        title: '香港特别行政区'
                    },
                    {
                        title: '澳门特别行政区'
                    },
                    {
                        title: '台湾地区'
                    },
                   
                ]
            }
        },
        created() {
            this.$nextTick(() => {
                    if(!this.scroll) {
                        this.scroll = new BScroll(this.$refs.cellMain, {
                            click: true
                        });
                    } else {
                        //重新计算
                        this.scroll.refresh();
                    }
            });
        },
        components: {
            headerBar
        },
        methods: {
            chang() {
                this.kawayi1 = false;
                this.kawayi2 = true;
                this.$refs.passd.type = "text"
            },
            chang1() {
                this.kawayi1 = true;
                this.kawayi2 = false;
                this.$refs.passd.type = "password";
            },
            showPhone() {
                this.cellPhone = true;
                this.mold = true;
            },
            cellClose() {
                this.cellPhone = false;
                this.Protocol = false;
                this.mold = false;
            },
            showProtocol() {
                this.cellPhone = true;
                this.Protocol = true;
            },
            choose(val) {
                this.china = val;
                this.cellPhone = false;
                this.mold = false;
                return this.china;
            },
            showlogin() {
                this.encroll = true;
                this.signIn = false;
            }
        }

    }
</script>

<style lang="scss" scoped>
    .register {
        background-color: #fff;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        .register-main {
            .register-image {
                text-align: center;
                img {
                    width: 2.0rem;
                    height: 1.4rem;
                }
            }
        }
        .register-input {
            position: relative;
            top: 0.1rem;
            left: 0rem;
            font-size: 0.2rem;
            display: flex;
            margin-bottom: 0.1rem;
            justify-content: center;
            border-bottom: 0.01rem solid rgba(7,17,27,0.1);
            margin-left: 0.3rem;
            margin-right: 0.3rem;
            .font {
                padding: 0.1rem;
                font-size: 0.25rem;
                color: #f9a438;
            }
            input {
                outline: none;
                height: 0.4rem;
                width: 2.0rem;
                border: 0px;
                margin-top: 0.06rem;
                font-size: 0.15rem;
                color: #666;
            }
        }
        .register-login {
            display: flex;
            justify-content: center;
            font-size: 0.2rem;
            padding-top: 0.1rem;
            p {
                font-size: 0.15rem;
                width: 1.4rem;
                // background-color: pink;
                margin-left: 0.1rem;
                text-align: center;
                padding-top: 0.1rem;
                padding-bottom: 0.1rem;
            }
            .sign {
                border: 0.01rem solid #f9a438;
                background-color: #fff;
                color: #f9a438;
            }
            .enroll {
                background-color: #f9a438;
                color: #fff;
            }
        }
    }
    .enroll-main {
        font-size: 0.15rem;
        .enroll-content {
            margin: 0.15rem;
            p {
                font-size: 0.15rem;
            }
        }
        .enroll-number {
            margin: 0.2rem 0.1rem 0.1rem 0.1rem;
            font-size: 0.2rem;
            display: flex;
            justify-content: space-between;
            padding-bottom: 0.15rem;
            border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
            p {
                font-size: 0.15rem;
                color: #f9a438;
            }
        }
        .enroll-moblie {
            margin: 0.2rem 0.1rem 0.1rem 0.1rem;
            font-size: 0.15rem;
            display: flex;
            padding-bottom: 0.15rem;
            border-bottom: 0.01rem solid #ffc883;
            
            input {
                outline: none;
                width: 2.0rem;
                border: 0px;
                font-size: 0.15rem;
                padding-left: 0.2rem;
                color: #666;
            }
        }
        .enroll-protocol {
            width: 100%;
            color: #a5a5a5;
            font-size: 0.14rem;
            text-align: center;
            b {
                color: #f9a438;
                font-weight: 500;
            }
        }
        .enroll-button {
            margin: 0.1rem;
            background-color: #f9a438;
            text-align: center;
            box-shadow: 0px 2px 1px #c1c1c1;
            p {
                padding-top: 0.1rem;
                padding-bottom: 0.1rem;
                color: #fff;
                font-size: 0.15rem;
            }
        }
    }
    .cell-phone {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        background: rgba(7, 17, 27, 0.8);
        height: 100%;
        .phone-area {
            height: 90%;
            position: relative;
            top: 0.3rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            background-color: #fff;
            .area-choose {
                position: relative;
                font-size: 0.2rem;
                height: 0.48rem;
                width: 100%;
                border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                display: flex;
                justify-content: space-between;
                p {
                    padding: 0.1rem 0.1rem 0.1rem 0.1rem;
                    color: rgba(250, 126, 43, 0.733);
                }
            }
        }
    }
    .cell-main {   
       
        // height: 50%;
        font-size: 0.15rem;
        overflow: hidden;
        padding:0.1rem;
    }
    .city {
        display: flex;
        padding: 0.1rem;
        border-bottom:  solid 0.01rem rgba(7, 17, 27, 0.1);
    }
    .fade-enter-active, .fade-leave-active {
    // transform: scale(0.9,0.9);
    transition: all .5s ease;

    }
    .fade-enter, .fade-leave-to {
        transform: translateX(10px);
    opacity: 0;
    }
</style>


