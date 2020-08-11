<template>
    <div class="video_item">
        <Header/>
        <CommentList :comments="comments"/>
    </div>
</template>

<script>
    import Header from "../components/common/Header"
    import CommentList from "../components/comment/CommentList"

    export default {
        name: "Video",
        components: {
            Header,
            CommentList,
        },
        data(){
            return{
                comments: [
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 222,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 111,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 444,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 777,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 999,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 888,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 555,
                    },
                    {
                        title: "袍子们最喜欢的历史人物",
                        content: "杨玉环，怎么说呢，虽然她被人称为祸国妖妃，但是我觉得唐朝灭亡也不完全因为她。杨玉环其实也挺可怜的",
                        from: "历史",
                        comment: 666,
                    },
                ],
            };
        },
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>
