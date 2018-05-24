<template>
    <div>
        <header-bar class="main" mold="today" monickor="地址选择" test="/homepage"></header-bar>
        <div class="choiceMap" ref="choicemap">
            <div>
                <div>

                </div>
                <split></split>
                <!-- 热门城市 -->
                <div class="hotCity">
                    <div class="hot-title">热门城市</div>
                    <ul class="hotlist">
                        <li  v-for="item in hotItem" @click="toHome(item)">{{item}}</li>
                    </ul>
                </div>
                <split></split>
                <!-- 字母排序城市 -->
                <div class="hotCity"  v-for="item in cityItem">
                    <div class="hot-title">{{item.title}}</div>
                    <ul class="hotlist">
                        <li  v-for="list in item.content"  @click="toHome(list)">{{list}}</li>
                    </ul>
                    <split></split>
                </div>
            </div>
        </div>        
    </div>

</template>

<script>
import headerBar from '../../part/headerBar'
import BScroll from 'better-scroll'
import axios from 'axios'
import split from '../../SellersPage/assembly/split'


export default {
    data() {
        return {
            hotItem:[],
            cityItem: []
        }
    },
    components: {
        headerBar,
        split
    },
    methods: {
        toHome(type) {
            this.$router.push({
                path: '/homepage',
                query: {
                    home: type
                }
            })
        }   
    },
    created() {
        this.$nextTick(() =>{
            if(!this.scroll) {
                this.scroll = new BScroll(this.$refs.choicemap, {
                    click: true
                })
            } else {
                this.scroll.refresh();
            }
        })
        axios({
            mehtods: 'post',
            url: '/api'
        }).then(res=> {
            this.hotItem = res.data.city.hotcity;
            console.log(res.data.city);
            this.cityItem = res.data.city.cityLetter;
        })
    }
}
</script>

<style lang="scss" scoped>

.choiceMap {
    position: fixed;
    top:0.48rem;
    bottom: 0;
    background-color: #fff; 
    width: 100%;

}
.hotCity {
    font-size: 0.16rem;
    background-color: #fff;
    .hot-title {
        color: #666;
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: solid 0.01rem rgba(7,17,27,0.1);
        padding-left: 0.2rem;
    }
    .hotlist {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        width: 100%;
        li {
            margin:0.13rem;
            // background-color: pink;
            // margin:0.1rem;
            width: 17%;
            // word-wrap: break-word;
            border-bottom: 0.01rem solid rgba(7,17,27,0.1);
            text-align: center;
            color: #666;
        }

    }
}
</style>
