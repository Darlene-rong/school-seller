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
            <div class="about-item" @click="privercy">
                <p>隐私权政策</p>
                <i class="iconfont font">&#xe6a7</i>
            </div>

        </div>
    </div>
</template>

<script>
import headerBar from './headerBar'
import split from '../SellersPage/assembly/split'

    export default {
        name: 'aboutebar',
        components: {
            headerBar,split
        },
        methods: {
            tranform() {
                this.$router.push({
                    path: '/agreement',
                })
            },
            privercy () {
                this.$router.push({
                    path: '/privercy'
                })
            }
        }
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
</style>
