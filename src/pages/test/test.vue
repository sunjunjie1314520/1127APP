<template>
	<view class="container bg-two">
        <view class="status_bar">
        </view>
		<view class="w">
            <button type="primary" @click="clearData">清除数据</button>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
            onPullDownRefresh(){
                setTimeout(() => {
                    uni.stopPullDownRefresh()
                }, 1000);
            },

            clearData(){
                uni.clearStorage();
                uni.clearStorageSync();
                uni.showToast({
                    title:'清除成功！'
                })
            }
		}
	}
</script>

<style>
    .w{
        padding:20upx;
    }
</style>
