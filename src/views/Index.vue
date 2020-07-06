<template>
    <div style="width: 1503px;margin: 0 auto" class="index_item">
        <Banner :banners="banners"/>
        <Header/>
        <Photo :photos="photos"/>
        <Show :shows="shows"/>
        <Title :titles="titles"/>
    </div>
</template>

<script>
    import Banner from '../components/index/Banner'
    import Header from '../components/index/Header'
    import Photo from '../components/index/Photo'
    import Show from '../components/index/Show'
    import Title from '../components/index/Title'

    export default {
        name: "Index",
        components: {
            Banner,
            Header,
            Photo,
            Show,
            Title,
        },
        data(){
            return{
                banners: [
                    {
                        imgurl: require("../assets/qr (8).jpg"),
                    },
                    {
                        imgurl: require("../assets/qr (11) - 副本.jpg"),
                    },
                    {
                        imgurl: require("../assets/qr (17).jpg"),
                    },
                ],
                photos: [
                    {
                        imgurl: require("../assets/1.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/2.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/3.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/4.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/5.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/6.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/7.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/8.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                ],
                shows: [
                    {
                        imgurl: require("../assets/7.jpg"),
                        commit: 111,
                        look: 111,
                    },
                    {
                        imgurl: require("../assets/5.jpg"),
                        commit: 222,
                        look: 222,
                    },
                    {
                        imgurl: require("../assets/3.jpg"),
                        commit: 333,
                        look: 333,
                    },
                    {
                        imgurl: require("../assets/1.jpg"),
                        commit: 444,
                        look: 444,
                    },
                    {
                        imgurl: require("../assets/8.jpg"),
                        commit: 555,
                        look: 555,
                    },
                ],
                titles: [
                    {
                        imgurl: require("../assets/ac0f4aa0d78540efa7c6468febf076a8.jpg_540x190.jpg"),
                        content: "第一话简介：那夜，我奉旨诛杀逆党，早已厌倦了这种傀儡的生活，我遇见了一个小女孩， 她的眼神让我想起了自己小时候，最终我还是收留了她",
                    },
                    {
                        imgurl: require("../assets/afaf2f650a4e44a08973890db94df0e2.png_540x190.jpg"),
                        content: "第一话简介：那夜，我奉旨诛杀逆党，早已厌倦了这种傀儡的生活，我遇见了一个小女孩， 她的眼神让我想起了自己小时候，最终我还是收留了她",
                    },
                    {
                        imgurl: require("../assets/b1abc95edaf042f4bfd8bc31c8a15193.jpg_540x190.jpg"),
                        content: "第一话简介：那夜，我奉旨诛杀逆党，早已厌倦了这种傀儡的生活，我遇见了一个小女孩， 她的眼神让我想起了自己小时候，最终我还是收留了她",
                    },
                    {
                        imgurl: require("../assets/b1ac1dfccf764c8f9a40bdd66839cbfc.jpg_540x190.jpg"),
                        content: "第一话简介：那夜，我奉旨诛杀逆党，早已厌倦了这种傀儡的生活，我遇见了一个小女孩， 她的眼神让我想起了自己小时候，最终我还是收留了她",
                    },
                    {
                        imgurl: require("../assets/b659d667edbe43079792e712b6815904.jpg_540x190.jpg"),
                        content: "第一话简介：那夜，我奉旨诛杀逆党，早已厌倦了这种傀儡的生活，我遇见了一个小女孩， 她的眼神让我想起了自己小时候，最终我还是收留了她",
                    },
                    {
                        imgurl: require("../assets/bbbd5a0fc03e4b378ecc0d0b4acb4a38.jpg_540x190.jpg"),
                        content: "第一话简介：那夜，我奉旨诛杀逆党，早已厌倦了这种傀儡的生活，我遇见了一个小女孩， 她的眼神让我想起了自己小时候，最终我还是收留了她",
                    },
                ],
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
</style>
