<template>
    <view class = "search-modal-main-div">
        <view class = "search-model-wrap">
            <view class = "search-model-title">
                <text>搜索文章</text>
                <icons 
                    class = "close" 
                    type = "close"
                    @click = "closeModal"
                    size = "15" 
                    color = "white"
                />
            </view>
            <view class = "search-model-body">
                <view class = "drop-down-main-menu">
                    <button 
                        class = "drop-down-choice-btn" 
                        @click = "showMenuFunc"
                    >{{choicedTag.tagName}}</button>
                    <ul 
                        class = "drop-down-menu" 
                        v-if = "showMenu"
                    >
                        <li 
                            class = "drop-down-item"
                            v-for = "item in tags" 
                            :key = "item.typeId" 
                            @click = "choiceItem(item)"
                        >{{item.tagName}}</li>
                    </ul>
                    <input
                        :value = "title"
                        maxlength = "20"
                        class = "search-model-input" 
                        type = "text" 
                        placeholder = "尝试查找" 
                        @input = "changeTitle"
                    />
                </view>
            </view>
            <view class = "btn-group">
                <button class = "cancel-btn" @click = "closeModal">取消</button>
                <button class = "ok-btn" @click = "findArticle">查找</button>
            </view>
        </view>
    </view>
</template>

<script>
    import icons from '../../../component/uni-icons/uni-icons.vue';
    export default {
        data(){
            return {
                showMenu: false,
                title: ''
            }
        },
        props: ["tags", "choicedTag"],
        components: {
            "icons": icons
        },
        methods: {
            closeModal() {
                uni.$emit('cancel-search');
            },
            showMenuFunc() {
                this.showMenu = !this.showMenu;
            },
            choiceItem(item) {
                uni.$emit('chooceItem', item);
                this.showMenu = false;
            },
            changeTitle(e) {
                this.title = e.detail.value.replace(/\s+/g, "");
            },
            findArticle(){
                uni.$emit('article-search', this.title);
                this.title = '';
            }
        }
    }
</script>

<style lang="scss">
    .search-modal-main-div {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);

        .search-model-wrap {
            position: relative;
            display: inline-block;
            width: 95%;
            left: 2.5%;
            top: 220rpx;
            animation: jumpOut ease-out 0.4s;
        }

        .search-model-title {
            position: relative;
            background-color: $primary-color;
            color: #f2f2f2;
            border-top-left-radius: 10rpx;
            border-top-right-radius: 10rpx;
            font-size: 14px;
            font-weight: normal;
            padding: 10rpx 30rpx;

            .close {
                position: absolute;
                right: 30rpx;
                top: 12rpx;
            }
        }
    }

    .search-model-body{
        position: relative;
        background-color: $primary-color;
        padding: 20rpx 0px;

        .drop-down-main-menu {
            position: relative;
            width: calc(100% - 60rpx);
            padding: 10rpx 30rpx;
            text-align: left;
            vertical-align: middle;
            

            .drop-down-choice-btn {
                display: inline-block;
                width: 120rpx;
                height: 42rpx;
                line-height: 42rpx;
                margin-right: 20rpx;
                border: none;
                padding: 0;
                font-size: 14px;
                background-color: $secondary-color;
                color: #f2f2f2;
            }
            .drop-down-menu {
                list-style: none;
                position: absolute;
                z-index: 1000 !important;
                width: 120rpx;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                text-align: center;
                justify-content: center;
                display: flex;
                flex-direction: column;
                animation: fadeIn ease-out 0.4s;

                li {
                    position: relative;
                    width: 100%;
                    display: inline-block;
                    font-size: 12px;
                    background-color: $secondary-color;
                    color: #f2f2f2;
                    margin: 0;
                    padding: 8rpx 0rpx;

                    &:hover{
                        background-color: $primary-color;
                    }
                    &:not(:last-child) {
                        border-bottom: solid 1px $primary-color;
                    }
                }
            }
        }
        .search-model-input {
            display: inline-block;
            width: calc(100% - 160rpx);
            border-radius: 10rpx;
            text-indent: 0.5rem;
        }
    }

    .btn-group {
        position: relative;
        width: 100%;
        display: block;
        background-color: $primary-color;
        justify-content: center;
        align-items: center;
        text-align: right;

        button {
            position: relative;
            display: inline-block;
            width: 120rpx;
            font-size: 12px;
            height: 42rpx;
            line-height: 42rpx;
            font-weight: normal;
            border: none;
            margin-right: 20rpx;
            color: $secondary-color;
        }

        .ok-btn {
            background-color: $secondary-color;
            color: #f2f2f2;
        }

        .cancel-btn {
            background-color: #f2f2f2;
            color: black;
        }
    }

</style>