<template>
	<view class="container bg-three">

		<uni-nav-bar title="项目管理">
			<navigator v-if="tab_index==1" hover-class="hover" url="../newly/newly" class="right-btn" slot="right">新建</navigator>
		</uni-nav-bar>

		<view class="management-tab">
            <text @tap="toggleTabs" id="1" :class="{active:tab_index==1}">我的项目</text>
            <text @tap="toggleTabs" id="2" :class="{active:tab_index==2}">参与项目</text>
        </view>

		<view class="management">
			<uni-refresh @shua="getNetData">
                <view class="swiper">
                    <view class="management-list" v-if="tab_index==1">
                        <template v-if="!status">
                            <view class="status">加载中...</view>
                        </template>
                        <template v-else-if="projects.my_projects.length > 0">
                            <uni-action
                            class="management-list-box"
                            v-for="(item,index) in projects.my_projects"
                            :item=item
                            :index=index
                            :key="item.id"
                            :moveHandle="moveDataMy"
                            >
                                <navigator
                                hover-class="hover-class"
                                :url="'../../company/company?project_id=' + item.id + '&title=' + item.project_name"
                                >
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
                                <block slot="right">
                                    <view @touchstart.prevent="getEditId" :data-id="item.id" :data-index="index" class="edit c1">编辑</view>
                                </block>
                            </uni-action>
                        </template>
                        <template v-else>
                            <view class="nodata">还没有数据~~</view>
                        </template>
                    </view>
                    <view class="management-list" v-if="tab_index==2">
                        <template v-if="projects.join_projects.length > 0">
                            <uni-action
                            class="management-list-box"
                            v-for="(item,index) in projects.join_projects"
                            :item="item"
                            :index="index"
                            :key="item.id"
                            :moveHandle="moveDataJoin">
                              
                                <view class="left-wrap"
                                @tap="selectProject"
                                :data-index="index"
                                >
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
                                                <view class="management-list-name-fr">
                                                    邀请
                                                </view>
                                            </view>
                                        </view>
                                        <view class="management-list-addr">
                                            <image src="../../../static/img/1755a_30x27.png" mode=""></image>
                                            <text>施工单位：{{item.project_address}}</text>
                                        </view>
                                        <view class="management-list-time">
                                            <view class="list-time-txt">
                                                <text class="tit">项目角色：</text>
                                                <text>{{item.project_manager}}</text>
                                            </view>
                                            <view class="list-time-txt">
                                                <text class="tit">邀请人：</text>
                                                <text>{{item.project_manager}}</text>
                                            </view>
                                        </view>
                                    </view>
                                </view>
                                <block slot="right">
                                    <view @touchstart.prevent="getEditId" :data-id="item.id" :data-index="index" class="edit c1">编辑</view>
                                </block>
                            </uni-action>
                        </template>
                        <template v-else>
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


                http: serverURL,

                start_x: 0,
                move_x: 0,
                delay:300,
                move_x_resut:0
			}
		},
        onLoad(){
            const { projects_status } = this.$store.state.basicSet
            if (!projects_status) this.getNetData(true)
        },
        computed:{
            projects(){
                const { projects } = this.$store.state.basicSet
                if(JSON.stringify(projects) != '{}'){
                    return projects
                }else{
                    return {
                        my_projects:[],
                        join_projects:[]
                    }
                }
            },
            status(){
                const { projects_status } = this.$store.state.basicSet
                return projects_status
            }
        },
		methods: {
            moveDataMy(index,move,open){
                this.$store.commit('my_projects_move',{data:'my_projects',index,move,open,all:true});
            },
            moveDataJoin(index,move,open){
                this.$store.commit('my_projects_move',{data:'join_projects',index,move,open,all:true});
            },

            selectProject(e){
                console.log(e);
                uni.navigateTo({
                    url:'../../_partake/index/index'
                })
            },
			toggleTabs(e){
                this.tab_index = e.currentTarget.id
                this.$store.commit('my_projects_move',{data:'my_projects',all:false});
                this.$store.commit('my_projects_move',{data:'join_projects',all:false});
            },

            getNetData(v){
                console.log('Load Data!');
                if(v){
                    uni.showLoading({
                        title:'加载中',
                        mask:true,
                    })
                }
                this.$store.dispatch('projects')
            },

            getEditId(e){
                const {id, index} = e.currentTarget.dataset
                this.$store.commit('my_projects_move',{data:'my_projects',all:false});
                this.$store.commit('my_projects_move',{data:'join_projects',all:false});
                uni.navigateTo({
                    url:'../modify/modify?id=' + id
                })
            }
        }
	}
</script>