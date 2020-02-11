<template>
	<view class="container bg-one">

        <uni-nav-bar left-icon="back" title="新建发票类型"></uni-nav-bar>

		<view class="invoice">
			<view class="invoice-inform">
				<view class="list-box">
					<view class="titles">
						发票名称
					</view>
					<view class="contact-txt">
						<input type="text"
                        placeholder-class="placeholder-class"
                        placeholder="请输入发票名称"
                        v-model="page.invoice_name"
                        >
					</view>
				</view>
				<view class="invoice-inform-list">
					<view class="invoice-list-box">
						<view class="invoice-list-name invoice-list-name-sele">
							发票类型
						</view>
						<view class="invoice-list-sele">
							<picker @change="bindPickerChange1" :value="index1" :range="array1">
								<view :class="['uni-input',{'select-active':index1==0}]">{{array1[index1]}}</view>
							</picker>
						</view>
					</view>
					<view class="invoice-list-box">
						<view class="invoice-list-name invoice-list-name-sele">
							发票税率
						</view>
						<view class="invoice-list-sele">
							<picker @change="bindPickerChange2" :value="index2" :range="array2">
								<view :class="['uni-input',{'select-active':index2==0}]">{{array2[index2]}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="invoice-inform-list">
					<view class="invoice-list-box">
						<view class="invoice-list-name">
							发票金额
						</view>
						<view class="invoice-list-sele">
							<input type="number"
                            placeholder="请输入金额"
                            placeholder-class="placeholder-class"
                            v-model="page.invoice_money"
                            />
							<text class="num">元</text>
						</view>
					</view>
					<view class="invoice-list-box invoice-list-time">
						<view class="invoice-list-name">
							开票日期
						</view>
						<view class="invoice-list-sele last">
							<picker mode="date"
                            :value="page.invoice_date"
                            :start="startDate"
                            :end="endDate"
                            @change="bindDateChange"
                            >
								<view class="uni-input">{{page.invoice_date}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
			<view class="contract-account">
				<view class="list-box list-textarea">
					<view class="titles">
						付款条件
					</view>
					<view class="contact-txt">
						<textarea 
                            placeholder="请输入条件"
                            placeholder-class="placeholder-class"
                            v-model="page.invoice_requirement"
                        />
					</view>
				</view>
				<view class="list-box list-textarea">
					<view class="titles">
						备注
					</view>
					<view class="contact-txt">
						<textarea 
                        placeholder="请输入备注"
                        placeholder-class="placeholder-class"
                        v-model="page.invoice_description"
                        />
					</view>
				</view>
			</view>
			<view class="contract-file">
				<view class="contract-file-list">
					<view class="file-list-tit">
						发票扫描件上传
					</view>
					<view class="file-list-col">
						<view class="file-list-box" v-for="item in page.invoice_scan_img_path" :key="item.id">
							<image :src="url + item" mode=""></image>
						</view>
						<view class="file-list-box mr0" @tap="uploadImg">
							<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="invoice-button">
				<button @tap="postLocData" type="primary">确定</button>
			</view>
		</view>
	</view>
</template>
<script>
    import { serverURL } from "../../../tool/common/config";
    import assist from "../../../tool/utils/play.js";
	export default {
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
	        return {
	            url : serverURL,
				index1: 0,
                array1: ['请选择发票类型','增值税专用发票', '增值税普通发票', '增值税电子普通发票', '机动车销售统一发票'],
                
				index2: 0,
                array2: ['请选择锐率','13%', '9%', '6%', '3%'],
                            
                page:{
                    project_id:null, // 项目 id
                    contract_id:null, // 合同 id
                    invoice_name:'',  // 发票名称
                    invoice_kind:'',  // 发票类别
                    invoice_ratio:'', // 发票税率
                    invoice_money:'', // 发票金额
                    invoice_date:currentDate, // 开票日期
                    invoice_requirement :'', // 付款条件
                    invoice_description :'', // 备注
                    invoice_scan_img_path:[], // 发票扫描件
                }
	        }
	    },
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
        },
        onLoad(params){
            this.page.contract_id = params.id
            this.page.project_id = uni.getStorageSync('project_id')
           
        },
	    methods: {
            
            postLocData(){
                const {invoice_name, invoice_kind, invoice_ratio, invoice_money} = this.page
                const yz = [
                    {
                        type:'null',
                        val:invoice_name,
                        msg:'请输入发票名称'
                    },
                    {
                        type:'null',
                        val:invoice_kind,
                        msg:'请选择发票类别'
                    },
                    {
                        type:'null',
                        val:invoice_ratio,
                        msg:'请选择发票税率'
                    },
                    {
                        type:'null',
                        val:invoice_money,
                        msg:'请输入发票金额'
                    }
                ]
                assist.ver(yz)

                if(this.page.invoice_name && this.page.invoice_money ){
                    uni.showLoading()
                    this.$api.basicSet.newInvoice(this.page)
                    .then(res=>{
                        if(res.code){
                            uni.showToast({
                                title:'创建发票成功'
                            })
                            setTimeout(function() {
                                uni.navigateBack()
                            }, 500);
                        }
                    })
                }else{
                    uni.showToast({
                        title:'信息需要填写完整'
                    })
                }
            },

            uploadImg(){
                this.$api.publib.uploadFile()
                .then(res=>{
                    console.log(res);
                    this.page.invoice_scan_img_path.push(res.data.file_path)
                })
            },

			bindPickerChange1: function(e) {
				this.index1 = e.target.value
                this.page.invoice_kind = this.array1[e.target.value]
            },
            
			bindPickerChange2: function(e) {
                this.index2 = e.target.value
                this.page.invoice_ratio = this.array2[e.target.value]
            },
            
	        bindDateChange: function(e) {
	            this.page.invoice_date = e.target.value
            },
            
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 60;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
            }
            
	    }
	}
</script>
