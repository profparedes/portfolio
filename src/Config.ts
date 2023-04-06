const Config = {
  profile: {
    name: import.meta.env.VITE_PROFILE_NAME,
    fullName: import.meta.env.VITE_PROFILE_FULL_NAME,
    profession: {
      'pt-BR': import.meta.env.VITE_PROFILE_PROFESSION_PT_BR,
      en: import.meta.env.VITE_PROFILE_PROFESSION_EN,
      startedAt: Number(import.meta.env.VITE_PROFILE_PROFESSION_STARTED_AT),
    },
    birthday: import.meta.env.VITE_PROFILE_BIRTHDAY,
    location: {
      city: import.meta.env.VITE_PROFILE_CITY,
      state: import.meta.env.VITE_PROFILE_STATE,
      country: {
        'pt-BR': import.meta.env.VITE_PROFILE_COUNTRY_PR_BR,
        en: import.meta.env.VITE_PROFILE_COUNTRY_EN,
      },
    },
    email: import.meta.env.VITE_PROFILE_EMAIL,
    whatsapp: {
      url: import.meta.env.VITE_PROFILE_WHATSAPP_LINK,
      label: import.meta.env.VITE_PROFILE_WHATSAPP_LABEL,
    },
    linkedin: import.meta.env.VITE_PROFILE_LINKEDIN,
    github: import.meta.env.VITE_PROFILE_GITHUB,
  },
  app: {
    accentColor: import.meta.env.VITE_APP_ACCENT_COLOR ?? '#9cfd61',
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  i18n: {
    debbug: JSON.parse(
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
      // Converts 'true' to true and 'false' to false
    ),
  },
}

export default Config
