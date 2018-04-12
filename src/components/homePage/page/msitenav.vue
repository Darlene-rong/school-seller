<template>
    <div class="msite_nav">
        <div class="msite-main">
            <div v-for="item in msiteOne" class="msite-content">
                <router-link :to="{path: '/classifyChannel',
                                    query: {
                                        title: item.title
                                    }
                }">                   
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>                  
                </router-link>
            </div>
        </div>
        <!-- <div class="msite-main">
            <div v-for="item in msiteTwo" class="msite-content">
                <router-link :to="{path: '/classifyChannel'}">                   
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>                  
                </router-link>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {    
        name: 'msitenav',
        data() {
            return {
                msiteOne:[
                    {

                        img: require("../../../assets/img/homePage/火腿.png"),
                        title: '超市便利' 
                    },
                    {

                        img: require("../../../assets/img/homePage/饮料.png"),
                        title: '新鲜果蔬' 
                    },
                    {

                        img: require("../../../assets/img/homePage/披萨.png"),
                        title: '新店特惠' 
                    },
                    {

                        img: require("../../../assets/img/homePage/面包.png"),
                        title: '楼层自营' 
                    },
                ],
                // msiteTwo:[
                //     {
                //         path: '/',
                //         img: require("../../../assets/img/homePage/锣鼓.png"),
                //         title: '文具体育' 
                //     },
                //     {
                //         path: '/',
                //         img: require("../../../assets/img/homePage/薯条.png"),
                //         title: '方便速食' 
                //     },
                //     {
                //         path: '/',
                //         img: require("../../../assets/img/homePage/溜冰鞋.png"),
                //         title: '居家日用' 
                //     },
                //     {
                //         path: '/',
                //         img: require("../../../assets/img/homePage/啤酒.png"),
                //         title: '楼层自营' 
                //     },
                // ]
            }
        }
    }    
</script>

<style lang="scss" scoped>
    .msite_nav {
        width: 100%;
        position: relative;
        .msite-main {
            position: relative;
            display: flex;
            justify-content: space-between;
            margin-left: 0.2rem;
            margin-right: 0.2rem;
            padding-bottom: 0.15rem;
            border-bottom: solid 0.01rem rgba(7,17,27,0.1);
            padding-top: 0.1rem;
        }
    }
    .msite-content {       
        font-size: 0.13rem; 
        text-align: center;   
        p {
            text-align: center;
            color: #666;
        }
        img {
            margin-bottom: 0.05rem;
            width: 0.3rem;
            height: 0.3rem;
            
        }
    }
</style>
