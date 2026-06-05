/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ZOOM_SDK_KEY: string;
  readonly VITE_ZOOM_SDK_SECRET: string;
  readonly VITE_FIREBASE_DB_URL: string;
  readonly VITE_ADMIN_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
