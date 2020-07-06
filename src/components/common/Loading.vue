<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .loading{
        height: 40px;
        margin: 100px auto;
        text-align: center;
    }
    .loading span{
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: hotpink;
        animation: load 1s ease infinite;
        margin: 0 2px;
        display: inline-block;
    }
    @keyframes load {
        0%,
        100% {
            transform: scaleY(1.5);
            background-color: hotpink;
        }
        50% {
            transform: scaleY(1);
            background-color: rgba(255, 111, 178, 0.21);
        }
    }
    .loading span:nth-of-type(2){
        animation-delay: 0.2s;
    }
    .loading span:nth-of-type(3){
        animation-delay: 0.4s;
    }
    .loading span:nth-of-type(4){
        animation-delay: 0.6s;
    }
    .loading span:nth-of-type(5){
        animation-delay: 0.8s;
    }

</style>
