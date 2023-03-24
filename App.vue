<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uview-ui/index.scss';
	@import 'sence/scss/sence.scss';

	.cotainer {
		min-height: 100vh;
	}

	.bg-f7 {
		background-color: #f5f5f5;
	}

	.c-28 {
		color: #282828;
	}
</style>
