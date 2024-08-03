<template>
    <MainLayout>
        <el-scrollbar>
            <el-table :data="tableData">
                <el-table-column prop="date" label="Date" width="140" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </el-scrollbar>
    </MainLayout>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
    data() {
        const item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }

        return {
            tableData: ref(Array.from({ length: 20 }).fill(item))
        }
    }
}
</script>