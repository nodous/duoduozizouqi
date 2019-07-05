<template>
	<view class="page">
		<swiper indicator-dots="true"  autoplay>
			<swiper-item v-for="(img,key) in imgUrls" :key="key" style="background: rgb(31, 40, 56);">
				<image mode="aspectFit" :src="img" />
			</swiper-item>
		</swiper>
		<view class="uni-padding-wrap uni-common-mt">
			<h2>此婚31</h2>
			<view class="tate">
				<uni-rate :size="18" :value="4.2" />
			</view>
			<view class="uni-title">
				<view>在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。</view>
				<view>在微信小程序端，导航栏始终为不透明样式。</view>
			</view>
			<view class="uni-title uni-common-mt">属性图鉴</view>
			<view class="shuxing">
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">姓名</view>
					<view class="text" style="width:150upx;">{{data1.name}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">外号</view>
					<view class="text" style="width:150upx;">{{data1.Nickname}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">品质</view>
					<view class="text1" style="width:150upx;">{{data1.quality}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">星級</view>
					<view v-for="(item,index) in data1.Cost.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">费用</view>
					<view v-for="(item,index) in data1.Cost.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">生命</view>
					<view v-for="(item,index) in data1.Life.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">護甲</view>
					<view v-for="(item,index) in data1.Armor.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">攻击速度</view>
					<view v-for="(item,index) in data1.sleep.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">魔法抗性</view>
					<view v-for="(item,index) in data1.magicresist.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">攻击距离</view>
					<view v-for="(item,index) in data1.range.split('|')" :key='index' class="text" style="width:150upx;">{{item}}</view>
				</view>
				<view class="uni-title uni-common-mt">属性图鉴</view>

				<view class="uni-flex uni-row">
					<view class="text1" style="width:170upx;">技能</view>
					<view class="text3" style="width:550upx;">{{data1.Speciality}}</view>
				</view>
				<view class="uni-title uni-common-mt">种族职业加成</view>
				<view class="uni-row">
					<view class="text1" style="width:170upx;">地精</view>
					<view class="text3" style="width:690upx;">3：使一个随机友方棋子的护甲增加15，3：使一个随机友方棋子的护甲增加15，每秒生命恢复增加1每秒生命恢复增加10</view>
					<view class="text3" style="width:690upx;">6：所有友方棋子的护甲增加15，每秒生命恢复增加10</view>
				</view>
				<view class="">
					<view class="text1" style="width:170upx;">刺客</view>
					<view class="text3" style="width:690upx;">3：使一个随机友方棋子的护甲增加15，每秒生命恢复增加13：使一个随机友方棋子的护甲增加15，每秒生命恢复增加13：使一个随机友方棋子的护甲增加15，每秒生命恢复增加13：使一个随机友方棋子的护甲增加15，每秒生命恢复增加1</view>
					<view class="text3" style="width:690upx;">6：所有友方棋子的攻击有15%几率造成4倍伤害</view>
				</view>
			</view>
		</view>
		<view style="height: 100upx;"></view>
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
				showSwiper: false,
				imgUrls: [
					"/static/j1.jpg",
					"/static/j2.jpg",
					"/static/question.png"
				],
				data1:{
						name: '王',
						Nickname: '小刺',
						quality: '普通',
						Cost: '1|3|5',
						Life: '100|300|5000',
						Armor:'1|3|5',
						sleep: '1|3|5',
						magicresist:'1|3|5',
						range: '1|3|5',
						Speciality:'麻痹飞镖：向一个随机敌方棋子投掷飞镖造成700魔法伤害和0.1秒的晕眩'

			    }
				,
				data3: [
					{
						text: 'Grid'
					},
					{
						text: 'Grid'
					}
				],
				items: [{
						value: "img",
						name: '静态图',
						checked: true
					},
					{
						value: "swiper",
						name: '轮播图',
						checked: false
					}
				]
			}
		},
		filters: {
	　　　　Upper: function (value) {
	　　　　　　return value.toUpperCase()
	　　　　}, 
	       Lower: function (value) {
			   return value.toLowerCase()
		   }
	　　},
		onLoad(){
		uni.setNavigationBarTitle({
		 title: "默认导航栏"
		})

		},
		methods: {
			radioChange(e) {
				this.showSwiper = e.detail.value === "swiper";
			}
		}
	}
</script>

<style>
	image,
	swiper,
	.img-view {
		width: 750upx;
		height: 500upx;
	}
	.page-section-title{
		margin-top: 50upx;
	}
		.text {
		margin-right: 10upx;
		/* padding: 0 10upx; */
		background-color: #ffd721;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	}
		.text1 {
		margin-right: 10upx;
		/* padding: 0 10upx; */
		background-color: #61e2db;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	}
			.text3 {
		margin-right: 10upx;
		/* padding: 0 10upx; */
		background-color: #ffd721;
		text-align: left;
		overflow: hidden;
		color: #777;
		font-size: 26upx;
	}
</style>
