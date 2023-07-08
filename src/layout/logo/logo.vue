<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="">
        <p v-if="LayOutSettingStore.fold ? false : true" transition="all 3s">{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
//引入设置标题与logo的配置文件
import setting from '@/setting'
import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关仓库
let LayOutSettingStore = useLayOutSettingStore()
</script>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 10px;
    user-select: none;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
    }
}
</style>