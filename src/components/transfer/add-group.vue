<template>
    <view class="alert" v-show="show">
        <view class="add-group">
            <text @tap="hide" class="close"></text>
            <text class="h2" v-text="title"></text>
            <view class="ul">
                <view class="li">
                    <text>*</text>
                    <input v-model="name" type="text" placeholder-class="placeholder-class" placeholder="请输入分组名称">
                </view>
            </view>
            <view class="btn" @tap="toParent">确定</view>
        </view>
    </view>
</template>

<script>
export default {
    name:'add-group',
    props:{
        show:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'创建分组'
        }
    },
    data(){
        return {
            name:''
        }
    },
    methods:{
        toParent(){
            if(this.name!=""){
                this.$emit('event1',this.name)
                this.name = ''
            }else{
                uni.showToast({
                    title:'请输入组名称',
                    icon:'none',
                    position:"bottom"
                })
            }
        },
        hide(){
            this.$emit('event2',false)
        }
    }
}
</script>

<style>

</style>