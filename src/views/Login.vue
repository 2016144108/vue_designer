<template>
    <div class="login_item">
        <Header/>
        <Centers>
            <LoginForm/>
        </Centers>
    </div>
</template>

<script>
    import Header from '../components/common/Header'
    import Centers from "../components/common/Centers"
    import LoginForm from '../components/user/LoginForm'

    export default {
        name: "Login",
        components: {
            Centers,
            LoginForm,
            Header,
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
