<template>
    <div class="nearby-list">
        <toubu title="附近的商铺"></toubu>
        <div class="nearby-content">
            <div class="nearby-img">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
            </div>
            <div class="nearby-main">
                    <div class="list-img">
                        <!-- <img src="../../../assets/img/mainView/darlene.jpg" alt=""> -->
                        <h1>hello</h1>                        
                    </div>
                    <span class="list-minitue">喵喵专送-30分钟</span>
                    <div class="list-star">
                        <star :size="24" :score="4"></star>
                        <span>| 月售 333 单</span>
                    </div>    
                    <p class="psrt">
                        0元起送，距离1.21km，基础运费4元
                    </p>  
                    <div class="list-bottom">
                        <div>怂</div>
                        <p>欢迎光临，本店惊喜多多╰(*°▽°*)╯</p>    
                    </div>  
                    <div class="list-bottom">
                        <div>怂</div>
                        <p>欢迎光临，本店惊喜多多╰(*°▽°*)╯</p>    
                    </div>  
                    <div class="list-bottom">
                        <div>怂</div>
                        <p>欢迎光临，本店惊喜多多╰(*°▽°*)╯</p>    
                    </div>  
                    <div class="list-bottom">
                        <div>怂</div>
                        <p>欢迎光临，本店惊喜多多╰(*°▽°*)╯</p>    
                    </div>  
            </div>
            <div class="nearby-left">
                <h1>营业中</h1>
            </div>
        </div>
        <div class="nearby-content" @click="nearby">
            <div class="nearby-img">
                <img src="../../../assets/img/mainView/darlene.jpg" alt="">
            </div>
            <div class="nearby-main">
                <div class="list-main">
                    <div class="list-img">
                        <!-- <img src="../../../assets/img/mainView/darlene.jpg" alt=""> -->
                        <h1>hello</h1>                        
                    </div>
                    <span class="list-minitue">喵喵专送-30分钟</span>
                    <div class="list-star">
                        <star :size="24" :score="4"></star>
                        <span>月售 333 单</span>
                    </div>    
                    <p class="psrt">
                        0元起送，距离1.21km，基础运费4元
                    </p>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import star from '../../SellersPage/star/star'
    import toubu from '../../commonePage/toubu.vue'
    export default {
        name: 'nearby',
        data() {
            return {

            }
        },
        created () {
            
            
        },
        components: {
            star,toubu
        },
        methods: {
            nearby() {
                this.$router.push({
                    path: '/MainEntrance'
                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    .nearby-list {
        position: relative;
        .nearby-title {
            font-size: 0.15rem;
            width: 100%;
            text-align: center;
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
            border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
            .one {
                font-size: 0.15rem;
            }
        }
    }
    .nearby-content {
        font-size: 0.2rem;
        padding: 0.16rem 0.1rem 0.2rem 0.1rem;
        border-bottom: 0.01rem dashed rgba(7, 17, 27, 0.1);
        display: flex;
        flex:1;
        .nearby-img {
            img {
                height: 0.7rem;
                width: 0.7rem;
                border-radius: 10px;
            }
        }
    }
    .nearby-main {
        padding-left: 0.1rem;
        flex: 2;
        .list-img {
            color: #333;
            font-weight: 700;   
        }
        .list-minitue {
            border: 0.01rem solid rgb(49, 161, 253);
            font-size: 0.12rem;
            color: rgb(49, 161, 253);
            padding:0.01rem;
        }
        .list-star {
            display: flex;
            color: #999;
            font-size: 0.12rem;
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
        }
        .psrt {
            color: #999;
            font-size: 0.12rem; 
            padding-bottom: 0.1rem;
            border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
        }
        .list-bottom {
            padding-top: 0.1rem;
            font-size: 0.12rem;
            display: flex;
            div {
                background-color: rgb(82, 187, 201);
                color: #fff;
                padding: 0 0.04rem;
                border-radius: 20%;
            }
            p {
                padding-left: 0.06rem;
                color: #999;
            }


        }

    }
    .nearby-left {
        font-size: 0.15rem;
        color: orange;
        
    }
</style>
