<template>
    <div class="manage-address">
        <header-bar mold="today" test="/personal" monickor="管理新地址" class="test"></header-bar>
        <div class="manage"  ref="manage">
            <div>
                <div class="manage-main" v-for="(item,index) in items" ref="test" :key="item.id">
                    <div class="manage-list" >
                        <div class="manage-name">
                            <p class="name">{{item.addressName}}</p>
                            <p class="tel">{{item.addressTel}}</p>
                        </div>
                        <div class="address">
                            <p>{{item.choice1}}{{item.datail}}</p>
                        </div>
                    </div>
                    <div class="manage-change">
                        <p @click="amend(index)">修改</p>
                        <p @click="items.splice(index,1)">删除</p>
                    </div>
                    <split></split>
                </div>

            </div>
                            
        </div>
        <div class="bottom1">
            <!-- <router-link :to="{
            }"> -->
                <div class="add-bottom" @click="add()">添加新地址</div>            
            <!-- </router-link> -->
        </div>

        <!-- 添加新地址 -->
        <div class="receiving" v-show="receive">
            <div class="receiving-address">
                <header-bar mold="today" test="manageAddress" monickor="添加新地址"></header-bar>
                <div class="address-name">
                    <p>收货人</p>
                    <input type="text" class="input" v-model="addressName">
                </div>
                <div class="address-name">
                    <p>联系电话</p>
                    <input type="text" class="input" v-model="addressTel">
                </div>
                <div class="address-name else">
                    <p>所在校区</p>
                    <div class="choice" @click="showChocie">
                        {{choice1}}
                        <i class="iconfont">&#xe6a7</i>
                    </div>
                </div>
                <div class="address-name">
                    <textarea placeholder="详情地址"  v-model="detail" class="detail" name="details" id="details" cols="50" rows="3"></textarea>
                </div>
                <split></split>
            </div>
            <div class="address-keep" @click="keepAddress" v-show="keepOne">
                保存
            </div>
            <div class="address-keep" @click="keepAmend"  v-show="keepTwo">
                保存修改
            </div>
            <!-- 背景图层 -->
            <div class="address-background" v-show="backgro">
                <div  class="back-main">
                    <div class="bottom">      
                        <p @click="cancle">取消</p>
                    </div>
                    <div ref="address" class="test">
                        <div @click="save">
                            <p>{{title}}</p>
                        </div>
                    </div>
                </div>
            </div>
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
            items: [
                {
                    addressName: 'ssss',
                    addressTel: 12033300223,
                    choice1: '南华大学',
                    datail: '致远园四栋',
                    id: 0
                },
                {
                    addressName: '小小',
                    addressTel: 12033300223,
                    choice1: '南华大学',
                    datail: '致远园四栋',
                    id: 1
                }
            ],
             backgro: false,
             
             choice1: '请选择',
             title: '南华大学',
             num: 2,
             receive: false,
             addressName: '',
             addressTel: '',
             detail: '',
             keepOne: false,
             keepTwo: false,
             num1: 0,
        }
    },
    components: {
        headerBar ,split ,
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
        this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll (this.$refs.address, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            }) 
    },
    methods: {
        add() {
            this.receive = true;
            this.addressName = '';
            this.detail = '';
            this.addressTel = '';
            this.choice1 = '';
            this.keepOne = true;
            this.keepTwo = false;
        },
         keepAddress() {
            
            this.receive = false;
            this.items.push({
                addressName: this.addressName,
                addressTel: this.addressTel,
                choice:  this.choice1,
                datail: this.detail,
                id:  this.num++
            })
         },
         showChocie() {
             this.backgro = true;
         },
         save() {
             this.backgro = false;
             this.choice1 = this.title;
             
         },
         cancle() {
             this.backgro = false;
             
         },
         amend(index) {
            //  console.log(this.items[index])
             this.receive = true;
             this.keepOne = false;
             this.keepTwo = true;
             this.choice = '';            
             this.test = this.items[index];
            //  console.log(this.test);
            //  this.items.forEach((test) => {
            //      console.log(this.test)
                 this.addressName = this.test.addressName;
                 this.addressTel = this.test.addressTel;
                 this.choice1 = this.test.choice1;
                 this.detail = this.test.datail;
                 this.num = this.test.id;
                 this.num1 = index;
                 console.log(this.num1);
                 return this.num1;
                 
            //  })
            //  return this.items[index];
         },
         keepAmend() {
             this.receive = false;
            //  this.test = this.items[num];
            //  console.log(this.items[index])
                            let test = 0;
                this.test = this.num1;
                console.log(this.test)
                 console.log(this.items[this.test]);

            //  this.items.forEach((items) => {
                    this.items[this.test].addressName = this.addressName;
                    this.items[this.test].addressTel = this.addressTel;
                    this.items[this.test].choice1 = this.choice1;
                    this.items[this.test].datail = this.detail;
                    // this. items[this.test].id = this.num;                     
            //  })
         }
    }
}
</script>

<style lang="scss" scoped>
$height1: 0.48rem;
$zero1: 0;
$hundred1: 100%;
$size1: 0.14rem;
$padding1: 0.1rem;
    .test {
        position: absolute;
        width: $hundred1;
    }
    .manage {
        position: fixed;
        top: $height1;
        bottom: $height1;
        width: $hundred1;
        left: $zero1;
    }
    .bottom1 {
        position: fixed;
        bottom: $zero1;
        height: 0.65rem;
        font-size: 0.16rem;
        width: $hundred1;
        background-color: #f3f4f7;
        .add-bottom {
            margin:0.10rem;
            height: $height1;
            border-radius: 30px;
            text-align: center;
            line-height: 0.45rem;
            color: #fff;
            background: linear-gradient(to right,#ffbb00, #fa5306);
        }
    }
    .manage-main {
        font-size: $size1;
        background-color: #fff;
        .manage-list {
            padding: $padding1;           
            color: #333;
            .manage-name {
                display: flex;
                justify-content: space-between;
                padding-bottom: $padding1;
            }
            .address {
                padding-bottom: $padding1;
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

$size: 0.13rem;
$padding: 0.1rem;
$font-color: #666;
$backgrounColor: #ffc400;
$color: #fff;
.receiving {
    background-color: #fff;
    z-index: 100;
    position: absolute;
    height: 100%;
    width: 100%;

}
    .address-name {
        font-size: $size;
        // width: 100%;
        display: flex;
        padding: $padding;
        align-items: center;
        color: $font-color;
        border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
        background-color: $color;
        input {
            margin-left: 0.2rem;
            border: none;
            font-size: $size;
            outline: none;
            color: $font-color;
        }
        .detail {
            color: $font-color;
            line-height: 0.2rem;
            border: none;
            outline: none;
        }
    }
    .address-keep {
        margin: $padding;
        font-size: $size;
        height: 0.40rem;
        line-height: 0.4rem;
        text-align: center;
        background-color: $backgrounColor;
        color: $color;
    }
    .else {
        justify-content: space-between;
    }
    .address-background {
        background: rgba(7, 17, 27, 0.8);
        z-index: 101;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        overflow: auto;
        .back-main {
            margin: 0.8rem 0.2rem 0.8rem 0.2rem;
            background-color: $color;
            height: 80%;
            width: 90%;
            position: inherit;
            .bottom {
                display: flex;
                font-size: $size;
                justify-content: center;
                height: 0.48rem;
                align-items: center;
                border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
            }
        }
    }
    .test {
        font-size: 0.2rem;
        height: 100%;
        width: 100%;
        background-color: #fff;
        p {
            
        }
    }
</style>
