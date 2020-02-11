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
						<input type="text" v-model="page.project_name" placeholder="请输入工程项目" placeholder-class="placeholder-class"/>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						项目地址
					</div>
					<div class="project-inform-inf">
						<input type="text" v-model="page.project_address" placeholder="请输入项目地址" placeholder-class="placeholder-class"/>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						项目经理
					</div>
					<div class="project-inform-inf">
						<input type="text" v-model="page.project_manager" placeholder="请输入项目经理" placeholder-class="placeholder-class"/>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						中标时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="page.project_get_date"  @change="bindDateChange1">
							<view class="uni-input">{{page.project_get_date}}</view>
						</picker>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						开工时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="page.project_start_date"  @change="bindDateChange2">
							<view class="uni-input">{{page.project_start_date}}</view>
						</picker>
					</div>
				</view>
				<view class="project-inform-box">
					<div class="project-inform-tit">
						竣工时间
					</div>
					<div class="project-inform-inf task-inform-picker">
						<picker mode="date" :value="page.project_complete_date" @change="bindDateChange3">
							<view class="uni-input">{{page.project_complete_date}}</view>
						</picker>
					</div>
				</view>
			</view>
			<view class="project-input">
				<view class="project-input-tit">
					项目详情
				</view>
				<view class="project-input-col">
					<textarea v-model="page.project_description" placeholder="请输入项目详情" placeholder-class="placeholder-class"/>
				</view>
			</view>
			<view class="project-photo">
				<view class="project-photo-tit">
					现场照片
				</view>

                <view class="pub-load">
                    <view class="pub-picture-wrap">
                        <view class="box" v-for="item in imgList" :key="item.id">
                            <image :src="url + item" mode="widthFix"></image>
                            <text>删除</text>
                        </view>
                        <view class="box" @tap="uploadImg">
                            
                        </view>
                    </view>
                </view>
			</view>
			<view class="project-button">
				<button type="primary" @tap="postLocData">确定</button>
			</view>
		</view>
	</view>
</template>
<script>
    import { serverURL } from "@/tool/common/config.js";
    import assist from "../../../tool/utils/play";
	export default {
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
	        return {
				url:serverURL,
                page:{
                    project_name:'', // 项目名称
                    project_address:'',
                    project_manager :'',
                    project_get_date :currentDate,
                    project_start_date :currentDate,
                    project_complete_date :currentDate,
                    project_description :'',
                    project_img_path :[]
                },
                imgList:[],
	        }
	    },
	    methods: {

            getPrevNetData(){
                this.$api.basicSet.MyProjects(this.page)
                .then(res=>{
                    this.projects = res.data
                    uni.setStorageSync('projects',res.data)
                    uni.navigateBack()
                })
            },

			postLocData(){

                var project_get_date= Date.parse(this.page.project_get_date)
                var project_start_date= Date.parse(this.page.project_start_date)
                var project_complete_date= Date.parse(this.page.project_complete_date)
                
                // console.log(project_get_date);
                // console.log(project_start_date);
                // console.log(project_complete_date);
                
                const {project_name, project_address,project_manager} = this.page

                const yz = [
                    {
                        type:'null',
                        val:project_name,
                        msg:'请输入项目名称'
                    },
                    {
                        type:'null',
                        val:project_address,
                        msg:'请输入项目地址'
                    },
                    {
                        type:'null',
                        val:project_manager,
                        msg:'请输入项目经理'
                    },
                ]

                assist.ver(yz)

                if(project_start_date <= project_get_date){
                    uni.showToast({
                        title:'开工时间不能小于中标时间',
                        icon:'none'
                    })
                    return ;
                }else if(project_complete_date <= project_start_date || project_complete_date <= project_get_date){
                    uni.showToast({
                        title:'竣工时间不能小于中标时间或开工时间',
                        icon:'none'
                    })
                    return ;
                }

                uni.showLoading()
				this.$api.basicSet.NewProject(this.page)
				.then(res=>{
                    if(res.code){
                        uni.showToast({
                            'title':'项目创建成功'
                        })
                        this.getPrevNetData()
                        
                    }else{
                        uni.showToast({
                            'title':res.msg
                        })
                    }
				})
            },
            
			uploadImg(){
				this.$api.publib.uploadFile()
                .then(res=>{
                    if(res.code){
                        this.imgList.push(res.data.file_path)
                        this.page.project_img_path = this.imgList
                    }
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


