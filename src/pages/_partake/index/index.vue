<template>
    <view class="container">

		<uni-nav-bar left-icon="back" :title="title"></uni-nav-bar>

        <view class="company">
			<view class="company-bann">
				<image src="../../../static/img/bann1.jpg" mode=""></image>
			</view>

            <view class="current">
                <view class="pict">
                    <image src="../../../static/img/2c322_132x132.png" mode=""></image>
                </view>
                <view class="text">
                    <view class="comp-name">
                        <text class="h2">南京远大智能科技有限公司</text>
                        <text class="fr">施工单位</text>
                    </view>
                    <view class="jiaose">
                        <view class="li">
                            <text class="gray">项目角色：</text>
                            <text>供货单位</text>
                        </view>
                        <view class="li">
                            <text class="gray">邀请人：</text>
                            <text>李四</text>
                        </view>
                    </view>
                    <view class="tel">123423124</view>
                </view>
            </view>

			<view class="company-list">

				<view class="company-list-content">
					<view class="company-list-title">
						基本设置
					</view>
					<view class="company-list-col">
						<view class="company-list-box">
							<navigator url="'../project/details/details">
								<view class="company-list-img">
									<image src="../../../static/img/ic20.png" mode=""></image>
								</view>
								<view class="company-list-txt">我的工资</view>
							</navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../attendance/attendance">
                                <view class="company-list-img">
                                    <image src="../../../static/img/10b1b_92x92.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">考勤签到</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../jurisdiction/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/ic5.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">加班管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../attendanceManagement/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/35412_92x92.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">我的任务</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../participation/construction/construction">
                                <view class="company-list-img">
                                    <image src="../../../static/img/ic7.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">施工日志</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../contract/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/2cf15_91x92.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">日常巡检</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../invoices/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/ic10.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">材料领取</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../invoices/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/e4002_92x91.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">工具领取</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../invoices/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/90191_92x92.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">费用报销</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../invoices/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/68e34_92x92.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">零星采购</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../invoices/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../../static/img/f02f3_92x92.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">特别提醒</view>
                            </navigator>
						</view>
					</view>
				</view>
				
			</view>

		</view>
    </view>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){

    },
    computed:{
        title(){
            return'标题栏'
        }
    },
    methods:{

    }
}
</script>

<style>
    
</style>
