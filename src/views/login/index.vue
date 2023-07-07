<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <!-- 登录表单 -->
                <el-form class="login_form" :modle="loginForm" :rules="rules" ref="loginForms">
                    <h1>现在登录，管理更快捷</h1>
                    <h2>Now login, management moreefficient.</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="用户名 Account"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password
                            placeholder="密码 Password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" color="#372ce5" type="warning" @click="login">登录
                            Login</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script setup lang="ts">

import { User, Lock } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus';
//引入获取当前时间的函数
import { getTime } from '@/utils/time'
//引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
let useStore = useUserStore();
//获取el-form组件
let loginForms = ref()
//获取路由器
let $router = useRouter();
//定义变量控制按钮加载效果
let loading = ref(false)
//收集账号与密码数据
let loginForm = reactive({ username: 'admin', password: '111111' })
//登录按钮回调
const login = async () => {
    //保证全部表单项校验通过后再发请求
    await loginForms.value.validate()
    // 开始加载效果
    loading.value = true
    //点击登录按钮以后干什么?
    //通知仓库发登录请求
    //请求成功->首页展示数据的地方
    //请求失败->弹出登录失败信息
    try {
        //保证登录成功
        await useStore.userLogin(loginForm)
        //编程式导航跳转到展示数据首页
        $router.push('/')
        //登录成功提示信息
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `Hi~${getTime()}好`
        });
    } catch (error) {
        //登录失败的提示信息
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    } finally {
        //关闭加载效果
        loading.value = false
    }
}
//定义表单校验需要的配置对象
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'change' }
    ],
    password: [
        { required: true, min: 6, max: 10, message: '密码需在6~10位之间', trigger: 'change' }
    ]
}
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