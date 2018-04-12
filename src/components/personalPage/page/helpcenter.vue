<template>
    <div class="aboutebar">
        <div class="about-main">
            <header-bar mold="register" monickor="服务中心"></header-bar>
            <div class="about-item">
                <p>热门问题</p>
            </div>
            <ul>
                <li class="about-item" v-for="help in helps" @click="helpVont(help)">
                    <p>{{help.title}}</p>
                    <i class="iconfont font">&#xe6a7</i>
                </li>                
            </ul>
        </div>
    </div>
</template>

<script>
import headerBar from '../../part/headerBar'

    import BScroll from 'better-scroll'
    import axios from 'axios'
    export default {
        name: 'aboutebar',
        data() {
            return {
                helps: '' 
            }
        },
        components: {
            headerBar
        },
        methods: {
            helpVont(type) {
                this.$router.push({
                    path: '/helpCenterDetails',
                    query: {
                        title: type.title,
                        description: type.description
                    }
                })
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
        created() {
            const _this = this;
            axios({
                method: 'post',
                url: '/api'
            }).then(res=> {
                console.log(res.data.helpCenter)
                _this.helps = res.data.helpCenter.contents;
            })
        }
    }   
</script>

<style lang="scss" scoped>
    .aboutebar {
        .about-main {
            .about-item {
                font-size: 0.13rem;
                display: flex;
                height: 0.48rem;
                align-items: center;
                margin-left: 0.15rem;
                margin-right: 0.15rem;
                justify-content: space-between;
                border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                color: rgb(44, 42, 43);
                .font {
                    font-size: 0.18rem;
                }
            }
        }  
    }
</style>

