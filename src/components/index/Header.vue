<template>
    <div class="header_item">
        <ul>
            <li :style="{width: 1 / 4 * 100+'%',}"><router-link :to="{name: 'photo'}">摄影</router-link></li>
            <li :style="{width: 1 / 4 * 100+'%',}"><router-link :to="{name: 'comment'}">话题</router-link></li>
            <li :style="{width: 1 / 4 * 100+'%',}"><router-link :to="{name: 'airtle'}">文章</router-link></li>
            <li :style="{width: 1 / 4 * 100+'%',}"><router-link :to="{name: 'activity'}">资讯</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .header_item{
        width: 100%;
        height: 100px;
    }
    .header_item ul{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .header_item ul li{
        float: left;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .header_item ul li a{
        text-decoration: none;
        color: grey;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 40px;
        font-family: "楷体";
    }
    .header_item ul li a:hover{
        color: hotpink;
    }
</style>
