<template>
    <view id = "detail-note-main-div">
        <view 
            class = 'detail-note-title'
            v-html = "article.title"
        >
        </view>
        <view 
            class = 'detail-note-body' 
            html = "article.content"
        >
        </view>
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
        props: ["article"],
        data() {
            return {
                articleInfo: {}
            }
        },
        watch: {
            article: {
                deep: true,
                handler(nvalue, ovalue) {
                    if(nvalue !== ovalue) {
                        let article = nvalue;
                        article.introduce = marked(article.introduce);
                        article.title = article.title.replace(/\s+/g, "").replace(/#+/g, "");
                        this.articleInfo = article;
                    }
                }
            }
        }
    } 
</script>

<style lang="scss">
    #detail-note-main-div::-webkit-scrollbar{
        width: 5px;
        background-color: #ECE3D9;
    }
    #detail-note-main-div::-webkit-scrollbar-thumb{
        background-color:  rgba( 116, 110, 103, 0.4);
    }
    .anchor-fix{
        color: black;
        pointer-events: none;
    }
    .detail-note-title h1{
        padding-top: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
        color: black;
    }
    p > code{
        display: inline-block;
        padding: 2px 5px;
        background-color: rgba( 116, 110, 103, 0.1);
        color: #F6347A;
        border-radius: 3px;
    }
    em > code {
        display: inline-block;
    }
    #detail-note-main-div{
        color: #886452;
        background-color: #ECE3D9;
        padding: 5px 10px;
        // z-index: 990;
        position: relative;
        height: 100%;
        width: auto;
        min-width: 90%;
        margin: 0px 24px;
        text-align: center;
        overflow-x:hidden;
        overflow-y:auto;
        
        h2, h3, h4, h5, h6{
            font-family: STKaiti,KaiTi;
            font-size: 18px;
            line-height: 18px;
            color:black;
            font-weight: bold;
            pointer-events: none;
        }
        a[class*="anchor"] {
            cursor: default;
            pointer-events: none;
        }
        blockquote{
            padding-left: 10px;
            border-left: 3px solid rgba( 116, 110, 103, 0.8);
            background-color: transparent;
        }
        ul li{
            font: normal 16px/30px KaiTi,STKaiti;
            line-height: 150%;
        }
        table{
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 2px 10px;
        }
        table tr{
            border-bottom: 2px solid rgba( 116, 110, 103, 0.8);
        }
        table tr td:first-child{
            color: rgba( 116, 110, 103, 0.8);
        }
        table tr td{
            border-right: solid 2px rgba( 116, 110, 103, 0.8);
        }
        table tr td:last-child{
            border-right: none;
        }
        table th{
            font: normal 18px/18px KaiTi,STKaiti;
            text-align: center;
        }
        table td{
            font: normal 16px/16px KaiTi,STKaiti;
            text-align: left;
            height: auto;
            padding: 10px;
            min-width: 90px;
        }
        pre{
            position: relative;
            display: inline-block;
            width: 100%;
            padding: 5px 10px;
            margin: 5px 0;
            background: #201E2F;

            &::-webkit-scrollbar-track{
                background-color: #ECE3D9;
            }
            &::-webkit-scrollbar{
                border-radius: 5px;
                width: 3px;
                background-color: #ECE3D9;
            }
            &::-webkit-scrollbar-thumb{
                background-color:  rgba( 116, 110, 103, 0.4);
            }
        }
        code{
            display: inline-block;
            position: relative;
            top: 5px;
            width: auto;
            text-align: left;
            font-weight: normal;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            line-height: 20px;
            overflow-y:hidden;
            color: #F2F2F2;
            span{
                line-height: 150%;
            }
        
        }
        img{
            display: inline-block;
            position: relative;
            width: 100%;
            height: auto;
            margin: 5px 0;
            padding: 0;
        }
    }

    .detail-note-body p{
        padding: 0;
        font: normal 16px/18px KaiTi,STKaiti;
    }
    .detail-note-body{
        width: 90%;
        height: auto;
        display: block;
        position: relative;
        left: 5%;
        text-align: left;
        margin-bottom: 120px;
    }

</style>