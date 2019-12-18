<template>
	<view class="container bg-one">

		<uni-nav-bar left-icon="back" title="添加参建单位"></uni-nav-bar>

		<view class="participation">
			<view class="participation-inf">
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						单位名称
					</view>
					<view class="participation-inf-txt">
						<input v-model="page.company_kind" type="text" placeholder="" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						注册公司
					</view>
					<view class="participation-inf-txt">
                        <input v-model="page.company_name" type="text" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						办公电话
					</view>
					<view class="participation-inf-txt">
                        <input v-model="page.company_phone" type="text" />
					</view>
				</view>
				<view class="participation-inf-box">
					<view class="participation-inf-tit">
						详细地址
					</view>
					<view class="participation-inf-txt">
						<input v-model="page.company_address" type="text" />
					</view>
				</view>
				<view class="participation-inf-textarea">
					<view class="participation-inf-tit">
						备注
					</view>
					<view class="participation-inf-txt">
						<textarea value="" placeholder="请输入备注内容" />
					</view>
				</view>
			</view>
			<view class="participation-contact">
				<view class="participation-contact-title">
					<view class="contact-title-txt">
						联系人
					</view>
					<view class="contact-title-func">
						<text>添加</text>
						<image src="../../../static/img/ic40.png" mode=""></image>
					</view>
				</view>
				<view class="participation-contact-list">
					<view class="participation-contact-list-inf">
						<view class="contact-list-inf-img">
							<image src="../../../static/img/im14.png" mode=""></image>
						</view>
						<view class="contact-list-inf-col">
							<view class="contact-list-inf-name">
								<view class="contact-list-inf-name-fl">
									<text>安德鲁</text>
									<text class="label">木工</text>
								</view>
								<view class="contact-list-inf-name-tel">
									<image src="../../../static/img/ic41.png" mode=""></image>
								</view>
							</view>
							<view class="contact-list-inf-txt">
								南京溧水万达
							</view>
						</view>
					</view>
					<view class="participation-contact-list-num">
						<view class="list-num-box">
							<text class="tit">交换名片</text>
							<text>1</text>
						</view>
						<view class="list-num-box">
							<text class="tit">总访问</text>
							<text>0</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nulls"></view>
			<view class="participation-submit">
				<button @tap="submit" type="primary">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
    export default {
        data(){
            return {
                page:{
                    project_id:'0015765828443602fb87fde455145ac918e4b5700ca330a',
                    company_kind:'建筑单位',
                    company_name:'XX建筑有限公司',
                    company_phone:'2969544',
                    company_address:'上海',
                    company_contacts:'27777777777,47777777777'
                }
            }
        },
        created(){
            
        },
        methods:{
            submit(){
                this.$api.participation.add(
                    this.page
                )
                .then(res=>{
                    console.log(res);
                    if(res.code){
                        uni.showToast({
            　　　　　　　  title: '创建成功',
            　　　　　　　　icon: 'none'
            　　　　　　　})
                    }
                })
            }
        }
    }
</script>