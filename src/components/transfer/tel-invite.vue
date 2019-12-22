<template>
    <view class="alert" v-if="show">
        <view class="select">
            <text class="h2">请选择移交途径</text>
            <view class="ul">
                <view class="li">
                    <navigator url="">
                        <image src="../../static/img/9fad2_88x88.png" mode=""></image>
                        <text>项目组成员</text>
                    </navigator>
                </view>
                <view class="li">
                    <navigator url="">
                        <image src="../../static/img/335d6_88x88.png" mode=""></image>
                        <text>通讯录导入</text>
                    </navigator>
                </view>
                <view class="li">
                    <navigator url="">
                        <image src="../../static/img/4ebcd_88x88.png" mode=""></image>
                        <text>手机号邀请</text>
                    </navigator>
                </view>
            </view>
            <text class="cancel">
                取消
            </text>
        </view>
    </view>
</template>

<script>
export default {
    name:'tel-invite',
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