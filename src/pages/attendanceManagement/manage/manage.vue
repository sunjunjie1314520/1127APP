<template class="bg">
	<view class="container">

        <uni-nav-bar left-icon="back" title="出勤管理"></uni-nav-bar>

		<view class="att-manage">
			<view class="att-manage-tab">
				<text @tap="toggle" id="0" :class="{'active':current==0}">出勤管理</text>
				<text @tap="toggle" id="1" :class="{'active':current==1}">加班管理</text>
			</view>
			<view class="att-manage-content">
				<swiper class="swiper" :current="current" @change="slideChange">
					<swiper-item>
						<view class="att-manage-list">
							<view class="att-manage-list-box">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
										<view class="manage-list-label">
											异常
										</view>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="att-manage-list-box">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
										<view class="manage-list-label">
											异常
										</view>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="att-manage-list-box att-manage-list-ok">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
										<view class="manage-list-label">
											正常
										</view>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="att-manage-list-box att-manage-list-over">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">已确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
										<view class="manage-list-label">
											异常
										</view>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="att-manage-list">
							<view class="att-manage-list-box">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-txt">
											<text class="tit">日薪(元)：</text>
											<text>500</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="att-manage-list-box">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-txt">
											<text class="tit">日薪(元)：</text>
											<text>500</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="att-manage-list-box att-manage-list-ok">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-txt">
											<text class="tit">日薪(元)：</text>
											<text>500</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="att-manage-list-box att-manage-list-over">
								<view class="att-manage-list-tit">
									<view class="manage-list-tit-time">2019-7-5</view>
									<view class="manage-list-tit-sub">
										<button type="primary">已确认</button>
									</view>
								</view>
								<view class="att-manage-list-col">
									<view class="manage-list-img">
										<image src="../../../static/img/im4.png" mode=""></image>
									</view>
									<view class="manage-list-inf">
										<view class="manage-list-inf-name">
											<text>张三</text>
											<text class="position">产品经理</text>
										</view>
										<view class="manage-list-inf-txt">
											<text class="tit">日薪(元)：</text>
											<text>500</text>
										</view>
										<view class="manage-list-inf-time">
											<view class="list-inf-time-box">
												<text class="tit">上班：</text>
												<text>07:00:35</text>
											</view>
											<view class="list-inf-time-box">
												<text class="tit">下班：</text>
												<text>16:00:35</text>
											</view>
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
</template>

<script>
    export default {
        data(){
            return {
                current:0,
            }
        },
        created(){
            console.log('init');
        },
        methods:{
            toggle(e){
                this.current = e.target.id
            },
            slideChange(e){
                this.current = e.detail.current
            }
        }
    }
</script>