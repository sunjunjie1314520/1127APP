<template>
    <view class="container">

		<uni-nav-bar class="boxs" left-icon="back" title="考勤签到"></uni-nav-bar>

        <view class="pername">
            <view class="pict">
                <image src="../../../static/img/im5.png" mode="widthFix"></image>
            </view>
            <view class="text">
                <text class="h2">南京溧水万达智能化工程</text>
                <view class="box">
                    <text class="name">张三</text>
                    <text class="tel">18795811259</text>
                </view>
            </view>
        </view>

        <view class="qian-time">
            <view class="ul">
                <view class="li">
                    <text class="span">上班时间09:00</text>
                    <text class="h2">打卡时间08:50</text>
                    <text class="address">南京溧水街道159号万达项目工地</text>
                </view>
                <view class="li">
                    <text class="span color">下班时间17:00</text>
                    <!-- <text class="h2">打卡时间08:50</text>
                    <text class="address">南京溧水街道159号万达项目工地</text> -->
                </view>
            </view>
        </view>

        <view class="my-address">
            <image src="../../../static/img/b39c1_750x398.png" mode="widthFix"></image>
        </view>

        <view class="atten-memo">
            <view class="ul">
                <view class="li">
                    <text class="span">备注</text>
                    <view class="fr-box">
                        <textarea placeholder-class="placeholder-class" placeholder="请输入备注" />
                    </view>
                </view>
                <view class="li block">
                    <text class="span">附件</text>
                    <view class="pub-load">
                        <view class="pub-picture-wrap">
                            <view class="box">
                                
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view class="xiaban">
            <view class="cirl linear-color-one">
                <text class="h2">下班打卡</text>
                <text class="span">15:14:12</text>
            </view>
            <view class="join">已进入考勤范围</view>
        </view>

    </view>
</template>

<script>
export default {
    name:'attendance',
    data(){
        return {

        }
    },
    created(){

    }
}
</script>

<style scoped>
    .qian-time{
        padding: 20upx 0 40upx 30upx;
        float: left;
        width: 100%;
    }
    .qian-time .ul{
        border-top: .5px solid #f0f0f0;
        padding-top: 30upx;
    }
    .qian-time .ul .li{
        padding-left: 30upx;
        border-left: .5px solid #efefef;
        padding-top: 40upx;
    }
    .qian-time .ul .li:nth-child(1){
        padding-top: 0;
    }

    .qian-time .ul .li:nth-child(1) .span{
        top: -5upx;
    }
    
    .qian-time .ul .li .span{
        display: block;
        font-size: 20upx;
        color: #999;
        position: relative;
        top: 8upx;
    }
    .qian-time .ul .li .span:after{
        content: '';
        position: absolute;
        left: -35upx;
        top: 5upx;
        width: 10upx;
        height: 10upx;
        border-radius: 50%;
        background: #999999;
    }
    .qian-time .ul .li .span.color:after{
        background: #3a89ff;
    }
    .qian-time .ul .li .h2{
        display: block;
        margin-top: 32upx;
        font-size: 36upx;
    }
    .qian-time .ul .li .address{
        display: block;
        font-size: 20upx;
        color: #999;
        margin-top: 16upx;
        background: url('../../../static/img/950eb_15x20.png') left center/15upx no-repeat;
        padding-left: 25upx;
    }
    .xiaban{
        float: left;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 15upx 0 35upx;
    }
    .xiaban .cirl{
        text-align: center;
        width: 200upx;
        height: 200upx;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 8upx 27upx rgba(33, 122, 255, .48)
    }
    .xiaban .cirl .h2{
        color: #fff;
        font-size: 36upx;
    }
    .xiaban .cirl .span{
        margin-top: 15upx;
        color: #fff;
        opacity: .5;
    }
    .xiaban .join{
        margin-top: 23upx;
        font-size: 20upx;
        background: url('../../../static/img/950eb_15x20.png') left center/15upx no-repeat;
        padding-left: 25upx;
    }
    .atten-memo{
        float: left;
        width: 100%;
       
    }
    .atten-memo .ul{
        padding-left: 30upx;
    }
    .atten-memo .ul .li{
        display: flex;
        border-top: .5px solid #eeeeee;
        padding: 39upx 0;
    }
    .atten-memo .ul .li:nth-child(1){
        border-top: none;
    }
    .atten-memo .ul .li.block{
        display: block;
    }
    .atten-memo .ul .li .span{
        flex: 0 0 220upx;
        color: #666666;
    }
    .atten-memo .ul .li .fr-box{
        flex: 1 0 auto;
        height: 85upx;
    }
    .atten-memo .ul .li .fr-box textarea{
        height: 100%;
        width: 100%;
    }
    .atten-memo .ul .li .pub-load{
        margin-top: 47upx;
    }

    .my-address{

    }

    .my-address image{
        width: 100%;
    }

    .pername{
        display: flex;
        padding: 30upx 30upx 0;

    }
    .pername .pict{
        flex:0 0 120upx;
        height: 120upx;
        border-radius: 50%;
        overflow: hidden;
    }
    .pername .pict image{
        width: 100%;
    }
    .pername .text{
        flex:1 0 auto;
        margin-left: 20upx;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
    } 
    .pername .text .h2{}
    .pername .text .box{}
    .pername .text .box .name{

    } 
    .pername .text .box .tel{
        margin-left: 30upx;
        background: url('../../../static/img/5732d_34x34.png') left center/34upx no-repeat;
        padding-left: 44upx;
    }
    .boxs{
        box-shadow: 0 0 21upx rgba(183, 207, 255, .3)
    }


</style>