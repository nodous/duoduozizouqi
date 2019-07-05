<template>
	<view class="content">
		<view class="page">
			<page-head :title="title"></page-head>
			<view class="uni-product-list">
				<view class="uni-product" v-for="(product,index) in productList" :key="index">
                    <view class="logoImg">
                    	<image v-if="renderImage" class="uni-product-image2" src="/static/1.jpg"></image>
                    </view>
					<view class="image-view1">
						<image v-if="renderImage" class="uni-product-image1" :src="product.image"></image>
					</view>
					<view class="uni-product-title1">{{product.title}}</view>
						<!-- <text class="uni-product-price-original">￥{{product.favourPrice}}</text> -->
						<!-- <text class="uni-product-tip">{{product.tip}}</text> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {
		},
		data() {
			return {
				title: '刺客',
				productList: [],
				renderImage: false
			};
		},
		methods: {
			loadData(action = 'add') {
			    const data = [
			        {
			            image: '/static/2.jpg',
			            title: '刺魂者',
			            originalPrice: 9999,
			            favourPrice: 8888,
			            tip: '自营'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
			            title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
			            originalPrice: 3499,
			            favourPrice: 3399,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
			            title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
			            originalPrice: 12999,
			            favourPrice: 10688,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
			            title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
			            originalPrice: 999,
			            favourPrice: 958,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
			            title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
			            originalPrice: 8888,
			            favourPrice: 8288,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
			            title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
			            originalPrice: 2899,
			            favourPrice: 2799,
			            tip: '优惠'
			        }
			    ];
			
			    if (action === 'refresh') {
			        this.productList = [];
			    }
			
			    data.forEach(item => {
			        this.productList.push(item);
			    });
			}
		},
		onLoad() {
		    this.loadData();
		    setTimeout(()=> {
		        this.renderImage = true;
		    }, 300);
		},
		onPullDownRefresh() {
			console.log('1111')
		    this.loadData('refresh');
		    // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
		    setTimeout(() => {
		        uni.stopPullDownRefresh();
		    }, 2000);
		},
		onReachBottom() {
		    this.loadData();
		}
	};
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	.page {
		position: relative;
	}
	.logoImg {
		width:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image-view1 {
    height: 147upx;
    width: 147upx;
	margin:8upx 0;
}
.uni-product-image1 {
    height: 147upx;
    width: 147upx;
}
.uni-product-image2 {
    height: 60upx;
    width: 60upx;
	/* position: re;
	left: 0;
	top: 0; */
}
.uni-product-title1 {
    width: 147upx;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
	line-height:1.5;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.uni-product-price {
	margin-top:10upx;
    font-size: 28upx;
	line-height:1.5;
    position: relative;
}

</style>
