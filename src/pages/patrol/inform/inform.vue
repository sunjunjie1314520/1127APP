<template>
	<view class="container bg-one">

		<uni-nav-bar left-icon="back" title="巡检审批"></uni-nav-bar>

		<view class="task-inform">

			<view class="task-inform-inf">
				<view class="task-inform-state">
					<image src="../../../static/img/83f97_98x98.png" mode=""></image>
				</view>
				<view class="task-inform-box">
					<view class="task-inform-tit">
						任务名称
					</view>
					<view class="task-inform-txt">
						南京溧水万达室内装修工程
					</view>
				</view>

				<view class="task-inform-box">
					<view class="task-inform-tit">
						巡检人
					</view>
					<view class="task-inform-txt">
						张三
					</view>
				</view>

				<view class="task-inform-box">
					<view class="task-inform-tit">
						巡检地点
					</view>
					<view class="task-inform-txt">
						4楼
					</view>
				</view>

				<view class="task-inform-box">
					<view class="task-inform-tit">
						巡检时间
					</view>
					<view class="task-inform-txt">
						2019-11-08 17:00
					</view>
				</view>

			</view>

			<view class="task-inform-data">
				<view class="inform-data-inf">
					<text class="tit">任务详情</text>
					<text>撒旦法师法师法师法规范涣发大号梵蒂冈黄金分割罕见的规范化号梵蒂冈黄金分割罕见的规范化。</text>
				</view>
				<view class="inform-data-photo">
					<view class="data-photo-box">
						<image src="../../../static/img/3fff4_150x150.png" mode=""></image>
					</view>
					<view class="data-photo-box">
						<image src="../../../static/img/3fff4_150x150.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="task-inform-feedback">
				<view class="task-inform-title">
					巡检任务指派
				</view>

                <view class="procurement-copy">
                    <view class="procurement-data-label">
                        任务指派
                    </view>
                    <view class="procurement-copy-col">
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-img">
                                <image src="../../../static/img/2f324_97x97.png" mode=""></image>
                            </view>
                        </view>
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-img">
                                <image src="../../../static/img/2f324_97x97.png" mode=""></image>
                            </view>
                        </view>
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-img">
                                <image src="../../../static/img/2f324_97x97.png" mode=""></image>
                            </view>
                        </view>
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-file">
                                <input type="file">
                            </view>
                        </view>
                    </view>
                </view>

                <view class="task-inform-list">
					<view class="task-inform-tit">
						整改状态
					</view>
					<view class="task-inform-inform task-inform-select">
						<picker @change="bindPickerChange" :value="index" :range="array">
						     <view :class="['uni-input','index' + index]">{{array[index]}}</view>
						 </picker>
					</view>
				</view>

				<view class="task-inform-list">
					<view class="task-inform-tit">
						完成时间
					</view>
					<view class="task-inform-input task-inform-input-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
				<view class="task-inform-list task-inform-list-none">
					<view class="task-inform-tit">
						整改意见
					</view>
					<view class="task-inform-input">
						<textarea placeholder-class="placeholder-class" value="" placeholder="请输入整改意见" />
					</view>
				</view>

				<view class="task-inform-upload">
                    <text>现场照片</text>
					<view class="inform-upload-file" @tap="upload()">
						<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
					</view>
				</view>
			</view>

            <!-- 3 -->
			<view class="task-inform-approve">
				<view class="task-inform-title">
					巡检任务整改反馈
				</view>
				<view class="task-inform-list">
					<view class="task-inform-tit">
						任务状态
					</view>
					<view class="task-inform-inform task-inform-select">
						<picker @change="bindPickerChange" :value="index" :range="array">
						     <view class="uni-input">{{array[index]}}</view>
						 </picker>
					</view>
				</view>
				<view class="task-inform-list">
					<view class="task-inform-tit">
						完成时间
					</view>
					<view class="task-inform-inform task-inform-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>

                <view class="task-inform-data">
                    <view class="inform-data-inf">
                        <text class="tit">任务详情</text>
                        <text>撒旦法师法师法师法规范涣发大号梵蒂冈黄金分割罕见的规范化号梵蒂冈黄金分割罕见的规范化。</text>
                    </view>
                    <view class="inform-data-photo">
                        <view class="data-photo-box">
                            <image src="../../../static/img/3fff4_150x150.png" mode=""></image>
                        </view>
                        <view class="data-photo-box">
                            <image src="../../../static/img/3fff4_150x150.png" mode=""></image>
                        </view>
                    </view>
			    </view>

                <view class="procurement-copy">
                    <view class="procurement-data-label">
                        任务指派
                    </view>
                    <view class="procurement-copy-col">
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-img">
                                <image src="../../../static/img/2f324_97x97.png" mode=""></image>
                            </view>
                        </view>
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-img">
                                <image src="../../../static/img/2f324_97x97.png" mode=""></image>
                            </view>
                        </view>
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-img">
                                <image src="../../../static/img/2f324_97x97.png" mode=""></image>
                            </view>
                        </view>
                        <view class="procurement-copy-box">
                            <view class="procurement-copy-file">
                                <input type="file">
                            </view>
                        </view>
                    </view>
                </view>

                <view class="task-inform-list">
					<view class="task-inform-tit">
						整改状态
					</view>
					<view class="task-inform-inform task-inform-select">
						<picker @change="bindPickerChange" :value="index" :range="array">
						     <view class="uni-input">{{array[index]}}</view>
						 </picker>
					</view>
				</view>

				<view class="task-inform-list">
					<view class="task-inform-tit">
						完成时间
					</view>
					<view class="task-inform-input task-inform-input-picker">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
				<view class="task-inform-list task-inform-list-none">
					<view class="task-inform-tit">
						整改意见
					</view>
					<view class="task-inform-input">
						<textarea value="" placeholder="请输入整改意见" />
					</view>
				</view>
                
				<view class="task-inform-upload">
                    <text>现场照片</text>
					<view class="inform-upload-file" @tap="upload()">
						<image src="../../../static/img/0c2f3_55x55.png" mode=""></image>
					</view>
				</view>
				<view class="task-inform-evaluation">
					<view class="task-inform-tit">
						工作效率
					</view>
					<view class="inform-evaluation-list">
						<uni-rate value="2" max="7" size="30"></uni-rate>
					</view>
				</view>	
				<view class="task-inform-evaluation">
					<view class="task-inform-tit">
						工作效率
					</view>
					<view class="inform-evaluation-list">
						<uni-rate value="2" max="7" size="30"></uni-rate>
					</view>
				</view>	
				<view class="task-inform-evaluation">
					<view class="task-inform-tit">
						工作效率
					</view>
					<view class="inform-evaluation-list">
						<uni-rate value="2" max="7" size="30"></uni-rate>
					</view>
				</view>	
			</view>
			<view class="task-inform-button">
				<button type="primary">确定</button>
			</view>
		</view>
	</view>
</template>
<script>
 	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
            uniRate,
        },
	    data() {
	            const currentDate = this.getDate({
	                format: true
	            })
	            return {
	                title: 'picker',
	                array: ['请选择任务状态','待整改', '美国', '巴西', '日本'],
	                index: 0,
	                date: currentDate,
	                time: '12:01'
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
	    methods: {
			upload(){
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                console.log(uploadFileRes.data);
				            }
				        });
				    }
				});
			},
	        bindPickerChange: function(e) {
	            console.log('picker发送选择改变，携带值为', e.target.value)
	            this.index = e.target.value
	        },
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },
	        bindTimeChange: function(e) {
	            this.time = e.target.value
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
        },
        onPageScroll(res){
            console.log(res.scrollTop);//距离页面顶部距离
        },
	}
</script>

<style lang="scss" scoped>
    .procurement-data-label{
        height: auto;
        line-height: 1;
    }
    .procurement-copy-col{
        padding: 29upx 0 38upx;
        border-bottom: 0.5px solid #ededed;
    }
</style>