<template>
    <view class="container">
        <uni-nav-bar left-icon="back" title="权限修改"></uni-nav-bar>
        <view class="jurisdiction">
            <view class="ul">
                <view class="li first">
                    <text class="span">木工组</text>
                    <view class="fr">
                        <view class="switch">
                            <text>查看</text>
                        </view>
                        <view class="switch">
                            <text>编辑</text>
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">项目详情</text>
                    <view class="fr">
                        <view class="switch">
                            <switch data-detail="0" checked @change="switch1Change" />
                        </view>
                        <view class="switch">
                            <switch data-detail="1" @change="switch2Change" />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">人员管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">出勤管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">参建单位</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">合同管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">材料管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">工具管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">进度管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">任务派发</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">巡检管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
                        </view>
                    </view>
                </view>
                <view class="li">
                    <text class="span">日志管理</text>
                    <view class="fr">
                        <view class="switch">
                            <switch />
                        </view>
                        <view class="switch">
                            <switch checked />
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
        return{

        }
    },
    methods:{
        switch1Change: function (e) {
            console.log(e);
            
            console.log('switch1 发生 change 事件，携带值为', e.target.value)
        },
        switch2Change: function (e) {
            console.log('switch2 发生 change 事件，携带值为', e.target.value)
        }
    }
}
</script>

<style>

</style>