<template>
    <div class="bottom-bar">
        <div class="bottom">
            <img src="../../../assets/img/timg.gif" alt="">
            <input type="text" placeholder="输入你想输入的内容">
            <p @click="transform">发送</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // bottomText: ''
            }
        },
        methods: {
            transform() {
                console.log(bottomText)
                this.$emit('test','bottomText');
            }
        }
    }   
</script>

<style lang="scss" scoped>
    .bottom-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        font-size: 0.2rem;
        // padding:0.1rem;
        height: 0.48rem;
        width: 100%;
        padding-top: 0.1rem ;
        background-color: #fff; 
        border-top: 0.01rem solid rgba(7, 17, 27, 0.1);
        .bottom {
           background-color: #fff; 
           display: flex;
           height: 0.48rem;
           justify-content: space-between;
           margin-right: 0.1rem;
           margin-left: 0.1rem;
           img {
               height: 0.4rem;
               width: 0.35rem;
           }
           input {               
                outline: none;
                height: 0.3rem;
                width: 2.5rem;
                border: 0px;
                font-size: 0.15rem;
                color: #666;
           }
           p {
               color: #666;
           }
        }
    }
</style>
