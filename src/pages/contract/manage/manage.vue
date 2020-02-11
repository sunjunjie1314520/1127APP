<template>
	<view class="container bg-two">

        <uni-nav-bar left-icon="back" title="合同列表">
            <navigator slot="right" url="../newly/newly" class="right-btn" hover-class="hover">新建</navigator>
        </uni-nav-bar>

        <view class="contract">
			<view class="contract-list">
                <template v-if="list.length>0">

                    <view class="contract-list-box" v-for="item in list" :key="item.id" v-show="item.contract_name != '其它发票专用'">
                        <view class="contract-list-img">
                            <template v-if="item.contract_scan_img_path">
                                <image :src="url + item.contract_scan_img_path[0]" mode=""></image>
                            </template>
                            <template v-else>
                                <image :src="url" mode=""></image>
                            </template>
                        </view>
                        <view class="contract-list-inform">
                            <view class="contract-list-name">
                                <text>{{item.contract_name}}</text>
                                <text class="label">{{item.contract_kind}}</text>
                            </view>
                            <view class="contract-list-text">
                                <text class="title">甲方名称：</text>
                                <text>{{item.party_A_company}}</text>
                            </view>
                            <view class="contract-list-text">
                                <text class="title">合同金额：</text>
                                <text>{{item.contract_money }}元</text>
                            </view>
                        </view>
                    </view>
                </template>
                <template v-else>
                    <view class="nodata">
                        还没有合同数据
                    </view>
                </template>
			</view>
		</view>
    </view>
</template>

<script>

import { serverURL } from "../../../tool/common/config.js";

export default {
    data(){
        return {
            url:serverURL,
            list:[],
            project_id:null
        }
    },

    created(){
        
    },

    onLoad(){
        this.project_id = uni.getStorageSync('project_id')
    },

    onShow(){
        this.readLocData()
    },

    methods:{
        readLocData(){
            let contract = uni.getStorageSync('contract')
            if(contract){
                this.list = contract
            }else{
                this.getNetData()
            }
        },
        getNetData(){
            this.$api.basicSet.allContract({
                project_id:this.project_id
            })
            .then(res=>{
                console.log(res);
                this.list = res.data.project_contracts
                uni.setStorageSync('contract',res.data.project_contracts)
            })
        },
        onPullDownRefresh(){
            setTimeout(() => {
                uni.stopPullDownRefresh()
                this.getNetData()
            }, 1500);
        },
    }
}
</script>