<template>
    <view class="container">

        <uni-nav-bar
        left-icon="back"
        title="权限管理"
        >
        </uni-nav-bar>

        <view class="juri-manage">
            <view class="w">
                <view class="search">
                    <text class="ico-sea"></text>
                    <input type="text"
                    placeholder="请输入人员姓名查找"
                    placeholder-class="placeholder-class"
                    v-model="search"
                    >
                </view>
            </view>
            <view class="per-wrap">
                <view class="w">
                    <view class="h2">项目人员(36)</view>
                </view>
                <view class="ul">
                        <view class="li"
                        v-for="(item,index) in list"
                        :key="item.id"
                        >
                            <view class="w">
                                <view class="fl" @tap="toggleHandle" :data-index="index">
                                    <view class="type-name">
                                        <text class="h3">{{item.group_name}}</text>
                                    </view>
                                    <view class="total-per">
                                        成员<text class="num">{{item.project_persons.length}}</text>人
                                    </view>
                                </view>
                            </view>

                            <view class="show-item" v-if="item.isshow">
                                <view class="pub-slide"
                                 v-for="(item1,index1) in item.project_persons" :key="item1.id"
                                @touchstart="start"
                                @touchmove.prevent="move"
                                @touchend="end"
                                :id="index"
                                :data-isopen="item.isopen"
                                :data-nums="item.group_name=='项目所有者' ? 0:2"
                                :style="{transform:`translate3d(${item.move_x_resut},0,0)`,transitionDuration:`${delay}ms`}"
                                >
                                    <view class="per-item flex-left-wrap">
                                        <template v-if="item1.user">
                                            <view class="pic">
                                                <image :src="item1.user.avatar" mode=""></image>
                                            </view>
                                            <view class="user-box">
                                                <view class="name-wrap">
                                                    <text class="name">{{item1.user_name || '姓名'}}</text>
                                                    <text class="tel">{{item1.user.phone || '手机号未填写'}}</text>
                                                </view>
                                                <text class="comp-xinzi">
                                                    <text class="t1">薪资：<text class="c">{{item1.salary}}</text></text>
                                                    <text class="t1">计薪方式：<text class="c">{{item1.salary_method}}</text></text>
                                                </text>
                                                <text v-if="item1.user.user_company" class="comp-name">{{item1.user.user_company}}</text>
                                            </view>
                                        </template>
                                        <template v-else>
                                            <view class="pic">
                                                
                                            </view>
                                            <view class="user-box">
                                                <view class="name-wrap">
                                                    <text class="name">{{item1.user_name || '姓名'}}</text>
                                                    <text class="tel">{{item1.user_id || item1.salary_method || '手机号未填写'}}</text>
                                                </view>
                                                <text class="comp-xinzi">
                                                    <text class="t1">薪资：<text class="c">{{item1.salary}}</text></text>
                                                    <text class="t1">计薪方式：<text class="c">{{item1.salary_method}}</text></text>
                                                </text>
                                                <text class="comp-name">{{item1.status}}</text>
                                            </view>
                                        </template>
                                    </view>

                                    <view class="flex-right-wrap">

                                        <view
                                        @touchstart.stop="seeLook" 
                                        :data-index="index"
                                        :data-project_id="item1.project_id"
                                        :data-id="item1.id"
                                        class="but-two c2"
                                        >
                                            <text class="uni-input">权限查看</text>
                                        </view>

                                        <view
                                        @touchstart.stop="seeSet" 
                                        :data-data_index="index"
                                        :data-permission_index="index1"
                                        :data-project_id="item1.project_id"
                                        :data-project_person_id="item1.id"
                                        class="but-two c3"
                                        >
                                            <text class="uni-input">权限设置</text>
                                        </view>

                                    </view>
                                </view>
                            </view>
                        </view>
                </view>
            </view>
        </view>

              

    </view>
</template>

<script>

export default {
    data(){
        return{
            search:'',

            list:[],
        
            project_id:null,

            start_x: 0,
            move_x: 0,
            delay:300,
            move_x_resut:0
        }
    },
    onLoad(){
        this.project_id = uni.getStorageSync('project_id')
        this.getNetData()
    },
    methods:{

        toggleHandle(e){
            let dex = e.currentTarget.dataset.index
            this.$set(this.list[dex],'isshow',!this.list[dex].isshow)
        },
    
        // 网络数据
        getNetData(){
            this.$api.basicSet.Person({
                project_id:this.project_id
            })
            .then(res=>{
                console.log(res.data.project_person_groups);
                this.list = res.data.project_person_groups
                uni.setStorageSync('jurisdiction',res.data.project_person_groups)
            })
        },

        seeLook(e){
            uni.showToast({
                title:'页面未定义'
            })
        },

        seeSet(e){
            const {data_index, permission_index, project_id, project_person_id} = e.currentTarget.dataset
            uni.navigateTo({
                url:`../modify/modify?data_index=${data_index}&permission_index=${permission_index}&project_id=${project_id}&project_person_id=${project_person_id}`
            })
        },

        start(e){
            this.start_x = e.changedTouches[0].clientX
        },
        move(e){
            this.move_x = e.changedTouches[0].clientX - this.start_x
        },
        end(e){
            const { isopen, nums} = e.currentTarget.dataset

            if(this.move_x < -75 && isopen==undefined || isopen=='0'){
                this.$set(this.list[e.currentTarget.id],'move_x_resut',-93*nums + 'upx')
                this.$set(this.list[e.currentTarget.id],'isopen',1)
            }else if(this.move_x < -75 && isopen=='0'){
                this.$set(this.list[e.currentTarget.id],'move_x_resut','0upx')
                this.$set(this.list[e.currentTarget.id],'isopen',0)
            }
            if(this.move_x > 0){
                this.$set(this.list[e.currentTarget.id],'move_x_resut','0upx')
                this.$set(this.list[e.currentTarget.id],'isopen',0)
            }
        }
    },
    components:{
        
    }
}
</script>

<style>

</style>