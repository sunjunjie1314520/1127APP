<template>
	<view class="container">

		<uni-nav-bar left-icon="back" :title="title"></uni-nav-bar>

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
							<navigator :url="'../project/details/details?id=' + project_id">
								<view class="company-list-img">
									<image src="../../static/img/ic2.png" mode=""></image>
								</view>
								<view class="company-list-txt">项目详情</view>
							</navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../personnel/manage/manage">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic3.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">人员管理</view>
                            </navigator>
						</view>
						<view class="company-list-box">
                            <navigator url="../jurisdiction/manage/manage">
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
							<view class="company-list-img" @tap="show1=true">
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
							<navigator url="../two_tool/one">
                                <view class="company-list-img">
                                    <image src="../../static/img/ic11.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">
                                    工具管理
                                </view>
                            </navigator>
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
                            <navigator url="../patrol/index/index">
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
						<view class="company-list-box">
							<navigator url="../../pages/test/test">
                                <view class="company-list-img">
                                    <image src="../../static/img/e2a84_88x88.png" mode=""></image>
                                </view>
                                <view class="company-list-txt">
                                    清除数据
                                </view>
                            </navigator>
						</view>
					</view>
				</view>
				
			</view>
		</view>

        <tel-input
        :show="show1"
        @receiving_event="reveiviHandle"
        @close_event="show1=false"
        >
        </tel-input>

        <!-- 未开通会员 -->
        <view class="alert" v-if="show4">
            <view class="telbox">
                <view class="close" @tap="show4=false"></view>
                <text class="h3">未注册</text>
                <view class="wrap">
                    <view class="pict">
                        
                    </view>
                    <text class="name">{{user.user_name}}</text>
                    <text class="phone">{{user.phone}}</text>
                    
                </view>
                <!-- <view class="btn" @tap="transferHandle">邀请</view> -->
            </view>
        </view>

        <!-- 已开通会员 -->
        <view class="alert" v-if="show5">
            <view class="telbox">
                <view class="close" @tap="show5=false"></view>
                <text class="h3">{{user.vip_level ? '已开通会员':'未开通会员'}}</text>
                <view class="wrap">
                    <view class="pict">
                        <image :src="user.avatar" mode=""></image>
                    </view>
                    <text class="name">{{user.user_name}}</text>
                    <text class="phone">{{user.phone}}</text>
                    <text class="compname">{{user.user_company}}</text>
                    <text class="tips">请确认下用户信息后再提交</text>
                </view>
                <view class="btn" v-if="user.vip_level" @tap="transferHandle">移交</view>
            </view>
        </view>
    </view>
    
</template>


<script>
import telInput from "../../components/transfer/tel-input.vue";
export default {
    data(){
        return {

            show1:false,

            show4:false,
            show5:false,

            user:{},

            project_id:null,
            title:''

        }
    },
    onLoad(params){

        this.project_id = params.project_id
        this.title = params.title
        const readid = uni.getStorageSync('project_id')

        if(readid!=params.project_id){
            uni.setStorageSync('project_id',params.project_id)

            uni.removeStorageSync('contract');
            uni.removeStorageSync('invoices');

            console.log('project_id change ~~');
            
        }

    },
    created(){
       
    },
    methods:{
        reveiviHandle(data){
            this.user = data
            uni.showLoading()
            this.$api.basicSet.searchUser({
                phone:data.phone
            })
            .then(res=>{
                uni.hideLoading()
                if(res.code){
                    this.show1 = false
                    this.show5 = true
                    this.user = res.data.user
                }else{
                    this.show1 = false
                    this.show4 = true
                }
            })
        },
        transferHandle(){

            uni.showLoading()
            
            this.$api.basicSet.Transfer({
                project_id:this.project_id,
                to_user_id:this.user.id || this.user.phone,
            })
            .then(res=>{
                console.log(res);
                if(res.code){
                    uni.showToast({
                        title:'移交成功!'
                    })
                    this.show5 = false
                    uni.removeStorageSync('project_id')
                    uni.removeStorageSync('contract')
                    uni.removeStorageSync('invoices')
                    uni.removeStorageSync('participation')

                    uni.navigateTo({
                        url:'../index/index'
                    })
                }else{
                    uni.showToast({
                        title:res.msg
                    })
                }
                
            })
        }
    },
    components:{
        telInput
    }
}
</script>