<template>
    <view class = "drop-down-main-menu">
        <button class = "drop-down-choice-btn">{{currentValue}}</button>
        {{content}}
    </view>
</template>

<script>
    export default {
        data(){
            return {
                selectedItem: {},
                currentValue: '',
                tags: []
            }
        },
        props: ["content"]
    }
</script>

<style lang = "scss">

</style>