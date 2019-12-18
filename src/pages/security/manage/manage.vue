<template>
    <view class="container bg-one">

        <uni-nav-bar title="安全提醒" left-icon="back">
            <navigator url="../detail/detail" slot="right" class="right-butn">新建</navigator>
        </uni-nav-bar>

        <view class="prolist">
            <text class="h2">南京溧水万达室内装修工程</text>
            <view class="ul">
                <view class="li">
                    <view class="time">
                        <text class="date">提醒时间：2019年-10-月20日 13:00</text>
                        <text class="status c1">待整改</text>
                    </view>
                    <view class="content-wrap">
                        <view class="pict">
                            <image src="../../../static/img/ddedb_132x132.jpg"></image>
                        </view>
                        <view class="fr-box">
                            <view class="item">
                                <text class="s1">提醒人：<text class="s2">李四</text></text>
                                <text class="s1">被提醒人：<text class="s2">张三</text></text>
                            </view>
                            <view class="item">
                                <text class="s1">提醒内容：<text class="s3">送达方发生的感受到分公司的...</text></text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="li">
                    <view class="time">
                        <text class="date">提醒时间：2019年-10-月20日 13:00</text>
                        <text class="status c2">已完成</text>
                    </view>
                    <view class="content-wrap">
                        <view class="pict">
                            <image src="../../../static/img/ddedb_132x132.jpg"></image>
                        </view>
                        <view class="fr-box">
                            <view class="item">
                                <text class="s1">提醒人：<text class="s2">李四</text></text>
                                <text class="s1">被提醒人：<text class="s2">张三</text></text>
                            </view>
                            <view class="item">
                                <text class="s1">提醒内容：<text class="s3">送达方发生的感受到分公司的...</text></text>
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