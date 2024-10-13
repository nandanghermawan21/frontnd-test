<template>
    <MainLayout>
        <Breadcrumb :items="breadcrumb" />
        <el-row class="w-full align-center" justify="space-between">
            <el-text class="title-page">
                {{ t('Keyword Management') }}
            </el-text>
            <el-button type="primary">
                {{ t('Add New') }}
            </el-button>
        </el-row>
        <el-row class="row-filter align-center" :gap="2">
            <el-col :lg="5" :md="11" :sm="24">
                <BaseTextInput :value="'test'" :title="t('Keyword')" :prop="t('keyword')" :onChange="(val) => {
                    //filter.keyword = val;
                }" />
            </el-col>
            <el-col :lg="5" :md="11" :sm="24">
                <div class="w-full">
                    <BaseSelect :value="'value'" :options="dataTypes" :title="t('Data Type')" :prop="t('dataType')"
                        :label="'name'" :key="'value'" :onChange="(val) => {
                            //filter.keyword = val;
                        }" />
                </div>
            </el-col>
            <el-col :lg="5" :md="11" :sm="24">
                <BaseSelect :value="'value'" :options="levels" :title="t('Level')" :prop="t('level')" :label="'name'"
                    :key="'value'" :onChange="(val) => {
                        //filter.keyword = val;
                    }" />
            </el-col>
            <el-col :lg="5" :md="11" :sm="24">
                <BaseSelect :value="'value'" :options="conditions" :title="t('Status')" :prop="t('status')"
                    :label="'name'" :key="'value'" :onChange="(val) => {
                        //filter.keyword = val;
                    }" />
            </el-col>
            <el-col :lg="2" :md="24" :sm="24">
                <el-button type="primary">
                    {{ t('Search') }}
                </el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData">
            <el-table-column sortable prop="item" :label="t('Item')" width="70" />
            <el-table-column sortable prop="keyword" :label="t('Keyword')" width="200" />
            <el-table-column sortable prop="dataType" :label="t('Data Type')" width="120" />
            <el-table-column sortable prop="level" :label="t('Level')" width="120" />
            <el-table-column sortable prop="status" :label="t('Status')" width="120" />
            <el-table-column sortable prop="operator" :label="t('Operator')" width="120" />
            <el-table-column sortable prop="createdTime" :label="t('Creation Time')" width="120" />
            <el-table-column sortable prop="action" :label="t('Operation')">
                <template #default="">
                    <el-button size="small" @click="() => { }">
                        {{ t('View') }}
                    </el-button>
                    <el-button size="small" @click="() => { }">
                        {{ t('Edit') }}
                    </el-button>
                    <el-button size="small" type="danger" @click="() => { }">
                        {{ t('Deactivate') }}
                    </el-button>
                    <el-button size="small" type="danger" @click="() => { }">
                        {{ t('Delete') }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row class="row-filter align-center" :gap="2" justify="space-between">
            <el-row>
                <el-text>
                    {{ t('show') }} 1 {{ t('to') }} 10 {{ t('of') }} 1000 {{ t('entries') }}
                </el-text>
            </el-row>
            <el-row :gap="2" class="align-center">
                <el-text style="margin-bottom: 15px;">
                    {{ t('Show') }}
                </el-text>
                <div class="w-20">
                    <BaseSelect :value="'10'" :options="pageSizeOptions" :label="'name'" :key="'value'" :onChange="(val) => {
                            //filter.keyword = val;
                        }" />
                </div>
                <el-pagination class="mb-5" background layout="prev, pager, next" :total="1000" />
            </el-row>
        </el-row>
    </MainLayout>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { BreadCrumbItemType } from '~/types/menus'
import { dataTypeDummy, levelDummy, conditionsDummy, pageSizeOptions } from '~/dummy/option'

export default {
    setup() {
        const { t, locale } = useI18n()
        return {
            t,
            locale
        }
    },
    data() {
        const item = {
            item: '1',
            keyword: 'keyword',
            dataType: 'dataType',
            level: 'level',
            status: 'status',
            operator: 'operator',
            createdTime: 'createdTime',
            action: 'action'
        }
        return {
            breadcrumb: [
                {
                    link: '/',
                    title: 'Home',
                },
                {
                    link: '',
                    title: 'Keyword Management',
                }
            ] as Array<BreadCrumbItemType>,
            dataTypes: dataTypeDummy,
            levels: levelDummy,
            conditions: conditionsDummy,
            pageSizeOptions: pageSizeOptions,
            tableData: ref(Array.from({ length: 20 }, (_, i) => ({ ...item, item: (i + 1).toString() })))
        }
    }
}
</script>