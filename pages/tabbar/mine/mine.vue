<template>
	<view class="bg-f7 container">
		<view style="height: 385rpx; background-color: #19C7BD;" class=" flex padh40 j-s a-c">
			<view class="flex a-c">
				<img src="http://43.142.29.179:7700/public/xlxxzx_imgs/lyf.png"
					style="width: 126rpx;height: 126rpx; border-radius: 50%;">
				<view class="padh10"></view>
				<view>
					<view class="c-w font29">超哥</view>
					<view class="padv6">

					</view>
					<view class="bg-white btn-white flex a-c padh30">
						<img src="http://43.142.29.179:7700/public/xlxxzx_imgs/vip.png"
							style="width:24rpx; height:20rpx;">
						<view class="padh6">

						</view>
						<view class="c-6 font24">普通会员</view>
					</view>
				</view>
			</view>
			<u-icon name="arrow-right" color="#fff" size="20"></u-icon>
		</view>
		<view class="bg-white pad30 marh30 raduis20 bs-bb relative" style="height:316rpx;top:-50rpx">
			<view class="font26 c-3">
				我的功能
			</view>
			<view class="padv20">
				<u-gap height="1" bgColor="#eee"></u-gap>
			</view>
			<u-grid :border="false" @click="e => $go2(menus[e].path)" :col="4">
				<u-grid-item v-for="(item,index) in menus" :key="index">
					<img mode="aspectFit" :src="item.img" style="width: 95rpx;height: 95rpx;">
					<view class="padv10"></view>
					<text class="font26 c-28">{{item.text}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="padv15"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menus: [{
					text: '会员中心',
					img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/fcpg.png',
					path: ''
				}],

			}
		},
		onLoad() {

		},
		methods: {


		}
	}
</script>

<style lang="scss">
	.bg-white {
		height: 40rpx;
		border-radius: 25rpx;
		// width: fit-content;
	}
</style>
