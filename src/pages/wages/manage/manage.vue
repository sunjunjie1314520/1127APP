<template>
    <view class="container bg-one">
        <uni-nav-bar left-icon="back" title="工资管理"></uni-nav-bar>
        <view class="wages-name">
            <text class="h2">南京溧水万达智能化项目</text>
            <view class="wrap">
                <view class="item item-one">
                    <text class="p">2019</text>
                    <picker @change="bindPickerChange" :value="index" :range="array">
                        <text class="h3">{{array[index]}}<text class="small">月</text></text>
                    </picker>
                </view>
                <view class="item item-two">
                    <text class="p">总计(元)</text>
                    <text class="h3">238819<text class="small">.00</text></text>
                </view>
            </view>
        </view>
        <view class="wages-table">
            <view class="ul">
                <view class="li head">
                    <text class="s1">序号</text>
                    <text class="s2 w1">姓名</text>
                    <text class="s3">出勤</text>
                    <text class="s4">加班</text>
                    <text class="s4">日薪</text>
                    <text class="s4 w2">月薪</text>
                    <text class="s4 w1">工资</text>
                </view>
                <view class="li">
                    <text class="s1">1</text>
                    <text class="s2 w1">张三</text>
                    <text class="s3">全勤</text>
                    <text class="s4">1天</text>
                    <text class="s4">100</text>
                    <text class="s4 w2">2000</text>
                    <text class="s4 color w1">2000.00</text>
                </view>
                <view class="li">
                    <text class="s1">2</text>
                    <text class="s2 w1">张三</text>
                    <text class="s3">全勤</text>
                    <text class="s4">1天</text>
                    <text class="s4">100</text>
                    <text class="s4 w2">2000</text>
                    <text class="s4 color w1">2000.00</text>
                </view>
                <view class="li">
                    <text class="s1">1</text>
                    <text class="s2 w1">张三</text>
                    <text class="s3">全勤</text>
                    <text class="s4">1天</text>
                    <text class="s4">100</text>
                    <text class="s4 w2">2000</text>
                    <text class="s4 color w1">2000.00</text>
                </view>
                <view class="li">
                    <text class="s1">1</text>
                    <text class="s2 w1">张三</text>
                    <text class="s3">全勤</text>
                    <text class="s4">1天</text>
                    <text class="s4">100</text>
                    <text class="s4 w2">2000</text>
                    <text class="s4 color w1">2000.00</text>
                </view>
                <view class="li">
                    <text class="s1">1</text>
                    <text class="s2 w1">张三</text>
                    <text class="s3">全勤</text>
                    <text class="s4">1天</text>
                    <text class="s4">100</text>
                    <text class="s4 w2">2000</text>
                    <text class="s4 color w1">2000.00</text>
                </view>
                <view class="li">
                    <text class="s1">1</text>
                    <text class="s2 w1">张三</text>
                    <text class="s3">全勤</text>
                    <text class="s4">1天</text>
                    <text class="s4">100</text>
                    <text class="s4 w2">2000</text>
                    <text class="s4 color w1">2000.00</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return {
            array: ['9', '10', '11', '12'],
            index: 0,
        }
    },
    methods:{
        bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.target.value)
            this.index = e.target.value
        },
    }
}
</script>

<style>

</style>