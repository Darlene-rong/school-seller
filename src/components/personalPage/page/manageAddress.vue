<template>
    <div class="manage-address">
        <header-bar mold="today" test="/personal" monickor="管理新地址" class="test"></header-bar>
        <div class="manage"  ref="manage">
            <div>
                <div class="manage-main" v-for="(item,index) in manageList" ref="test">
                    <div class="manage-list" >
                        <div class="manage-name">
                            <p class="name">{{item.addressName}}</p>
                            <p class="tel">{{index}}</p>
                        </div>
                        <div class="address">
                            <p>地址打打算大大大所大所大大大所大大大大大所大所大所大大大大大</p>
                        </div>
                    </div>
                    <div class="manage-change">
                        <p>修改</p>
                        <p>删除</p>
                    </div>
                </div>

            </div>
                            <split></split>
        </div>
        <div class="bottom">
            <!-- <router-link :to="{
            }"> -->
                <div class="add-bottom" @click="add()">添加新地址</div>            
            <!-- </router-link> -->
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'   
import headerBar from '../../part/headerBar'
import split from '../../SellersPage/assembly/split'
export default {
    data() {
        return {
            num: 0,
            // items: [
            //     {
            //         addressName: this.$route.query.addressName,
            //         addressTel: '',
            //         datail: '',
            //         // index: this.$route.query.index                
            //     }
            // ]

        }
    },
    components: {
        headerBar ,split 
    },
    created () {
        this.$nextTick(() => {
            if(!this.scroll) {
                this.scroll = new BScroll(this.$refs.manage, {
                    click: true
                })
            }  else {
                this.scroll.refresh()
            }
        })

        // this.addressName =this.$route.query.addressName;
    },
    methods: {
        add() {
            console.log();
            this.items.forEach(() => {
                console.log(index);
            })
            this.$router.push({
                path:'/receivingAddress',
                query: {
                    num: this.$refs.test.index
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
$height: 0.48rem;
$zero: 0;
$hundred: 100%;
$size: 0.14rem;
$padding: 0.1rem;
    .test {
        position: absolute;
        width: $hundred;
    }
    .manage {
        position: fixed;
        top: $height;
        bottom: $height;
        width: $hundred;
        left: $zero;
    }
    .bottom {
        position: fixed;
        bottom: $zero;
        height: 0.65rem;
        font-size: 0.16rem;
        width: $hundred;
        background-color: #f3f4f7;
        .add-bottom {
            margin:0.10rem;
            height: $height;
            border-radius: 30px;
            text-align: center;
            line-height: 0.45rem;
            color: #fff;
            background: linear-gradient(to right,#ffbb00, #fa5306);
        }
    }
    .manage-main {
        font-size: $size;
        background-color: #fff;
        .manage-list {
            padding: $padding;
            
            color: #333;
            .manage-name {
                display: flex;
                justify-content: space-between;
                padding-bottom: $padding;
            }
            .address {
                padding-bottom: $padding;
            }
        }
        .manage-change {
            display: flex;
            justify-content: space-around;
            p {
                height: 0.4rem;
                width: 100%;
                line-height: 0.4rem;
                text-align: center;
                border: 0.01rem solid rgba(7, 17, 27, 0.1);
            }
            
        }
    }
</style>
