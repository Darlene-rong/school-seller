<template>
        <div class="agreement" ref="agreement">
            <div>
                <div class="bar headbar">
                    <i class="iconfont font" @click="comeback()">&#xe697</i>  
                    <p>{{title}}</p>
                </div>
                <div class="agree-main">
                    <h1 class="title">{{title}}</h1>
                    <p >{{description}}</p>
                </div>                
            </div>

        </div>        
</template>


<script>
import axios from 'axios'
import headerBar from './headerBar'
import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                title: '',
                description: ''
            }
        },
        created () {
            this. title = this.$route.query.title,
            this.description = this.$route.query.description
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
        components: {
            headerBar
        },
        methods: {
            comeback() {
                this.$router.push({path: '/helpcenter'})
            }
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
        z-index: 100;
        .agree-main {
            background-color: #fff;
            padding: 0.2rem;
            .title {
                font-size: 0.2rem;
                font-weight: 700;
                padding-bottom: 0.2rem;
            }
            p {
                font-size: 0.18rem;
                line-height: 0.4rem;
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
        }
        .headbar {
            background-color: #ffc400;
            text-align: center;
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
    }
</style>
