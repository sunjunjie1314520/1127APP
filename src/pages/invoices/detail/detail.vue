<template>
    <view class="container bg-three">

        <uni-nav-bar left-icon="back" title="发票详情"></uni-nav-bar>

        <view class="list-invoices">
            <view class="ul">
                <template v-for="item in contract_filter">
                    <view :key="item.id" class="li box">
                        <view class="navigator">
                            <view class="pict">
                                <image :src="http + item.contract_scan_img_path" mode=""></image>
                            </view>
                            <view class="text">
                                <view class="h2">
                                    <text class="name">{{item.contract_name}}</text>
                                    <text class="label c1">{{item.contract_kind}}</text></view>
                                <view class="wrap">
                                    <text class="p"><text class="c1">乙方名称：</text>{{item.party_B_company}}</text>
                                    <text class="p"><text class="c1">合同金额：</text>{{item.contract_money}}元</text>
                                    <text class="p"><text class="c1">签订日期：</text>{{item.contract_sign_date}}</text>
                                </view>
                            </view>
                        </view>
                        <view class="step" v-if="contract_invoices.length>0">
                            <view class="box" v-for="item in contract_invoices" :key="item.id">
                                <view class="date">
                                    <text class="b">{{item.created_at | year}}</text>
                                    <text class="p">{{item.created_at | date}}</text>
                                </view>
                                <view class="fr">
                                    <view class="icon">
                                    </view>
                                    <view class="p">
                                        <text class="c">发票名称：</text>
                                        <text>{{item.invoice_name}}</text>
                                    </view>
                                    <view class="p">
                                        <text class="c">发票金额：</text>
                                        <text>{{item.invoice_money}}.00元</text>
                                    </view>
                                    <view class="p">
                                        <text class="c">发票税率：</text>
                                        <text>{{item.invoice_ratio}}</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <div class="new-add">
                            <view class="fr">
                                <navigator :url="'../newly/newly?id=' + contract_id">
                                    <text class="icon"></text>
                                    <text class="txt">新增发票</text>
                                </navigator>
                            </view>
                        </div>
                    </view>
                </template>
            </view>
        </view>

    </view>
</template>

<script>
import { serverURL } from "@/tool/common/config";
import assist from "../../../tool/utils/play.js";
export default {
    data(){
        return {
            http:serverURL,
            
            project_id:null,
            contract_id:null,

            contract_invoices:[],
            contract:[],

        }
    },
    computed: {
        contract_filter(){
            return this.contract.filter(item=>item.id == this.contract_id)
        }
    },
    onShow(){
        this.getNetData()

    },
    onLoad(params){

        this.contract_id = params.id

        this.project_id = uni.getStorageSync('project_id')
        this.contract = uni.getStorageSync('contract')

    },
    methods:{
        getNetData(){
            let _this = this;
            this.$api.basicSet.allInvoice({
                project_id:this.project_id,
                contract_id:this.contract_id
            })
            .then(res=>{
                console.log(res);
                this.contract_invoices = res.data.contract_invoices
          
                uni.setStorageSync('invoices',res.data.contract_invoices)
            })
        }
    },
    //定义过滤器
    filters:{
        year(v){
            return assist.formatTime(v,'Y')   
        },
        date(v){
            return assist.formatTime(v,'M-D')   
        }
    }
}
</script>

<style>

</style>