<template>
	<view class="container bg-one">
		<!-- 标题 -->
		<uni-nav-bar left-icon="back" title="新建项目"></uni-nav-bar>
		
		<view class="project">
			<view class="project-inform">
				<view class="project-inform-box">
					<div class="project-inform-tit">
						项目名称
					</div>
					<div class="project-inform-inf">
						<input type="text" v-model="name" placeholder="请输入工程项目" />
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						项目地址
					</div>
					<div class="project-inform-inf">
						<input type="text" v-model="address" />
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						中标时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="date1" :start="startDate" :end="endDate" @change="bindDateChange1">
							<view class="uni-input">{{date1}}</view>
						</picker>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						开工时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="date2" :start="startDate" :end="endDate" @change="bindDateChange2">
							<view class="uni-input">{{date2}}</view>
						</picker>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						竣工时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="date3" :start="startDate" :end="endDate" @change="bindDateChange3">
							<view class="uni-input">{{date3}}</view>
						</picker>
					</div>
				</view>
			</view>
			<view class="project-input">
				<view class="project-input-tit">
					项目详情
				</view>
				<view class="project-input-col">
					<textarea v-model="bid_time" placeholder="请输入项目详情" />
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
				<button type="primary" @tap="register">确定</button>
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
				name:'南京溧水万达智能化工程',
				address:'6465465456',
	            date1: currentDate,
	            date2: currentDate,
	            date3: currentDate,
				bid_time:''
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
			register(){
				this.$api.project({
					"project_name":this.name,
					"project_address":this.address,
					"project_longitude":this.date1,
					// "project_latitude":'1052',
					// "project_radius":'1052',
					// "project_get_date":'1052',
					// "project_start_date":'1052',
					// "project_complete_date":'1052',
					// "project_description":'1052',
				})
				.then(res=>{
					console.log(res);
				})
			},
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

	        bindDateChange1: function(e) {
	            this.date1 = e.target.value
	        },
			bindDateChange2: function(e) {
	            this.date2 = e.target.value
	        },
			bindDateChange3: function(e) {
	            this.date3 = e.target.value
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


