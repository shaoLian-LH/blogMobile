<template>
	<view class = "article-list-main-div">
        <view class = "article-list-title-div">
            <p class = "article-list-title">
                <img
                    :src = "articleIcon" 
                    alt="&gt;"
                    class = "article-list-title-icon" 
                />
                最新文章
            </p>
        </view>
        <view class = "article-list-div">
            <view
                class = "article-list-li"
                v-for = "item in articles" 
                :key = "item.id"
            >
                <p class = "article-list-li-tag">{{item.tagName}}</p>
                <p class = "article-list-li-title">{{item.title.replace("# ", "")}}</p>
            </view>
        </view>
	</view>
</template>

<script>
    import ArticleIcon from '../../../static/article.svg';
	export default {
        data() {
            return {
				articleIcon: ArticleIcon
			}
        },
		props: ['articles']
	}
</script>

<style lang="scss">
.article-list-main-div {
    position: relative;
    width: 100%;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
}
.article-list-title-div {
    position: relative;
    width: 100%;
    margin-bottom: 5rpx;
    padding: 10rpx 20rpx;
    background-color: $primary-color;
    color: #f2f2f2;
    display: inline-block;

    .article-list-title-icon {
        display: inline-block;
        margin-right: 20rpx;
        width: 30rpx;
        height: 30rpx;
        vertical-align: middle;
    }
    .article-list-title {
        position: relative;
        font-size: 16px;
        font-weight: normal;
    }
    .article-list-title-arrow {
        position: relative;
        float: right;
    }
}
.article-list-div {
    display: block;
    position: relative;
    width: 100%;
    min-height: 250px;
    overflow: hidden;
    cursor: pointer;

    a {
        color: $secondary-color;
    }

    .article-list-li {
        display: block;
        position: relative;
        left: 0;
        width: 100%;
        padding: 10rpx 0px;
        text-align: left;

        .article-list-li-tag {
            display: inline-block;
            position: relative;
            text-align: center;
            margin: 0px 10px;
            padding: 6rpx 16rpx;
            border-radius: 14rpx;
            font-size: 12px;
            height: 25px;
            line-height: 22px;
            width: auto;
            background-color:$primary-color;
            color: #f2f2f2;
        }

        .article-list-li-title {
            position: relative;
            display: inline-block;
            padding-top: 2px;
            font-size: 14px;
            height: 100%;
        }
    }
}
</style>
