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
        name: "title",
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
        width: 1503px;
        margin: 0 auto;
        height: 900px;
    }
    h1{
        color: hotpink;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
        margin-bottom: 30px;
    }
    .title_cantainer{
        width: 1200px;
        margin: 0 auto;
    }
    .title_box{
        width: 588px;
        height: 260px;
        float: left;
        margin-left: 10px;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
        border: 1px solid #c7c7c7;
    }
    .title_box:hover{
        cursor: pointer;
        border: 1px solid hotpink;
    }
    .title_box .img{
        width: 588px;
        height: 200px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .title_box .img img{
        width: 100%;
    }
    .title_box .content{
        width: 568px;
        text-align: left;
        position: absolute;
        top: 210px;
        left: 0;
        color: grey;
        padding: 0 10px;
        font-size: 14px;
    }
    .title_box .content:hover{
        color: hotpink;
        text-decoration: underline;
    }
</style>
