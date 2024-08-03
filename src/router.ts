import { createRouter, createWebHistory } from "vue-router";

import generatedRoutes from 'virtual:generated-pages';

//baca detault bahasa dari local storage dengan app key dari .env plush lang
let appName = import.meta.env.VITE_APP_NAME;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: generatedRoutes.map(route => ({
        ...route,
        meta: {
            // Tambahkan properti meta sesuai kebutuhan
            title: `${appName} | ${String(route.name).toUpperCase()}`, // Contoh menambahkan judul halaman
            // Anda dapat menambahkan properti lain di sini jika diperlukan
        }
    })),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;