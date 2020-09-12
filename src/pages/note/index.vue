<template>
	<view class = "content">
		<artcleList :articles = "articles" />
		<view 
			class = "top" 
			:style = "{'display':(showBackToTop === true? 'block':'none')}"
		>
			<uni-icons 
				class = "sl-icon topc" 
				type = "arrowthinup"
				@click = "backToTop"
				size = "15" 
				color = "white"
			/>
		</view>
		<uni-icons 
			:hidden = "wannerSearch"
			class = "sl-icon search-icon" 
			type = "search"
			@click = "wannerSearchFunction" 
			size = "15"
			color = "white" 
		/>
		<searchModal 
			:hidden = "!wannerSearch" 
			:tags = "tags" 
			:choicedTag = "choicedTag"
		/>
	</view>
</template>

<script>
	import artcleList from './component/articleList.vue';
	import icons from '../../component/uni-icons/uni-icons.vue';
	import searchModal from './component/searchModal.vue';

	export default {
		data() {
			return {
				isLastPage: false,
				pn: 1,
				articles: [],
				windowHeight: 0,
				isGetting: false,
				showBackToTop: false,
				wannerSearch: true,
				tags: [],
				choicedTag : {
                    tagName: "All",
                    typeId: 0
                },
			}
		},
		onPageScroll(res){
			const query = uni.createSelectorQuery().select('.article-item-main-view');
			// 处理是否显示返回头部的功能按钮
			if(!this.showBackToTop && res.scrollTop > 600) {
				this.showBackToTop = true;
			} else if(res.scrollTop < 600){
				if(this.showBackToTop) {
					this.showBackToTop = false;
				}
			}
			// 监听是否应该去获取新一轮的数据
			query.boundingClientRect(data => {
				let flag = (data.top + data.height - 80) < this.windowHeight;
				if(flag && !this.isGetting) {
					this.getArticles();
				}
			}).exec();
		},
		onLoad() {
			this.getArticles();
			this.getTagInfos();
			// 获取当前屏幕的高度
			uni.getSystemInfo({  
                success: (res) => {  
                    this.windowHeight = res.windowHeight;
                }  
			});
			// 申请全局事件，辅助文章列表搜索
			uni.$on('article-search',(title)=>{
				this.pn = 1;
				this.getArticles(title);
				this.wannerSearch = false;
				this.articles = [];
			});
			uni.$on('cancel-search', ()=>{
				this.wannerSearch = false;
			});
			uni.$on('chooceItem', (item)=>{
				this.choicedTag = item;
			})
		},
		components: {
			"artcleList": artcleList,
			"uni-icons": icons,
			"searchModal": searchModal
		},
		methods: {
			async getArticles (title = undefined){
				if(!this.isGetting && !this.isLastPage) {
					this.isGetting = true;
					let temp;
					if(title === undefined || title.length === 0){
						temp = "?pn=" + this.pn;
					} else {
						temp = "?pn=" + this.pn + "&title=" + title;
						this.articles = [];
					}
					if(this.choicedTag.typeId !== 0) {
						temp = temp + "&typeId=" + this.choicedTag.typeId;
					}
					console.log(temp)
					let url = this.$CONSTURL.GET_ARTICLES_BY_PARAMS + temp;
					const res = await this.$myRequest({
									url: url
								});
					this.articles = res.data.infos.list;
					this.isLastPage = res.data.infos.isLastPage;
					if(!res.data.infos.isLastPage) {
						this.pn = this.pn + 1;
					} else {
						uni.showToast({
							title: '作者很懒，就写了这些文章',
							icon: 'none',
							duration: 2000
						});
					}
					this.isGetting = false;
				}
			},
			async getTagInfos(){
                let list = [];
                let first = this.choicedTag;
                list.push(first);
                const result = await this.$myRequest({
									url: this.$CONSTURL.GET_ARTICLES_BY_PARAMS+"s"
                                });
				list = [...list, ...result.data.infos.list];
				this.tags = list;
            },
			backToTop() { 
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			wannerSearchFunction() {
				this.wannerSearch = true;
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
	}
	.top {
		position: relative;
		display: none; 
		animation: fadeIn ease-out 0.8s;
	}
	
	.sl-icon {
		position: fixed;
		right: 12rpx;
		background: $primary-color;
		color: $secondary-color;
		height: 70rpx;
		width: 70rpx;
		border-radius: 50%;
		line-height: 70rpx;
		animation: fadeIn ease-out 0.8s;
		cursor: pointer;
	}
	.search-icon {
		top: 10%;
	}
	.topc {
		top: 75%;
	}
</style>
