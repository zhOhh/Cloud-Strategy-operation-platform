<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'
let layoutSettingStore = useLayOutSettingStore()

//控制当前组件是否销毁重建
let flag = ref(true)

//监听仓库内部数据是否发生变化 如果变化 说明用户点击过刷新按钮
watch(() => layoutSettingStore.refsh, () => {
    //点击刷新组件 路由组件销毁
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>

<style scoped></style>