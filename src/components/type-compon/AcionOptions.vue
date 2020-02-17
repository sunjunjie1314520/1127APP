<template>
    <view class="action-component">
    
        <view class="pub-slide"
        @touchstart="start"
        @touchmove="move"
        @touchend="end"
        :id="index"
        :data-isopen="item.isopen"
        :style="{transform:`translate3d(${item.move_x_resut},0,0)`,transitionDuration:`${delay}ms`}"
        >
            <view class="flex-left-wrap">
                <slot></slot>
            </view>
            <view class="flex-right-wrap">
                <slot name="right"></slot>
            </view>

        </view>
    </view>
</template>

<script>
export default {
    name:'ActionOptions',
    props:{
        item:{
            type:Object,
            default:{}
        },
        index:{
            type:Number,
            default:0
        },
        moveHandle:{
            type:Function
        }
    },
    data(){
        return {
            start_x: 0,
            move_x: 0,
            delay:300
        }
    },
    methods:{
        start(e){
            this.start_x = e.changedTouches[0].clientX
        },
        move(e){
            this.move_x = e.changedTouches[0].clientX - this.start_x
        },
        end(e){
            const { isopen } = e.currentTarget.dataset
            
            if(this.move_x < -75 && isopen=='0'){
                // this.$set(this.item,'move_x_resut','-150upx')
                // this.$set(this.item,'isopen',1)
                this.moveHandle(this.index,'-150upx',1)
            }else if(this.move_x < -75 && isopen=='0'){
                // this.$set(this.item,'move_x_reut','0upx')
                // this.$set(this.item,'isopen',0)
                this.moveHandle(this.index,'0upx',0)
            }
            if(this.move_x > 0){
                // this.$set(this.item,'move_x_resut','0upx')
                // this.$set(this.item,'isopen',0)
                this.moveHandle(this.index,'0upx',0)
            }
            this.move_x = 0
        }
    }
}
</script>

<style>

</style>