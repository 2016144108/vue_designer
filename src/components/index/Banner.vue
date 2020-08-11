<template>
    <div class="banner_container" @mouseenter="autostop" @mouseleave="autostart">
        <ul class="images" :style="{
        width: banners.length * 100+'%',
        marginLeft: -index*100+'%',
        }">
            <li v-for="(item, i) in banners" :key="i" :style="{
        width: 1 / banners.length * 100+'%',
        }">
                <img style="width: 100%" :src="item.imgurl" alt="">
            </li>
        </ul>
        <ul class="dots">
            <li v-for="(item, i) in banners" :key="i" :class="{active: i === index}" @click="index = i"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        props: {
            banners: {//配置属性
                type: Array,//配置属性类型
                required: true,//必须传递该属性
            }
        },
        created(){//组件创建
          this.autostart();
        },
        data(){
            return{
                index: 0,
                timer: null,
            };
        },
        methods: {
            autostart(){//自动切换
                if(this.timer){
                    return;
                }
                this.timer = setInterval(()=>{
                    this.index= ( this.index + 1) % this.banners.length;
                    console.log("轮播");
                },2000)
            },
            autostop(){//自动停止
                clearInterval(this.timer);
                this.timer = null;
                console.log("停止");
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
    .banner_container{
        width: 100%;
        height:0;
        padding-bottom:40%;
        overflow: hidden;
    }
    .images{
        height:0;
        padding-bottom:40%;
        overflow: hidden;
    }
    .images li{
        float: left;
    }
    .images li img{
         width: 100%;
     }
    .dots li{
        width: 50px;
        height: 8px;
        background-color: white;
        float: left;
        margin-left: 10px;
        opacity: 0.3;
        cursor: pointer;
    }
    .dots .active{
        opacity: 0.8;
    }
    .dots{
        width: 200px;
        margin-top: -50px;
        margin-left: 50%;
        transform: translate(-50%,0);
    }

    @media screen and (max-width: 768px) {
        .dots{
            display: none;
        }
    }
</style>
