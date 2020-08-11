<template>
    <div class="show_item">
        <h1>推荐荟吧</h1>
        <div class="show_container" >
            <div v-for="(item, i) in shows" :key="i" class="show_box">
                <div class="img">
                    <img :src="item.imgurl" alt="">
                </div>
                <span>最佳搭配</span>
                <span class="commit">关注：{{item.commit}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  浏览：{{item.look}}</span>
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
    .show_container{
        width: 84%;
        margin: 0 auto;
        overflow: hidden;
    }
    .show_box{
        width: 18%;
        /*height:0;
        padding-bottom:25%;*/
        float: left;
        box-sizing: border-box;
        padding-bottom: 10px;
        margin-left:1%;
        margin-right: 1%;
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
        width: 100%;
        height:0;
        padding-bottom:100%;
        overflow: hidden;
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
        display: block;
        width: 100%;
        margin: 10px auto 0;
        text-align: center;
    }
    .show_box .commit{
        display: block;
        width: 100%;
        margin: 5px auto 0;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .show_box{
            width: 48%;
        }
        .show_box span{
            font-size: 12px;
        }
        .show_container{
            width:90%;
        }
    }
</style>
