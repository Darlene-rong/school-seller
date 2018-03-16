<template>
    <div class="sex">
        <div class="img" v-if="mold === 'girl'">
            <img src="../../../assets/img/homePage/性别女.png" alt="">
        </div> 
        <div class="img" v-if="mold === 'boy'">
            <img src="../../../assets/img/homePage/性别男.png" alt="">
        </div>       
        <p>LV{{grade}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            mold: {
                type: String
            },
            grade: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sex {
        display: flex;
        .img {
            img {
                width: 0.20rem;
                height: 0.20rem;
                padding-left: 0.05rem;
            }
        }
        p {
            height: 0.10rem;
            font-weight: 500;
            font-size: 0.09rem;
            background-color: rgb(255, 236, 64);
            color: #fff;
            padding-left: 0.05rem;
            padding-right: 0.05rem;
            border-radius: 10px;
            margin-left: 0rem;
            padding-top: 0.02rem;
            margin-top: 0.03rem;

        }
    }
</style>
