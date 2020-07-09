<template>
    <div class="center_item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Center",
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .center_item{
        position: fixed;
        left: 50%;
        top: 50%;
        overflow: auto;
        transform: translate(-50%, -50%);
    }
</style>
