<template>
	<view class="container bg-one">
		<view class="management">
			<view class="management-tab">
				<text class="active">我的项目</text>
				<text>参与项目</text>
			</view>
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="management-list">
						<view class="management-list-box">
							<view class="management-list-img">
								<image src="../../static/img/im11.png" mode=""></image>
							</view>
							<view class="management-list-inf">
								<view class="management-list-inf-txt">
									<view class="management-list-inf-name">
										<text>南京溧水智能化工程</text>
										<image src="../../static/img/im12.png" mode=""></image>
									</view>
									<view class="management-list-inf-link">
										<navigator url="">查看</navigator>
									</view>
								</view>
								<view class="management-list-addr">
									<image src="../../static/img/im13.png" mode=""></image>
									<text>项目地址：南京溧水万达广场</text>
								</view>
								<view class="management-list-time">
									<view class="list-time-txt">
										<text class="tit">中标：</text>
										<text>2019-10-5</text>
									</view>
									<view class="list-time-txt">
										<text class="tit">开工：</text>
										<text>2019-11-15</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
						<view class="management-list">
							<view class="management-list-box">
								<view class="management-list-img">
									<image src="../../static/img/im11.png" mode=""></image>
								</view>
								<view class="management-list-inf">
									<view class="management-list-inf-txt">
										<view class="management-list-inf-name">
											<text>南京溧水智能化工程</text>
											<image src="../../static/img/im12.png" mode=""></image>
										</view>
										<view class="management-list-inf-link">
											<navigator url="">查看</navigator>
										</view>
									</view>
									<view class="management-list-addr">
										<image src="../../static/img/im13.png" mode=""></image>
										<text>项目地址：南京溧水万达广场</text>
									</view>
									<view class="management-list-time">
										<view class="list-time-txt">
											<text class="tit">中标：</text>
											<text>2019-10-5</text>
										</view>
										<view class="list-time-txt">
											<text class="tit">开工：</text>
											<text>2019-11-15</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
			        indicatorDots: false,
			        autoplay: true,
			        interval: 2000,
			        duration: 500
			        }
		},
		onLoad() {

		},
		methods: {
			tabs(e){
				this.index = e.target.id
				this.current = e.target.id
			},
			slideChange(e){
				this.index = e.detail.current
				this.current = e.detail.current
			}
		}
	}
</script>