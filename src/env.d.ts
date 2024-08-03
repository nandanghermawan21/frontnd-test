/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Mendefinisikan tipe tambahan untuk import.meta
interface CustomImportMeta {
  myProperty: string;
}

// Menerapkan modifikasi pada import.meta
declare global {
  interface ImportMeta extends CustomImportMeta { }
}

declare module 'virtual:generated-pages' {
  import { RouteRecordRaw } from 'vue-router';
  const routes: RouteRecordRaw[];
  export default routes;
}