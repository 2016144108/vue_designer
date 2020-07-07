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
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 24px;
        font-weight: normal;
        color: hotpink;
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
    }
    .video_container .video_box video{
        width: 100%;
    }
    .video_container .video_box p{
        width: 100%;
        text-align: left;
        margin-top: 5px;
    }
    .video_container .video_box p:hover{
        color: hotpink;
        cursor: pointer;
    }
</style>
