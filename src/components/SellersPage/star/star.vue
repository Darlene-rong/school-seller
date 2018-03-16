<template>
<!-- 多尺寸 -->
    <div class="star" :class="starType">
        <span v-for="item in items" :class="item" class="star-item"></span>
    </div>
</template>

<script>
// 定义常量
const LENGTH = 5;
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
    props: {
        size: {
            type: Number
        },
        score: {
            type: Number
        }
    },
    data() {
        return{

        }
    },
    computed: {
        starType() {
            return 'star-' + this.size
        },
        items() {
            let result = [];
            //向下取0.5倍数的值
            let score = Math.floor(this.score*2) / 2;
            let decimal = score % 1 !==0;
            let integer = Math.floor(score);
            for (let i=0;i<integer;i++) {
                result.push(CLS_ON);
            }
            if (decimal) {
                result.push(CLS_HALF);
            }
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }
            return result;
        }
    }
}
</script>

<style lang="scss" scoped>
    .star{
        // padding-left: 0.1rem;
        .star-item{
            display: inline-block;
            background-repeat: no-repeat;
        }  
    
    }
    .star-48{
        .star-item{
            display: inline-block;
            background-repeat: no-repeat;
            width: 0.2rem;
            height: 0.2rem; 
            margin-right: 0.22rem;
            background-size: 0.2rem 0.2rem;
            .star-item:last-child{
                margin-right: 0;
            }       
        }
        .on{
            background-image: url('./img/star48_on@3x.png');
        }
        .half{
            background-image: url('./img/star48_half@3x.png')
        } 
        .off{
            background-image: url('./img/star48_off@3x.png')
        }
    }
    .star-36{
        .star-item{
            width: 0.15rem;
            height: 0.15rem; 
            margin-right: 0.06rem;
            background-size: 0.15rem 0.15rem;
            :last-child{
                margin-right: 0;
            }       
        }
        .on{
            background-image: url('./img/star36_on@3x.png')
        }
        .half{
            background-image: url('./img/star36_half@3x.png')
        } 
        .off{
            background-image: url('./img/star36_off@3x.png')
        }
    }
    .star-24{
        .star-item{
            width: 0.1rem;
            height: 0.1rem; 
            margin-right: 0.06rem;
            background-size: 0.1rem 0.1rem;
            :last-child{
                margin-right: 0;
            }       
        }
        .on{
            background-image: url('./img/star24_on@3x.png')
        }
        .half{
            background-image: url('./img/star24_half@3x.png')
        } 
        .off{
            background-image: url('./img/star24_off@3x.png')
        }  
    }
</style>
