<template>
    <div class="airtle_item">
        <Header/>
        <Title style="margin-top: 30px" :titles="titles"/>
    </div>
</template>

<script>
    import Header from "../components/common/Header"
    import Title from '../components/index/Titles'

    export default {
        name: "airtle",
        components: {
            Header,
            Title,
        },
        data(){
            return{
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

</style>
