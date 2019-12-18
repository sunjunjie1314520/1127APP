<template>
	<view class="container">

        <!-- 标题栏 -->
		<uni-nav-bar left-icon="back" title="南京溧水智能化工程"></uni-nav-bar>

        <view class="company">
			<view class="company-bann">
				<image src="../../static/img/bann1.jpg" mode=""></image>
			</view>
			<view class="company-list">
				<view class="company-list-content">
					<view class="company-list-title">
						基本设置
					</view>
					<view class="company-list-col">
						<view class="company-list-box">
							<navigator url="../project/manage/manage">
								<view class="company-list-img">
									<image src="../../static/img/ic2.png" mode=""></image>
								</view>
								<view class="company-list-txt">项目详情</view>
							</navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../personnel/index/index">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic3.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">人员管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic4.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">权限设置</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../attendanceManagement/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic5.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">出勤管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../participation/construction/construction">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic6.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">参建单位</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../contract/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic7.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">合同管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../invoices/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic8.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">发票管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic9.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								项目移交
							</view>
						</view>
					</view>
				</view>
				<view class="company-list-content">
					<view class="company-list-title">
						现场管理
					</view>
					<view class="company-list-col">
						<view class="company-list-box">
							<navigator url="../material/outbound/outbound">
								<view class="company-list-img">
									<image src="../../static/img/ic10.png" mode=""></image>
								</view>
								<view class="company-list-txt">
									材料管理
								</view>
							</navigator>
						</view>
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic11.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								工程管理
							</view>
						</view>
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic12.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								进度管理
							</view>
						</view>
						<view class="company-list-box">
							<navigator url="../task-distribution/index/index">
								<view class="company-list-img">
									<image src="../../static/img/ic13.png" mode=""></image>
								</view>
								<view class="company-list-txt">任务管理</view>
							</navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../patrol/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic14.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">巡检管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../journal/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic15.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">日志管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../security/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic16.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">
                                    安全管理
                                </view>
                            </navigator>
						</view>
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic17.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								车辆管理
							</view>
						</view>
					</view>
				</view>
				<view class="company-list-content">
					<view class="company-list-title">
						基本设置
					</view>
					<view class="company-list-col">
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic18.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								费用审批
							</view>
						</view>
						<view class="company-list-box">
                            <navigator url="../costcontrol/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic19.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">成本管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../wages/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic20.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">工资管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic21.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								贷款管理
							</view>
						</view>
						<view class="company-list-box">
							<navigator url="../purchase/list/list">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic22.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">
                                    零星采购
                                </view>
                            </navigator>
						</view>
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic23.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								材料采购
							</view>
						</view>
						
					</view>
				</view>
				<view class="company-list-content">
					<view class="company-list-title">
						资料管理
					</view>
					<view class="company-list-col">
						<view class="company-list-box">
							<view class="company-list-img">
								<image src="../../static/img/ic24.png" mode=""></image>
							</view>
							<view class="company-list-txt">
								工程资料
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>

    </view>
    
</template>