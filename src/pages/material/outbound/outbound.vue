<template>
	<view class="container">
		<view class="outbound">
			<view class="outbound-tabs">
				<text @tap="tabs" id="0" :class="[{'active':index==0},'text-li']">
					库存盘点
				</text>
				<text @tap="tabs" id="1" :class="[{'active':index==1},'text-li']">
					入库申请
				</text>
				<text @tap="tabs" id="2" :class="[{'active':index==2},'text-li']">
					出库申请
					<text class="mess-ico">2</text>
				</text>
			</view>
			<!-- <view class="outbound-product">
				<view class="outbound-product-section">
					<view class="outbound-product-title">
						南京溧水万达智能化项目
					</view>
					<view class="outbound-product-list">
						<view class="product-list-li">
							<view class="product-list-img">
								<image src="../../../static/img/im1.png" mode=""></image>
							</view>
							<view class="product-list-inf">
								<div class="product-list-inf-name">
									<text class="name">张三</text>
									<text class="job">项目经理</text>
									<text class="label">未出库</text>
								</div>
								<view class="product-list-inf-list">
									<text class="tit">施工位置:</text>
									<text class="txt">四楼主题街区</text>
								</view>
								<view class="product-list-inf-list">
									<text class="tit">领用日期:</text>
									<text class="txt">2019-11-08</text>
								</view>
							</view>
						</view>
						<view class="product-list-li">
							<view class="product-list-img">
								<image src="../../../static/img/im1.png" mode=""></image>
							</view>
							<view class="product-list-inf">
								<div class="product-list-inf-name">
									<text class="name">张三</text>
									<text class="job">项目经理</text>
									<text class="label out">已出库</text>
								</div>
								<view class="product-list-inf-list">
									<text class="tit">施工位置:</text>
									<text class="txt">四楼主题街区</text>
								</view>
								<view class="product-list-inf-list">
									<text class="tit">领用日期:</text>
									<text class="txt">2019-11-08</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="outbound-product">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :current="current" @change="slideChange"> <!--:indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"-->
							<swiper-item>
								<view class="swiper-item outbound-product-section">
									<view class="outbound-product-title">
										南京溧水万达智能化项目
									</view>
									<view class="outbound-product-procurement">
										<view class="product-procurement-list">
											<view class= "product-procurement-list-img">
												<image src="../../../static/img/im2.png" mode=""></image>
											</view>
											<view class="product-procurement-list-inf">
												<view class="list-inf-txt">
													<text>摄像机采购</text>
													<text class="time">2019-11-07</text>
												</view>
												<view class="list-inf-more">
													<image src="../../../static/img/ic1.png" mode=""></image>
												</view>
											</view>
										</view>
									</view>
									<view class="outbound-product-table">
										<view class="table">
											<view class="tr">
												<view class="th">序号</view>
												<view class="th">材料序号</view>
												<view class="th">型号</view>
												<view class="th">品牌</view>
												<view class="th">单位</view>
												<view class="th">库存量</view>
												<view class="th">未采购量</view>
											</view>
											<view class="tr">
												<view class="td">1</view>
												<view class="td">摄像机</view>
												<view class="td">DW1</view>
												<view class="td">佳能</view>
												<view class="td">个</view>
												<view class="td">0</view>
												<view class="td">20</view>
											</view>
											<view class="tr">
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
											</view>
											<view class="tr">
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
												<view class="td"></view>
											</view>
										</view>
									</view>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item outbound-product-section">
										<view class="outbound-product-title">
											南京溧水万达智能化项目
										</view>
										<view class="outbound-product-list">
											<view class="product-list-li">
												<view class="product-list-img">
													<image src="../../../static/img/im1.png" mode=""></image>
												</view>
												<view class="product-list-inf">
													<div class="product-list-inf-name">
														<text class="name">南京溧水智能化工程合同</text>
														<text class="label repay">已归还</text>
													</div>
													<view class="product-list-inf-list">
														<text class="tit">供货单位:</text>
														<text class="txt">南京远大信息科技有限公司</text>
													</view>
													<view class="product-list-inf-list">
														<text class="tit">发货地址:</text>
														<text class="txt">南京溧水万达广场</text>
													</view>
												</view>
											</view>
											<view class="product-list-li">
												<view class="product-list-img">
													<image src="../../../static/img/im1.png" mode=""></image>
												</view>
												<view class="product-list-inf">
													<div class="product-list-inf-name">
														<text class="name">物品领用</text>
														<text class="label repay">已归还</text>
													</div>
													<view class="product-list-inf-list">
														<text class="tit">归还人:</text>
														<text class="txt">张三</text>
													</view>
													<view class="product-list-inf-list">
														<text class="tit">施工位置:</text>
														<text class="txt">四层主题街区</text>
													</view>
												</view>
											</view>
										</view>
									</view>
								
							</swiper-item>
							<swiper-item>
									<view class="swiper-item outbound-product-section">
											<view class="outbound-product-title">
												南京溧水万达智能化项目
											</view>
											<view class="outbound-product-list">
												<view class="product-list-li">
													<view class="product-list-img">
														<image src="../../../static/img/im1.png" mode=""></image>
													</view>
													<view class="product-list-inf">
														<div class="product-list-inf-name">
															<text class="name">张三</text>
															<text class="job">项目经理</text>
															<text class="label">未出库</text>
														</div>
														<view class="product-list-inf-list">
															<text class="tit">施工位置:</text>
															<text class="txt">四楼主题街区</text>
														</view>
														<view class="product-list-inf-list">
															<text class="tit">领用日期:</text>
															<text class="txt">2019-11-08</text>
														</view>
													</view>
												</view>
												<view class="product-list-li">
													<view class="product-list-img">
														<image src="../../../static/img/im1.png" mode=""></image>
													</view>
													<view class="product-list-inf">
														<div class="product-list-inf-name">
															<text class="name">张三</text>
															<text class="job">项目经理</text>
															<text class="label out">已出库</text>
														</div>
														<view class="product-list-inf-list">
															<text class="tit">施工位置:</text>
															<text class="txt">四楼主题街区</text>
														</view>
														<view class="product-list-inf-list">
															<text class="tit">领用日期:</text>
															<text class="txt">2019-11-08</text>
														</view>
													</view>
												</view>
											</view>
										</view>
								</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
				index: 0,
				indicatorDots:false
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
