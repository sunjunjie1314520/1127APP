<template>
    <view class="container bg-three">

        <view class="top">
            <text>首页</text>
        </view>
        
        <view class="index-bann">
            <image src="../../static/img/d676d_750x230.jpg" mode=""></image>
        </view>

        <view class="index-four">
            <view class="ul">
                <view class="li line">
                    <view class="pict">
                        <image src="../../static/img/141c8_70x70.png" mode=""></image>
                    </view>
                    <view class="wrap">
                        <text class="p">本月工资</text>
                        <text class="b">76543.00<text class="s">元</text></text>
                    </view>
                </view>
                <view class="li line">
                    <view class="pict">
                        <image src="../../static/img/8281f_70x70.png" mode=""></image>
                    </view>
                    <view class="wrap">
                        <text class="p">本月工作天数</text>
                        <text class="b">26<text class="s">天</text></text>
                    </view>
                </view>
                <view class="li">
                    <view class="pict">
                        <image src="../../static/img/0f3ff_70x70.png" mode=""></image>
                    </view>
                    <view class="wrap">
                        <text class="p">本年工资</text>
                        <text class="b">176543.00<text class="s">元</text></text>
                    </view>
                </view>
                <view class="li">
                    <view class="pict">
                        <image src="../../static/img/e9d47_70x70.png" mode=""></image>
                    </view>
                    <view class="wrap">
                        <text class="p">本年工作天数</text>
                        <text class="b">302<text class="s">天</text></text>
                    </view>
                </view>
            </view>
        </view>

        <view class="statistics">
            <text class="index-title">
                资金统计
                <text class="fr">单位:万元</text>
            </text>
            <view class="box">
                <view class="projects-name">
                    <text class="titname"><text class="ico"></text>南京溧水万达智能化工程</text>
                    <view class="scroll">
                        <scroll-view class="ul" scroll-x="true" @scroll="scroll">
                            <view class="li li1">
                                <view class="box">
                                    <text class="p">结算金额</text>
                                    <text class="b">112680.00</text>
                                </view>
                            </view>
                            <view class="li li2">
                                <view class="box">
                                    <text class="p">结算金额</text>
                                    <text class="b">112680.00</text>
                                </view>
                            </view>
                            <view class="li li3">
                                <view class="box">
                                    <text class="p">结算金额</text>
                                    <text class="b">112680.00</text>
                                </view>
                            </view>
                        </scroll-view>
                    </view>
                </view>
                <view class="echarts">
                    <image src="../../static/img/f2696_627x385.png" mode=""></image>
                </view>
            </view>
        </view>

        <view class="chuqing">
            <view class="index-title">
                出勤统计
                <text class="fr">单位:万元</text>
            </view>
            <view class="echarts">
                
            </view>
        </view>

        <view class="renwu">
            <view class="index-title">
                任务统计
                <text class="fr">单位:万元</text>
            </view>
            <view class="echarts">
                
            </view>
        </view>

        <view class="xunjian">
            <view class="index-title">
                巡检统计
                <text class="fr">单位:万元</text>
            </view>
            <view class="echarts">
                
            </view>
        </view>

        <view class="rizhi">
            <view class="index-title">
                日志管理
                <text class="fr">单位:万元</text>
            </view>
            <view class="echarts">
                
            </view>
        </view>

        <uni-footer index="1"></uni-footer>

    </view>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        scroll(e){
            console.log(e);
        }
    }
}
</script>

<style>

</style>