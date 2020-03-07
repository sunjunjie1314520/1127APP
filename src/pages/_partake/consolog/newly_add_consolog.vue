<template>
    <view class="container bg-three">
        <uni-navbar>新增日志</uni-navbar>
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
                        <view class="fr">
                            <input placeholder-class="placeholder" placeholder="请输入天气" />
                        </view>
                    </view>
                    <view class="li">
                        <text class="span">整改意见</text>
                        <view class="fr">
                            <textarea class="h105" value="" placeholder="请输入日志内容" placeholder-class="placeholder" />
                        </view>
                    </view>
                </view>
            </view>

            <view class="pub-page-form">
                <view class="ul">
                    <view class="li">
                        <text class="span">添加照片</text>
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
            <view class="pub-page-form">
                <view class="ul">
                    <view class="li">
                        <text class="span">批复反馈</text>
                        <view class="fr">
                            <textarea class="h205" value="" placeholder="请输入反馈意见" placeholder-class="placeholder" />
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

            <view class="pub-button">
                <text>提 交</text>
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