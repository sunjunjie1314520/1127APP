<template>
	<view class="container bg-two">

        <uni-nav-bar left-icon="back" title="参建单位">
            <text @tap.prevent="show1=true" hover-class="hover" class="right-btn" slot="right">新建组</text>
        </uni-nav-bar>

		<view class="construction">
            <template v-if="list.length>0">
                <view class="construction-list">
                    <view class="construction-list-box" v-for="(item,index) in list"  :key="item.id">
                        <view class="construction-list-img">
                            <image :src="'../../../static/img/'+ (filename(item.group_name)) +'.png'"></image>
                        </view>
                        <view class="fr">
                            <view class="wrap">
                                <view class="construction-list-inf" @tap="showItem" :data-dex="index">
                                <view class="construction-list-tit">{{item.group_name}}</view>
                                <view class="construction-list-data">
                                    <view class="nums">单位<text>{{item.project_companys.length}}</text>个</view>
                                </view>
                                </view>
                                <view class="construction-list-add">
                                    <navigator hover-class="hover-class" :url="'../add/add?id=' + item.id + '&name=' + item.group_name"></navigator>
                                </view>
                            </view>

                            <view class="show-data" v-if="item.isshow && item.project_companys.length > 0">
                                <view class="ul">
                                    <view class="li" v-for="item1 in item.project_companys" :key="item1.id">
                                        <text>{{item1.company_name}}</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </template>

            <template v-else>
                <view class="nodata">没有任何单位</view>
            </template>

		</view>

        <add-group
        :show="show1"
        @event1="addGroup"
        @event2="show1=false"
        >
        </add-group>

	</view>
</template>

<script>
import addGroup from "../../../components/transfer/add-group";
export default {
    data(){
        return {
            show1:false,
            project_id:null,
            list:[]
        }
    },
    onLoad(){
        this.project_id = uni.getStorageSync('project_id')
    },
    onShow(){
        this.readLocData()
    },
    methods:{
        filename(v){
            console.log(v);
            switch (v) {
                case '总包单位':
                    return 'ic26'
                    break;
                case '建设单位':
                    return 'ic33'
                    break;
                case '分包单位':
                    return 'ic29'
                    break;
                case '设计单位':
                    return 'ic27'
                    break;
                case '施工单位':
                    return 'ic28'
                    break;
                case '供货单位':
                    return 'ic30'
                    break;
                case '监理单位':
                    return 'ic31'
                    break;
                case '咨询单位':
                    return 'ic33'
                    break;
                case '租赁单位':
                    return 'ic32'
                    break;
                default:
                    return 'ic22'
                    break;
            }
        },
        showItem(e){
            var dex = e.currentTarget.dataset.dex * 1
            this.$set(this.list[dex],'isshow',!this.list[dex].isshow)
        },
        addGroup(data) {
            if (data!=""){
                uni.showLoading()
                this.$api.basicSet.addGroup({
                    project_id:this.project_id,
                    group_name:data,
                })
                .then(res=>{
                    if(res.code){
                        uni.showToast({
                            'title':'组创建成功'
                        })
                        this.getNetData()
                    }
                })
                this.show1 = false
            }else{
                uni.showToast({
                    'title':'请输入分组名称'
                })
            }
        },
  
        readLocData(){
            var data = uni.getStorageSync('participation')
            if (data){
                this.list = data
            }else{
                this.getNetData()
            }
        },
        getNetData(){
            this.$api.basicSet.allParticipation({project_id:this.project_id})
            .then(res=>{
                console.log(res.data);
                
                this.list = res.data.project_company_groups
                uni.setStorageSync('participation',res.data.project_company_groups)
                setTimeout(function() {
                    uni.stopPullDownRefresh()
                }, 500);
            })
        }
    },
    onPullDownRefresh(){
        this.getNetData()
    },
    components:{
        addGroup
    },
    filters:{
        
    }
}
</script>

<style>

</style>