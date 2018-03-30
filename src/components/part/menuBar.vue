<template>
    <div class="tigerbar">
        <div>
            
        </div>
        <p class="tigetitle">喵服务</p>
        <div class="menubar">
            <router-link :to="{path: item.path}" v-for="(item,index) in menuitemone" :key="item.id">
                <div class="menuitem">
                    <i class="iconfont itop" v-if="index === 0">&#xe648</i>  
                    <i class="iconfont itop" v-if="index === 1">&#xe61b</i> 
                    <i class="iconfont itop" v-if="index === 2">&#xe893</i> 
                    <i class="iconfont itop" v-if="index === 3">&#xe608</i> 

                    <p>{{item.title}}</p>              
                </div>                
            </router-link>
        </div>
        <div class="menubar">
            <router-link :to="{path: item.path}" v-for="(item,index) in menuitemtwo" :key="item.id">
                <div class="menuitem">
                    <i class="iconfont itop" v-if="index === 0">&#xe8c3</i>  
                    <i class="iconfont itop" v-if="index === 1">&#xe606</i> 
                    <i class="iconfont itop" v-if="index === 2">&#xe645</i> 
                    <i class="iconfont itop" v-if="index === 3">&#xe937</i> 

                    <p>{{item.title}}</p>              
                </div>                
            </router-link>
        </div>
        <p class="tigetitle">喵服务</p>
        <div class="menubar">
            <router-link :to="{path: item.path}" v-for="(item,index) in menuitemthree" :key="item.id">
                <div class="menuitem">
                    <i class="iconfont itop1" v-if="index === 0">&#xe60a</i>  
                    <i class="iconfont itop1" v-if="index === 1">&#xe688</i> 
                    <i class="iconfont itop1" v-if="index === 2">&#xe61a</i> 
                    <!-- <i class="iconfont itop1" v-if="index === 3">&#xe63c</i> -->
                    <p>{{item.title}}</p>
                    <i class=""></i>              
                </div>                
            </router-link>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'tigerbar',
        data() {
            return {
                menuitemone: [
                    {
                        path: '/orderPage',
                        title: '订单',
                        index: 0,
                        
                    },
                    {
                        path: '/',
                        title: '我的评价',
                        index: 1,
                        
                    },
                    {
                        path: '/',
                        title: '我的地址',
                        index: 2,
                        
                    },
                    {
                        path: '/',
                        title: '杂烩',
                        index: 3,
                        
                    },
                ],
                menuitemtwo: [
                    {
                        path: '/',
                        title: '收藏',
                        index: 0,
                        
                    },
                    {
                        path: '/helpCenter',
                        title: '帮助中心',
                        index: 1,
                       
                    },
                    {
                        path: '/helpCenter',
                        title: '客服中心',
                        index: 2,
                        
                    },
                    {
                        path: '/helpCenter',
                        title: '签到',
                        index: 3,
                       
                    },
                ],
                menuitemthree: [
                    {
                        path: '/',
                        title: '招聘',
                        index: 0,
                        
                    },
                    {
                        path: '/download',
                        title: '下载app',
                        index: 1,
                       
                    },
                    {
                        path: '/about',
                        title: '关于喵超人',
                        index: 2,
                        
                    },
                    // {
                    //     path: '/about',
                    //     title: '版本',
                    //     index: 3,
                       
                    // },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .tigerbar {
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        .tigetitle {
            font-size: 0.15rem;
            padding: 0.2rem 0.1rem 0 0.15rem;
            color: rgb(57, 57, 58);
            font-weight: 300;
        }
        .menubar {
            display: flex;
            position: relative;
            font-size: 0.2rem;
            justify-content: space-around;
            padding-top: 0.1rem;
            padding-bottom: 0.2rem;
            margin-left: 0.15rem;
            margin-right: 0.15rem; 
            border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
            .menuitem {
                padding: 0.1rem; 
                flex: 1;
                text-align: center;
                .itop {
                    font-size: 0.25rem;
                    color: #fd9248;
                }
                .itop1 {
                    font-size: 0.25rem;
                    color: #29C3B1;
                }
                p {
                    font-size: 0.1rem;
                    padding-top: 0.08rem;
                }
            }
        }
    }
</style>
