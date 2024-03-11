import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../lang/eng.json';
import tamTranslation from '../lang/tam.json';
 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      Eng: { translation: enTranslation },
      Tam: { translation: tamTranslation },
    },
    lng: 'Eng',
    interpolation: {
      escapeValue: false,
    },
  });
  
export default i18n;