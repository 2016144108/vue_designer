<template>
    <div class="login_item">
        <form action="" class="login_container" @submit.prevent="handlerSubmit">
            <div class="form_item"><h1>登录</h1></div>
            <div class="form_item" style="margin-bottom: 10px;">
                <div class="input"><label>账号：</label><input @input="isEmpty('loginId','账号不能为空')" v-model="userInfo.loginId" type="text" /></div>
                <div class="error" :style="{visibility: error.loginId? 'visible' : 'hidden',}">{{error.loginId}}</div>
            </div>
            <div class="form_item" style="margin-bottom: 10px;">
                <div class="input"><label>密码：</label><input @input="isEmpty('loginPwd','密码不能为空')" v-model="userInfo.loginPwd" type="password" autocomplete="new_password"/></div>
                <div class="error" :style="{visibility: error.loginPwd? 'visible' : 'hidden',}">{{error.loginPwd}}</div>
            </div>
            <div class="form_item">
                <div class="button"><button>登录</button></div>
                <div class="error" :style="{visibility: error.server? 'visible' : 'hidden',}">{{error.server}}</div>
            </div>
        </form>
    </div>
</template>

<script>
    import {login} from '../../api/userApi'

    export default {
        name: "Login",
        data(){
            return{
                userInfo: {
                    loginId: "",
                    loginPwd: "",
                },
                error: {
                    loginId: "",
                    loginPwd: "",
                    server: "",
                },
            };
        },
        methods: {
            isEmpty(field, msg) {
                if (this.userInfo[field]) {
                    this.error[field] = '';
                    return true;
                } else {
                    this.error[field] = msg;
                    return false;
                }
            },
            async handlerSubmit(){
                if(this.isEmpty('loginId','账号不能为空')&this.isEmpty('loginPwd','密码不能为空')){
                    const resp = await login(this.userInfo);
                    if(resp.code!=0){
                        this.error.server = resp.msg;
                    }else{
                        alert("登录成功");
                        this.$store.dispatch("loginUser/login",this.userInfo);
                        this.$router.push({
                            name: 'index',
                        });
                    }
                }else{
                    console.log(this.userInfo,this.error);
                }
            },
        },
    }
</script>

<style scoped>
    .login_item{
        width: 300px;
        height: 250px;
        background-color: white;
        border: 1px solid #ababab;
        padding: 10px;
    }
    .login_item .form_item h1{
        font-size: 30px;
        color: hotpink;
        font-weight: normal;
        margin-top: 0px;
        width: 300px;
        text-align: center;
    }
    .login_item .form_item label{
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        margin-left: 24px;
    }
    .login_item .form_item input{
        width: 200px;
        height: 24px;
        border: 1px solid grey;
        border-radius: 2px;
    }
    .login_item .form_item .input{
        margin-bottom: 3px;
    }
    .login_item .form_item button{
        width: 248px;
        height: 36px;
        margin-left: 24px;
        background-color: hotpink;
        color: white;
        border: 1px solid hotpink;
        border-radius: 2px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .login_item .form_item .error{
        margin-left: -80px;
        font-size: 12px;
        color: #d80000;
        height: 10px;
    }
    .login_item .form_item:nth-of-type(4) .error{
        width: 270px;
        text-align: center;
        margin-left: 20px;
     }
</style>
