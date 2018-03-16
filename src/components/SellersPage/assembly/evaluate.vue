<template>
    <div class="evaluate">
        <div class="evaluate-type">
            <p v-if=" mold === 'quote'" class="title">商品评论</p> 
            <p v-if=" moldOne === 'quoteOne'" class="title">商家评论</p> 
            <div class="three-block">
                <span class="title-one blocktitle" :class="{'active': selectType === 2}" @click="selected(2,$event)">
                    {{desc.all}}
                    <!-- <span class="count">222</span> -->
                    <span class="count">{{rathings.length}}</span>
                </span>
                <span class="title-two blocktitle"  :class="{'active': selectType === 0}" @click="selected(0,$event)">
                    {{desc.positive}}
                    <span class="count">{{positives.length}}</span>    
                </span>
                <span class="title-three blocktitle"  :class="{'active': selectType === 1}" @click="selected(1,$event)">
                    {{desc.negative}}
                    <span class="count">{{negatives.length}}</span>
                </span>
            </div>
            <div @click="switchContent" class="button-switch" :class=" {'on': onlyContent}">
                <i class="iconfont iconcolor">&#xe659</i>
                <p class="text">只看有内容的评价</p>
            </div>
        </div>
    </div>
</template>
  
<script>
//定义全部  满意不满意 常量     （选择类型）
    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2;

    export default {
        name: 'evaluate',
        data() {
            return {
                myResult: this.selectType,
                myonlyContent: this.onlyContent,
            }
        },
        props: {
            mold: {
                type: String,
                // required: true
            },
            moldOne: {
                type: String,
                // required: true
            },
            //数组 评论 数组的对象返回一个函数
            rathings: {
                type: Array,
                default() {
                    return [];
                }
            },
            //数字类型  默认选择所有的
            selectType: {
                type: Number,
                default: ALL
            },
            //选择看内容
            onlyContent: {
                type: Boolean,
                //默认值
                default: false
            },
            //描述
            desc: {
                type: Object,
                default() {
                    return {
                        all:'全部',
                        positive: '好评',
                        negative: '差评'
                    }
                }
            }

        },
        methods: {
            selected(type,event) {
                if(!event._constructed) {
                    return;
                }
                this.myResult = type;
                //子组件向父组件传递数据
                this.$emit('selectEmit', this.myResult);
            },
            switchContent(evetn) {
                if(!event._constructed) {
                    return;
                }
                this.myonlyContent = !this.myonlyContent;
                this.$emit('onlyEmit', this.myonlyContent)
            }
        },
        computed: {
            positives() {
                return this.rathings.filter((rathing) => {
                    return rathing.rateType === POSITIVE;
                })
            },
            negatives() {
                return this.rathings.filter((rathing) => {
                    return rathing.rateType === NEGATIVE;
                })
            }
        }
    }  
</script>

<style lang="scss" scoped>
    .evaluate {
            border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);        
        .evaluate-type {
            font-size: 0.14rem;

            margin: 0.18rem 0.18rem 0 0.18rem;
            .title {
                font-size: 0.13rem;
                font-weight: 600;
                color: rgb(7,17,27);
                line-height: 0.14rem;                
            }
            .three-block {
                padding-top: 0.18rem;
                padding-bottom: 0.18rem;
                border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
                .blocktitle {
                    display: inline-block;
                    padding: 0.08rem 0.12rem;
                    margin-right: 0.08rem;
                    font-size: 0.12rem;
                    line-height: 0.16rem;
                    border-radius: 2px;
                    &.active {
                        color: #fff;
                    }
                    color: rgb(77, 85, 93);
                        .count {
                            font-size: 0.08rem;
                            margin-left: 0.02rem;                          
                        }
                        &.title-one {
                            background-color: #f5bd28b5;
                            //被选中改变背景颜色
                            &.active {
                                background-color: #ffc400;
                            }
                        }
                        &.title-two {
                            background-color: #ffc40078;
                            &.active {
                                background-color: #ffc400;
                            }
                        }
                        &.title-three {
                            background-color: #f5b20038;
                            &.active {
                                background-color: #ffc400;
                            }
                        }
                }
            }
            .button-switch {
                display: flex;
                padding-top: 0.12rem; 
                padding-bottom: 0.12rem;
                &.on {
                    .iconcolor {
                        color: rgba(255, 187, 0, 0.712)
                    }
                }
                .iconcolor {
                    color: rgb(147, 153, 159);
                    line-height: 0.24rem;
                    font-size: 0.20rem;
                }
                .text {
                    line-height: 0.24rem;
                    color: rgb(147, 153, 159);
                    font-size: 0.1rem;
                    padding-left: 0.04rem;
                }
            }

        }
    }
</style>
