<template>
	<view class="container">
		<view class="product">
			<view class="product-inform">
				<view class="product-inform-col">
					<view class="product-inform-name">
						<text>物品领用归还</text>
						<text class="label no">未出库</text>
					</view>
					<view class="product-inform-intr">
						<view class="product-list-li">
							<view class="product-list-img">
								<image src="../../../static/img/im1.png" mode=""></image>
							</view>
							<view class="product-list-inf">
								<view class="product-list-inf-list">
									<text class="tit">领取人:</text>
									<text class="txt">张三</text>
								</view>
								<view class="product-list-inf-list">
									<text class="tit">施工位置:</text>
									<text class="txt">四楼主题街区</text>
								</view>
								<view class="product-list-inf-list">
									<text class="tit">领用日期:</text>
									<text class="txt">2019-11-08</text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				<view class="product-tabel">
				<view class="product-tabel-col give-tabel">
							<view class="table">
								<view class="tr">
									<view class="th">序号</view>
									<view class="th">材料名称</view>
									<view class="th">型号</view>
									<view class="th">品牌</view>
									<view class="th">单位</view>
									<view class="th">申请入库量</view>
									<view class="th">实际入库量</view>
								</view>
								<view class="tr">
									<view class="td">1</view>
									<view class="td">钻头</view>
									<view class="td">DW1</view>
									<view class="td">钢铁</view>
									<view class="td">个</view>
									<view class="td">100</view>
									<view class="td">20</view>
								</view>
								<view class="tr">
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
								</view>
								<view class="tr">
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
									<view class="td"></view>
								</view>
							</view>
						</view>
				</view>
			</view>
			<view class="porduct-note">
				<view class="porduct-note-name">
					备注
				</view>
				<view class="porduct-note-input">
					<textarea value="" placeholder="请输入其他内容" />
				</view>
			</view>
			<view class="porduct-button">
				<button type="primary">确定</button>
			</view>
		</view>
	</view>
</template>


<script>
export default {

}
</script>

<style>

</style>