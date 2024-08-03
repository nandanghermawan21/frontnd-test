<template>
  <div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-indicator">
        <div class="loader"></div>
      </div>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getSignInAccount } from '~/context/AccountContext';


export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const isLoading = ref(false);

    router.beforeEach(() => {
      isLoading.value = true;
    });

    router.afterEach(() => {
      isLoading.value = false;
    });

    return {
      isLoading
    };
  },
  mounted() {
    //read account using account context
    if(getSignInAccount() === null) {
      this.$router.push('/login');
    }
  }
});
</script>

<style lang="scss" scoped>

/* Tambahkan gaya kustom Anda di sini */
nav {
  padding: 1em;
}

nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #42b983;
}

.loading-indicator {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1em 2em;
  border-radius: 8px;
  z-index: 9999;
  font-size: 1.5em;
  pointer-events: none;
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Warna overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
