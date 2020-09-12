<template>
	<view class = "article-item-main-view" >
		<view 
            :hidden = "articleList.length === 0" 
            v-for = "(item, index) in articleList"
            :key = "item.id"
            class = "article-item-view"
        >
            <view class = "note-title-view">
                <p
                    class = "note-title" 
                    v-html = "item.title"
                ></p>
            </view>
            <div class = "note-icon-view">
                <text class = "note-tag">{{item.tagName}}</text>
                <p class = "note-icon-text">
                    <img :src = "timeIcon" alt = "time"> {{item.addTime}}
                </p>
                <p class = "note-icon-text">
                    <img :src = "watchIcon" alt = "view"> {{item.fire}}
                </p>
            </div>
            <view class = "note-introduce-view">
                <view
                    class = "note-introduce"
                    v-html = "item.introduce"
                ></view>
            </view> 
            <view v-if = "index!==articleList.length-1" class = "spread-line">
                
            </view>
        </view>
        <empty 
            :hidden = "articleList.length !== 0" 
            emptyTitle = "文章正在加载" 
        />
	</view>
</template>

<script>
    import marked from 'marked';
    import hljs from 'highlight.js';
    import Empty from '../../../component/empty.vue';
    import timeIcon from '../../../static/time.png';
    import watchIcon from '../../../static/Watch.png';

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        //渲染
        gfm: true,
        //是否启动严格markdown模式
        pedantic: false,
        //和gfm搭配，同样是渲染用
        tables: true,
        //换行符的样式，需要gfm
        breaks: false,
        //列表样式渲染，默认是false
        smartLists: true,
        highlight: function(code){
            return hljs.highlightAuto(code).value;
        }
    });

	export default {
        props: ['articles'],
        onLoad(){
          
        },
        watch: {
            articles: {
                deep: true,
                handler(nvalue, ovalue) {
                    if (nvalue.length===0) {
                        this.articleList = [];
                        return ;
                    }
                    if(nvalue !== ovalue) {
                        let articleList = this.articleList;
                        for(let i = 0; i < nvalue.length; i++) {
                            let item = nvalue[i];
                            item.introduce = marked(item.introduce);
                            item.title = item.title.replace(/\s+/g, "").replace(/#+/g, "");
                            articleList.push(item);
                        }
                        this.articleList = articleList;
                    }
                }
            }
        },
        components: {
            "empty": Empty
        },
        data(){
            return {
                articleList: [],
                timeIcon: timeIcon,
                watchIcon: watchIcon
            }
        }
	}
</script>

<style lang="scss">
	.article-item-main-view {
        margin-top: 25rpx;
        position: relative;
        width: 100%;
        overflow: scroll;
        padding: 0px 35rpx;
        background-color: $main-background-color;
        
        .article-item-view {
            position: relative;
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 22rpx;
            border: solid 1px transparent;
            border-radius: 10rpx;
            transition: all ease-out 0.8s;
            &:hover {
                border: solid 1px #555;
                scale: 0.95;
            }
            &:not(:nth-child(odd)) {
                margin-right: 2.5%;
            }
        }

        

        .note-title-view {
            position: relative;
            vertical-align: top;
            
            .note-title {
                position: relative;
                display: inline-block;
                width: 100%;
                font-size: 22px;
                font-weight: normal;
                text-align: center;
                font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
                color: #555;
            }
        }
        
        .note-introduce-view {
            position: relative;
            width: 100%;
            box-sizing: border-box;
            padding: 12rpx 20rpx;
            font-size: 14px;
            text-indent: 1.5rem;
            margin-bottom: 30rpx;

            .note-introduce {
                position: relative;
                width: 100%;
                color: #555;
                font-weight: normal;
            }
        }

        .note-icon-view {
            text-align: center;
            margin: 20rpx 0px;

            .note-tag {
                display: inline-block;
                width: auto;
                max-width: 80rpx;
                font-size: 12px;
                padding: 8rpx 14rpx;
                border-radius: 12rpx;
                color: #f2f2f2;
                background-color: $primary-color;
                margin-right: 20rpx;
            }

            .note-icon-text {
                display: inline-block;
                width: auto;
                font-size: 14px;
                font-weight: normal;
                margin-right: 18rpx;

                img {
                    width: 36rpx;
                    height: 36rpx;
                    margin-right: 12rpx;
                    vertical-align: top;
                }
            }
        }

        .spread-line {
            display: inline-block;
            font-size: 12px;
            width: calc(100% - 60rpx);
            text-align: center;
            margin: 0px 30rpx;
            border: dashed 1px #555;
        }
    }
</style>
