<template>
    <div class="register_item">
        <Header/>
        <Centers>
            <RegForm/>
        </Centers>
    </div>
</template>

<script>
    import Header from '../components/common/Header'
    import Centers from "../components/common/Centers"
    import RegForm from "../components/user/RegForm"

    export default {
        name: "Register",
        components: {
            Centers,
            RegForm,
            Header,
        }
    }
</script>

<style scoped>

</style>
