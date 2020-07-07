<template>
    <div class="videolist_item">
        <h1>推荐视频</h1>
        <div class="video_container">
            <div v-for="(item, i) in videos" :key="i" class="video_box">
                <video :src="item.url" controls=""></video>
                <p>{{item.intro}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoList",
        props: {
            videos: {
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
    .videolist_item{
        width: 1503px;
        margin: 0 auto;
    }
    h1{
        margin-top: 30px;
        margin-bottom: 30px;
        color: hotpink;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
    }
    .video_container{
        width: 1200px;
        margin: 0 auto;
    }
    .video_container .video_box{
        width: 588px;
        border: 1px solid #c7c7c7;
        height: 390px;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .video_container .video_box video{
        width: 100%;
    }
    .video_container .video_box p{
        width: 564px;
        text-align: left;
        margin-top: 5px;
        font-size: 14px;
        padding: 0 10px;
        color: grey;
    }
    .video_container .video_box p:hover{
        color: hotpink;
        cursor: pointer;
    }
</style>
