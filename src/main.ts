import { createApp } from "vue";
import App from "./App.vue";
import router from '~/router';
import ElementPlus from "element-plus";
import Vue3Lottie from 'vue3-lottie'
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import '~/styles/main.css';
import { createI18n } from 'vue-i18n';
import 'element-plus/theme-chalk/index.css';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { store, key } from './store'; 



// Import translation files
import en from '../locale/en.json';
import id from '../locale/id.json';
import cn from '../locale/cn.json';
import tw from '../locale/tw.json';

//baca detault bahasa dari local storage dengan app key dari .env plush lang
let lang = localStorage.getItem(import.meta.env.VITE_APP_KEY + '_lang');

// Create an i18n instance with translations
const i18n = createI18n({
    // Set locale from local storage and add default locale and fallback locale
    locale: lang ? lang : 'en', // Set default locale
    fallbackLocale: 'id', // Set fallback locale
    legacy: false,
    messages: {
        en: en,
        id: id,
        cn: cn,
        tw: tw
    }
});

// save locale to local storage
localStorage.setItem(import.meta.env.VITE_APP_KEY + '_lang', lang ? lang : 'cn');

const app = createApp(App);

// Use i18n instance
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.use(Vue3Lottie);
app.use(VueVideoPlayer);
app.use(store, key)

app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
        libraries: 'places',
        autobindAllEvents: true,
    },
})


app.mount("#app");
