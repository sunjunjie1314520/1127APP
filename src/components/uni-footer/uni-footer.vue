<template name="uni-footer">
    <view class="footer-wrap">
        <view class="null-footer"></view>
        <view class="footer">
            <view class="ul">
                <view :class="['li',{'active':index=='1'}]">
                    <navigator url="../../index/index" open-type="redirect">
                        <text class="ico ico-i1"></text>
                        <text class="s">首页</text>
                    </navigator>
                </view>
                <view :class="['li',{'active':index=='2'}]">
                    <navigator url="../project/manage/manage" open-type="redirect">
                        <text class="ico ico-i2"></text>
                        <text class="s">项目</text>
                    </navigator>
                </view>
                <view :class="['li',{'active':index=='3'}]">
                    <navigator url="#" open-type="redirect">
                        <text class="ico ico-i3"></text>
                        <text class="s">聊天</text>
                    </navigator>
                </view>
                <view :class="['li',{'active':index=='4'}]">
                    <navigator url="#" open-type="redirect">
                        <text class="ico ico-i4"></text>
                        <text class="s">我的</text>
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name:'uni-footer',
    props:{
        index:{
            type:String
        }
    },
    data(){
        return {
            
        }
    },
    
    onLoad(){
        console.log('onLoad');
    },
    methods:{

    }
}
</script>

<style>

</style>