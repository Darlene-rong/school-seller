<template>
    <div class="toubu">
        <div class="nearby-title">
            <i class="iconfont one">&#xe646</i>
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'toubu11',
        props: {
            title: {
                type: String
            }
        }
    }  
</script>

<style lang="scss" scoped>
    .toubu {
        .nearby-title {
            font-size: 0.16rem;
            width: 100%;
            text-align: center;
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
            border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
            vertical-align: top;
            .one {
                font-size: 0.17rem;
            }
        }    
    }

</style>
