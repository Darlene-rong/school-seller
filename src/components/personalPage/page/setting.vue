<template>
    <div class="aboutebar">
        <div class="about-main">
            <header-bar mold="today" monickor="设置" test="/personal"></header-bar>
            <!-- <div class="about-item" @click="tranform({path: '/agreement'})">
                <p>清除本地缓存</p>
                <p style="color:red">已是最新版本1.0.1</p>
            </div> -->
            <split></split>
            <div class="about-item">
                <p>账户名</p>
                <router-link :to="{path: '/'}">
                    <div class="right">
                        <p>账户名</p>
                        <i class="iconfont font">&#xe6a7</i>
                    </div>                
                </router-link>
            </div>
            <div class="about-item">
                <p></p>
                <router-link :to="{path: '/'}">
                    <div class="right">
                        <p>账户名</p>
                        <i class="iconfont font">&#xe6a7</i>
                    </div>                
                </router-link>
            </div>
            <!-- <split></split> -->
            <split></split>
            <div >
                <div class="about-item" >
                    <p>关于我们</p>
                    <i class="iconfont font">&#xe6a7</i>
                </div>
                <div class="about-item">
                    <p>版本检测</p>
                    <p style="color:red">已是最新版本1.0.1</p>
                </div>
            </div>
            <split></split>
        </div>

    </div>
</template>

<script>
import headerBar from '../../part/headerBar'
import split from '../../SellersPage/assembly/split'

    export default {
        name: 'aboutebar',
        data() {
            return {
               
            }
        },
        components: {
            headerBar,split
        },
        methods: {
            tranform(path) {
                this.$router.push(path)
            },
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
                margin-left: 0.15rem;
                margin-right: 0.15rem;
                justify-content: space-between;
                border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                color: rgb(44, 42, 43);
                align-items: center;
                .right {
                    display: flex;
                    p {
                        color: #999;
                    }
                }
                .font {
                    font-size: 0.23rem;
                    padding-left: 0.04rem;
                }
            }
        }  
    }
</style>

