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
        width: 100%;
        margin: 0 auto;
    }
    h1{
        width: 100%;
        margin: 30px auto;
        color: hotpink;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
    }
    .comment_container{
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
    }
    .comment_container .comment_box{
        width: 48%;
        border: 1px solid #c7c7c7;
        height: 110px;
        float: left;
        margin-right: 1%;
        margin-left: 1%;
        box-sizing: border-box;
        margin-bottom: 10px;
        position: relative;
        padding: 10px 10px 120px 10px;
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
        color: grey;
    }
    .comment_container .comment_box p:nth-of-type(3) span{
        color: hotpink;
    }
    .comment_container .comment_box p:nth-of-type(4){
        color: grey;
        margin-left: 100px;
        margin-top: -20px;
     }

    @media screen and (max-width: 768px) {
        .comment_container .comment_box{
            width: 98%;
        }
    }
</style>
