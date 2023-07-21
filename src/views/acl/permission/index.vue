<template>
    <el-table :data="PermisstionArr" style="width: 100%; margin-bottom: 20px" row-key="id" border>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="权限制" prop="code"></el-table-column>
        <el-table-column label="修改时间" prop="updateTime"></el-table-column>
        <el-table-column label="操作">
            <template #="{ row, $index }">
                <el-button type="primary" size="small" :disabled="row.level == 4 ? true : false"
                    @click="addPermisstion(row)">
                    {{ row.level == 3 ? '添加功能' : '添加菜单' }}</el-button>
                <el-button type="primary" size="small" :disabled="row.level == 1 ? true : false"
                    @click="updatePermisstion(row)">编辑</el-button>
                <el-popconfirm :title="`确定删除${row.name}吗?`" width="260px" @confirm="removeMenu(row.id)">
                    <template #reference>
                        <el-button type="primary" size="small" :disabled="row.level == 1 ? true : false"
                            @click="">删除</el-button>

                    </template>
                </el-popconfirm> </template>
        </el-table-column>
    </el-table>
    <!-- 对话框组件 添加或更新已有的菜单 -->
    <el-dialog v-model="dialogVisible" :title="menuData.id ? '更新菜单' : '添加菜单'">
        <!-- 表单组件 -->
        <el-form>
            <el-form-item label="名称">
                <el-input placeholder="请输入菜单名称" v-model="menuData.name"></el-input>
            </el-form-item>
            <el-form-item label="权限">
                <el-input placeholder="请输入权限数值" v-model="menuData.code"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="save">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
//引入获取菜单请求API
import { reqAllPermisstion, reqAddOrUpdateMenu, reqRemoveMenu } from '@/api/acl/menu'
//引入TS类型
import { PermisstionResponseData, PermisstionList, Permisstion, MenuParams } from '@/api/acl/menu/type'
import { ElMessage } from 'element-plus';
//存储菜单数据
let PermisstionArr = ref<PermisstionList>([])
//携带参数
let menuData = reactive<MenuParams>({
    "code": "",
    "level": 0,
    "name": "",
    "pid": 0
})
//控制对话框的显示与隐藏
const dialogVisible = ref<boolean>(false)
//组件挂载完毕
onMounted(() => {
    getHasPermisstion()
})
const getHasPermisstion = async () => {
    let result: PermisstionResponseData = await reqAllPermisstion()
    if (result.code === 200) {
        PermisstionArr.value = result.data
    }

}

//添加菜单按钮
const addPermisstion = (row: Permisstion) => {
    Object.assign(menuData, {
        id: 0,
        "code": "",
        "level": 0,
        "name": "",
        "pid": 0
    })
    dialogVisible.value = true
    menuData.level = row.level + 1
    menuData.pid = (row.id as number)
}

//编辑按钮
const updatePermisstion = (row: Permisstion) => {
    dialogVisible.value = true
    Object.assign(menuData, row)
}
//确定按钮
const save = async () => {
    let result: any = await reqAddOrUpdateMenu(menuData)
    if (result.code === 200) {
        dialogVisible.value = false
        ElMessage({ type: 'success', message: menuData.id ? '更新成功' : '添加成功' })
        getHasPermisstion()
    }
}

//删除按钮
const removeMenu = async (id: number) => {
    let result = await reqRemoveMenu(id)
    if (result.code === 200) {
        ElMessage({ type: 'success', message: '删除成功' })
        getHasPermisstion()
    }
}
</script>

<style scoped></style>