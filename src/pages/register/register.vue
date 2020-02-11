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
						<input v-model="verification_code" placeholder-class="placeholder-class" type="text" class="short" placeholder="请输入验证码">
						<text class="get-code" v-if="state" @tap="getCode">获取验证码</text>
						<text class="get-code acti" v-else>({{count}})秒后可重发</text>
					</view>
					<view class="li">
						<text class="ico ico-i3"></text>
						<input v-model="password" placeholder-class="placeholder-class" type="password" placeholder="请输入密码">
					</view>
				</view>
				<div class="login-btn">
					<button type="primary" @tap="registerHandle">注册</button>
					<view class="tips">
						<text>已有账号？</text>
						<navigator class="color" url="../login/login">立即登录</navigator>
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
    import assist from "../../tool/utils/play.js";
    export default {
        data(){
            return {
				phone:'',
				verification_code:'',
                password:'',
                
                state:true,
                count:30,
            }
        },
        methods:{
            registerHandle(){
                
                let yz = [
                    {
                        type:'phone',
                        val:this.phone,
                        msg:'手机号不能为空',
                        phone:'手机号格式不正确'
                    },
                    {
                        type:'null',
                        val:this.verification_code,
                        msg:'验证码不能为空',
                    },
                    {
                        type:'null',
                        val:this.password,
                        msg:'密码不能为空',
                    },
                ]

                assist.ver(yz)

                uni.showLoading()
                this.$api.register(
                    {
                        phone:this.phone,
                        password:this.password,
                        verification_code:this.verification_code
                    }
                )
                .then(res => {
                    console.log(res);
                    uni.showToast({
                        title:res.msg,
                        icon:'none',
                    })
					if(res.code){
						uni.showToast({
                            title:'注册成功'
                        })

                        this.loginHandle()
					}
                })
            },

            getCode(){
                let yz = [
                    {
                        type:'phone',
                        val:this.phone,
                        msg:'手机号不能为空',
                        phone:'手机号格式不正确'
                    }
                ]
                assist.ver(yz)

                this.$api.getcode({
                    phone:this.phone
                })
                .then(res=>{
                    uni.showToast({
                        title:res.msg,
                        icon:'none'
                    })
                    if(res.code){
                        this.state = false
                        var a = setInterval(() => {
                            this.count --;
                            if(this.count<=0){
                                clearInterval(a)
                                this.state = true
                                this.count = 30
                            }
                        }, 1000);
                    }
					
                })
            },
            
            loginHandle(){
                this.$api.login({
                    phone : this.phone,
                    password : this.password
                })
                .then(res => {
                    if(res.code){
                        uni.setStorageSync('user', res.data.user);
                        uni.redirectTo({
                            url: '../../pages/index/index'
                        });
                    }
                })
            }
        },
        
    }
</script>
	
<style>
</style>
