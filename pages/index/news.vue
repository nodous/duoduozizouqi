<template>
	<view class="">
		<view class="header">
			<image src="/static/duoduoBg.jpg" mode="scaleToFill" class="bgImg"></image>
		</view>
		<!-- <view class="titleName">
			<h1>多多自走棋盒子</h1>
			<vie>泡面吐血制作</h2>
			
		</view> -->
		<view class="titleName">
			<view class="text1">多多自走棋盒子</view>
			<view class="author">泡面吐血制作</view>
		</view>
		<view class="content">
			<view class="text1">最近热门</view>
			<view class="contentList uni-flex uni-row"  v-for="(item1, index1) in list1" :key="index1">
				<view class="text" style="width: 200upx;height: 170upx;display: -webkit-flex;display: flex; -webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
					<image src="/static/duoduoBg.jpg" style="border-radius: 20upx;width: 170upx;height: 170upx;"></image>
				</view>
				<view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;">
					<view class="title">
						文字居左，留出左间距
					</view>
                    <view class="uni-flex uni-row" style="margin-bottom:10upx ">
						<uni-rate :size="18" :value="4.2" />
                        <view class="" style="margin-left: 12upx;">8.2</view>
					</view>			
					<view class="rateImg">
						<image src="/static/duoduoBg.jpg" v-for="(item, index) in list" :key="index" class="userImg" :style="{'margin-left':index>0?'-10upx':'0px'}"></image>
						<!-- <image src="/static/duoduoBg.jpg" style="border-radius: 50%;width: 50upx;height: 50upx;"></image> -->
						<view class="personNum">
							35人正在讨论
						</view>
					</view>
					<!-- <view class="uni-flex uni-row">
						<view class="text" style="-webkit-flex: 1;flex: 1;">剩余数量</view>
						<view class="text" style="-webkit-flex: 1;flex: 1;">立即购买</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	export default {
		components: {
			uniRate,uniGrid
		},
		data() {
			return {
				list: [
					0,0,0,0
				],
				list1: [
					0,0,0,0
				]
			}
		},
		methods: {
			radioChange(e) {
				this.showSwiper = e.detail.value === "swiper";
			}
		}
	}
</script>

<style>
	page {
		background: #f9f9f9;
	}
	.title {
		color: #000000;
		font-weight: 600;
		height: 70upx;
		text-align: left;
		font-size: 36upx;
		padding-top: 20upx;
	}
	.rateImg {
		
	}
	.personNum {
		display: inline-block;
		vertical-align: top;
		margin-left: 8upx ;
		color: silver;
	}
	.userImg {
		border-radius: 50%;
		width: 46upx;
		height: 46upx;
	}
	.bgImg {
		width: 100%;
		height:251upx;
	}
	.text {
		margin: 15upx 10upx;
		padding: 0 20upx;
		/* background-color: #ebebeb; */
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	}
	.text1 {
		margin: 15upx 10upx;
		padding: 0 20upx;
		text-align: left;
		color: #777;
		font-weight: 600;
		font-size: 36upx;
	}
	.author {
		margin: 15upx 10upx;
		padding: 0 20upx;
		text-align: left;
		color: #777;
		font-size: 28upx;
	}
	.content {
		padding: 40upx 0;
	}
	.contentList{
		width:700upx;
		margin-left: 25upx;
		background: white;
		margin-bottom: 20upx;
		border-radius: 20upx;
	}
</style>
