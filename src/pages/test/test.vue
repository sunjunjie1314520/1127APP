<template>
	<view>
		<view class="status_bar"></view>
	    <uni-nav-bar left-icon="back" title="新增任务">
			<view class="right-butn" slot="right">新建</view>
		</uni-nav-bar>
        <image src="@/ic1.png" mode=""></image>
	  </view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
