<template>
    <div class="photo_item">
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
        name: "PhotoList",
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
    .photo_cantainer{
        width: 90%;
        overflow: hidden;
        margin: 0 auto;
    }
    .photo_box{
        width: 23%;
        padding-bottom: 10px;
        /*height:0;
        padding-bottom:40%;*/
        float: left;
        margin-left: 1%;
        margin-right: 1%;
        box-sizing: border-box;
        margin-bottom: 20px;
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
        padding-bottom:150%;
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
        display: block;
        width: 100%;
        text-align: center;
        margin: 0 auto 0;
        color: grey;
    }
    .photo_box span:hover{
        color: hotpink;
    }

    @media screen and (max-width: 768px) {
        .photo_box{
            width: 48%;
        }
        .photo_box span{
            font-size: 12px;
        }
    }
</style>
