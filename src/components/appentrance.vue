<template>
    <div class="appentrance"> 
        <!-- <header-bar mold='headbar'></header-bar>       -->
        <foot></foot>
        <router-view></router-view>   
    </div>
</template>

<script>
    import foot from '../components/part/foot.vue'
    import headerBar from '../components/part/headerBar.vue'
    export default {
        name: 'appentrance',
        components: {
            foot,headerBar
        }
    }    
</script>

<style lang="scss" scoped>
    .appentrance {
        width: 100%;
        
    }
</style>
