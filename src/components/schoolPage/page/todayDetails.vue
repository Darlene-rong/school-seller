<template>
    <div class="nearby-details" ref="neardetail">
        <div>
            <header-bar monickor="动态详情" mold="today"></header-bar>
            <todays></todays>
            <toubu title="评论区"></toubu>           
            <div class="detailes">
                <div class="today-header">
                    <div class="to-img">
                        <img src="../../../assets/img/timg.jpg" alt="">
                    </div>
                    <div class="to-content">
                        <div class="name">
                            <P>李佳星</P>
                            <sex mold="girl" grade="10"></sex>                        
                        </div>
                        <div class="to-time">
                            <p>2个小时前[来自南华大学船山学院]</p>
                        </div>
                    </div>
                </div>
                <div class="today-text">
                    <p>
                        {{text}}
                    </p>
                </div>                
            </div>   
        </div>
        <bottom-bar @test="change"></bottom-bar>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {refresh} from '../../../common/js/public'
    import headerBar from '../../part/headerBar.vue'
    import todays from './todays.vue'
    import toubu from '../../commonePage/toubu.vue'
    import bottomBar from './bottomBar.vue'
    import sex from './sex.vue'

    export default {
        data() {
            return {
                text: ''
            }
        },
        created() {
            refresh('动态详情');
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.neardetail, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
        },
        components: {
            headerBar,todays,toubu,
            bottomBar,sex
        },
        methods: {
            change(val) {
                this.text = val;
                console.log(this.text)
                return this.text;

            }
        }
    
    }   
</script>

<style lang="scss" scoped>
    .nearby-details {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0.48rem;
        background-color: #fff;
        .detailes {          
            .today-header {
                font-size: 0.13rem;
                display: flex;
                padding: 0.1rem;
                .to-img {
                    padding-right: 0.15rem;         
                    img {
                        height: 0.5rem;
                        width: 0.5rem;
                        border-radius: 50px;
                    }
                }
                .to-content {
                    font-size: 0.15rem;
                    padding-top: 0.05rem;
                    .name {
                        display: flex;
                    }
                    .to-time {
                        color: #aeb1b0;
                        p {
                            font-size: 0.12rem;
                        }
                    }
                }
            }
            .today-text {
                padding: 0 0.4rem 0.2rem 0.49rem;   
                margin-left: 0.2rem;
                margin-right: 0.2rem;
                border-bottom: dashed rgba(7, 17, 27, 0.1) 0.01rem;    
                p {
                    font-size: 0.15rem;
                    line-height: 0.2rem;
                }
            }            
        }
    }
</style>
