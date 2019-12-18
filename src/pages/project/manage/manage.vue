<template>
	<view class="container bg-three">

		<uni-nav-bar left-icon="back" title="项目管理">
			<navigator url="../newly/newly" class="right-btn" slot="right">新建</navigator>
		</uni-nav-bar>
		
		<view class="management">
            
			<view class="management-tab">
				<text @tap="toggle" id="1" :class="{active:tab_index==1}">我的项目</text>
				<text @tap="toggle" id="2" :class="{active:tab_index==2}">参与项目</text>
			</view>
			
			<view class="swiper">
                <view class="management-list" v-if="tab_index==1">
                    <template v-if="projects.my_projects.length > 0">
                            <view class="management-list-box" @touchstart="getEditId" v-for="item in projects.my_projects" :key="item.id" :data-id=item.id>
                                <uni-swipe-action>
                                    <uni-swipe-action-item class="action" :data-id=item.id @tap="onClick" :options="options">
                                        <view class="management-list-img">
                                            <image src="../../../static/img/im11.png" mode=""></image>
                                        </view>
                                        <view class="management-list-inf">
                                            <view class="management-list-inf-txt">
                                                <view class="management-list-inf-name">
                                                    <text>{{item.project_name}}</text>
                                                    <image src="../../../static/img/im12.png" mode=""></image>
                                                </view>
                                                <view class="management-list-inf-link">
                                                    <!-- <navigator url="../details/details">查看</navigator> -->
                                                </view>
                                            </view>
                                            <view class="management-list-addr">
                                                <image src="../../../static/img/im13.png" mode=""></image>
                                                <text>项目地址：{{item.project_address}}</text>
                                            </view>
                                            <view class="management-list-time">
                                                <view class="list-time-txt">
                                                    <text class="tit">开工：</text>
                                                    <text>2019-10-5</text>
                                                </view>
                                                <view class="list-time-txt">
                                                    <text class="tit">竣工：</text>
                                                    <text>2019-11-15</text>
                                                </view>
                                            </view>
                                        </view>
                                    </uni-swipe-action-item>
                                </uni-swipe-action>
                            </view>
                    </template>
                    <template v-else>
                        <view class="nodata">还没有数据~~</view>
                    </template>
                </view>
                <view class="management-list" v-if="tab_index==2">
                    <template v-if="projects.join_projects.length > 0">
                        <view class="management-list-box" v-for="item in projects.join_projects" :key="item.id">
                            <view class="management-list-img">
                                <image src="../../../static/img/im11.png" mode=""></image>
                            </view>
                            <view class="management-list-inf">
                                <view class="management-list-inf-txt">
                                    <view class="management-list-inf-name">
                                        <text>{{item.project_name}}</text>
                                        <image src="../../../static/img/im12.png" mode=""></image>
                                    </view>
                                    <view class="management-list-inf-link">
                                        <navigator url="../details/details?id=item.id">查看</navigator>
                                    </view>
                                </view>
                                <view class="management-list-addr">
                                    <image src="../../../static/img/im13.png" mode=""></image>
                                    <text>项目地址：{{item.project_address}}</text>
                                </view>
                    
                                <view class="management-list-time">
                                    <view class="list-time-txt">
                                        <text class="tit">中标：</text>
                                        <text>2019-10-5</text>
                                    </view>
                                    <view class="list-time-txt">
                                        <text class="tit">开工：</text>
                                        <text>2019-11-15</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </template>
                    <template v-else>
                        <view class="nodata">还没有数据~~</view>
                    </template>
                </view>
			</view>
	
		</view>
	</view>
</template>
<script>
    import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
    import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		data() {
			return {
                tab_index:1,
                projects:{
                    my_projects:[],
                    join_projects:[]
                },

                id:null,
                options:[
                    {
                        text: '编辑',
                        style: {
                            backgroundColor: '#ff7171'
                        }
                    }
                ]
			}
		},
		onLoad() {
			this.getPageData()
		},
		methods: {
			toggle(e){
                this.tab_index = e.currentTarget.id
                this.getPageData()
            },
            getPageData(){
                this.$api.myprojects({})
                .then(res=>{
                    console.log(res.data);
                    this.projects = res.data
                })
            },
           
            onClick(e){
                uni.navigateTo({
                    url:'../details/details?id=' + this.id
                })
            },
            change(open,a){
                console.log('当前开启状态：'+ open)
            },
            getEditId(e){
                var id = e.currentTarget.dataset.id
                this.id = id
            }
        },
        components: {
            uniSwipeAction,
            uniSwipeActionItem
        }
	}
</script>