/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ACCENT_COLOR?: string
  readonly VITE_APP_NAME?: string
  readonly VITE_PROFILE_NAME?: string
  readonly VITE_PROFILE_FULL_NAME?: string
  readonly VITE_PROFILE_PROFESSION_PT_BR?: string
  readonly VITE_PROFILE_PROFESSION_EN?: string
  readonly VITE_PROFILE_PROFESSION_STARTED_AT?: string
  readonly VITE_PROFILE_BIRTHDAY?: string
  readonly VITE_PROFILE_EMAIL?: string
  readonly VITE_PROFILE_CITY?: string
  readonly VITE_PROFILE_STATE?: string
  readonly VITE_PROFILE_COUNTRY_PR_BR?: string
  readonly VITE_PROFILE_COUNTRY_EN?: string
  readonly VITE_PROFILE_WHATSAPP_LINK?: string
  readonly VITE_PROFILE_WHATSAPP_LABEL?: string
  readonly VITE_PROFILE_LINKEDIN?: string
  readonly VITE_PROFILE_GITHUB?: string
  readonly VITE_I18N_DEBBUG?: 'true' | 'false'
  readonly PACKAGE_VERSION: string
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
