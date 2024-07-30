import i18n from 'i18next';
import vietnamese from './vi.json';
import english from './en.json';

i18n
    .init({
        interpolation: { escapeValue: false },
        lng: 'vi',
        detection: {
            order: [
                "navigator",
                "localStorage"
            ],
            cache: ['localStorage'],
            lookupLocalStorage: 'lang',
        },
        resources: {
            en: {
                common: english
            },
            vi: {
                common: vietnamese
            }
        },
    }).catch(e => {

    });

export default i18n;