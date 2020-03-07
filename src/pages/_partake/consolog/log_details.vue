<template>
    <view class="container bg-three">
        <uni-navbar>日志详情</uni-navbar>
        <view class="pub-wid">

            <view class="pub-page-form">
                <view class="ul">
                    <view class="li">
                        <text class="span">项目名称</text>
                        <text class="p">南京溧水万达室内装修工程</text>
                    </view>
                    <view class="li">
                        <text class="span">姓名</text>
                        <text class="p">张三</text>
                    </view>
                    <view class="li">
                        <text class="span">职位</text>
                        <text class="p">项目经理</text>
                    </view>
                    <view class="li">
                        <text class="span">日期</text>
                        <text class="p">2020-01-08　星期二</text>
                    </view>
                    <view class="li">
                        <text class="span">天气</text>
                        <text class="p">晴</text>
                    </view>
                    <view class="li">
                        <text class="span">日志内容</text>
                        <text class="p">阿萨德法师法法师按时按时发斯蒂芬撒发顺丰打发的市分公司的公司大公司的。</text>
                        <view class="pict">
                            <image src="../../../static/img/38478_670x296.jpg" mode="widthFix"></image>
                        </view>
                    </view>
                </view>
            </view>

            <view class="pub-page-form">
                <view class="ul">
                    <view class="li">
                        <text class="span">批复反馈</text>
                        <view class="fr">
                            <textarea class="h205" :value="page.fankui" placeholder="请输入反馈意见" placeholder-class="placeholder" />
                        </view>
                    </view>
                    <view class="li">
                        <text class="span">附件</text>
                        <view class="pub-load mt20">
                            <view class="pub-picture-wrap">

                                <view class="box">
                                    <text>删除</text>
                                </view>

                                <view class="box last-add">
                                    
                                </view>
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
    data(){
        return {
            page:{
                fankui:'施工过程中注意安全带'
            }
        }
    }
}
</script>

<style>

</style>