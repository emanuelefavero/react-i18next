import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// * Import your translation files
import translationEN from './locales/en/translation.json'
import translationIT from './locales/it/translation.json'

// * setup the translations
const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
}

// * Initialize i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // enables automatic language detection
  .init({
    resources,

    // Set the default language
    fallbackLng: 'en', // Use this language if detection fails
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie'], // Cache the detected language in cookies
    },

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
