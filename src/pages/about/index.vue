<template>
	<view class = "content">
		<view class = "author-intro-div">
			<img 
				class = "author-img" 
				src = "https://yuudachi.cn:444/static/images/article/8f072d3ff68f48b8b270930d6908a421.jpg" 
				alt = "?"
			/>
			<view class = "sub-div">
				<p class = "author-name">邵莲</p>
				<p class = "author-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曾经是舰狗。一名软件工程专业前端方向的学生。这个网站以记录本人日常学习经验、踩过的坑和放作业为主。</p>
			</view>
		</view>
		<view class = "friend-main-div">
			<view v-if = "links.length!==0">
				<view
					v-for = "(item, index) in links" 
					:key = "item.id+index"
					class = "friend-box-ul"
				>
					<img 
						class = "friend-link-icon" 
						:src = "linkIcon" 
						alt = "linkIcon"
					>
					<p 
						:key = "index"
						class = "friend-box-title"  
					>{{item.linkName}}</p>
					<a
						v-for = "(item2, index) in item.linkList"
						:key = "item2.link" 
						target = "_blank" 
						:href = "item2.link" 
						rel = "noopener noreferrer"
					>
						<view
							class = "friend-link" 
							v-if = "item2.imgName !== ''"
						>
							<img 
								:key = "item2.id+index"
								class = "friend-img" 
								:src = "'https://yuudachi.cn:444/static/images/article/'+item2.imgName" 
								:alt = "item2.imgName" 
							/>
							<p 
								:key = "item2.id*index"
								class = "friend-img-title-p"
							>{{item2.desc}}</p>
						</view>
						<view v-else>
							<view :key = "friend-link-div-item2.id">
								<img :src = "linkIcon" alt = "linkIcon"> {{item2.desc}}
							</view>
						</view>
					</a>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				links: [],
				linkIcon: require("../../static/link.svg")
			}
		},
		onLoad() {
			this.getFrendLinks();
		},
		methods: {
			// 获取友链信息
			async getFrendLinks() {
				const res = await this.$myRequest({
								url: this.$CONSTURL.FRIEND_LINK_INFOS
							});
				this.links = res.data.list;
			}
		}
	}
</script>

<style lang="scss">
	.content {
		position: relative;
		align-items: center;
		justify-content: center;
		background-color: #FCFAF2;
		height: 100%;
		overflow: scroll;
	}

	.author-intro-div{
		margin-top: 20rpx;
		position: relative;
		left: 2.5%;
		top: 0px;
		margin-top: 10%;
		display: inline-block;
		width: 95%;
		margin-bottom: 10rpx;
		text-align: center;
		margin-right: 10rpx;
		
		animation: fadeIn ease-out 0.8s;
		.author-img{
			display: inline-block;
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
		}
		.sub-div {
			display: inline-block;
			position: relative;
			width: calc(100% - 195rpx);
			padding: 0rpx 15rpx;

			.author-name{
				display: inline-block;
				height: 20px;
				font-weight: bolder;
				font-family: Arial, Helvetica, sans-serif;
				font-size: 16px;
				color: #96632E;
				opacity: 0.8;
				line-height: 20px;
			}
			.author-intro{
				display: inline-block;
				font-style: normal;
				font-family: Arial, Helvetica, sans-serif;
				font-size: 14px;
				text-align: left;
				color: #96632E;
				text-indent: 1rem;
			}
		}
		
	}
	.friend-main-div{
		position: relative;
		display: inline-block;
		top: 0px;
		left: 0px;
		max-height: 100%;
		text-align: left;
		overflow: scroll;
		animation: fadeIn ease-out 0.8s;
		margin-top: 30rpx;

		&::-webkit-scrollbar-track{
			background-color: none;
		}

		&::-webkit-scrollbar{
			width: 0px;
			background-color: none;
		}
		
		&::-webkit-scrollbar-thumb{
			background-color:  none;
		}

		.friend-box-ul{
			position: relative;
			width: 100%;
			list-style-type: none;
			li{
				padding-left: 5rpx;
			}
			.friend-link-icon {
				display: inline-block;
				margin: 5rpx 5rpx 10rpx 32rpx;
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
				color: #96632E;
			}
		}

		.friend-box-title{
			display: inline-block;
			margin: 0rpx;
			font-weight: bolder;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 16px;
			line-height: 32px;
			color: #96632E;
		}

		.friend-link{
			display: inline-block;
			position: relative;
			overflow: hidden;
			width: 80%;
			margin: 0px 10%;
			margin-bottom: 20rpx;
			border-radius: 8px;
			// color: rgba(107, 103, 97, 0.6);
			transition: all ease-in-out 0.8s;
			
			&:hover, &:focus, &:visited {
				font-size: 14px;
				color:#996600;
				opacity: 0.8;
			}
			.friend-img {
				position: relative;
				display: inline-block;
				width: 100%;
			}
			.friend-img-title-p {
				position: absolute;
				left: 14rpx;
				bottom: 20rpx;
				color: #996600;
				font-weight: bold;
				font-size: 18px;
				z-index: 999;
			}
			&::before {
				content: '';
				width: 150%;
				height: 150%;
				top: 0;
				left: 0;
				position: absolute;
				background-color: rgba($color: #f2f2f2, $alpha: 0.2);
				transition: all ease-in-out 0.8s;
				z-index: 998;
			}
			&:hover::before {
				content: '';
				width: 150%;
				height: 150%;
				top: 0;
				left: 0;
				position: absolute;
				background-color: rgba($color: #f2f2f2, $alpha: 0.6);
				z-index: 998;
			}
		}
}
</style>
