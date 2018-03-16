<template>
    <div class="taskbar">
        <div class="taskmain">
            <div class="task">
                <i class="iconfont itop">&#xe647</i>
                <p>未付款</p>
            </div>
            <div class="task">
                <i class="iconfont itop">&#xe605</i>
                <p>待收货</p>
            </div>
            <div class="task">
                <i class="iconfont itop">&#xe614</i>
                <p>完成订单</p>
            </div>
            <div class="task">
                <i class="iconfont itop">&#xe737</i>
                <p>全部订单</p>
            </div>            
        </div>

    </div>
</template>

<script>
    
    export default {
        name: 'taskbar'
    }
</script>

<style lang="scss" scoped>
    .taskbar {
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        .taskmain {
            display: flex;
            position: relative;
            font-size: 0.2rem;
            .task {
                padding: 0.1rem; 
                flex: 1;
                text-align: center;
                .itop {
                    font-size: 0.25rem;
                }
                p {
                    font-size: 0.1rem;
                    padding-top: 0.08rem;
                }
            }            
        }

    }
</style>
