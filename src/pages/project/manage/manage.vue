<template>
	<view class="container bg-one">
		<!-- 标题栏 -->
		<uni-nav-bar left-icon="back" title="项目管理">
			<view @tap="gotoNew" class="right-butn" slot="right">新建</view>
		</uni-nav-bar>
		
		<view class="management">
			<view class="management-tab">
				<text @tap="toggle" id="0" :class="{active:index==0}">我的项目</text>
				<text @tap="toggle" id="1" :class="{active:index==1}">参与项目</text>
			</view>
			
			<view class="project">
				<div class="cg-box" v-if="index==0">
					<text>我是1里面的内容</text>
				</div>
				<div class="cg-box" v-if="index==1">
					<text>我是2里面的内容</text>
				</div>
			</view>
			<swiper class="swiper" :indicator-dots="indicatorDots" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="management-list">
						<view class="management-list-box">
							<view class="management-list-img">
								<image src="../../../static/img/im11.png" mode=""></image>
							</view>
							<view class="management-list-inf">
								<view class="management-list-inf-txt">
									<view class="management-list-inf-name">
										<text>南京溧水智能化工程</text>
										<image src="../../../static/img/im12.png" mode=""></image>
									</view>
									<view class="management-list-inf-link">
										<navigator url="">查看</navigator>
									</view>
								</view>
								<view class="management-list-addr">
									<image src="../../../static/img/im13.png" mode=""></image>
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
									<image src="../../../static/img/im11.png" mode=""></image>
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
				interval: 2000,
				duration: 500,
				index:1,
				current:0
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
			},
			gotoNew(){
			    uni.navigateTo({
			        url:'../newly/newly'
			    })
			},
			toggle(e){
				this.index = e.currentTarget.id
			}
		}
	}
</script>