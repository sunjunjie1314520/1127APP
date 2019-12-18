<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/img/img2.jpg" mode="widthFix"></image>
		</view>
		<view class="login-wrap">
			<div class="wrapper">
				<view class="title">
					<text>登录</text>
				</view>
				<view class="ul">
					<view class="li">
						<text class="ico ico-i1"></text>
						<input v-model="phone" placeholder-class="placeholder-class" type="number" placeholder="请输入手机号" maxlength="11">
					</view>
					<view class="li">
						<text class="ico ico-i3"></text>
						<input v-model="password" placeholder-class="placeholder-class" type="text" password placeholder="请输入密码">
					</view>
					<view class="forpass">
						<label>
							<checkbox value="cb" checked="true" />记住密码
						</label>
					</view>
				</view>
				<div class="login-btn">
					<button type="primary" @tap="LoginHandle">登录</button>
					<view class="tips">
						<text>已有账号？</text>
						<navigator class="color" url="../register/register">立即注册</navigator>
					</view>
				</div>
			</div>
		</view>
        <div class="login-back">
            <image src="../../static/img/img6.png" mode="widthFix"></image>
        </div>
	</view>
</template>
	
<script>
    export default {
        data(){
            return {
                phone : '',
                password : ''
            }
        },
        onLoad(){
            
        },
        methods:{
            LoginHandle(){
                this.$api.login(
                    {
                        'phone':this.phone,
                        'password':this.password,
                    }
                )
                .then(res => {
                    console.log(res);
					if(res.code){
						try {
						    uni.setStorageSync('user', res.data.user);
							uni.redirectTo({
							    url: '../../pages/company/company'
							});
						} catch (e) {
						    console.log(e);
						}
					}else{
                        uni.showToast({
            　　　　　　　  title: res.msg,
            　　　　　　　　icon: 'none'
            　　　　　　　})
                    }
                })
            },
            
        }
    }

</script>
	
<style>
</style>
