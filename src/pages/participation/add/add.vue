<template>
	<view class="container bg-one">

		<uni-nav-bar left-icon="back" title="添加参建单位"></uni-nav-bar>

		<view class="participation">
			<view class="participation-inf">
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						单位类别
					</view>
					<view class="participation-inf-txt">
						<input v-model="params.name" disabled type="text" placeholder="请输入单位名称" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						公司名称
					</view>
					<view class="participation-inf-txt">
						<input v-model="page.company_name" type="text" placeholder="请输入公司名称" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						注册资本
					</view>
					<view class="participation-inf-txt">
                        <input v-model="page.company_capital" type="number" placeholder="请输入注册资本" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						办公电话
					</view>
					<view class="participation-inf-txt">
                        <input v-model="page.company_phone" type="number" placeholder="请输入办公电话" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						详细地址
					</view>
					<view class="participation-inf-txt">
						<input v-model="page.company_address" type="text" placeholder="请输入详情地址" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="participation-inf-textarea">
					<view class="participation-inf-tit">
						备注
					</view>
					<view class="participation-inf-txt">
						<textarea v-model="page.company_description" placeholder="请输入备注内容" placeholder-class="placeholder-class" />
					</view>
				</view>
			</view>
			<view class="participation-contact" v-if="true">
				<view class="participation-contact-title">
					<view class="contact-title-txt">
						联系人
					</view>
					<view class="contact-title-func">
						<text @tap="show1=true">添加</text>
						<image src="../../../static/img/ic40.png" mode=""></image>
					</view>
				</view>
				<view class="participation-contact-list">
					<view class="participation-contact-list-inf" v-for="(item,index) in page.company_contacts" :key="index">
						<view class="contact-list-inf-img">
							<image src="../../../static/img/im14.png" mode=""></image>
						</view>
						<view class="contact-list-inf-col">
							<view class="contact-list-inf-name">
								<view class="contact-list-inf-name-fl">
									<text>{{item[0]}}</text>
									<!-- <text class="label">木工</text> -->
								</view>
								<view class="contact-list-inf-name-tel">
									<image src="../../../static/img/ic41.png" mode=""></image>
								</view>
							</view>
							<view class="contact-list-inf-txt">
								{{item[1]}}
							</view>
						</view>
					</view>
					<view class="participation-contact-list-num" v-if="false">
						<view class="list-num-box">
							<text class="tit">交换名片</text>
							<text>1</text>
						</view>
						<view class="list-num-box">
							<text class="tit">总访问</text>
							<text>0</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nulls"></view>
			<view class="participation-submit">
				<button @tap="postLocData" type="primary">确定</button>
			</view>
		</view>

        <!-- 添加 -->
        <view class="alert" v-if="show1">
            <view class="telbox">
                <text @tap="close=show1=false" class="close"></text>
                <text class="h2">手机号输入</text>
                <view class="ul">
                    <view class="li">
                        <text>*</text>
                        <input type="text" v-model="name" placeholder-class="placeholder-class" placeholder="请输入对方姓名">
                    </view>
                    <view class="li">
                        <text>*</text>
                        <input type="number" v-model="phone" placeholder-class="placeholder-class" placeholder="请输入对方手机号码">
                    </view>
                </view>
                <view class="btn" @tap="addHandle">确定添加</view>
            </view>
        </view>
        
	</view>
</template>

<script>
    export default {
        data(){
            return {
                params:{
                    id:'',
                    name:''
                },
                page:{
                    project_id: null, // 项目 id
                    project_company_group_id: null, // 参建单位分组 id
                    company_name: '', // 公司名称
                    company_phone: '', // 办公电话
                    company_address: '', // 公司地址
                    company_capital: '', // 公司注册资本
                    company_longitude: '', // 公司地址经度
                    company_latitude: '', // 公司地址纬度
                    company_description: '', // 备注
                    company_contacts: [] // 联系人 phone
                },
                show1: false,
                name:'',
                phone:''
            }
        },
        onLoad(params){
            this.params = params
            this.page.project_id = uni.getStorageSync('project_id')
            this.page.project_company_group_id = params.id 
        },
        methods:{
            addHandle(){
                var arr = []
                if(this.name !='' &&  this.phone != ''){
                    arr.push(this.name)
                    arr.push(this.phone)
                    this.page.company_contacts.push(arr)
                    this.show1 = false
                    this.name = ''
                    this.phone = ''
                }else{
                    uni.showToast({
                        title:'信息未填写完整',
                        icon:'none'
                    })
                }
                
            },
            postLocData(){
                uni.showLoading()
                this.$api.basicSet.addParticipation(this.page)
                .then(res=>{
                    if(res.code){
                        uni.showToast({
                            title: '添加单位成功'
            　　　　　　　})
                        this.getNetData()
                    }
                })
            },
            getNetData(){
                this.$api.basicSet.allParticipation({project_id:this.page.project_id})
                .then(res=>{
                    uni.setStorageSync('participation',res.data.project_company_groups)
                    uni.navigateBack()
                })
            }
        }
    }
</script>