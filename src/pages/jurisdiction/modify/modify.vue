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
                <view class="li" v-for="(item,index) in permissions" :key="item.id">
                    <text class="span">{{item.permission_name}}</text>
                    <view class="fr">
                        <view class="switch">
                            <switch
                            :data-permission_id="item.id"
                            :data-index="index"
                            :data-level="1"
                            :checked="item.permission_level == 1 || item.permission_level == 2"
                            @change="switch1Change" />
                        </view>
                        <view class="switch">
                            <switch
                            :data-permission_id="item.id"
                            :data-index="index"
                            :data-level="2"
                            :checked="item.permission_level == 2"
                            @change="switch1Change" />
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
            list:[],
            query:{
                data_index:-1,
                permission_index:-1,
            },
            project_id:null,
            permissions:[]
        }
    },
    onLoad(e){

        this.project_id = uni.getStorageSync('project_id')

        let data = uni.getStorageSync('jurisdiction')
        this.list = data
        console.log(data);
        this.query = e
        
        if(this.list.length>0){
            const { project_persons } = this.list[this.query.data_index]
            this.permissions =  project_persons[this.query.permission_index].permissions
        }
    },
    methods:{
        switch1Change: function (e) {

            let con_level = null

            console.log(this.permissions);
            

            const { permission_id, index, level } = e.currentTarget.dataset
            const { project_id, project_person_id } = this.query
            
            // console.log(e.target.value);
            // console.log(index);
            
            if(level=='1'){

                if(e.target.value){
                    con_level = 1
                }else{
                    con_level = 0
                    this.permissions[index*1].permission_level = 0
                }

            }else{

                if(e.target.value){
                    con_level = 2
                    this.permissions[index*1].permission_level = 2
                }else{
                    con_level = 0
                    this.permissions[index*1].permission_level = 0
                }

            }

            console.log(con_level);
            
            
            this.$api.basicSet.UpdateSee({
                project_id,
                project_person_id,
                project_person_permission_id:permission_id,
                permission_level:con_level
            })
            .then(res=>{
                if(this.$assist.msg(res,'设置权限成功'))
                this.getNetData()
            })
        },
        // 网络数据
        getNetData(){
            this.$api.basicSet.Person({
                project_id:this.project_id
            })
            .then(res=>{
                uni.setStorageSync('jurisdiction',res.data.project_person_groups)
            })
        },
    }
}
</script>

<style>

</style>