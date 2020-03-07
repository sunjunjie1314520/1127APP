<template>
    <view class="container bg-three">
        <uni-navbar>
            巡检管理
            <view class="new-btn" slot="right">
                <navigator url="./new_inspection">新建</navigator>
            </view>
        </uni-navbar>

        <view class="patrol-wrapper">
            <view class="ul">
                <view class="li">
                    <view class="title">
                        <text class="h2">南京溧水万达室内装修工程</text>
                    </view>
                    <view class="layout">
                        <view class="pict">
                            <image src="../../../static/img/23b5b_134x132.png" mode="widthFix"></image>
                        </view>
                        <view class="text">
                            <view class="p">
                                <text class="s1">巡检位置：</text>
                                <text>南京溧水万达广场</text>
                            </view>
                            <view class="p">
                                <text class="s1">巡检时间：</text>
                                <text>2020-01-09</text>
                                <text class="s2">抄送人：</text>
                                <text>张三</text>
                            </view>
                            <view class="p">
                                <text class="s1">巡检问题：</text>
                                <text>这地方的墙漆没刷完整</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="li">
                    <view class="title">
                        <text class="h2">南京溧水万达室内装修工程</text>
                    </view>
                    <view class="layout">
                        <view class="pict">
                            <image src="../../../static/img/23b5b_134x132.png" mode="widthFix"></image>
                        </view>
                        <view class="text">
                            <view class="p">
                                <text class="s1">巡检位置：</text>
                                <text>南京溧水万达广场</text>
                            </view>
                            <view class="p">
                                <text class="s1">巡检时间：</text>
                                <text>2020-01-09</text>
                                <text class="s2">抄送人：</text>
                                <text>张三</text>
                            </view>
                            <view class="p">
                                <text class="s1">巡检问题：</text>
                                <text>这地方的墙漆没刷完整</text>
                            </view>
                        </view>
                    </view>
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