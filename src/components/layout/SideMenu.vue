<template>
    <div class="company-logo-conainer">
        <img src="/logo_teco_ai.png" alt="Company Logo" class="company-logo" />
        <!-- <el-text class="text-header hidden-lg-and-down">{{ ('| Document AI') }}</el-text> -->
    </div>
    <div class="side-menu">
        <el-menu :default-openeds="['', '']">
            <el-menu-item index="1">
                <template #title>
                    {{ t('Keyword Management') }} {{ $store.state.userDetail?.full_name }}
                </template>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    {{ t('Data Generation Management') }}
                </template>
                <el-menu-item index="2-1">{{ t('Data Generation') }}</el-menu-item>
                <el-menu-item index="2-2">{{ t('Data Management') }}</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    {{ t('Account Permission Management') }}
                </template>
                <el-menu-item index="3-4-1">{{ t('Role Management') }}</el-menu-item>
                <el-menu-item index="3-4-2">{{ t('Account Management') }}</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n';
import { mapGetters, mapState } from 'vuex';
import { store } from '~/store'; // Import the store instance

export default defineComponent({
    name: 'SideMenu',
    setup() {
        const { t } = useI18n();
        return {
            t,
            $store: store, // Add the $store property
        }
    },
    mounted() {
        console.log(this.$store.state.userDetail);
    }
})
</script>
<style scoped lang="scss">
@import '/src/styles/index.scss';
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

.text-header {
    color: $--color-primary;
    font-size: 20px;
    font-weight: bold;
}
</style>