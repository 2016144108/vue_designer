<template>
    <div class="show_item">
        <h1>推荐荟吧</h1>
        <div class="show_container" >
            <div v-for="(item, i) in shows" :key="i" class="show_box">
                <div class="img">
                    <img :src="item.imgurl" alt="">
                </div>
                <span>最佳搭配</span>
                <span class="commit">关注：{{item.commit}}</span>
                <span class="look">浏览：{{item.look}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Show",
        props: {
            shows: {
                type: Array,
                default: [],
                required: true,
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
    .show_item{
        width: 1503px;
        height: 450px;
        margin: 0 auto;
    }
    h1{
        color: hotpink;
        font-size: 28px;
        font-weight: bold;
        font-family: "楷体";
        margin-bottom: 30px;
    }
    .show_container{
        width: 1200px;
        margin: 0 auto;
    }
    .show_box{
        width: 228px;
        height: 320px;
        float: left;
        margin-left: 10px;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
        border: 1px solid #c7c7c7;
    }
    .show_box:hover{
        cursor: pointer;
        border: 1px solid hotpink;
    }
    .show_box .img{
        width: 228px;
        height: 228px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .show_box .img img{
        width: 100%;
        transition: all 0.3s linear;
    }
    .show_box .img img:hover{
        width: 100%;
        border-radius: 50%;
    }
    .show_box span{
        color: grey;
    }
    .show_box span:nth-of-type(1){
        position: absolute;
        width: 228px;
        text-align: center;
        top: 250px;
        left: 0;
    }
    .show_box .commit{
        position: absolute;
        top: 280px;
        left: 25px;
    }
    .show_box .look{
        position: absolute;
        top: 280px;
        right: 25px;
    }
</style>
