<template>
    <view class="container bg-two">
        <uni-nav-bar left-icon="back" title="工具管理"></uni-nav-bar>

        <view class="tabs">
            <view @tap="tabsToggle" data-id="1" :class="['sp',{'acti':index==1}]">库存盘点</view>
            <view @tap="tabsToggle" data-id="2" :class="['sp',{'acti':index==2}]">入库申请</view>
            <view @tap="tabsToggle" data-id="3" :class="['sp',{'acti':index==3}]">出库申请 <text>2</text></view>
        </view>

        <view class="wrapper">
            <view class="item">
                
                <view class="h2">
                    南京溧水万达智能化项目
                </view>
                <view class="ul">
                    <view class="li">
                        <view class="pict">
                            <image src="../../static/img/im1.png" mode=""></image>
                        </view>
                        <view class="text">
                            <view class="title">
                                <text class="t1">张三</text>
                                <text class="t2">项目经理</text>
                            </view>
                            <view class="p">
                                <text class="p1">施工位置：</text>
                                <text class="p2">四楼主题街区</text>
                            </view>
                            <view class="p">
                                <text class="p1">领用日期：</text>
                                <text class="p2">2019-11-08</text>
                            </view>
                        </view>
                        <view class="state">
                            <text class="span bg1">未领取</text>
                        </view>
                    </view>
                    <view class="li">
                        <view class="pict">
                            <image src="../../static/img/im1.png" mode=""></image>
                        </view>
                        <view class="text">
                            <view class="title">
                                <text class="t1">张三</text>
                                <text class="t2">项目经理</text>
                            </view>
                            <view class="p">
                                <text class="p1">施工位置：</text>
                                <text class="p2">四楼主题街区</text>
                            </view>
                            <view class="p">
                                <text class="p1">领用日期：</text>
                                <text class="p2">2019-11-08</text>
                            </view>
                        </view>
                        <view class="state">
                            <text class="span bg2">已归还</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
export default {
    data(){
        return {
            index:3
        }
    },
    methods:{
        tabsToggle(e){
            const { id } = e.currentTarget.dataset
            this.index = id
        }
    }
}
</script>

<style lang="stylus" scoped>
    
    .tabs
        display flex
        justify-content space-between
        padding 0 38upx
        border-bottom .5px solid #eaeaea
        background #fff
        .sp
            color #999999
            font-size 30upx
            line-height 85upx
            position relative
            text
                top 20%
                right -25upx
                position absolute
                width 32upx
                height 32upx
                background #ff2424
                color #fff
                border-radius 50%
                text-align center
                line-height 32upx
                font-size 26upx
            &.acti
                color #3a89ff
                position relative
                &:after
                    content ''
                    position absolute
                    left 0
                    width 100%
                    height 1px
                    background #3a89ff
                    left 0
                    right 0
                    bottom -1px
    .wrapper
        .item
            float left
            width 100%
            .h2
                font-size 30upx
                color #333333
                padding 30upx 30upx 10upx
            .ul
                padding 0 20upx
                .li
                    float left
                    width 100%
                    padding 38upx 20upx
                    background #fff
                    margin-top 20upx
                    box-shadow 0 0 50px rgba(#b7cfff,.3)
                    .pict
                        float left
                        width 148upx
                        height 148upx
                        image
                            width 100%
                            height 100%
                    .text
                        float left
                        width 60%
                        margin-left 12upx
                        .title
                            .t1
                                font-size 36upx
                            .t2
                                color #232d31
                                font-size 30upx
                                margin-left 30upx
                        .p
                            font-size 26upx
                            margin-top 22upx
                            &:nth-of-type(2)
                                margin-top 27upx
                            .p1
                                color #999
                            .p2
                                color #333333
                            
                    .state
                        float right
                        .span
                            width 85upx
                            height 36upx
                            line-height 36upx
                            border-radius 4upx
                            font-size 20upx
                            color #fff
                            display block
                            text-align center
                            &.bg1
                                background-color #ff6569
                            &.bg2
                                background-color #3a89ff
</style>