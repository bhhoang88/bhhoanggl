import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locale/en.json';
import frTranslation from './locale/fr.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    fr: {
        translation: frTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
