<template>
    <div class="download">
        <header-bar mold="register" monickor="下载APP"></header-bar>
        <div class="downloadimg">
           <img src="../../assets/img/微信图片_20180309094056.png" alt=""> 
           <p>扫一扫下载APP</p>
        </div>
    </div>
</template>

<script>
    import headerBar from './headerBar'
    export default {
        name: 'download',
        data() {
            return {

            }
        },
        components: {
            headerBar
        }
    }
</script>

<style lang="scss" scoped>
    .download {
        .downloadimg {
            width: 100%;
            text-align: center;
            padding-top: 0.2rem;
            font-size: 0.2rem;
            padding-bottom: 0.3rem;
            img {
                height: 1.0rem;
                width: 1.0rem;
            }
            p {
                font-size: 0.2rem;
                width: 100%;
                
            }
        }
    }
</style>
