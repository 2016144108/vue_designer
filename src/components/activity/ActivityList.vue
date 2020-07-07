<template>
    <div class="a_item">
        <h1>活动瞬间</h1>
        <div class="activity_container">
            <div v-for="(item, i) in activitys" :key="i" class="activity_box">
                <div class="img">
                    <img :src="item.imgurl" alt="">
                </div>
                <p>汉式生活馆</p>
                <p>{{item.title}}</p>
                <p>{{item.intro}}</p>
                <p>{{item.starttime}} ~ {{item.endtime}}</p>
                <p @click="join" :class="{go: item.state}" v-if="item.state">进行中</p>
                <p v-if="!item.state">已结束</p>
                <div class="imgbox">
                    <img :src="item.logo" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityList",
        props: {
            activitys: {
                type: Array,
                default: [],
                required: true,
            }
        },
        methods: {
            join(){
                alert("关注成功");
            },
        },
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .a_item{
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
    .activity_container{
        width: 1200px;
        margin: 0 auto;
    }
    .activity_box{
        width: 1198px;
        height: 450px;
        border: 1px solid #c7c7c7;
        position: relative;
        overflow: hidden;
        float: left;
        margin-bottom: 20px;
    }
    .activity_box:hover {
        border: 1px solid hotpink;
    }
    .activity_box .img{
        position: absolute;
        top:0;
        left: 0;
        height: 310px;
        overflow: hidden;
        width: 100%;
    }
    .activity_box .img img{
        width: 100%;
    }
    .activity_box p:nth-of-type(1){
        position: absolute;
        top: 320px;
        left: 30px;
        font-size: 14px;
        color: hotpink;
        border: 1px solid hotpink;
        border-radius: 2px;
        padding: 2px;
    }
    .activity_box p:nth-of-type(2){
        position: absolute;
        top: 320px;
        left: 150px;
        font-weight: bold;
        font-size: 20px;
    }
    .activity_box p:nth-of-type(3){
        position: absolute;
        top: 350px;
        left: 30px;
        font-size: 14px;
        color: grey;
    }
    .activity_box p:nth-of-type(4){
        position: absolute;
        top: 380px;
        left: 30px;
        font-size: 18px;
    }
    .activity_box p:nth-of-type(5){
        position: absolute;
        top: 410px;
        left: 30px;
        width: 80px;
        text-align: center;
        height:26px;
        line-height: 26px;
        font-size: 13px;
        border: 1px solid hotpink;
        background-color: white;
        border-radius: 3px;
        color: hotpink;
        cursor: pointer;
    }
    .activity_box p:nth-of-type(5).go{
        position: absolute;
        top: 410px;
        left: 30px;
        width: 80px;
        text-align: center;
        height:26px;
        line-height: 26px;
        font-size: 13px;
        border: 1px solid hotpink;
        background-color: hotpink;
        border-radius: 3px;
        color: white;
        cursor: pointer;
        transition: all 0.2s linear;
    }
    .activity_box p:nth-of-type(5).go:hover{
        background-color: rgba(255, 105, 180, 0.58);
    }
    .activity_box .imgbox{
        position: absolute;
        right: 30px;
        bottom: 50px;
        width: 120px;
    }
    .activity_box .imgbox img{
        width: 100%;
    }
</style>
