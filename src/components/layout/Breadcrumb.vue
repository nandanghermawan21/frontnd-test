<template>
    <el-row justify="start" class="breadcrumb-wrapper">
        <div class="breadcrumb-main">
            <el-row class="w-full" justify="space-between">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in items" :key="index">
                        <nuxt-link :to="item.link">{{ t(item.title) }}</nuxt-link>
                    </el-breadcrumb-item>
                </el-breadcrumb>
                <slot></slot>
            </el-row>
        </div>
    </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { BreadCrumbItemType } from '~/types/menus';

export default defineComponent({
    name: 'Breadcrumb',
    setup() {
        const { t, locale } = useI18n();
        return { t, locale };
    },
    props: {
        items: {
            type: Array<BreadCrumbItemType>,
            required: true
        },
    },
    computed: {
       
    }
});

</script>
<style scoped>
.breadcrumb-wrapper {
    background-color: var(--solid-white);
}

.breadcrumb-main {
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
