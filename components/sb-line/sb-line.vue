<template>
	<view :style="{padding:pad + 'rpx 0'}">
		<u-gap height="1" bgColor="#eee"></u-gap>
	</view>
</template>

<script>
	export default {
		name: "sb-line",
		props: {
			pad: {
				type: [Number, String],
				default: '15'
			}


		}
	}
</script>

<style>

</style>
