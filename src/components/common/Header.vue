<template>
    <div class="header_item">
        <div class="header_box">
            <div class="logo">
                <router-link :to="{name:'index'}"><h1>汉服荟</h1></router-link>
            </div>
            <div class="header_list">
                <ul>
                    <li><router-link :to="{name: 'index'}">首页</router-link></li>
                    <li><router-link :to="{name: 'photo'}">摄影</router-link></li>
                    <li><router-link :to="{name: 'video'}">视频</router-link></li>
                    <li><router-link :to="{name: 'comment'}">问答</router-link></li>
                    <li><router-link :to="{name: 'airtle'}">文章</router-link></li>
                    <li><router-link :to="{name: 'activity'}">活动</router-link></li>
                </ul>
            </div>
            <div class="header_text">
                <span>APP下载</span>
                <template v-if="data">
                    <span style="margin-right: 5px">{{data.loginId}}</span>
                    <span @click="handlerlogout">注销</span>
                </template>
                <template v-else>
                    <span style="margin-right: 5px"><router-link :to="{name: 'login'}">登录</router-link></span>
                    <span><router-link :to="{name: 'register'}">注册</router-link></span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Header",
        computed: {
            ...mapState('loginUser',['data','isLoading']),
        },
        methods: {
            handlerlogout(){
                alert(this.data.loginId+"退出");
                this.$store.dispatch("loginUser/logout");
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
    .header_item{
        width: 1502px;
        height: 70px;
        margin-top: -60px;
    }
    .header_box{
        width: 1503px;
        height: 70px;
        background-color: white;
        position: relative;
        box-shadow: 0 5px 15px darkgrey;
    }
    .header_box .logo{
        height: 70px;
        position: absolute;
        top: 0;
        left: 100px;
    }
    .header_box .logo h1{
         height: 70px;
         width: 140px;
         line-height: 70px;
         position: absolute;
         top: 0;
         left: 100px;
        color: hotpink;
        font-weight:normal;
        font-family: "楷体";
        cursor: pointer;
        font-size: 42px;
     }
    .header_box .header_list{
        position: absolute;
        top: 0;
        left: 400px;
        height: 70px;
        width: 480px;
    }
    .header_box .header_list ul{
         height: 70px;
         width: 480px;
    }
    .header_box .header_list ul li{
        height: 70px;
        width: 80px;
        float: left;
    }
    .header_box .header_list ul li a{
        height: 70px;
        width: 80px;
        line-height: 70px;
        text-align: center;
        color: black;
        text-decoration: none;
    }
    .header_box .header_list ul li a:hover{
        cursor: pointer;
        color: hotpink;
    }
    .header_box .header_text{
        height: 70px;
        width: 210px;
        position: absolute;
        top: 0;
        right: 180px;
    }
    .header_box .header_text span{
        float: left;
        height: 70px;
        line-height: 70px;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s linear;
    }
    .header_box .header_text span a{
        text-decoration: none;
        color: black;
    }
    .header_box header_text span:hover{
        color: hotpink;
    }
    .header_box .header_text span:nth-of-type(1){
        margin-right: 50px;
    }

</style>
