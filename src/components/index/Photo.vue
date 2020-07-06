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
        width: 1503px;
        margin: 0 auto;
        height: 950px;
    }
    h1{
        color: hotpink;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
        margin-bottom: 30px;
    }
    .photo_cantainer{
        width: 1200px;
        margin: 0 auto;
    }
    .photo_box{
        width: 278px;
        height: 400px;
        float: left;
        margin-left: 20px;
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
        width: 280px;
        height: 280px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .photo_box .img img{
        width: 100%;
        transition: all 0.5s linear;
    }
    .photo_box .img img:hover{
        transform: scale(1.2,1.2);
    }
    .photo_box .name{
        width: 280px;
        text-align: center;
        position: absolute;
        top: 310px;
        left: 0;
    }
    .photo_box .content{
        width: 280px;
        text-align: center;
        position: absolute;
        top: 340px;
        left: 0;
    }
    .photo_box span:hover{
        color: hotpink;
    }
</style>
