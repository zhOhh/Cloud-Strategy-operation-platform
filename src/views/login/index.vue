<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>现在登录，管理更快捷</h1>
                    <h2>Now login, management moreefficient.</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" color="#372ce5" type="warning">登录 Login</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue';
//手机账号与密码数据
let loginForm = reactive({ username: 'admin', password: '111111' })

</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url("@/assets/images/background.png") no-repeat;
    background-size: cover;
}

.login_form {
    position: relative;
    width: 64%;
    left: 30vh;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
}

h1 {
    color: #372ce5;
    font-size: 40px;
    font-weight: 700;
    user-select: none;
}

h2 {
    font-size: 20px;
    color: #372ce5;
    margin: 20px 0px;
    user-select: none;
}

.login_btn {
    width: 100%;
}
</style>