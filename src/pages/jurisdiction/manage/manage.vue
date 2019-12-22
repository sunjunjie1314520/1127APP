<template>
    <view class="container">
        <uni-nav-bar left-icon="back" title="权限管理"></uni-nav-bar>
        <view class="juri-manage">
            <view class="search">
                <text class="ico-sea"></text>
                <input type="text" placeholder="请输入人员姓名查找" placeholder-class="place">
            </view>
            <view class="per-wrap">
                <text class="h2">项目人员(36)</text>
                <view class="ul">
                    <view class="li">
                        <view class="type-name">
                            <text class="h3">总经理</text>
                            <text class="ico-down"></text>
                        </view>
                        <view class="show-item"></view>
                        <view class="total-per">成员<text class="num">1</text>人</view>
                    </view>
                    <view class="li">
                        <view class="type-name">
                            <text class="h3">项目总负责</text>
                            <text class="ico-down"></text>
                        </view>
                        <view class="show-item"></view>
                        <view class="total-per">成员<text class="num">1</text>人</view>
                    </view>
                    <view class="li">
                        <view class="type-name">
                            <text class="h3">项目经理</text>
                            <text class="ico-down"></text>
                        </view>
                        <view class="show-item"></view>
                        <view class="total-per">成员<text class="num">1</text>人</view>
                    </view>
                    <view class="li">
                        <view class="type-name">
                            <text class="h3">项目技术负责人</text>
                            <text class="ico-down"></text>
                        </view>
                        <view class="show-item"></view>
                        <view class="total-per">成员<text class="num">1</text>人</view>
                    </view>
                    <view class="li">
                        <view class="type-name">
                            <text class="h3">施工员</text>
                            <text class="ico-down"></text>
                        </view>
                        <view class="show-item">
                            <view class="per-item">
                                <view class="pic">
                                    <image src="../../../static/img/im14.png" mode=""></image>
                                </view>
                                <view class="user-box">
                                    <view class="name-wrap">
                                        <text class="name">张三</text>
                                        <text class="tel">18795811259</text>
                                    </view>
                                    <text class="comp-name">南京佰码信息技术有限公司</text>
                                </view>
                            </view>
                            <view class="per-item">
                                <view class="pic">
                                    <image src="../../../static/img/im14.png" mode=""></image>
                                </view>
                                <view class="user-box">
                                    <view class="name-wrap">
                                        <text class="name">张三</text>
                                        <text class="tel">18795811259</text>
                                    </view>
                                    <text class="comp-name">南京佰码信息技术有限公司</text>
                                </view>
                            </view>
                            <view class="per-item">
                                <view class="pic">
                                    <image src="../../../static/img/im14.png" mode=""></image>
                                </view>
                                <view class="user-box">
                                    <view class="name-wrap">
                                        <text class="name">张三</text>
                                        <text class="tel">18795811259</text>
                                    </view>
                                    <text class="comp-name">南京佰码信息技术有限公司</text>
                                </view>
                            </view>
                        </view>
                        <view v-if="false" class="total-per">成员<text class="num">1</text>人</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>