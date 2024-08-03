<template>
    <div class="company-logo-conainer">
        <img src="/company-logo.png" alt="Company Logo" class="company-logo" />
    </div>
    <div class="side-menu">
        <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
                <template #title>
                    Navigator One
                </template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
                <el-menu-item index="1-3">Option 3</el-menu-item>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    Navigator Two
                </template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
                <el-menu-item index="2-3">Option 3</el-menu-item>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    Navigator Three
                </template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
                <el-menu-item index="3-3">Option 3</el-menu-item>
                <el-sub-menu index="3-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SideMenu',
})
</script>
<style scoped>
.side-menu {
    height: calc(100% - 50px);
    overflow-y: auto;
}
.company-logo-conainer {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 50px;
}

.company-logo {
    display: flex;
    height: 50px;
    padding: 10px;
}
</style>