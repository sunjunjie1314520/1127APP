<template>
    <view class="container bg-three">
        <uni-navbar>我的任务</uni-navbar>
        <view class="mytask-wrapper">
            <view class="ul">
                <view class="li">
                    <navigator url="./rectify_task_detail" class="hover-class">
                        <view class="pict">
                            <image src="../../../static/img/im11.png" mode="widthFix"></image>
                        </view>
                        <view class="text">
                            <view class="title">
                                <text class="h2">南京溧水万达广场</text>
                                <text class="span c1">整改任务</text>
                            </view>
                            <view class="wrap">
                                <view class="p">
                                    <text class="s1">派单人：</text>
                                    <text>张三</text>
                                </view>
                                <view class="p">
                                    <text class="s1">完成时间：</text>
                                    <text>2019-11-15</text>
                                </view>
                            </view>
                        </view>
                    </navigator>
                </view>
                <view class="li">
                    <navigator url="./routine_task_detail" class="hover-class">
                        <view class="pict">
                            <image src="../../../static/img/im11.png" mode="widthFix"></image>
                        </view>
                        <view class="text">
                            <view class="title">
                                <text class="h2">南京溧水万达广场</text>
                                <text class="span c2">常规任务</text>
                            </view>
                            <view class="wrap">
                                <view class="p">
                                    <text class="s1">派单人：</text>
                                    <text>张三</text>
                                </view>
                                <view class="p">
                                    <text class="s1">完成时间：</text>
                                    <text>2019-11-15</text>
                                </view>
                            </view>
                        </view>
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return {

        }
    },

}
</script>

<style>

</style>