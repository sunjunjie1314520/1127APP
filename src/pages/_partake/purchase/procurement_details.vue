<template>
    <view class="container bg-three">
        <uni-navbar>采购详情</uni-navbar>
        <view class="pub-wid">
            <view class="procurement-wrap">
                <view class="one">
                    <text class="h2">南京溧水万达智能化工程</text>
                    <view class="layout">
                        <view class="pict">
                            <image src="../../../static/img/23b5b_134x132.png" mode="widthFix"></image>
                        </view>
                        <view class="text">
                            <view class="li">
                                <text class="span">材料类型：</text>
                                <view class="c-sele pub-select">
                                    <text class="option">请选择材料类型</text>
                                </view>
                            </view>
                            <view class="li">
                                <text class="span">采购日期： </text>
                                <text class="p">2020-01-08</text>
                            </view>
                            <view class="li">
                                <text class="p">总计：</text>
                                <text class="color">2000</text>
                                <text class="p">元</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="two">
                    <view class="ul">
                        <view class="li">
                            <text class="sp1">序号</text>
                            <text class="sp2">材料名称</text>
                            <text class="sp1">型号</text>
                            <text class="sp1">品牌</text>
                            <text class="sp1">单位</text>
                            <text class="sp1">数量</text>
                            <text class="sp1">单价</text>
                            <text class="sp3">总价</text>
                        </view>
                        <view class="li">
                            <text class="sp1">1</text>
                            <text class="sp2">钻头</text>
                            <text class="sp1">DW1</text>
                            <text class="sp1">铁钢</text>
                            <text class="sp1">个</text>
                            <text class="sp1">100</text>
                            <text class="sp1">20</text>
                            <text class="sp3">2000</text>
                        </view>
                        <view class="li">
                            <text class="sp1">1</text>
                            <text class="sp2">钻头</text>
                            <text class="sp1">DW1</text>
                            <text class="sp1">铁钢</text>
                            <text class="sp1">个</text>
                            <text class="sp1">100</text>
                            <text class="sp1">20</text>
                            <text class="sp3">2000</text>
                        </view>
                    </view>
                </view>
            </view>

            <view class="pub-page-card">
                <text class="h2">采购原因</text>
                <view class="moreline">
                    <textarea class="caigou" value="" placeholder="请输入采购内容" placeholder-class="placeholder" />
                </view>
                <text class="h2 mt60">商品照片</text>
                <view class="pub-load mt40">
                    <view class="pub-picture-wrap">
                        
                        <view class="box">
                            <text>删除</text>
                        </view>
                        <view class="box last-add">
                            
                        </view>
                    </view>
                </view>
            </view>

            <view class="pub-page-form">
                <view class="ul">
                    <view class="li">
                        <text class="span">审批人</text>
                        <view class="fr">
                            <view class="pub-select">
                                <text class="option">请选择审批人</text>
                            </view>
                        </view>
                    </view>
                    <view class="li">
                        <text class="span">库管员</text>
                        <view class="fr">
                            <view class="pub-select">
                                <text class="option">请选择库管员</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view class="pub-button">
            <text>确 定</text>
        </view>

    </view>
</template>

<script>
export default {

}
</script>

<style>

</style>