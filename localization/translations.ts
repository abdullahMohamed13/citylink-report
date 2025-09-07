// localization/translations.ts
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
  en: {
    welcome: "Welcome",
    pickup: "Next Pickup",
    reportBin: "Report a Bin",
  },
  ar: {
    welcome: "مرحباً",
    pickup: "موعد الجمع القادم",
    reportBin: "إبلاغ عن صندوق",
  },
};

const i18n = new I18n(translations);

// ✅ Get the first preferred locale from device
i18n.locale = getLocales()[0].languageCode ?? "en";

// ✅ Enable fallbacks (so "en-US" falls back to "en")
i18n.enableFallback = true;

export default i18n;
