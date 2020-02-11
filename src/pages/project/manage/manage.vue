<template>
	<view class="container bg-three">

		<uni-nav-bar title="项目管理">
			<navigator hover-class="hover" url="../newly/newly" class="right-btn" slot="right">新建</navigator>
		</uni-nav-bar>
		<view class="management-tab">
            <text @tap="toggleTabs" id="1" :class="{active:tab_index==1}">我的项目</text>
            <text @tap="toggleTabs" id="2" :class="{active:tab_index==2}">参与项目</text>
        </view>
		<view class="management">
			<uni-refresh>
			<view class="swiper">
                <view class="management-list" v-if="tab_index==1">
                    <template v-if="projects.my_projects.length > 0">
                            <view class="management-list-box pub-slide"
                            v-for="(item,index) in projects.my_projects"
                            :key="item.id"
                            @touchstart="start"
                            @touchmove.prevent="move"
                            @touchend="end"
                            :id="index"
                            :data-isopen="item.isopen"
                            :style="{transform:`translate3d(${item.move_x_resut},0,0)`,transitionDuration:`${delay}ms`}"
                            >
                                <navigator class="flex-left-wrap" hover-class="hover-class" :url="'../../company/company?project_id=' + item.id + '&title=' + item.project_name">
                                    <view class="management-list-img pub-img-back">
                                        <template v-if="item.project_img_path">
                                            <image :src="http + item.project_img_path[0]" mode=""></image>
                                        </template>
                                    </view>
                                    <view class="management-list-inf">
                                        <view class="management-list-inf-txt">
                                            <view class="management-list-inf-name">
                                                <text>{{item.project_name}}</text>
                                                <image src="../../../static/img/im12.png" mode=""></image>
                                            </view>
                                        </view>
                                        <view class="management-list-addr">
                                            <image src="../../../static/img/im13.png" mode=""></image>
                                            <text>项目地址：{{item.project_address}}</text>
                                        </view>
                                        <view class="management-list-time">
                                            <view class="list-time-txt">
                                                <text class="tit">开工：</text>
                                                <text>{{item.project_start_date}}</text>
                                            </view>
                                            <view class="list-time-txt">
                                                <text class="tit">竣工：</text>
                                                <text>{{item.project_complete_date}}</text>
                                            </view>
                                        </view>
                                    </view>
                                </navigator>
                                <view class="flex-right-wrap">
                                    <view @touchstart.stop="getEditId" :data-id="item.id" :data-index="index" class="edit c1">编辑</view>
                                </view>
                               
                            </view>
                    </template>
                    <template v-else>
                        <view class="nodata">还没有数据~~</view>
                    </template>
                </view>
                <view class="management-list" v-if="tab_index==2">
                    <template>
                        <view class="nodata">还没有数据~~</view>
                    </template>
                </view>
			</view>
            </uni-refresh>
		</view>

        <uni-footer index="2"></uni-footer>

	</view>
</template>
<script>
    import { serverURL } from "../../../tool/common/config";
	export default {
		data() {
			return {
                tab_index:1,

                projects:{
                    my_projects:[],
                    join_projects:[]
                },

                http: serverURL,

                start_x: 0,
                move_x: 0,
                delay:300,
                move_x_resut:0
			}
		},
        onShow(){
            this.readLocData()
        },
		methods: {
            onPullDownRefresh(){
                setTimeout(() => {
                    uni.stopPullDownRefresh()
                    this.getNetData()
                }, 1500);
            },

			toggleTabs(e){
                this.tab_index = e.currentTarget.id
            },

            readLocData(){
                var data = uni.getStorageSync('projects')
            
                if(data){
                    this.projects = data
                }else{
                    this.getNetData()  
                }
            },
           
            getNetData(){
                this.$api.basicSet.MyProjects()
                .then(res=>{
                    this.projects = res.data
                    uni.setStorageSync('projects',res.data)
                })
            },

            getEditId(e){
                const {id, index} = e.currentTarget.dataset
                this.$set(this.projects.my_projects[index],'move_x_resut','0upx')
                uni.navigateTo({
                    url:'../modify/modify?id=' + id
                })
            },

            start(e){
                this.start_x = e.changedTouches[0].clientX
            },
            move(e){
                this.move_x = e.changedTouches[0].clientX - this.start_x
            },
            end(e){
                const { isopen } = e.currentTarget.dataset
                if(this.move_x < -75 && isopen==undefined || isopen=='0'){
                    this.$set(this.projects.my_projects[e.currentTarget.id],'move_x_resut','-150upx')
                    this.$set(this.projects.my_projects[e.currentTarget.id],'isopen',1)
                }else if(this.move_x < -75 && isopen=='0'){
                    this.$set(this.projects.my_projects[e.currentTarget.id],'move_x_resut','0upx')
                    this.$set(this.projects.my_projects[e.currentTarget.id],'isopen',0)
                }
                if(this.move_x > 0){
                    this.$set(this.projects.my_projects[e.currentTarget.id],'move_x_resut','0upx')
                    this.$set(this.projects.my_projects[e.currentTarget.id],'isopen',0)
                }
            }
        }
	}
</script>