<template>
	<view class="container bg-one">

        <!-- 标题 -->
        <uni-nav-bar title="新建合同" left-icon="back"></uni-nav-bar>

		<view class="contract">
			<view class="contract-inform">
				<view class="contract-inform-box">
					<view class="contract-inform-tit">
						合同名称
					</view>
					<view class="contract-inform-txt">
						<input type="text"
                        placeholder-class="placeholder-class"
                        placeholder="请输入合同名称"
                        v-model="page.contract_name">
					</view>
				</view>
				<view class="contract-inform-box">
					<view class="contract-inform-tit">
						合同编号
					</view>
					<view class="contract-inform-txt">
						<input type="number"
                        placeholder="请输入编号"
                        placeholder-class="placeholder-class"
                        v-model="page.contract_number" />
					</view>
				</view>
				<view class="contract-inform-box">
					<view class="contract-inform-tit">
						合同类型
					</view>
					<view class="contract-inform-txt">
						<view class="uni-list">
							<view class="uni-list-cell">
								<view class="uni-list-cell-db">
									<picker
                                    @change="bindPickerChange" :value="contract_kind_index" :range="array">
										<view :class="['uni-input',{'select-active':!contract_kind_index}]">
                                            {{array[contract_kind_index]}}
                                        </view>
									</picker>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="contract-party-a">
				<view class="list-box">
					<view class="titles">
						甲方单位
					</view>
					<view class="contact-txt">
						<view class="uni-list-cell-db">
							<input type="text" placeholder-class="placeholder-class" placeholder="请输入单位" v-model="page.party_A_company">
						</view>
					</view>
				</view>
				<view class="contract-party-list">
					<view class="party-list-name">
						<view class="party-list-name-tit">
							甲方代表
						</view>
						<view class="party-list-name-txt">
							<input
                            type="text"
                            v-model="page.party_A_person"
                            placeholder="请输入姓名"
                            placeholder-class="placeholder-class"
                             />
						</view>
					</view>
					<view class="party-list-tel">
						<view class="party-list-name-tit">
							联系电话
							<image src="../../../static/img/ic42.png" mode=""></image>
						</view>
						<view class="party-list-name-txt">
							<input
                            type="number"
                            v-model="page.party_A_phone"
                            placeholder-class="placeholder-class"  placeholder="请输入电话" />
						</view>
					</view>
				</view>
			</view>
			<view class="contract-party-a">
				<view class="list-box">
					<view class="titles">
						乙方单位
					</view>
					<view class="contact-txt">
						<view class="uni-list-cell-db">
							<input type="text"
                            placeholder-class="placeholder-class"
                            placeholder="请输入单位"
                            v-model="page.party_B_company">
						</view>
					</view>
				</view>
				<view class="contract-party-list">
					<view class="party-list-name">
						<view class="party-list-name-tit">
							乙方代表
						</view>
						<view class="party-list-name-txt">
							<input type="text"
                            placeholder-class="placeholder-class"
                            v-model="page.party_B_person"
                            placeholder="请输入姓名" />
						</view>
					</view>
					<view class="party-list-tel">
						<view class="party-list-name-tit">
							联系电话
							<image
                            src="../../../static/img/ic42.png"
                            mode="">
                            </image>
						</view>
						<view class="party-list-name-txt">
							<input
                            type="number"
                            placeholder-class="placeholder-class"
                            v-model="page.party_B_phone"
                            placeholder="请输入电话"
                            />
						</view>
					</view>
				</view>
			</view>
			<view class="contract-account">
				<view class="list-box">
					<view class="titles">
						合同金额
					</view>
					<view class="contact-txt">
						<input
                            type="number"
                            placeholder-class="placeholder-class"
                            v-model="page.contract_money"
                            placeholder="请输入合同金额"
                            />
					</view>
				</view>
				<view class="list-box">
					<view class="titles">
						签订日期
					</view>
					<view class="contact-txt">
						<view class="uni-list-cell-db">
							<picker mode="date"
                            :value="page.contract_sign_date"
                            :start="startDate"
                            :end="endDate"
                            @change="bindDateChange"
                            >
							    <view class="uni-input">{{page.contract_sign_date}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="list-box list-textarea">
					<view class="titles">
						付款条件
					</view>
					<view class="contact-txt">
						<textarea
                        v-model="page.condition"
                        placeholder-class="placeholder-class"
                        placeholder="请输入条件" />
					</view>
				</view>
				<view class="list-box list-textarea">
					<view class="titles">
						备注
					</view>
					<view class="contact-txt">
						<textarea
                        placeholder="请输入备注"
                        placeholder-class="placeholder-class"
                        v-model="page.contract_description"
                        />
					</view>
				</view>
			</view>
			<view class="contract-file">
				<view class="contract-file-list">
					<view class="file-list-tit">
						合同电子文本上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box"
                        @click="upload1()">
							<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="contract-file-list">
					<view class="file-list-tit">
						合同扫描件上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box"
                        @tap="upload2()">
							<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="contract-file-list">
					<view class="file-list-tit">
						合同清单上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box"
                        @tap="upload3()">
							<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="contract-submit">
				<button @tap="postLocData" type="primary">确定</button>
			</view>
		</view>
	</view>
</template>
<script>
    import { serverURL } from "../../../tool/common/config.js";
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
                page:{
                    project_id:null, // 项目 id
                    contract_name :'', // 合同名称
                    contract_number:'', // 合同编号
                    contract_kind:'', // 合同类别
                    party_A_company:'', // 甲方单位
                    party_A_person :'', // 甲方代表
                    party_A_phone :'', // 甲方联系电话
                    party_B_company :'', // 乙方单位
                    party_B_phone :'', // 乙方联系电话
                    party_B_person  :'', // 乙方代表
                    contract_money :'', // 合同金额
                    contract_sign_date :currentDate, // 合同签订日期
                    contract_description :'', // 备注
                    condition:'', // 付款条件

                    contract_file_path :[], // 合同文件
                    contract_scan_img_path :[], // 合同扫描件
                    contract_list_path :[] // 合同清单文件

                },
                // 合同类型
                array: ['请选择合同类型', '工程合同', '分包合同', '采购合同', '租赁合同'],
                contract_kind_index:0,
                url:serverURL
			}
        },
        onLoad(){
            this.page.project_id = uni.getStorageSync('project_id')
        },
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {

			upload1(){
                this.$api.publib.uploadFile()
                .then(res=>{
                    console.log(res);
                    if(res.code){
                        this.page.contract_file_path.push(res.data.file_path)
                    }
                })
            },

			upload2(){
                this.$api.publib.uploadFile()
                .then(res=>{
                    console.log(res);
                    if(res.code){
                        this.page.contract_scan_img_path.push(res.data.file_path)
                    }
                })
            },

			upload3(){
                this.$api.publib.uploadFile()
                .then(res=>{
                    console.log(res);
                    if(res.code){
                        this.page.contract_list_path.push(res.data.file_path)
                    }
                })
            },            

            postLocData(){
                uni.showLoading()
                this.$api.basicSet.newContract(this.page)
                .then(res=>{
                    console.log(res);
                    if(res.code){
                        uni.showToast({
                            'title':'创建合同成功'
                        })
                        this.getPrevNetData()
                    }else{
                        uni.showToast({
                            'title':res.msg
                        })
                    }
                })
            },

            getPrevNetData(){
                this.$api.basicSet.allContract({project_id:this.page.project_id})
                .then(res=>{
                    uni.setStorageSync('contract',res.data.project_contracts)
                    uni.navigateBack()
                })
            },

			bindPickerChange: function(e) {
                this.contract_kind_index = e.target.value
                this.page.contract_kind = this.array[e.target.value]
            },
            
			bindDateChange: function(e) {
				this.page.contract_sign_date = e.target.value
            },
            
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>
