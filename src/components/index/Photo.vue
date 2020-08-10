<template>
    <div class="photo_item">
        <h1>推荐摄影</h1>
        <div class="photo_cantainer">
            <div v-for="(item, i) in photos" :key="i" class="photo_box">
                <div class="img">
                    <img :src="item.imgurl" alt="">
                </div>
                <span class="name">{{item.name}}</span>
                <span class="content">{{item.content}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "photo",
        props: {
            photos: {
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
    .photo_item{
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
        margin: 0 auto 20px;
    }
    .photo_cantainer{
        width: 84%;
        overflow: hidden;
        margin: 0 auto;
    }
    .photo_box{
        width: 23%;
        height:0;
        padding-bottom:28%;
        float: left;
        margin-right: 0.9%;
        margin-left: 0.9%;
        margin-bottom: 20px;
        position: relative;
        overflow: hidden;
        border: 1px solid #c7c7c7;
    }
    .photo_box:hover{
        cursor: pointer;
        border: 1px solid hotpink;
    }
    .photo_box .img{
        width: 100%;
        height:0;
        padding-bottom:90%;
        overflow: hidden;
    }
    .photo_box .img img{
        width: 100%;
        transition: all 0.5s linear;
    }
    .photo_box .img img:hover{
        transform: scale(1.2,1.2);
    }
    .photo_box .name{
        display: block;
        width: 100%;
        text-align: center;
        margin: 10px auto 0;
        color: grey;
    }
    .photo_box .content{
        width: 100%;
        display: block;
        text-align: center;
        margin: 10px auto 0;
        color: grey;
    }
    .photo_box span:hover{
        color: hotpink;
    }

    @media screen and (max-width: 768px) {
        .photo_box{
            width: 46%;
            height:0;
            padding-bottom:56%;
        }
    }
</style>
