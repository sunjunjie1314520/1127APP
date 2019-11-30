<template>
	<view class="container bg-one">
		<view class="invoice">
			<view class="invoice-inform">
				<view class="list-box">
					<view class="titles">
						发票名称
					</view>
					<view class="contact-txt">
						预付款发票
					</view>
				</view>
				<view class="list-box">
					<view class="titles">
						乙方名称
					</view>
					<view class="contact-txt">
						南京市无限活力公司
					</view>
				</view>
				<view class="invoice-inform-list">
					<view class="invoice-list-box">
						<view class="invoice-list-name invoice-list-name-sele">
							发票类型
						</view>
						<view class="invoice-list-sele">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="uni-input">{{array[index]}}</view>
							</picker>
						</view>
					</view>
					<view class="invoice-list-box">
						<view class="invoice-list-name invoice-list-name-sele">
							发票类型
						</view>
						<view class="invoice-list-sele">
							<picker @change="bindPickerChange2" :value="index2" :range="array2">
								<view class="uni-input">{{array2[index2]}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="invoice-inform-list">
					<view class="invoice-list-box">
						<view class="invoice-list-name">
							发票金额
						</view>
						<view class="invoice-list-sele">
							<input type="text" value="" placeholder="请输入金额" />
							<text class="num">万元</text>
						</view>
					</view>
					<view class="invoice-list-box invoice-list-time">
						<view class="invoice-list-name">
							开票日期
						</view>
						<view class="invoice-list-sele">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
			<view class="contract-account">
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
						发票扫描件上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box" @tap="upload()">
							<image src="../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="invoice-button">
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
	            date: currentDate,
				array: ['中国', '美国', '巴西', '日本'],
				array2: ['中国1', '美国1', '巴西1', '日本1'],
				index: 0,
				index2: 0,
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
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.target.value
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
