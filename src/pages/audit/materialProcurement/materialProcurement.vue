<template>
	<view class="container bg-one">
        <view class="procurement">
            <view class="procurement-col">
                <div class="procurement-data">
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            付款单位：
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" value="南京*******公司">
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            费用类型：
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" value="材料采购">
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            发票名称
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" value="预付款">
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            发票金额(元)
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" value="32324">
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            开票时间
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" value="2019-10-20 13:00">
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            收款金额
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" placeholder="请输入收款金额">
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            收款时间
                        </div>
                        <div class="procurement-data-input">
                            <input type="text" placeholder="请选择收款时间">
                            <div class="datas"></div>
                        </div>
                    </view>
                    <view class="procurement-data-box">
                        <div class="procurement-data-label">
                            备注
                        </div>
                        <div class="procurement-data-text">
                            <textarea name="" id="" cols="0" rows="0" placeholder="请填写备注内容"></textarea>
                        </div>
                    </view>
                    <div class="procurement-data-file">
                        <div class="procurement-data-title">
                            附件
                        </div>
                        <div class="procurement-data-file-col">
                            <div class="procurement-file-box">
                               <input type="file"> 
                            </div>
                        </div>
                    </div>
                </div>
            </view>
            <div class="procurement-button">
                <button>确定</button>
            </div>
        </view>
    </view> 
</template>