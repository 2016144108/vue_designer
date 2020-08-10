<template>
    <div class="style_item">
        <ul>
            <li :key="1" :class="{active: 1 === index}" @click="change(1)">周榜单</li>
            <li :key="2" :class="{active: 2 === index}" @click="change(2)">月榜单</li>
            <li :key="3" :class="{active: 3 === index}" @click="change(3)">获奖作</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Style",
        methods: {
            change(id){
                const text = id;
                this.index = id;
                this.$emit("changePic",text);
            }
        },
        data(){
            return{
                actived:true,
                index: 1,
            };
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .style_item{
        width: 100%;
        margin: 30px auto 20px;
        height: 40px;
    }
    ul{
        width: 60%;
        margin-left: 35.5%;
        overflow: hidden;
    }
    ul li{
        float: left;
        margin-right: 50px;
        font-size: 20px;
        text-align: center;
        display: block;
        width: 100px;
        padding: 3px;
    }
    ul li:hover{
        background-color: hotpink;
        float: left;
        margin-right: 50px;
        font-size: 20px;
        cursor: pointer;
        color: white;
    }
    ul li.active{
        color: hotpink;
    }
    ul li.active:hover{
        color: white;
    }


    @media screen and (max-width: 768px) {
        ul{
            width: 100%;
            margin-left: 17%;
            overflow: hidden;
        }
        ul li{
            float: left;
            margin-right: 10px;
            font-size: 20px;
            display: block;
            width: 80px;
            padding: 3px;
        }
    }
</style>
