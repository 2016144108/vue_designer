<template>
    <div class="item_item">
        <div class="logo">
            <router-link :to="{name:'index'}">
                <p>汉服荟</p>
                <p>打造汉式生活</p>
            </router-link>
        </div>
        <div class="form_item">
            <input type="text" placeholder="搜索">
        </div>
        <div v-if="!data" class="button_item">
            <button @click="goLogin">登录</button>
            <button>下载APP</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Item",
        computed: {
            ...mapState('loginUser', ['data', 'isLoading']),
        },
        methods:{
            goIndex(){
                this.$router.push({
                    name: 'index',
                });
            },
            goLogin(){
                this.$router.push({
                    name: 'login',
                });
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
    .item_item{
        width: 1503px;
        height: 600px;
        overflow: hidden;
        position: relative;
        margin-top: -600px;
    }
     .logo a{
         text-decoration: none;
    }
    .item_item .logo{
        position: absolute;
        top: 30px;
        left: 30px;
        cursor: pointer;
    }
    .logo p:nth-of-type(1){
        font-size: 65px;
        font-family: "楷体";
        color: white;
    }
    .logo p:nth-of-type(2){
        font-size: 16px;
        color: white;
        letter-spacing: 18px;
        margin-left: 22px;
    }
    .item_item .form_item{
        position: absolute;
        top: 30px;
        right: 50px;
    }
    .form_item input{
        width: 240px;
        height: 32px;
        border: none;
        background-color: rgba(0, 0, 0, 0.54);
        padding-left: 10px;
    }
    .item_item .button_item{
        margin:  500px auto 0;
    }
    .button_item button:nth-of-type(1){
        width: 120px;
        height: 32px;
        line-height: 32px;
        font-size: 15px;
        color: white;
        background-color: dodgerblue;
        border: 1px solid dodgerblue;
        margin-right: 50px;
        cursor: pointer;
    }
    .button_item button:nth-of-type(2){
        width: 120px;
        height: 32px;
        line-height: 32px;
        font-size: 15px;
        color: white;
        background-color: hotpink;
        border: 1px solid hotpink;
        cursor: pointer;
    }
</style>
