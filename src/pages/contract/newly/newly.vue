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
						南京溧水万达智能化工程
					</view>
				</view>
				<view class="contract-inform-box">
					<view class="contract-inform-tit">
						合同编号
					</view>
					<view class="contract-inform-txt">
						<input type="text" value="" placeholder="请输入编号" />
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
									<picker @change="bindPickerChange" :value="index" :range="array">
										<view class="uni-input">{{array[index]}}</view>
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
							<picker @change="bindPickerChange2" :value="index2" :range="array2">
								<view class="uni-input">{{array2[index2]}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="contract-party-list">
					<view class="party-list-name">
						<view class="party-list-name-tit">
							甲方代表
						</view>
						<view class="party-list-name-txt">
							<input type="text" value="" placeholder="请输入姓名" />
						</view>
					</view>
					<view class="party-list-tel">
						<view class="party-list-name-tit">
							联系电话
							<image src="../../static/img/ic42.png" mode=""></image>
						</view>
						<view class="party-list-name-txt">
							<input type="text" value="" placeholder="请输入电话" />
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
							<picker @change="bindPickerChange3" :value="index3" :range="array3">
								<view class="uni-input">{{array3[index3]}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="contract-party-list">
					<view class="party-list-name">
						<view class="party-list-name-tit">
							乙方代表
						</view>
						<view class="party-list-name-txt">
							<input type="text" value="" placeholder="请输入姓名" />
						</view>
					</view>
					<view class="party-list-tel">
						<view class="party-list-name-tit">
							联系电话
							<image src="../../static/img/ic42.png" mode=""></image>
						</view>
						<view class="party-list-name-txt">
							<input type="text" value="" placeholder="请输入电话" />
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
						34322.00万元
					</view>
				</view>
				<view class="list-box">
					<view class="titles">
						签订日期
					</view>
					<view class="contact-txt">
						<view class="uni-list-cell-db">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="list-box list-textarea">
					<view class="titles">
						付款条件
					</view>
					<view class="contact-txt">
						<textarea value="" placeholder="请输入条件" />
					</view>
				</view>
				<view class="list-box list-textarea">
					<view class="titles">
						备注
					</view>
					<view class="contact-txt">
						<textarea value="" placeholder="请输入备注" />
					</view>
				</view>
			</view>
			<view class="contract-file">
				<view class="contract-file-list">
					<view class="file-list-tit">
						合同扫描件上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box" @tap="upload()">
							<image src="../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="contract-file-list">
					<view class="file-list-tit">
						合同清单上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box" @tap="upload()">
							<image src="../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="contract-submit">
				<button type="primary">确定</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				title: 'picker',
				array: ['中国', '美国', '巴西', '日本'],
				array2: ['中国1', '美国1', '巴西1', '日本1'],
				array3: ['中国3', '美国3', '巴西3', '日本3'],
				index: 0,
				index2: 0,
				index3: 0,
				date: currentDate,
				time: '12:01'
			}
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
			upload(){
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                console.log(uploadFileRes.data);
				            }
				        });
				    }
				});
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.target.value
			},
			bindPickerChange3: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index3 = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
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
