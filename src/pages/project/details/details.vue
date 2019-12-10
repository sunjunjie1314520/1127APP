<template>
	<view class="container bg-one">

        <!-- 标题 -->
		<uni-nav-bar left-icon="back" title="项目详情"></uni-nav-bar>

		<view class="project">
			<view class="project-inform">
				<view class="project-inform-box">
					<div class="project-inform-tit">
						项目名称
					</div>
					<div class="project-inform-inf">
						南京溧水万达智能化工程
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						项目地址
					</div>
					<div class="project-inform-inf">
						南京市溧水区万达广场
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						中标时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						开工时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						竣工时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</div>
				</view>
			</view>
			<view class="project-input">
				<view class="project-input-tit">
					项目详情
				</view>
				<view class="project-input-col">
					<textarea value="" placeholder="请输入项目详情" />
				</view>
			</view>
			<view class="project-photo">
				<view class="project-photo-tit">
					现场照片
				</view>
				<view class="project-photo-file">
					<view class="photo-file-box" @tap="upload()">
						<view class="photo-file-img">
							<image src="../../static/img/im10.png" mode=""></image>
						</view>
						<view class="photo-file-txt">
							（点击拍照或者上传）
						</view>
					</view>
				</view>
			</view>
			<view class="project-button">
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


