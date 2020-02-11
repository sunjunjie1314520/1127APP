<template>
    <view class="container bg-three">

        <uni-nav-bar class="pub-shadow" left-icon="back" title="发票管理">
            <navigator hover-class="hover-class" slot="right" url="../newly/newly" class="right-btn">新建</navigator>
        </uni-nav-bar>

        <view class="invoices-card">
            <scroll-view scroll-x="true" class="ul">
                <view class="li li0">
                    <view class="flex">
                        <text class="h3">工程票</text>
                        <text class="p">112680.00</text>
                    </view>
                </view>
                <view class="li li1">
                    <view class="flex">                        
                        <text class="h3">成本票</text>
                        <text class="p">812680.00</text>
                    </view>
                </view>
                <view class="li li2">
                    <view class="flex">
                        <text class="h3">工程票税金</text>
                        <text class="p">112680.00</text>
                    </view>
                </view>
                <view class="li li0">
                    <view class="flex">
                        <text class="h3">工程票</text>
                        <text class="p">112680.00</text>
                    </view>
                </view>
                <view class="li li1">
                    <view class="flex">                        
                        <text class="h3">成本票</text>
                        <text class="p">812680.00</text>
                    </view>
                </view>
                <view class="li li2">
                    <view class="flex">
                        <text class="h3">工程票税金</text>
                        <text class="p">112680.00</text>
                    </view>
                </view>
            </scroll-view>  
        </view>

        <view class="list-invoices">
            <view class="ul">
                <view class="li" v-for="item in contract" :key="item.id">
                    <navigator :url="'../detail/detail?id=' + item.id">
                        <view class="pict">
                            <image :src="url + item.contract_scan_img_path" mode=""></image>
                        </view>
                        <view class="text">
                            <view class="h2">
                                <text class="name">{{item.contract_name}}</text>
                                <text class="label c1">{{item.contract_kind}}</text></view>
                            <view class="wrap">
                                <text class="p"><text class="c1">合同金额：</text>{{item.contract_money}}元</text>
                                <text class="p"><text class="c1">签订日期：</text>{{item.contract_sign_date}}</text>
                            </view>
                        </view>
                    </navigator>
                </view>
            </view>
        </view>

        <view class="list-invoices" v-if="piao.length > 0">
            <view class="h2">其他发票</view>
            <view class="ul">
                <view class="li" v-for="item in piao" :key="item.id">
                    <navigator url="../detail/detail">
                        <view class="pict">
                            <image :src="url + item.id" mode=""></image>
                        </view>
                        <view class="text">
                            <view class="h2">
                                <text class="name">南京溧水智能化工程合同</text>
                                <text class="label c1">工程合同</text></view>
                            <view class="wrap">
                                <text class="p"><text class="c1">合同金额：</text>34343.00万元</text>
                                <text class="p"><text class="c1">签订日期：</text>2019-08-13</text>
                            </view>
                        </view>
                    </navigator>
                </view>
            </view>
        </view>

    </view>
</template>

<script>

import { serverURL } from "@/tool/common/config";

export default {
    data(){
        return {        
            url:serverURL,
            project_id:null,
            piao:[],
            contract:[],
        }
    },
    onLoad(){
        this.project_id = uni.getStorageSync('project_id')
    },
    onShow(){
        this.readLocData()
        console.log('show');
        
    },
    methods:{
        readLocData(){
            let data = uni.getStorageSync('contract')
            if(data){
                this.contract =  data
            }else{
                this.getPrevNetData()
            }
        },
        getPrevNetData(){
            this.$api.basicSet.allContract({
                project_id:this.project_id
            })
            .then(res=>{
                this.contract =  res.data.project_contracts
                uni.setStorageSync('contract',res.data.project_contracts)
            })
        },
    }
}
</script>

<style>

</style>