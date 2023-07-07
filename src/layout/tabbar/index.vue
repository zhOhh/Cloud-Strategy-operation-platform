<template>
    <div class="tabbar">
        <div class="tabbar_left">
            <!-- 顶部左侧静态 -->
            <el-icon style="margin-right: 10px;" @click="changeIcon">
                <component :is="fold?'Fold':'Expand'"></component>
            </el-icon>
            <!-- 左侧面包屑 -->
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tabbar_right">
            <el-button size="small" icon="Refresh" circle></el-button>
            <el-button size="small" icon="FullScreen" circle></el-button>
            <el-button size="small" icon="Setting" circle></el-button>
            <img src="../../../public/logo.png" style="width:24px;height:24px;margin:0px 10px">
            <el-dropdown>
                <span class="el-dropdown-link">
                    Admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Expand } from '@element-plus/icons-vue';
//定义一个响应式数据控制图标切换
let fold = ref(false)//用于控制菜单折叠还是打开图标切换变量
//点击图标的方法
const changeIcon = () => {
    //图标进行切换
    fold.value = !fold.value
}

</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, #ffdf6d, #8e98fe, #ffcaca);

    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        display: flex;
        align-items: center;
    }
}
</style>