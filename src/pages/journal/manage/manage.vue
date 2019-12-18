<template>
    <view class="container bg-one">

        <uni-nav-bar title="日志管理" left-icon="back">
            <navigator slot="right" url="../newly/newly" class="right-butn">新建</navigator>
        </uni-nav-bar>

        <view class="journal">
            <view class="ul">
                <view class="li">
                    <navigator url="../detail/detail">
                        <text class="h2">南京万达室内装修工程 <text class="edit"></text></text>
                        <view class="wrap">
                            <view class="pic">
                                <image src="../../../static/img/im8.png" mode=""></image>
                            </view>
                            <view class="text">
                                <view class="p">
                                    <text class="c">姓名：</text>
                                    <text>张三</text>
                                    <text class="c ml">职位：</text>
                                    <text>项目经理</text>
                                </view>
                                <view class="p">
                                    <text class="c">时间：</text>
                                    <text>2019-11-12 10:00</text>
                                </view>
                            </view>
                        </view>
                    </navigator>
                </view>
                <view class="li">
                    <navigator url="../detail/detail">
                        <text class="h2">南京万达室内装修工程<text class="edit"></text></text>
                        <view class="wrap">
                            <view class="pic">
                                <image src="../../../static/img/im8.png" mode=""></image>
                            </view>
                            <view class="text">
                                <view class="p">
                                    <text class="c">姓名：</text>
                                    <text>张三</text>
                                    <text class="c ml">职位：</text>
                                    <text>项目经理</text>
                                </view>
                                <view class="p">
                                    <text class="c">时间：</text>
                                    <text>2019-11-12 10:00</text>
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