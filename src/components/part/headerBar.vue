<template>
    <div class="header-bar">
        <div class="bar headbar" v-if="mold === 'headbar'">
            <i class="iconfont font" @click="comeback">&#xe697</i>
            <p>{{name}}</p>
        </div>
        <div class="bar personalar" v-if="mold === 'personalbar'">
            <i class="iconfont icleft">&#xe6ae</i>
            <div class="icright">
                <i class="iconfont messagetop" @click="showMoney">&#xe6aa</i>
                <i class="iconfont messagebottom">&#xe713</i>
            </div>
        </div>
        <div class="bar headbar" v-if="mold === 'agreement'">
            <router-link :to="{path:'/about'}">
                <i class="iconfont font">&#xe697</i>  
            </router-link>
            <p>软件许可使用协议</p>
        </div>
        <div class="bar headbar" v-if="mold === 'register'">
            <router-link :to="{path:'personal'}">
                <i class="iconfont font">&#xe697</i>  
            </router-link>
            <p>{{monickor}}</p>
        </div>
        <div class="obrr bar" v-if="mold === 'order'">
            <p>{{monickor}}</p>
        </div>

        <!-- 动态详情 -->
        <div class="bar headbar" v-if="mold === 'today'">
            <router-link :to="{path:'/school'}">
                <i class="iconfont font">&#xe697</i>  
            </router-link>
            <p>{{monickor}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'header-bar',
        data() {
            return {
                // name: ''
            }
        },
        props: {
            name: {
                type: Object
            },
            mold: {
                type: String
            },
            monickor: {
                type: String
            }
        },
        methods: {
            helpcenter() {
                
            },
            showMoney() {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-bar {
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
        .obrr {
            background-color: #ffc400;
            color: #fff;
            font-weight: 600;
            p {
                width: 100%;
                padding-top: 0.1rem;
            }
        }
        .headbar {
            background-color: #ffc400;
            text-align: center;
            .font {
                color: #fff;
                font-size: 0.25rem;
                padding-top: 0.05rem;
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
        .personalar {
            background-color: #ffc400;
            justify-content: space-between;
            color: #fff;
            .icleft {
                font-size: 0.22rem;
                padding: 0.1rem 0 0 0.18rem;
            }
            .icright {
                padding: 0.1rem 0.18rem 0 0;  
                .messagetop {
                    font-size: 0.22rem; 
                } 
                .messagebottom {
                    font-size: 0.22rem;
                    padding-left: 0.2rem;
                }
            }
        }       
    }
    a {
        margin-top: 0.1rem;
    }

</style>
