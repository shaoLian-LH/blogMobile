<template>
	<view class = "carousel-main-div">
        <swiper
			indicator-dots 
			circular 
            autoplay
		>
			<swiper-item 
				v-for = "banner in banners"
				:key = "banner.id" 
                @click = "goToArticle(banner.articleId)"
			>
				<view
                    :key = "banner.articleId" 
                    class = "carousel-banner-div"
                >
                    <img 
                        class = "carousel-banner-img" 
                        :src = "'https://yuudachi.cn:444/static/images/article/'+banner.imgName" 
                        alt = "?"
                    />
                    <p class = "carousel-banner-p">{{banner.title}}</p>                                
                </view>
			</swiper-item>
		</swiper>
    </view>
</template>

<script>
	export default {
        props: ['banners'],
        methods: {
            goToArticle(id){
                uni.$emit('navigatorToNote', id);
            }
        }
	}
</script>

<style lang="scss">
	.carousel-main-div {
        position: relative;
        width: 90%;
        box-shadow: 8rpx 8rpx 12rpx rgba(0,0,0,0.4); 
        border-radius: 20rpx;
        z-index: 996 !important;
        padding: 14rpx 20rpx;
        margin-top: 20rpx;
		overflow: hidden;
        background-image: linear-gradient(176deg, #C9C9C9 -15%, #000000,#000000,#000000 );
    }
    .carousel-banner-div {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            position: relative;
            width: 100%;
            height: 320rpx;
        }

        .carousel-banner-p{
            display: block;
            position: absolute;
            height: 25px;
            margin: 0;
            width: auto;
            left: 8rpx;
            top: 8rpx;
            z-index: 999;
            padding: 2px 5px;
            border-radius: 8rpx;
            background-image: linear-gradient( rgba(0,0,0,0.45), rgba(0,0,0,0.35), rgba(0,0,0,0.35), rgba(0,0,0,0.45) );
            color: white;
            font: bold 16px/25px Arial, Helvetica, sans-serif;
        }
    }
    uni-swiper {
        height: 310rpx;
    }
</style>
