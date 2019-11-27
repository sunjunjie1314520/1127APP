<template>
	<view class="container bg-one">
		<view class="new">
			<view class="new-task">
				<view class="new-task-list">
					<view class="task-list-tit">
						任务名称
					</view>
					<view class="task-list-inform">
						<input type="text" value="" placeholder="南京溧水万达室内装修工程" />
					</view>
				</view>
				<view class="new-task-list">
					<view class="task-list-tit">
						指派人
					</view>
					<view class="task-list-inform">
						<input type="text" value="默认人" placeholder="" />
					</view>
				</view>
				<view class="new-task-list">
					<view class="task-list-tit">
						任务位置
					</view>
					<view class="task-list-inform">
						<input type="text" value="" placeholder="请输入地址" />
					</view>
				</view>
				<view class="new-task-list">
					<view class="task-list-tit">
						完成时间
					</view>
					<view class="task-list-inform task-list-inform-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="new-object">
				<view class="new-object-list">
					<view class="object-list-tit">
						任务实施人
					</view>
					<view class="object-list-col">
						<view class="object-list-box">
							<image src="../../../static/img/d67fe_97x97.png" mode=""></image>
						</view>
						<view class="object-list-box">
							<image src="../../../static/img/d67fe_97x97.png" mode=""></image>
						</view>
						<view class="object-list-box">
							<image src="../../../static/img/d67fe_97x97.png" mode=""></image>
						</view>
						<view class="object-list-input"  @tap="upload()">
							<image src="../../../static/img/b2fa1_40x40.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="new-object-photo">
					<view class="object-list-tit">
						现场照片
					</view>
					<view class="object-list-file">
						<view class="list-file-box" @tap="upload()">
							<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="new-object-inf">
					<view class="object-inf-tit">
						任务详情
					</view>
					<view class="object-inf-col">
						<textarea value="" placeholder="请输入任务详情" />
					</view>
				</view>
			</view>
			<view class="new-submit">
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
	            date: currentDate,
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
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },
	        bindTimeChange: function(e) {
	            this.time = e.target.value
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
