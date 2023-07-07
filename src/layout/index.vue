<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <logo></logo>
            <!-- 展示菜单 -->
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
                <el-menu :default-active="$route.path" background-color="#ffd200" text-color="#907239"
                    active-text-color="#372ce5">
                    <!-- 根据路由动态生成菜单 -->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">456</div>
        <!-- 内容展示区 -->
        <div class="layout_main">
            <Main></Main>
        </div>

    </div>
</template>

<script setup lang="ts">
//获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单Logo子组件
import Logo from './logo/logo.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//右侧内容展示区域
import Main from './main/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

//获取路由对象
let $route = useRoute()
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;


    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        background-color: pink;
        top: 0;
        left: $base-menu-width;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100% - $base-tabbar-height);
        background: wheat;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
    }

}
</style>