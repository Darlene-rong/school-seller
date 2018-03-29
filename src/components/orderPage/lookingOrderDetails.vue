<template>
    <div class="order-details" ref="orderDetails">
        <div>
            <!-- <img src="../../assets/img/" alt=""> -->
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'lookingOrderDetails',
        data() {
            return {

            }
        },
        created () {
            
            this.$nextTick(() => {
                if(!this.scroll) {
                    this. scroll = new BScroll(this.$refs.orderDetails, {
                        click: true
                    })
                } else {
                    this.scroll.refresh();
                }
            })
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .order-details {

    }
</style>
