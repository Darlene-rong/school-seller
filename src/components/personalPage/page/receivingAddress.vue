<template>
    <div class="receiving">
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
                    {{choice}}
                    <i class="iconfont">&#xe6a7</i>
                </div>
            </div>
            <div class="address-name">
                <textarea placeholder="详情地址"  v-model="detail" class="detail" name="details" id="details" cols="50" rows="3"></textarea>
            </div>
            <split></split>
        </div>
        <div class="address-keep" @click="keepAddress">
             保存
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
</template>

<script>
 import headerBar from '../../part/headerBar.vue'
 import split from '../../SellersPage/assembly/split.vue'
 import BScroll from 'better-scroll'
 export default {
     data() {
         return {
             addressName: '',
             addressTel: '',
             detail: '',
             backgro: false,
             choice: '请选择',
             title: '南华大学'
         }
     },
     components: {
         headerBar,split
     },
     methods: {
         keepAddress() {
             this.$router.push({
                 path: '/manageAddress',
                 query: {
                     addressName: this.addressName,
                     addressTel: this.addressTel,
                     detail: this.detail
                 }
             })
         },
         showChocie() {
             this.backgro = true;
         },
         save() {
             this.backgro = false;
             this.choice = this.title;
         },
         cancle() {
             this.backgro = false;
             this.choice = ''
         }
     },
     created() {
         this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll (this.$refs.address, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            }) 
     }
 }
</script>

<style lang="scss" scoped>
$size: 0.13rem;
$padding: 0.1rem;
$font-color: #666;
$backgrounColor: #ffc400;
$color: #fff;
.receiving {
    background-color: rgba(7, 17, 27, 0.04);
}
    .address-name {
        font-size: $size;
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
        z-index: 100;
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
            position: relative;
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
