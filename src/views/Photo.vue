<template>
    <div class="photo_item">
        <Header/>
        <Style @changePic="hanlderChangePic"/>
        <PhotoList :photos="photos"/>
    </div>
</template>

<script>
    import Header from "../components/photo/Header"
    import Style from "../components/photo/Style"
    import PhotoList from "../components/photo/PhotoList"

    export default {
        name: "Photo",
        components: {
            Header,
            Style,
            PhotoList,
        },
        data(){
            return{
                photos: [],
                isLoad: true,
                photolist_1: [
                    {
                        imgurl: require("../assets/p1.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p2.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p3.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p4.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p5.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p6.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p7.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p8.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                ],
            photolist_2: [
                {
                    imgurl: require("../assets/p3.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p5.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p7.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p1.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p8.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p2.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p4.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
                {
                    imgurl: require("../assets/p6.jpg"),
                    name: "《思君赋》",
                    content: "by/就是一个向北呀",
                },
            ],
            photolist_3: [
                    {
                        imgurl: require("../assets/p5.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p7.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p3.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p1.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p2.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p6.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p4.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                    {
                        imgurl: require("../assets/p8.jpg"),
                        name: "《思君赋》",
                        content: "by/就是一个向北呀",
                    },
                ],
            }
        },
        created(){
            this.photos = this.photolist_1;
        },
        methods: {
            hanlderChangePic: function (id) {
                switch (id) {
                    case 1:
                        this.photos = this.photolist_1;
                        break;
                    case 2:
                        this.photos = this.photolist_2;
                        break;
                    case 3:
                        this.photos = this.photolist_3;
                        break;
                };
            },
        }
    }
</script>

<style scoped>

</style>
