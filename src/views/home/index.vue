<template>
    <el-card>
        <div class="box">
            <img :src="userStore.avatar" alt="" class="avatar">
            <div class="bottom">
                <h3 class="title">{{ getTime() }}好呀{{ userStore.username }}</h3>
                <p class="subtitle">{{ setting.title }}</p>
            </div>
        </div>
    </el-card>
    <div class="bottoms">
        <svg-icon name="welcome" width="600px" height="500"></svg-icon>
    </div>
</template>

<script setup lang="ts">
//获取仓库
import useUserStore from '@/store/modules/user';
let userStore = useUserStore()
import { getTime } from '@/utils/time';
import setting from '@/setting'
</script>

<style scoped>
.box {
    display: flex;

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .bottom {
        margin-left: 20px;

        .title {
            font-size: 25px;
            font-weight: 900;
            margin-top: 15px;
            margin-bottom: 30px;
        }

        .subtitle {
            font-style: italic;
            color: #959bfb;
        }
    }
}

.bottoms {
    display: flex;
    justify-content: center;
}
</style>