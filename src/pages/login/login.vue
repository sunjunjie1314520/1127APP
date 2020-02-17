<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/img/img2.jpg" mode="widthFix"></image>
		</view>
		<view class="login-wrap">
			<view class="wrapper">
				<view class="title">
					<text>登录</text>
				</view>
				<view class="ul">
					<view class="li">
						<text class="ico ico-i1"></text>
						<input
                        v-model="page.phone"
                        placeholder-class="placeholder-class"
                        type="number"
                        placeholder="请输入手机号"
                        maxlength="11"
                        >
					</view>
					<view class="li">
						<text class="ico ico-i3"></text>
						<input
                        @keyup.enter="LoginHandle"
                        v-model="page.password"
                        placeholder-class="placeholder-class"
                        type="text"
                        password placeholder="请输入密码"
                        >
					</view>
					<view class="forpass">
                        <checkbox-group @change="checkHandle">
                            <label>
                                <checkbox value="check" :checked="isChecked" />记住密码
                            </label>
                        </checkbox-group>
					</view>
				</view>
				<view class="login-btn">
					<button type="primary" @tap="LoginHandle">登录</button>
					<view class="tips">
						<text>没有账号？</text>
						<navigator class="color" url="../register/register">立即注册</navigator>
					</view>
				</view>
			</view>
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
                page:{
                    phone : '',
                    password : ''
                },
                isChecked:false,
            }
        },
        onLoad(){
            var password = uni.getStorageSync('password')
            var account = uni.getStorageSync('account')
            if(password && account){
                this.isChecked = true
                this.page = account
            }
        },
        methods:{

            LoginHandle(){
                const yz = [
                    {
                        type:'phone',
                        val:this.page.phone,
                    },
                    {
                        type:'null',
                        val:this.page.password,
                        msg:'请输入密码'
                    },
                ]

                this.$assist.ver(yz)
                
                uni.showLoading({
                    title:'登录中',
                    mask:true
                })

                this.$api.login.sign(this.page)
                .then(res => {
                    uni.hideLoading()
                    if(this.$assist.msg(res)){
                        uni.setStorageSync('user', res.data.user);
                        this.$store.commit('signToggle',true)
                        this.forPass()
                        uni.redirectTo({
                            url: '../../pages/index/index'
                        });
                    }
                    
                })
            },

            checkHandle(e){
                var arr = e.detail.value.length
                if(arr){
                    this.isChecked = true
                }else{
                    this.isChecked = false
                }
            },

            forPass(){
                if(this.isChecked){
                    uni.setStorageSync('password',true)
                    uni.setStorageSync('account',this.page)
                }else{
                    uni.removeStorageSync('password');
                    uni.removeStorageSync('password');
                }
            }
        }
    }

</script>
	
<style>
</style>
