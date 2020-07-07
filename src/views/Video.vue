<template>
    <div class="video_item">
        <Header/>
        <VideoList :videos="videos"/>
    </div>
</template>

<script>
    import Header from "../components/common/Header"
    import VideoList from "../components/video/VideoList"

    export default {
        name: "Video",
        components: {
            Header,
            VideoList,
        },
        data(){
            return{
                videos: [
                    {
                        url: require("../assets/七朵组合-落花情.mp4"),
                        intro: "20180415长沙潇湘汉服雅集 花朝节+上巳节 活动视频 纪念 混剪。 摄像：大树+红薯。 后期：大树。",
                    },
                    {
                        url: require("../assets/七朵组合-青蛇-舞蹈练习室.mp4"),
                        intro: "20180415长沙潇湘汉服雅集 花朝节+上巳节 活动视频 纪念 混剪。 摄像：大树+红薯。 后期：大树。",
                    },
                    {
                        url: require("../assets/刘珂矣-风筝误.mp4"),
                        intro: "20180415长沙潇湘汉服雅集 花朝节+上巳节 活动视频 纪念 混剪。 摄像：大树+红薯。 后期：大树。",
                    },
                    {
                        url: require("../assets/双笙-故梦.mp4"),
                        intro: "20180415长沙潇湘汉服雅集 花朝节+上巳节 活动视频 纪念 混剪。 摄像：大树+红薯。 后期：大树。",
                    },
                    {
                        url: require("../assets/双笙-琴师.mp4"),
                        intro: "20180415长沙潇湘汉服雅集 花朝节+上巳节 活动视频 纪念 混剪。 摄像：大树+红薯。 后期：大树。",
                    },
                    {
                        url: require("../assets/张晓棠-苏幕遮-宅舞版.mp4"),
                        intro: "20180415长沙潇湘汉服雅集 花朝节+上巳节 活动视频 纪念 混剪。 摄像：大树+红薯。 后期：大树。",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
