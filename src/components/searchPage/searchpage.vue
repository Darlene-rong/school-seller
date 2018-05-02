<template>
    <div>
        <header-bar mold="today" test="homepage" monickor="搜索"></header-bar>
        <searchbox></searchbox>
    </div>
</template>

<script>
import searchbox from './page/searchbox'
import headerBar from '../part/headerBar'
    export default {
        data() {
            return {

            }
        },
        created () {
            
        },
        components: {
            searchbox,headerBar
        }
    }
</script>

<style lang="scss" scoped>

</style>
