<template>
	<view>
		<view class="status_bar"></view>
	    <uni-nav-bar left-icon="back" title="新增任务">
			<view class="right-butn" slot="right">新建</view>
		</uni-nav-bar>
        <image src="@/ic1.png" mode=""></image>

        <scroll-view :scroll-top="scrollTop" scroll-x="true" class="ul" @scroll="scroll">
            <view class="li li0">
                <text class="h3">工程票</text>
            </view>
            <view class="li li0">
                <text class="h3">工程票</text>
            </view>
            <view class="li li0">
                <text class="h3">工程票</text>
            </view>
            <view class="li li0">
                <text class="h3">工程票</text>
            </view>
            <view class="li li0">
                <text class="h3">工程票</text>
            </view>
            <view class="li li0">
                <text class="h3">工程票</text>
            </view>
            <view class="li li1">
                <text class="h3">工程票税金</text>
            </view>
            <view class="li li2">
                <text class="h3">工程票税金</text>
            </view>
            <!-- <view class="li last"></view> -->
        </scroll-view> 
	  </view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				scrollTop:0
			}
		},
		methods: {
			scroll(e){
                console.log(e);
                
            }
		}
	}
</script>

<style>
    .ul{
        white-space: nowrap;
        width: 100%;
    }
	.li{
        width: 130upx;
        height: 130upx;
        background: #ccc;
        display: inline-block;
        margin-left: 10upx;
    }
</style>
