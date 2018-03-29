<template>
    <div class="foot">
        <!-- 底部 -->
        <div class="foot-content">
            <div  v-for="(item,index) in items"  class="content one" >
                <router-link :to="{path:item.path}">
                    <div>                  
                        <i class="iconfont foot-icon" v-if="index == 0">&#xe64e</i> 
                        <i class="iconfont foot-icon" v-if="index == 1">&#xe7c0</i>
                        <i class="iconfont foot-icon" v-if="index == 2">&#xe655</i>    
                        <i class="iconfont foot-icon" v-if="index == 3">&#xe66e</i>  
               
                        <p>{{item.title}}</p>                     
                    </div>                
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'foot',
        data() {
            return {
                isActive: false,
                items: [
                    {
                        index: 0,
                        title: '首页',
                        path: 'homepage'
                    },
                    {
                        index: 1,
                        title: '校友圈',
                        path: 'school'
                    },
                    {
                        index: 2,
                        title: '订单',
                        path: 'orderPage'
                    },
                    {
                        index: 3,
                        title: '我的',
                        path: 'personal'
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

    .foot {
        font-size: 0.12rem;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        height: 0.45rem;
        z-index: 100;
        left: 0;
        right: 0;
        display: flex;
        border-top: 0.01rem solid rgba(7, 17, 27, 0.1);
        .foot-content {
            width: 100%;
            height: 0.45rem;
            display: flex;
            .content {
                padding-top: 0.06rem;
                flex: 1;
                text-align: center;
            }
        }
        a {
            display: block;
            height: 0.38rem;
        }
    }
    @keyframes fadein {
        0% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1)
        }
    }
    .router-link-exact-active {
        color: rgb(247, 132, 112);
        border-bottom: 0.01rem rgb(247, 132, 112) solid; 
        animation-name: fadein;
        animation-duration: 0.2s;
    }
</style>
