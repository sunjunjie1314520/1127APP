<template>
	<view class="container back">
		<view class="status_bar"></view>
		<uni-nav-bar left-icon="back" title="任务派发">
			<view @tap="newabc" class="right-butn" slot="right">新建</view>
		</uni-nav-bar>
		<view class="task-list">
            <view class="ul">
                <view class="li">
                    <view class="fl-layout">
						<text class="title">南京溧水万达室内装修工程</text>
						<view class="wrap">
							<view class="pict">
								<image src="../../../static/img/ddedb_132x132.jpg" mode="widthFix"></image>
							</view>
							<view class="text">
								<view class="p">
									<text class="t1">项目地址：</text>
									<text>南京溧水万达广场</text>
								</view>
								<view class="p">
									<text class="t1">派发人：</text>
									<text>张三</text>
									<text class="t1 t2">实施人：</text>
									<text>李四</text>
								</view>
								<view class="p">
									<text class="t1">派发时间：</text>
									<text>2019-01-15</text>
								</view>
								<view class="p">
									<text class="t1">完成时间：</text>
									<text>2019-01-15</text>
								</view>
							</view>
						</view>
                    </view>
                    <view class="fr-layout">
                        <text class="done">未完成</text>
                    </view>
                </view><view class="li">
                    <view class="fl-layout">
						<text class="title">南京溧水万达室内装修工程</text>
						<view class="wrap">
							<view class="pict">
								<image src="../../../static/img/ddedb_132x132.jpg" mode="widthFix"></image>
							</view>
							<view class="text">
								<view class="p">
									<text class="t1">项目地址：</text>
									<text>南京溧水万达广场</text>
								</view>
								<view class="p">
									<text class="t1">派发人：</text>
									<text>张三</text>
									<text class="t1 t2">实施人：</text>
									<text>李四</text>
								</view>
								<view class="p">
									<text class="t1">派发时间：</text>
									<text>2019-01-15</text>
								</view>
								<view class="p">
									<text class="t1">完成时间：</text>
									<text>2019-01-15</text>
								</view>
							</view>
						</view>
                    </view>
                    <view class="fr-layout">
                        <text class="doing">未完成</text>
                    </view>
                </view><view class="li">
                    <view class="fl-layout">
						<text class="title">南京溧水万达室内装修工程</text>
						<view class="wrap">
							<view class="pict">
								<image src="../../../static/img/ddedb_132x132.jpg" mode="widthFix"></image>
							</view>
							<view class="text">
								<view class="p">
									<text class="t1">项目地址：</text>
									<text>南京溧水万达广场</text>
								</view>
								<view class="p">
									<text class="t1">派发人：</text>
									<text>张三</text>
									<text class="t1 t2">实施人：</text>
									<text>李四</text>
								</view>
								<view class="p">
									<text class="t1">派发时间：</text>
									<text>2019-01-15</text>
								</view>
								<view class="p">
									<text class="t1">完成时间：</text>
									<text>2019-01-15</text>
								</view>
							</view>
						</view>
                    </view>
                    <view class="fr-layout">
                        <text class="modify">待修改</text>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				list: '',
			}
		},
		onLoad() {
            this.getinfo();
		},
		methods: {
            getinfo(){
                console.log('init');
                
            },
			new(){
                
			}
		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #fff;
	}
</style>
