<template>
	<view class="bg-f7 container">
		<u-notice-bar :text="noticeText">
		</u-notice-bar>
		<view class="pdv10">
			<u-swiper :list="banners" circular :autoplay="false" bgColor="#ffffff" height="242" imgMode="cover">
			</u-swiper>
		</view>
		<!-- 第一层 -->
		<view class="bg-white  padh30 marh30 radius20 bs-bb relative" style="316rpx;top:-50rpx">
			<view class="padv10">
				<u-divider text="在线服务" textColor="#666" lineColor="#19C7BD"></u-divider>
			</view>
			<u-grid :border="false" @click="e => $go2(menus[e].path)" :col="4">
				<u-grid-item v-for="(item,index) in menus" :key="index">
					<img mode="aspectFill" :src="item.img" style="width: 95rpx;height: 95rpx;">
					<view class="padv20"></view>
					<text class="c-28 font26">{{item.text}}</text>
				</u-grid-item>
			</u-grid>
			<view class="padv20"></view>
		</view>
		<view class="padv15"></view>
		<!-- 第二层 -->
		<view class="bg-white  padh30 marh30 radius20 bs-bb relative" style="316rpx;top:-50rpx">
			<view class="padv10">
				<u-divider text="查询工具" textColor="#666" lineColor="#19C7BD"></u-divider>
			</view>
			<u-grid :border="false" @click="e => $go2(subMenus[e].path)" :col="4">
				<u-grid-item v-for="(item,index) in subMenus" :key="index">
					<img mode="aspectFill" :src="item.img" style="width: 90rpx;height: 80rpx;">
					<view class="padv20"></view>
					<text class="c-28 font26">{{item.text}}</text>
					<view class="padv20"></view>
				</u-grid-item>
			</u-grid>
		</view>

	</view>
</template>

<script>
	import cellGroup from '../../../uni_modules/uview-ui/libs/config/props/cellGroup'
	export default {
		data() {
			return {
				menus: [{
						text: '房产评估',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/fcpg.png',
						path: '/pages/business1/housePropertyEvaluation'
					},
					{
						text: '过户公司',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/ghgs.png',
						path: '/pages/business1/transferCompany'
					},
					{
						text: '过桥垫资',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/gqdz.png',
						path: '/pages/business1/matEndowment'
					},
					{
						text: '他证加急',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/tzjj.png',
						path: '/pages/business1/expeditedCertification'
					}
				],
				subMenus: [{
						text: '房产抵押',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/fcdy.png',
						path: '/pages/business2/housePropertyMortgage'
					},
					{
						text: '信用贷款',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/xydk.png',
						path: '/pages/business2/unsecuredLoan'
					},
					{
						text: '车辆抵押',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/cldk.png',
						path: '/pages/business2/vehicleMortgage'
					},
					{
						text: '缴税开票',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/jskp.png',
						path: '/pages/business2/payTax'
					},
					{
						text: '计算器',
						img: 'http://43.142.29.179:7700/public/xlxxzx_imgs/jsq.png',
						path: '/pages/business2/calculator'
					}
				],
				noticeText: "有最新方案已更新",
				banners: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				]
			}
		},
		onLoad() {

		},
		methods: {


		}
	}
</script>

<style>

</style>
