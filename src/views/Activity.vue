<template>
    <div class="activity_item">
        <Header/>
        <ActivityList :activitys="activitys"/>
    </div>
</template>

<script>
    import Header from "../components/common/Header"
    import ActivityList from '../components/activity/ActivityList'

    export default {
        name: "Activity",
        components:{
            Header,
            ActivityList,
        },
        data(){
            return{
                activitys: [
                    {
                        title: "穿汉服过新年",
                        intro: "春节是汉民族最重要的节日，没有什么比汉服更配新年的了。穿上汉服与家人们拍一张全家福吧。",
                        starttime: "02.01",
                        endtime: "03.15",
                        state: "进行中",
                        imgurl: require("../assets/b1.png"),
                        logo: require("../assets/l1.jpg"),
                    },
                    {
                        title: "穿汉服过新年",
                        intro: "春节是汉民族最重要的节日，没有什么比汉服更配新年的了。穿上汉服与家人们拍一张全家福吧。",
                        starttime: "02.01",
                        endtime: "03.15",
                        state: "进行中",
                        imgurl: require("../assets/b2.jpg"),
                        logo: require("../assets/l2.png"),
                    },
                    {
                        title: "穿汉服过新年",
                        intro: "春节是汉民族最重要的节日，没有什么比汉服更配新年的了。穿上汉服与家人们拍一张全家福吧。",
                        starttime: "02.01",
                        endtime: "03.15",
                        state: "进行中",
                        imgurl: require("../assets/b3.jpg"),
                        logo: require("../assets/l3.jpg"),
                    },
                    {
                        title: "穿汉服过新年",
                        intro: "春节是汉民族最重要的节日，没有什么比汉服更配新年的了。穿上汉服与家人们拍一张全家福吧。",
                        starttime: "02.01",
                        endtime: "03.15",
                        state: "进行中",
                        imgurl: require("../assets/b4.jpg"),
                        logo: require("../assets/l4.png"),
                    },
                    {
                        title: "穿汉服过新年",
                        intro: "春节是汉民族最重要的节日，没有什么比汉服更配新年的了。穿上汉服与家人们拍一张全家福吧。",
                        starttime: "02.01",
                        endtime: "03.15",
                        state: "进行中",
                        imgurl: require("../assets/b5.jpg"),
                        logo: require("../assets/l5.jpg"),
                    },
                ],
            };
        },
    }
</script>

<style scoped>

</style>
