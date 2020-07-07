<template>
    <div class="commentlist_item">
        <h1>精彩问答</h1>
        <div class="comment_container">
            <div  v-for="(item, i) in comments" :key="i" class="comment_box">
                <h2>{{item.title}}</h2>
                <p>最佳回答：</p>
                <p>{{item.content}}</p>
                <p>来自：<span>{{item.from}}</span></p>
                <p>回复（{{item.comment}}）</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentList",
        props: {
            comments: {
                type: Array,
                default: [],
                required: true,
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .commentlist_item{
        width: 1503px;
        margin: 0 auto;
    }
    h1{
        margin-top: 30px;
        margin-bottom: 30px;
        color: hotpink;
        margin-left: -5px;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
    }
    .comment_container{
        width: 1200px;
        margin: 0 auto;
    }
    .comment_container .comment_box{
        width: 568px;
        border: 1px solid #c7c7c7;
        height: 110px;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
        padding: 10px;
    }
    .comment_box:hover{
        cursor: pointer;
        border: 1px solid hotpink;
    }
    .comment_container .comment_box h2{
        width: 100%;
        text-align: left;
        font-size: 20px;
    }
    .comment_container .comment_box p:nth-of-type(1){
        width: 100%;
        text-align: left;
        color: hotpink;
    }
    .comment_container .comment_box p:nth-of-type(2){
         width: 100%;
         text-align: left;
        color: grey;
        font-size: 14px;
     }
    .comment_container .comment_box p:nth-of-type(3){
        position: absolute;
        left: 10px;
        bottom: 10px;
        color: grey;
    }
    .comment_container .comment_box p:nth-of-type(3) span{
        color: hotpink;
    }
    .comment_container .comment_box p:nth-of-type(4){
         position: absolute;
         left: 110px;
         bottom: 10px;
        color: grey;
     }
</style>
