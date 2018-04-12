<template>
    <div class="classify-Channel" ref="classify">
        <div>
            <header-bar mold="today" monickor="频道" test="/homepage"></header-bar>
            <div class="channel-top">
                <div v-for="item in items" class="channel">
                    <router-link :to="{path : '/'}" >
                        <div class="channel-item">
                            <div class="item-title">
                                <h1>{{item.title}}</h1>
                                <p>{{item.name}}</p>
                            </div>
                            <div class="item-img">
                                <img src="../../../assets/img/timg.jpg" alt="">
                            </div>
                        </div>                 
                    </router-link>                    
                </div>
            </div>
            <nearby-list></nearby-list>
        </div>
    </div>   
</template>


<script>
    import BScroll from 'better-scroll'
    import nearbyList from './../page/nearbyList.vue'
    import headerBar from '../../part/headerBar.vue'
    export default {
        name: 'classifyChannel',
        data() {
            return {
                items : [
                    {
                        title: '哇哈哈哈',
                        name: '优惠10元'
                    },
                    {
                        title: '哇哈哈哈',
                        name: '优惠10元'
                    },
                    {
                        title: '哇哈哈哈',
                        name: '优惠10元'
                    },
                    {
                        title: '哇哈哈哈',
                        name: '优惠10元'
                    },
                    {
                        title: '哇哈哈哈',
                        name: '优惠10元'
                    }
                ]
            }
        },
        created () {
            
            this.$nextTick(() => {
                if(!this.scroll) {
                    this. scroll = new BScroll(this.$refs.classify, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
            
        },
        components: {
            nearbyList,headerBar
        }
    }
</script>

<style lang="scss" scoped>
    .classify-Channel {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;   
        background-color: #fff;
    }
    .channel-top {
        font-size: 0.15rem;
        display: flex;
        flex-wrap: wrap;
        .channel {
            flex-basis:49%;
            padding: 0.2rem 0;
            border: 0.01rem dashed rgba(7, 17, 27, 0.1);  
            .channel-item {
                display: flex;
                justify-content: space-around;
                align-items: center ;
                .item-title {
                    
                    h1 {
                        font-size: 0.17rem;
                        color: rgb(255, 187, 0);
                        font-weight: 400;
                    }
                    p {
                        font-size: 0.14rem;
                        color: #999; 

                    }
                }
                .item-img {
                    img {
                        height: 0.6rem;
                        width: 0.6rem;
                        border-radius: 50px;
                    }
                }
            }
        }

    }
</style>
