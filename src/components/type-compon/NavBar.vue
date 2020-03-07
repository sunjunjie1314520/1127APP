<template>
    <view class="shrink">
        <view :class="['uni-nav-bar',{'none':none,'blue':blue}]">
            <view class="status-height"></view>
            <view class="type-nav-bar">
                <navigator v-if="back" class="icon-return" open-type="navigateBack"></navigator>
                <view class="title">
                    <text><slot></slot></text>
                </view>
                <view class="fr">
                    <slot name="right"></slot>
                </view>
            </view>
        </view>
        <view class="null-nav-bar">
            
        </view>
    </view>
</template>

<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        },
        blue:{
            type:Boolean,
            default:false,
        },
        none:{
            type:Boolean,
            default:false,
        }
    }
}
</script>

<style lang="stylus" scoped>
    .none
        .type-nav-bar
            box-shadow none
    .blue
        .type-nav-bar
        .status-height
            background #3a89ff
        .type-nav-bar
            .title
                text
                    color #fff
        
    .status-height
        height var(--status-bar-height)
        position relative
        z-index 1
        background #fff

    .null-nav-bar
        height 100rpx
        padding-top var(--status-bar-height)
        box-sizing content-box
        
    .uni-nav-bar
        background #fff
        position fixed
        left 0
        right 0
        top 0
        z-index 99
    
    .type-nav-bar
        height 100upx
        text-align center
        position relative
        background #fff
        box-shadow 0 0 21px rgba(#b7cfff,.3)
        navigator
            position absolute
            left 0
            top 0
        .title
            height 100%
            display flex
            align-items center
            justify-content center
            flex-direction column
            text
                font-size 34rpx
        .fr
            position absolute
            top 0
            right 25upx
            height 100%
            display flex
            align-items center
</style>