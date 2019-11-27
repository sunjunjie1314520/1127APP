<template>
	<view class="container">
		<view class="construction">
			<view class="construction-map">
				<image src="../../static/img/map.jpg" mode=""></image>
			</view>
			<view class="construction-set">
				<view class="construction-set-location">
					<view class="construction-set-col">
						<view class="construction-set-name">
							签到地址
						</view>
						<view class="construction-set-inf">
							<input type="text" value="" placeholder="请输入地址" />
							<image src="../../static/img/ic35.png" mode=""></image>
						</view>
					</view>
					<view class="construction-set-addr">
						<input type="text" value="" />
					</view>
				</view>
				<view class="construction-set-work-time">
					<view class="set-work-time-name">
						上班时间
					</view>
					<view class="set-work-time-date">
						<input type="text" value="" placeholder="请选择日期" />
						<image src="../../static/img/ic36.png" mode=""></image>
					</view>
				</view>
				<view class="construction-set-work-time">
					<view class="set-work-time-name">
						下班时间
					</view>
					<view class="set-work-time-date">
						<input type="text" value="" placeholder="请选择日期" />
						<image src="../../static/img/ic37.png" mode=""></image>
					</view>
				</view>
				<view class="set-work-time-button">
					<button type="primary">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

