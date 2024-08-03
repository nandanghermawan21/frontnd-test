import { useDark } from "@vueuse/core";
import { useI18n } from "vue-i18n";


// Mendapatkan status tema gelap/terang saat ini
export const isDark = useDark();

// Fungsi untuk menangani toggle dan logika lainnya
export const toggleDark = () => {
    console.log('Sebelum memanggil setToggle, isDark:', isDark.value);
    isDark.value = !isDark.value; // Menyimpan nilai terbalik ke isDark
};
