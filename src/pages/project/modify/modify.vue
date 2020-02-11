<template>
	<view class="container bg-one">

        <!-- 标题 -->
		<uni-nav-bar left-icon="back" title="修改项目"></uni-nav-bar>

		<view class="project">
			<view class="project-inform">
				<view class="project-inform-box">
					<view class="project-inform-tit">
						项目名称
					</view>
					<view class="project-inform-inf">
                        <input placeholder-class="placeholder-class" type="text" v-model="page.project_name" />
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						项目地址
					</view>
					<view class="project-inform-inf">
                        <input placeholder-class="placeholder-class" type="text" v-model="page.project_address" />
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						中标时间
					</view>
					<view class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="page.project_get_date" :start="startDate" :end="endDate" @change="bindDateChange1">
							<view class="uni-input">{{page.project_get_date}}</view>
						</picker>
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						开工时间
					</view>
					<view class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="page.project_start_date" :start="startDate" :end="endDate" @change="bindDateChange2">
							<view class="uni-input">{{page.project_start_date}}</view>
						</picker>
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						竣工时间
					</view>
					<view class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="page.project_complete_date" :start="startDate" :end="endDate" @change="bindDateChange3">
							<view class="uni-input">{{page.project_complete_date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="project-input">
				<view class="project-input-tit">
					项目详情
				</view>
				<view class="project-input-col">
					<textarea v-model="page.project_description" placeholder-class="placeholder-class" placeholder="请输入项目详情" />
				</view>
			</view>
			<view class="project-photo">
				<view class="project-photo-tit">
					现场照片
				</view>

                <view class="project-photo-file">
					<view class="photo-file-box" @tap="uploadImg()">
						<view class="photo-file-img">
							<image src="../../../static/img/im10.png" mode=""></image>
						</view>
						<view class="photo-file-txt">
							（点击拍照或者上传）
						</view>
					</view>
				</view>

                <view class="pub-showimg">
                    <view class="ul">
                        <view class="li" v-for="item in imgList" :key="item.id">
                            <image :src="url + item" mode="widthFix"></image>
                        </view>
                    </view>
                </view>
				
			</view>
			<view class="project-button">
				<button @tap="modifyHandle" type="primary">确定</button>
			</view>
		</view>
	</view>
</template>
<script>
    import { serverURL } from "@/tool/common/config.js";
	export default {
	    data() {
	      
	        return {
                url:serverURL,
                imgList:[],
                page:{
                    project_id:null,
                }
	        }
        },
        onLoad(params){
            this.page.project_id = params.id
            this.getNetData()
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

			uploadImg(){
				this.$api.publib.uploadFile()
                .then(res=>{
                    if(res.code){
                        this.imgList.push(res.data.file_path)
                        this.page.project_img_path = this.imgList
                    }
                })
            },

            getNetData(){
                this.$api.basicSet.projectDetail(this.page)
                .then(res=>{
                    const project = res.data.project
                    project.project_description = project.project_description || ''
                    this.page = {
                        ...this.page,
                        ...project
                    }
                })
            },

            modifyHandle(){
                uni.showLoading()
                this.$api.basicSet.projectModify(this.page)
                .then(res=>{
                    uni.showToast({
                        title:'修改成功!'
                    })
                    this.getPrevNetData()
                })
            },

            getPrevNetData(){
                this.$api.basicSet.MyProjects(this.page)
                .then(res=>{
                    this.projects = res.data
                    uni.setStorageSync('projects',res.data)
                    uni.navigateBack()
                })
            },
	 
	        bindDateChange1: function(e) {
	            this.page.project_get_date = e.target.value
	        },
	        bindDateChange2: function(e) {
	            this.page.project_start_date = e.target.value
	        },
	        bindDateChange3: function(e) {
	            this.page.project_complete_date = e.target.value
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


