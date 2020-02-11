<template>
    <view class="container">

        <uni-nav-bar left-icon="back" title="人员管理"></uni-nav-bar>

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
                    <view class="h2">项目人员(36) <text class="fr" @tap="show2=true">创建分组</text></view>
                </view>
                <view class="ul">
                        <view class="li"
                        v-for="(item,index) in list"
                        :key="item.id"
                        >
                            <view class="w">
                                <view class="fl" @tap="toggleHandle" :data-index="index">
                                    <view class="type-name">
                                        <template v-if="item.group_name=='项目所有者'">
                                            <text class="h3">{{item.group_name}}</text>
                                        </template>
                                        <template v-else>
                                            <text class="h3" @tap="modifyHandle" :data-id="item.id">{{item.group_name}}</text>
                                        </template>
                                    </view>
                                    <view class="total-per">
                                        成员<text class="num">{{item.project_persons.length}}</text>人
                                    </view>
                                </view>
                                <view class="fr">
                                    <text @tap="addHandle" :data-id=index class="ico-add"></text>
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
                                :data-nums="item1.status == '已离职' ? 2 : 3"
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
                                        @touchstart.stop="moveGroup" 
                                        :data-index="index1"
                                        :data-project_id="item1.project_id"
                                        :data-id="item1.id"
                                        class="but-two c1"
                                        >
                                        <picker @change="bindPickerChange3" :value="index3" :range="array3">
                                            <text class="uni-input">移动至</text>
                                        </picker>
                                        </view>
                                        <template v-if="item1.status == '已离职'">
                                            <view
                                            @touchstart.stop="revokeLeave" 
                                            :data-index="index1"
                                            :data-project_id="item1.project_id"
                                            :data-id="item1.id"
                                            class="but-two c2"
                                            >
                                            <text class="lh">上岗</text>
                                            </view>
                                        </template>
                                        <template v-else>
                                            <view
                                            @touchstart.stop="getEditId" 
                                            :data-index="index1"
                                            :data-project_id="item1.project_id"
                                            :data-id="item1.project_id"
                                            class="but-two c2"
                                            >
                                            <text class="lh">修改</text>
                                            </view>
                                            <view
                                            @touchstart.stop="quitLeave" 
                                            :data-index="index1"
                                            :data-project_id="item1.project_id"
                                            :data-id="item1.id"
                                            class="but-two c3"
                                            >
                                            <text class="lh">离职</text>
                                            </view>
                                        </template>
                                    </view>
                                </view>
                            </view>
                        </view>
                </view>
            </view>
        </view>

        <!-- 邀请人 -->
        <view class="alert" v-if="show1">
            <view class="telbox t2">
                <view class="close" @tap="show1=false"></view>
                <text class="h2">手机号邀请</text>
                <view class="ul">
                    <view class="li">
                        <text>*</text>
                        <picker class="qing" @change="bindPickerChange1" :value="index1" :range="array1">
                            <view :class="['uni-input',{'select-active':index1==0}]">{{array1[index1]}}</view>
                        </picker>
                    </view>
                    <view class="li">
                        <text>*</text>
                        <input v-model="add_page_data.phone" type="number" placeholder="请输入对方手机号" placeholder-class="placeholder-class">
                    </view>
                    <view class="li">
                        <text>*</text>
                        <input v-model="add_page_data.user_name" type="text" placeholder="请输入对方姓名" placeholder-class="placeholder-class">
                    </view>
                    <view class="li">
                        <text>*</text>
                        <picker class="qing" @change="bindPickerChange2" :value="index2" :range="array2">
                            <view :class="['uni-input',{'select-active':index2==0}]">{{array2[index2]}}</view>
                        </picker>
                    </view>
                    <view class="li">
                        <text>*</text>
                        <input
                        v-model="add_page_data.salary"
                        type="number"
                        placeholder="薪资"
                        placeholder-class="placeholder-class"
                        >
                    </view>
                </view>
                <view class="btn" @tap="searchHandle">确定</view>
            </view>
        </view>

        <!-- 已注册 -->
        <view class="alert" v-if="show4">
            <view class="telbox">
                <view class="close" @tap="show4=false"></view>
                <text class="h3">已注册</text>
                <view class="wrap">
                    <view class="pict">
                        <image :src="user.avatar" mode=""></image>    
                    </view>
                    <text class="name" v-if="user.user_name !='null' && user.user_name !=''">{{user.user_name}}</text>
                    <text class="phone">{{user.phone}}</text>
                    <text class="compname" v-if="user.user_company !='null' && user.user_company !=''">{{user.user_company}}</text>
                </view>
                <view class="btn" @tap="invitaHandle">添加</view>
            </view>
        </view>

        <!-- 未注册 -->
        <view class="alert" v-if="show5">
            <view class="telbox">
                <view class="close" @tap="show5=false"></view>
                <text class="h3">未注册</text>
                <view class="wrap">
                    <view class="pict">
                        
                    </view>
                    <text class="name">{{add_page_data.user_name}}</text>
                    <text class="phone">{{add_page_data.phone}}</text>
                </view>
                <view class="btn" @tap="invitaHandle">邀请</view>
            </view>
        </view>

        <!-- 添加分组 -->
        <add-group
        :show="show2"
        @event1="event1"
        @event2="event2"
        >
        </add-group>

    
        <add-group
        :show="show3"
        @event1="event3"
        @event2="event4"
        title="修改分组"
        >
        </add-group>

        

    </view>
</template>

<script>
import addGroup from "../../../components/transfer/add-group.vue";
import assist from "../../../tool/utils/play.js";
export default {
    data(){
        return{
            search:'',

            list:[],

            index1:0,
            array1:['请选择分组'],

            index2:0,
            array2:['计薪方式','日结','月结'],
            
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,

            group_id:null,

            add_page_data:{
                project_id: null,
                user_id:'', // 用户id
                phone:'', // 手机号
                user_name:'', // 用户姓名
                group_id :'', // 项目参与人员分组 id
                salary_method :'', // 计薪方式
                salary:'' // 薪资
            },

            user:{},

            array3: [],
            index3: 0,

            move_config:{},

            start_x: 0,
            move_x: 0,
            delay:300,
            move_x_resut:0
        }
    },
    onLoad(){
        this.add_page_data.project_id = uni.getStorageSync('project_id')
        this.getNetData()
    },
    methods:{
        toggleHandle(e){
            let dex = e.currentTarget.dataset.index
            this.$set(this.list[dex],'isshow',!this.list[dex].isshow)
            
        },
        modifyHandle(e){
            this.show3 = true
            this.group_id = e.currentTarget.dataset.id
        },

        addHandle(e){
            const { id } = e.currentTarget.dataset
            this.index1 = id * 1 + 1
            this.show1 = true
            this.add_page_data.group_id = this.list[id * 1].id
        },

        event1(name){
            this.show2 = false
            uni.showLoading()
            this.$api.basicSet.GroupName({
                project_id:this.add_page_data.project_id,
                group_name:name
            })
            .then(res=>{
                if(res.code){
                    uni.showToast({
                        title:'组创建成功'
                    })
                    this.getNetData()
                }
            })
        },

        event2(){
            this.show2 = false
        },

        // 确认修改
        event3(name){
            this.show3 = false
            uni.showLoading()
            this.$api.basicSet.UpdateGroupName({
                project_id:this.add_page_data.project_id,
                group_id:this.group_id,
                group_name:name
            })
            .then(res=>{
                if(res.code){
                    uni.showToast({
                        title:'组修改成功'
                    })
                    this.getNetData()
                }
            })
        },

        // 修改隐藏
        event4(){
            this.show3 = false
        },

        // 手机号邀请  =》 选择分组
        bindPickerChange1(e){
            this.index1 = e.target.value
            this.add_page_data.group_id = this.list[e.target.value-1].id
        },
        // 手机号邀请  =》 计薪方式
        bindPickerChange2(e){
            this.index2 = e.target.value            
            this.add_page_data.salary_method = this.array2[e.target.value]
        },

        // 提交邀请
        invitaHandle(){
            uni.showLoading()
            this.$api.basicSet.Invite(this.add_page_data)
            .then(res=>{
                if(res.code){
                    uni.showToast({
                        title: res.msg,
                        icon:'none'
                    })
                    var cleardata = {
                        user_id:'',
                        phone:'',
                        user_name:'',
                        salary_method:'',
                        salary:''
                    }
                    this.add_page_data = {
                        ...this.add_page_data,
                        ...cleardata
                    }
                    this.index2 = 0
                    this.show4 = false
                    this.show5 = false

                    this.getNetData()
                }else{
                    uni.showToast({
                        title: res.msg,
                        icon:'none'
                    })
                }
            })
        },

        // 搜索用户
        searchHandle(){
            const {phone,user_name,salary_method,salary} = this.add_page_data            
            const yz = [
                {
                    type:'phone',
                    val:phone,
                    msg:'请输入手机号',
                    phone:'手机号格式不正确'
                },
                {
                    type:'null',
                    val:user_name,
                    msg:'请输入姓名'
                },
                {
                    type:'null',
                    val:salary_method,
                    msg:'请选择计薪方式'
                },
                {
                    type:'null',
                    val:salary,
                    msg:'请输入薪资'
                },
            ]

            assist.ver(yz)

            uni.showLoading()
            this.$api.basicSet.searchUser({phone:this.add_page_data.phone})
            .then(res=>{
                uni.hideLoading()
                if(res.code){
                    this.show1 = false
                    this.show4 = true
                    this.user = res.data.user
                }else{
                    this.show1 = false
                    this.show5 = true
                }
            })
        },

        // 网络数据
        getNetData(){
            this.$api.basicSet.Person({
                project_id:this.add_page_data.project_id
            })
            .then(res=>{
                console.log(res.data);
                this.list = res.data.project_person_groups
                this.list.forEach(item=>{
                    this.array1.push(item.group_name)
                    this.array3.push(item.group_name)
                })
            })
        },

        // 离职
        quitLeave(e){
            const {index, project_id, id} = e.currentTarget.dataset
            this.$api.basicSet.quitLeave({
                project_id,
                project_person_id:id
            })
            .then(res=>{
                if(res.code){
                    this.getNetData()
                    uni.showToast({
                        title:'设置离职成功'
                    })
                }
            })
        },
        // 上岗
        revokeLeave(e){
            const {index, project_id, id} = e.currentTarget.dataset
            this.$api.basicSet.revokeLeave({
                project_id,
                project_person_id:id
            })
            .then(res=>{
                if(res.code){
                    this.getNetData()
                    uni.showToast({
                        title:'设置上岗成功'
                    })
                }
            })
        },

        // 移动分组
        moveGroup(e){
            const { project_id, id } = e.currentTarget.dataset
            this.move_config['project_id'] = project_id
            this.move_config['project_person_id'] = id
        },

        bindPickerChange3(e){
           this.move_config['project_person_group_id'] = this.list[e.detail.value].id
            this.$api.basicSet.moveLeave(this.move_config)
            .then(res=>{
                if(res.code){
                    this.getNetData()
                    uni.showToast({
                        title:'移动分组成功'
                    })
                }
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
        addGroup
    }
}
</script>

<style>

</style>