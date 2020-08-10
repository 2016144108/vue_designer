<template>
    <div class="title_item">
        <h1>推荐文章</h1>
        <div class="title_cantainer">
            <div v-for="(item, i) in titles" :key="i" class="title_box">
                <div class="img">
                    <img :src="item.imgurl" alt="">
                </div>
                <span class="content">{{item.content}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "titles",
        props: {
            titles: {
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
    .title_item{
        width: 100%;
        margin: 0 auto;
    }
    h1{
        color: hotpink;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
        width: 100%;
        text-align: center;
        margin: 30px auto;
    }
    .title_cantainer{
        width: 84%;
        overflow: hidden;
        margin: 0 auto;
    }
    .title_box{
        width: 48%;
        height:0;
        padding-bottom:20%;
        float: left;
        margin-left: 0.9%;
        margin-right: 0.9%;
        margin-bottom: 10px;
        overflow: hidden;
        border: 1px solid #c7c7c7;
    }
    .title_box:hover{
        cursor: pointer;
        border: 1px solid hotpink;
    }
    .title_box .img{
        width: 100%;
        height:0;
        padding-bottom:32%;
        overflow: hidden;
    }
    .title_box .img img{
        width: 100%;
    }
    .title_box .content{
        display: block;
        width: 100%;
        text-align: left;
        margin-top: 5px;
        font-size: 14px;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 14px;
        color: grey;
    }
    .title_box .content:hover{
        color: hotpink;
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        .title_box{
            width: 98%;
            height:0;
            padding-bottom:40%;
        }
    }
</style>
