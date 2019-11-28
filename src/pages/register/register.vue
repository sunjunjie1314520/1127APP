<template>
	<view class="container login-back">
		<view class="logo">
			<image src="../../static/img/img2.jpg" mode="widthFix"></image>
		</view>
		<view class="login-wrap">
			<div class="wrapper">
				<view class="title">
					<text>注册</text>
				</view>
				<view class="ul">
					<view class="li">
						<text class="ico ico-i1"></text>
						<input v-model="phone" placeholder-class="placeholder-class" type="text" placeholder="请输入手机号">
					</view>
					<view class="li">
						<text class="ico ico-i2"></text>
						<input v-model="password" placeholder-class="placeholder-class" type="text" class="short" placeholder="请输入验证码">
						<text class="get-code" @tap="yanzhi">获取验证码</text>
					</view>
					<view class="li">
						<text class="ico ico-i3"></text>
						<input v-model="verification_code" placeholder-class="placeholder-class" type="password" placeholder="请输入密码">
					</view>
				</view>
				<div class="login-btn">
					<button type="primary" @tap="RegisterHandle">注册</button>
					<view class="tips">
						<text>已有账号？</text>
						<navigator open-type="navigateBack" class="color" url="../register/register">立即登录</navigator>
					</view>
				</div>
			</div>
		</view>
        <view class="login-back">
            <image src="../../static/img/img6.png" mode="widthFix"></image>
        </view>
	</view>
</template>
	
<script>
    export default {
        data(){
            return {
				phone:'15971345754',
				password:'123456',
				verification_code:'aaaa'
            }
        },
        methods:{
            RegisterHandle(){
                this.$api.register(
                    {
                        phone:this.phone,
                        password:this.password,
                        verification_code:this.verification_code
                    }
                )
                .then(res => {
                    console.log(res);
					if(res['code']){
						uni.navigateBack({
							delta: 1
						})
					}
                    uni.showToast({
                        title:res.msg,
                        icon:'none',
                    })
					
                })
            },
            yanzhi(){
                this.$api.getcode({
                    phone:this.phone
                })
                .then(res=>{
                    console.log(res);	
					
                    uni.showToast({
                        title:res.msg,
                        icon:'none'
                    })
					
                })
            }
        },
        
    }
</script>
	
<style>
</style>
