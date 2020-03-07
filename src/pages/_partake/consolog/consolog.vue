<template>
    <view class="container bg-three">
        <uni-navbar>
            施工日志
            <view class="new-btn" slot="right">
                <navigator url="./newly_add_consolog">新建</navigator>
            </view>
        </uni-navbar>

        <view class="consolog-wrapper">
            <view class="ul">
                <view class="li">
                    <navigator url="./log_details">
                        <view class="title">
                            <text class="h2">南京溧水万达广场</text>
                        </view>
                        <view class="layout">
                            <view class="pict">
                                <image src="../../../static/img/5a9c92_148x148.png" mode="widthFix"></image>
                            </view>
                            <view class="text">
                                <view class="p">
                                    <text class="s1">日期：</text>
                                    <text>2020-01-08　星期二</text>
                                </view>
                                <view class="p">
                                    <text class="s1">天气：</text>
                                    <text>晴</text>
                                </view>
                                <view class="p">
                                    <text class="s1">内容：</text>
                                    <text class="s2">电竞房建收到货发等哈哈地哈...</text>
                                </view>
                            </view>
                        </view>
                    </navigator>
                </view>
                <view class="li">
                    <navigator url="./log_details">
                        <view class="title">
                            <text class="h2">南京溧水万达广场</text>
                        </view>
                        <view class="layout">
                            <view class="pict">
                                <image src="../../../static/img/5a9c92_148x148.png" mode="widthFix"></image>
                            </view>
                            <view class="text">
                                <view class="p">
                                    <text class="s1">日期：</text>
                                    <text>2020-01-08　星期二</text>
                                </view>
                                <view class="p">
                                    <text class="s1">天气：</text>
                                    <text>晴</text>
                                </view>
                                <view class="p">
                                    <text class="s1">内容：</text>
                                    <text class="s2">电竞房建收到货发等哈哈地哈...</text>
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

}
</script>

<style>

</style>