<template>
	<view class="content">
		<padCarousel :banners = "banners" />
		<articleList :articles = "articles" />
	</view>
</template>

<script>
	import padCarousel from './component/padCarousel.vue';
	import articleList from './component/articleList.vue';
	export default {
		data() {
			return {
				banners: [],
				articles: []
			}
		},
		components: {
			"padCarousel": padCarousel,
			"articleList": articleList
		},
		onLoad() {
			this.getBanners();
			this.getCurrentArctiles();
		},
		methods: {
			// 获取轮播图
			async getBanners() {
                const res = await this.$myRequest({
								url: this.$CONSTURL.GET_ALL_BANNERS
                            });
                this.banners = res.data.banners;
            },
			// 获取最近文章列表
			async getCurrentArctiles() {
				const res = await this.$myRequest({
								url: this.$CONSTURL.GET_ARTICLES_BY_PARAMS
							});
				let list  =  (res.data.infos.list === undefined ? []: res.data.infos.list);
				this.articles = list;
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: $main-background-color;
		animation: fadeIn ease-out 0.8s;
	}
</style>
