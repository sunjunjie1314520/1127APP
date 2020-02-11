<template>
    <view class="alert" v-if="show">
        <view class="telbox">
            <text @tap="close" class="close"></text>
            <text class="h2">手机号输入</text>
            <view class="ul">
                <view class="li">
                    <text>*</text>
                    <input
                    type="number"
                    v-model="phone"
                    placeholder-class="placeholder-class"
                    placeholder="请输入对方手机号码"
                    >
                </view>
            </view>
            <view class="btn" @tap="receiving">移交</view>
        </view>
    </view>
</template>

<script>
export default {
    name:'tel-input',
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            phone:"",
        }
    },
    methods:{
        receiving(){
            if(this.phone!=""){
                var obj = {
                    phone: this.phone,
                }
                
                if(this.$assist.validatePhoneNumber(this.phone)){
                    this.$emit('receiving_event',obj)
                    this.phone = ''
                }else{
                   uni.showToast({
                        title:'手机号码格式不对',
                        icon:'none',
                        position:"bottom"
                    }) 
                }
                
            }else{
                uni.showToast({
                    title:'请输入手机号码',
                    icon:'none',
                    position:"bottom"
                })
            }
        },
        close(){
            this.$emit('close_event')
            this.phone = ''
        }
    }
}
</script>

<style>

</style>