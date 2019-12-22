<template>
	<view class="container">

        <uni-nav-bar left-icon="back" title="合同列表">
            <navigator slot="right" url="../newly/newly" class="right-btn">新建</navigator>
        </uni-nav-bar>

        <view class="contract">
			<view class="contract-list">
				<view class="contract-list-box">
					<view class="contract-list-img">
						<image src="../../../static/img/im3.png" mode=""></image>
					</view>
					<view class="contract-list-inform">
						<view class="contract-list-name">
							<text>南京溧水智能化工程合同</text>
							<text class="label">工程合同</text>
						</view>
						<view class="contract-list-text">
							<text class="title">甲方名称：</text>
							<text>南京市溧水万达广场有限公司</text>
						</view>
						<view class="contract-list-text">
							<text class="title">合同金额：</text>
							<text>34343.00万元</text>
						</view>
					</view>
				</view>
				<view class="contract-list-box">
					<view class="contract-list-img">
						<image src="../../../static/img/im3.png" mode=""></image>
					</view>
					<view class="contract-list-inform">
						<view class="contract-list-name">
							<text>摄像机采购合同</text>
							<text class="label color">采购合同</text>
						</view>
						<view class="contract-list-text">
							<text class="title">甲方名称：</text>
							<text>南京市中能联合公司</text>
						</view>
						<view class="contract-list-text">
							<text class="title">合同金额：</text>
							<text>343.00万元</text>
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
        return {

        }
    },
    created(){
        this.getAll()
    },
    methods:{
        getAll(){
            this.$api.contract.AllContract({
                project_id:'46545646546sd4f6as6df4'
            })
            .then(res=>{
                console.log(res);
            })
        }
    }
}
</script>