<template>
	<view class="container bg-one">

        <!-- 标题 -->
		<uni-nav-bar left-icon="back" title="项目详情"></uni-nav-bar>

		<view class="project">
			<view class="project-inform">
				<view class="project-inform-box">
					<view class="project-inform-tit">
						项目名称
					</view>
					<view class="project-inform-inf">
                        <text>{{page.project_name}}</text>
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						项目地址
					</view>
					<view class="project-inform-inf">
                        <text>{{page.project_address}}</text>
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						中标时间
					</view>
					<view class="project-inform-inf">
						<text>{{page.project_get_date}}</text>
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						开工时间
					</view>
					<view class="project-inform-inf">
						<text>{{page.project_start_date}}</text>
					</view>
				</view>
				<view class="project-inform-box">
					<view class="project-inform-tit">
						竣工时间
					</view>
					<view class="project-inform-inf">
						<text>{{page.project_complete_date}}</text>
					</view>
				</view>
			</view>
			<view class="project-input">
				<view class="project-input-tit">
					项目详情
				</view>
				<view class="project-input-col project-inform-inf">
					<text>{{page.project_description}}</text>
				</view>
			</view>
			<view class="project-photo">
				<view class="project-photo-tit">
					现场照片
				</view>

                <view class="project-photo-file">

				</view>

                <view class="pub-showimg">
                    <view class="ul">
                        <view class="li" v-for="item in page.project_img_path" :key="item.id">
                            <image :src="url + item" mode="widthFix"></image>
                        </view>
                    </view>
                </view>
				
			</view>
			<!-- <view class="project-button">
				<button @tap="modifyHandle" type="primary">确定</button>
			</view> -->
		</view>
	</view>
</template>
<script>
    import { serverURL } from "@/tool/common/config.js";
	export default {
	    data() {
	      
	        return {
                url:serverURL,
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
	        
	    },
	    methods: {
            getNetData(){
                this.$api.basicSet.projectDetail(this.page)
                .then(res=>{
                    console.log(res);
                    const project = res.data.project
                    project.project_description = project.project_description || ''
                    this.page = {
                        ...this.page,
                        ...project
                    }
                })
            }
            
	    }
	}
	
</script>


