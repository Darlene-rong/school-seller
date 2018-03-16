<template>
    <!-- 遍历评论星星 -->
    <div class="icon-main">
        <p class="icon" :class="classMap[message]"></p>
    </div>
</template>

<script>
    export default {
        name: 'icon',
        data(){
            return{

            }
        },
        created() {
            this.classMap = ['decrease','guarantee','discount','invoice','special'],
            console.log(this.message)
        },
        props: {
            message: {
                type: String
            },
            // class: {

            // }
        }
    }    
</script>

<style lang="scss" scoped>
    .icon-main{
        display: inline-block;
        height: 0.12rem;
        width: 0.12rem;  
    }
    .icon {
        height: 0.12rem;
        width: 0.12rem;
        background-size: 0.12rem 0.12rem;
        background-repeat: no-repeat;
        margin-top: 0.02rem;      
    }  
        .decrease{
            background-image: url('../../../assets/img/mainView/decrease_2@2x.png')
        }
        .discount{
            background-image: url('../../../assets/img/mainView/discount_3@3x.png')
        }
        .guarantee{
            background-size: 0.12rem 0.12rem;
            background-image: url('../../../assets/img/mainView/guarantee_2@2x.png')
        }
        .invoice{
            background-image: url('../../../assets/img/mainView/invoice_2@2x.png')
        }
        .special{
            background-image: url('../../../assets/img/mainView/special_2@2x.png')
        } 
   
</style>
