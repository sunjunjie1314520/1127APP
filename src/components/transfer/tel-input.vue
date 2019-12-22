<template>
    <view class="alert" v-if="show">
        <view class="telbox">
            <text class="close"></text>
            <text class="h2">手机号输入</text>
            <view class="ul">
                <view class="li">
                    <text>*</text>
                    <input type="text" placeholder-class="placeholder-class" placeholder="请输入对方手机号码">
                </view>
                <view class="li">
                    <text>*</text>
                    <input type="text" placeholder-class="placeholder-class" placeholder="请输入对方姓名">
                </view>
            </view>
            <view class="btn">确认</view>
        </view>
    </view>
</template>

<script>
export default {
    name:'tel-input',
    props:{
        show:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>