<template>
    <view class="container bg-three">

        <uni-nav-bar class="pub-shadow" left-icon="back" title="发票管理">
            <navigator hover-class="hover-class" slot="right" url="../newly/newly" class="right-btn">新建</navigator>
        </uni-nav-bar>

        <view class="invoices-card">
            <scroll-view :scroll-top="scrollTop" scroll-x="true" class="ul" @scroll="scroll">
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
                <view class="li">
                    <navigator url="../detail/detail">
                        <view class="pict">
                            <image src="../../../static/img/8c538_148x148.png" mode=""></image>
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
                <view class="li">
                    <navigator url="../detail/detail">
                        <view class="pict">
                            <image src="../../../static/img/8c538_148x148.png" mode=""></image>
                        </view>
                        <view class="text">
                            <view class="h2">
                                <text class="name">南京溧水智能化工程合同</text>
                                <text class="label c2">采购合同</text></view>
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
export default {
    data(){
        return {
            scrollTop:0,
            old: {
                scrollTop: 0
            }
        }
    },
    methods:{
        scroll: function(e) {
            console.log(e)
            this.old.scrollTop = e.detail.scrollTop
        },
    }
}
</script>

<style>

</style>