<template>
    <view class = "empty-div">
      <p class = "empty-hint">QAQ</p>
      <p class = "empty-p">
        {{emptyTitle ? emptyTitle : '没有任何数据呢'}}
      </p>
      <view 
        class = "empty-content" 
        v-if = "content!==undefined"
      >
        {{content}}
      </view>
    </view>
</template>

<script>
    export default {
      props: ['emptyTitle', 'content']
    }
</script>

<style lang="scss">
  .empty-div{
    position: relative;
    width: calc(100% - 4px);
    padding-top: 20%;
    height: 200px;
    border: dashed 2px $primary-color;
    text-align: center;
    background-color: #ECE3D9;

    .empty-hint{
        position: relative;
        font-size: 48px;
        font-weight: bold;
        color: $primary-color;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    .empty-p{
        margin-top: 10px;
        display: block;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        font-family: Arial, Helvetica, sans-serif;
        color:$primary-color;
    }

    .empty-content {
        color:$primary-color;
        font-size: 14px;
        a {
            color:$primary-color;
            font-size: 14px;
            font-weight: bolder;
        }
    }
    img{
        position: relative;
        display: block;
        margin: 0 auto;
        width: 390px;
        height: 160px;
    }
}
</style>
