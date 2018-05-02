<template>
  <div class="goods">   
      <!-- ref指DOM元素绑定在组件上时 ref为一组件的实例 -->
      <!-- 左侧商品分类 -->
      <div class="menu-wrapper" ref="mymune">
          <ul>
              <li  v-for="(item,index) in goods" class="items">
                <p class="text"> <icon :message="item.type" v-if="item.type > 1" class="iconHome"></icon>{{item.name}}</p>
              </li>
          </ul>
      </div>
      <!-- 右侧商品详情 -->
      <div class="foods-wrapper" ref="myfoods">
          <ul>
              <li v-for="item in goods" class="foods-list">
                  <h1 class="goods-name"  >{{item.name}}</h1>
                  <div v-for="food in item.foods" class="food-item food-item-hook">
                      <div class="icon">
                          <img src="../../../assets/img/mainView/darlene.jpg" alt="">
                      </div>
                      <div class="content"  @click="foodDe(food,$event)">
                          <h1 class="name">{{ food.name}}</h1>
                          <p class="description">{{ food.decription }}</p>
                          <div class="desc">
                              <p>月售{{ food.sellCount }}份</p>
                              <p class="two">好评率{{ food.reting }}%</p>
                          </div>
                          <div class="price">
                              <p class="money">￥</p>
                              <p class="new">{{ food.price }}</p>
                              <span v-show="food.oldPrive" class="old">               
                                  ￥{{ food.oldPrive }}
                              </span>                             
                          </div>
                      </div>
                      <div class="shopcount-wrapper">
                          <shopcount :food="food" @test="testOne"></shopcount>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <!-- 底部购物车 -->
      <shopcart :selectfoods="selectFoods" :deliveryPrice="seller.deliveryPrice"
       :minprice="seller.minPrice"></shopcart>
       <!-- 商品详情 -->
       <food :food="foodDetail" ref="food" @testtwo="testo"></food>

  </div>
</template>

<script>
import axios from 'axios' 
import data from '../../../util/mock'
import icon from '../header/icon'
import BScroll from 'better-scroll';
import shopcart from '../header/shopcart'
import shopcount from '../header/shopcount'
import food from '../food detalis/food'

export default {
    name: 'goods',
    data() {
        return{
            goods: {},
            count: 0,
            listHeight: [],
            scrollY: 0,
            seller: {},
            selectFoods: [],
            foodDetail: {},   

        }
    },  
    components: {
        icon,shopcart,shopcount,food,
    },
    created() {
        const _this = this;
        axios({
            method: 'post',
            url: '/api',
        }).then(res=>{
            _this.goods = res.data.goods;
            _this.seller = res.data.seller;
        }) 
        // DOM 更新了 操作dom时一定要在$nextTick里
        // nextTick应该被用在某些计算属性或者watch再或者某个按钮click事件绑定的methods当中。
        // 这时，nextTick才能保证你的数据更新完成之后再执行你绑定的函数。
        _this.$nextTick(()=> {
            _this._initScroll();
            _this.scrollHeight();
        })
    },
    methods: {
        _initScroll() {
            //将scroll复制给当前的对象的变量
            this.meunScroll = new BScroll(this.$refs.mymune,{click: true,});
            this.foodScroll = new BScroll(this.$refs.myfoods,{         
                   click: true,
                   probeType: 3
            });
            this.foodScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            })
        },
        scrollHeight() {
            let foodList = this.$refs.myfoods.getElementsByClassName('food-item-hook');
            let height = 0;
            this.listHeight.push(height);
            for(let i=0;i<foodList.length;i++){
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }

        },
        testo(val) {
            let foodTwo = [];
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if(food.count) {
                        foodTwo.push(food);
                    }
                })
            })
            this.selectFoods = foodTwo;
            return foodTwo;
        },
        testOne(val) {
            let foodsOne = [];
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if(food.count) {
                        foodsOne.push(food);
                    }
                })
            })
            this.selectFoods = foodsOne;
            return foodsOne;
        },
        foodDe(food,event) {
            if (!event._constructed) {
                return;
            }
            //传递参数
            this.foodDetail = food;
            this.$refs.food.show();
        }
    },
    computed: {
        selectfoods() {

        }
    }
};
</script>

<style lang="scss" scoped>
  .goods {
      display: flex;
      position: absolute;
      width: 100%;
      top: 1.83rem;
      bottom: 0.46rem;
      overflow: hidden;
      margin-top: 0.4rem;
      .menu-wrapper {
            flex: 0 0 0.8rem;
            width: 0.8rem;
            background-color: #f3f5f7;
            font-size: 0.12rem;
            .items{
                display: table;
                height: 0.54rem;
                width: 0.56rem;
                line-height: 0.14rem;                
                padding-left: 0.12rem;
                padding-right: 0.12rem;
                .text{
                    display: table-cell;
                    width: 0.56rem;
                    vertical-align: middle;
                    font-size: 0.12rem;
                    border-bottom: 0.01rem rgba(17,7,27,0.09) solid;
                } 
                .iconHome{
                    padding-right: 0.04rem;
                }             
            }
      }
      .foods-wrapper {
          font-size: 0.12rem;
          height: 100%;
          width: 100%;
          background-color: #fff;
        //   overflow: auto;
          .foods-list{
              display: block;
              width: 100%;
              .goods-name{
                  height: 0.26rem;
                  background-color: #f3f5f7;
                  border-left: 0.03rem #d9dde1 solid;
                  font-size: 0.12rem;
                  color: rgb(147, 153, 159);
                  padding-left: 0.12rem;
                  line-height: 0.26rem;
              }
              .food-item{
                  display: flex;
                  height: 1rem;
                  background-color: #ffffff;
                  margin: 0.26rem 0.26rem 0 0.26rem;
                  border-bottom: 0.01rem rgba(7,17,27,0.1) solid;
                  .icon{
                      width: 0.64rem;
                      height: 0.64rem;
                      margin-right: 0.1rem;
                      img{
                         width: 0.64rem;
                         height: 0.64rem; 
                      }
                  }
                  .content{
                      .name{
                          font-size: 0.14rem;
                          color: rgb(7,17,27);
                          line-height: 0.14rem;
                      }
                      .description{
                          font-size: 0.1rem;
                          color: rgb(147,153,159);
                          line-height: 0.1rem;
                          padding: 0.08rem 0;
                      }
                      .desc{
                          display: flex;
                          font-size: 0.1rem;
                          color: rgb(147,153,159);
                          line-height: 0.1rem;
                          .two{
                              padding-left: 0.1rem;
                          }
                      }
                      .price{
                          display: flex;
                          padding: 0.05rem 0;
                          
                          .money{
                              font-size: 0.12rem;
                              color: rgb(240,20,20);
                              font-weight: normal;
                              line-height: 0.24rem; 
                          }
                          .new{
                              font-size: 0.14rem;
                              color: rgb(240,20,20);
                              font-weight: 700;
                              line-height: 0.24rem;
                          }
                          .old{
                              padding-left: 0.08rem;
                              font-size: 0.1rem;
                              color: rgb(147, 153, 159);
                              font-weight: 700;
                              line-height: 0.24rem;
                              position: relative;
                              text-decoration: line-through;
                              
                          }
                      }
                  }
                  .shopcount-wrapper{
                      display: inline-block;
                      position: absolute;
                      right: 0.1rem;
                      margin-top: 0.59rem;
                  }
              }
          }
      }
  }

</style>
