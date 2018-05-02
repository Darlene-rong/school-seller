<template>
    <div class="searchbox">
        <div class="search-box">
            <input type="text" :placeholder="placeholder" v-model="searchMasage">
            <i class="iconfont" v-show="searchMasage" @click="cleanOut">&#xe69a</i>
            <div class="search">搜索</div>
            
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                searchMasage: '',
                // icon: false
            }
        },
        components: {
 
        },
        methods: {
            cleanOut() {
                this.searchMasage = '';
            }

        },
        props: {
            placeholder: {
                type: String,
                default: '请输入商家或者商家美食'
            }
        }
    }
</script>

<style lang="scss" scoped>

    .search-box {
        display: flex;
        font-size: 0.15rem;
        padding: 0.1rem;
        justify-content: space-between;
        height: 0.48rem;
        align-items: center;
        border: 0.01rem solid rgba(7, 17, 27, 0.1);
        input {
            outline: none;
            border: 0rem;
            width: 75%;
            font-size: 0.18rem;
            color: #666;
        }
        .search {
            background-color: #ffc400;
            padding: 0.1rem;
            border-radius: 10px;
            color: #fff;
        }
    }
</style>
