<template>
    <div class="main-container">
        <el-row class="w-full h-full">
            <el-col class="side-bar hidden-sm-and-down" :span="4" :md="6" :lg="4">
                <SideMenu />
            </el-col>
            <el-col :span="20" :xs="24" :sm="24" :md="18" :lg="20">
                <el-row class="header">
                    <div class="header-left-menu">
                        <el-row>
                            <img src="/menu.webp" alt="menu icon" class="menu-icon hidden-md-and-up"
                                @click="drawer = true" />
                        </el-row>
                    </div>
                    <div class="header-center-menu">

                    </div>
                    <div class="header-right-menu">
                        <el-dropdown trigger="click" class="pointer">
                            <span class="el-dropdown-link center-center">
                                <img src="/avatar.png" alt="User" class="user-icon" />
                                {{ logedInAccount().fullName }}
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item :icon="Avatar">{{ t('Profile') }}</el-dropdown-item>
                                    <el-dropdown-item :icon="Key">{{ t('Change Password') }}</el-dropdown-item>
                                    <el-dropdown-item :icon="Lock" @click="logout">{{ t('Logout') }}</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="pointer w-35">
                            <span class="center-center">
                                <el-row :gap="2">
                                    <img :src="selectedLang?.img" alt="flag" class="flag-icon" />
                                    <el-text>{{ selectedLang?.name }}</el-text>
                                </el-row>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item v-for="item, index in lang" :key="index" @click="() => {
                                        selectedLang = item;
                                        setLang();
                                    }">
                                        <el-row :gap="2">
                                            <img :src="item.img" alt="flag" class="flag-icon" />
                                            <el-text>{{ item.name }}</el-text>
                                        </el-row>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </el-row>
                <div class="main-content">
                    <slot />
                </div>
            </el-col>
        </el-row>
        <el-drawer class="hidden-md-and-up" size="50%" v-model="drawer" direction="ltr" :with-header="false">
            <SideMenu />
        </el-drawer>
    </div>
</template>
<script lang="ts">
import { Avatar, Lock, Key } from '@element-plus/icons-vue';
import { set } from 'date-fns';
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n';
import { laguageDummy } from '~/dummy/option';
import { logout, logedInAccount } from '~/services/authServices';
import { BasicOptonsType } from '~/types/option';

export default defineComponent({
    name: 'MainLayout',
    setup() {
        const { t, locale } = useI18n();
        return {
            Avatar,
            Lock,
            Key,
            t,
            locale,
            logedInAccount
        }
    },
    data() {
        return {
            drawer: false,
            lang: laguageDummy,
            selectedLang: null as BasicOptonsType | null,
        }
    },
    methods: {
        logout() {
            logout().then(() => {
                this.$router.push('/login');
            });
        },
        setLang() {
            localStorage.setItem(import.meta.env.VITE_APP_KEY + '_lang', this.selectedLang?.value || 'en')
            this.locale = this.selectedLang?.value ?? 'en';
        }
    },
    mounted() {
        var currentLang = localStorage.getItem(import.meta.env.VITE_APP_KEY + '_lang')
        this.selectedLang = this.lang.find((item) => item.value === currentLang) || this.lang[0]
    }
})

</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: $background-color;
}

.side-bar {
    height: 100%;
    background-color: $primary-color;
}

.header {
    height: 50px;
    width: 100%;
    background-color: $primary-color;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.header-left-menu {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 50px;
    padding: 0 10px;
}

.header-center-menu {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 50px;
}

.header-right-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    gap: 10px;
}

.user-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

.menu-icon {
    height: 30px;
    width: 30px;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow: scroll;
}
</style>