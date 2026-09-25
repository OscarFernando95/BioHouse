/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly CONTACTO_EMAIL_DESTINO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
