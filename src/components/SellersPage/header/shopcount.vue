<template>
  <div class="shop-count">
      <!-- 商品数量减 -->
      <transition name="fade">
            <div class="decrese"   v-show=" food.count>0 " @click="countDecrese">
                <i class="iconfont font-logo">&#xe637</i>
            </div>     
      </transition>
      <!-- 商品数量 -->
      <transition name="count">
        <div class="count"  v-show=" food.count>0 ">
                {{food.count}}
        </div>      
      </transition>
      <!-- 商品数量加 -->
      <div class="increse" @click="countIncrese">
            <i class="iconfont font-logo">&#xe632</i>
      </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
      name: 'shopcount',
      data() {
          return {

          }
      },
      props: {
          food: {
              type: Object
          }
      },
      created() {
        //   console.log(this.food)
      },
      methods: {
          countIncrese(event) {
              if( !event._constructed) {
                  return;
              }
              console.log('click')
              if(!this.food.count) {
                  //引入Vue 通过Vue.set的方法创建count属性 属性值设为1
                  Vue.set(this.food, 'count', 1);
                  this.food.count = 1;
              } else {
                  this.food.count++;
              }
              this.$emit('test',this.food)
              return this.food.count
          },
          countDecrese(event) {
              if( !event._constructed) {
                  return;
              }
              if(this.food.count) {
                  this.food.count--;
              }
          }
      }

  }
</script>

<style lang="scss" scoped>
    .shop-count {
            font-size: 0;
            .decrese , .increse{
                display: inline-block;
                padding: 0.06rem;
                line-height: 0.24rem;
                .font-logo{
                    font-size: 0.23rem;
                    color: #f6ef37;        
                }
            }
            .count {
                display: inline-block;
                font-size: 0.16rem;
                color: fgb(147,153,159);
                line-height: 0.2rem;
                font-weight: 600;
                width: 0.16rem;
                text-align: center;
            }
    } 
    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;     
    }
    .fade-enter, .fade-leave-to {
        transform: scale(0.5,0.5);
        opacity: 0;
    }
    .count-enter-active, .count-leave-active {
        transform: rotate(180deg);
        transition: all .3s ease;
    }
    .count-enter, .count-leave-to {
        transform: translateX(0.1rem);
        opacity: 0;
    }

</style>
