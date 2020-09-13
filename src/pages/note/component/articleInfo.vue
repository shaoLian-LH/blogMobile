<template>
    <view id = "detail-note-main-div">
        <view 
            class = 'detail-note-title'
            v-html = "articleInfo.title"
        >
        </view>
        <view 
            class = 'detail-note-body' 
            v-html = "articleInfo.content"
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
    import 'highlight.js/styles/monokai-sublime.css';

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
        props: ["detail"],
        data() {
            return {
                articleInfo: {}
            }
        },
        watch: {
            detail: {
                deep: true,
                handler(nvalue, ovalue) {
                    if(nvalue !== ovalue) {
                        let a = nvalue;
                        a.introduce = marked(a.introduce);
                        a.title = marked(a.title);
                        a.content = marked(a.content);
                        this.articleInfo = a;
                        uni.pageScrollTo({
                            scrollTop: 0
                        });
                    }
                }
            }
        }
    } 
</script>

<style lang="scss">
   

</style>