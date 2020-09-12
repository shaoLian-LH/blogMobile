<script>
	export default {
		onLaunch: function() {
			uni.$on('navigatorToNote', (id) => {
                uni.switchTab({
                    url: `/pages/note/index`,
                    animationType: 'slide-in-right',
                    animationDuration: 300
				});
				setTimeout(()=>{
					uni.$emit('showNote', id);
				}, 150);
			});
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	.uni-page-head__title {
		z-index: 1001 !important;
	}	

</style>
