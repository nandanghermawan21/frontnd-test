<template>
    <div v-if="defaultOptions.path">
        <lottie :options="defaultOptions" @animComplete="handleComplete" />
    </div>
    <div v-else>
        Loading animation...
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import lottie from 'vue3-lottie';

export default defineComponent({
    name: 'LottieAnimation',
    components: {
        lottie
    },
    setup() {
        const defaultOptions = ref({
            container: null,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '', // Path awal kosong
        });

        onMounted(() => {
            defaultOptions.value.path = 'https://lottiefiles.com/animations/delivery-JwnYi48ONW'
        });

        const handleComplete = () => {
            console.log('Animation Complete');
        };

        return {
            defaultOptions,
            handleComplete
        };
    }
});
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
