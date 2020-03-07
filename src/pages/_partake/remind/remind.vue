<template>
    <view class="container bg-three flex-page">

        <uni-navbar :none="true">安全提醒</uni-navbar>
        
        <view class="shrink">
            <view class="remind-tabs-two">
                <view class="ul">
                    <view  @tap="toggleTabs" :class="['li',{'acti':index==0}]" :data-index="0">提醒我的</view>
                    <view  @tap="toggleTabs" :class="['li',{'acti':index==1}]" :data-index="1">我的提醒</view>
                </view>
            </view>
            <view class="remind-tabs-two-null"></view>
        </view>

        <view class="grow position">
            <view class="remind-wrapper">
                <swiper @change="changeHandle" :current="index">
                    <swiper-item>
                        <view class="ul">
                            <view class="title">
                                南京溧水万达室内装修工程
                            </view>
                            <view class="li">
                                <navigator url="./remind_me">
                                    <view class="time">
                                        <text class="fl">提醒时间：2020-01-08 13:00</text>
                                        <text class="fr c1">待整改</text>
                                    </view>
                                    <view class="layout">
                                        <view class="pict">
                                            <image src="../../../static/img/im11.png" mode="widthFix"></image>
                                        </view>
                                        <view class="text">
                                            <view class="p">
                                                <text class="s1">提醒人：</text>
                                                <text>李四</text>
                                            </view>
                                            <view class="p">
                                                <text class="s1">提醒内容：</text>
                                                <text class="s2">送达方发生的感受到分公司的送达方发生的感受到分公司的</text>
                                            </view>
                                        </view>
                                    </view>
                                </navigator>
                            </view>
                            <view class="li">
                                <navigator url="./remind_me">
                                    <view class="time">
                                        <text class="fl">提醒时间：2020-01-08 13:00</text>
                                        <text class="fr c2">已完成</text>
                                    </view>
                                    <view class="layout">
                                        <view class="pict">
                                            <image src="../../../static/img/im11.png" mode="widthFix"></image>
                                        </view>
                                        <view class="text">
                                            <view class="p">
                                                <text class="s1">提醒人：</text>
                                                <text>李四</text>
                                            </view>
                                            <view class="p">
                                                <text class="s1">提醒内容：</text>
                                                <text class="s2">送达方发生的感受</text>
                                            </view>
                                        </view>
                                    </view>
                                </navigator>
                            </view>
                            
                        </view>
                    </swiper-item>
                    <swiper-item>
                        <view class="ul">
                            <view class="title">
                                南京溧水万达室内装修工程
                            </view>
                            <view class="li">
                                <navigator url="./my_reminder">
                                    <view class="time">
                                        <text class="fl">提醒时间：2020-01-08 13:00</text>
                                        <text class="fr c1">待整改</text>
                                    </view>
                                    <view class="layout">
                                        <view class="pict">
                                            <image src="../../../static/img/im11.png" mode="widthFix"></image>
                                        </view>
                                        <view class="text">
                                            <view class="p">
                                                <text class="s1">提醒人：</text>
                                                <text>李四</text>
                                            </view>
                                            <view class="p">
                                                <text class="s1">提醒内容：</text>
                                                <text class="s2">送达方发生的感受到分公司的送达方发生的感受到分公司的</text>
                                            </view>
                                        </view>
                                    </view>
                                </navigator>
                            </view>
                            <view class="li">
                                <navigator url="./my_reminder">
                                    <view class="time">
                                        <text class="fl">提醒时间：2020-01-08 13:00</text>
                                        <text class="fr c2">已完成</text>
                                    </view>
                                    <view class="layout">
                                        <view class="pict">
                                            <image src="../../../static/img/im11.png" mode="widthFix"></image>
                                        </view>
                                        <view class="text">
                                            <view class="p">
                                                <text class="s1">提醒人：</text>
                                                <text>李四</text>
                                            </view>
                                            <view class="p">
                                                <text class="s1">提醒内容：</text>
                                                <text class="s2">送达方发生的感受</text>
                                            </view>
                                        </view>
                                    </view>
                                </navigator>
                            </view>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return {
            index:0
        }
    },
    methods:{
        toggleTabs(e){
            const { index } = e.currentTarget.dataset
            this.index = index
        },
        changeHandle(e){
            this.index = e.detail.current
        }
    }
}
</script>

<style>

</style>