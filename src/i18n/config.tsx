import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEnglish from "./locales/en/translations.json";
import translationsSerbian from "./locales/sr/translations.json";
import translationsBosnian from "./locales/bs/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "bs",
  resources: {
    en: {
      translations: translationsEnglish,
    },
    sr: {
      translations: translationsSerbian,
    },
    bs: {
      translations: translationsBosnian,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "sr", "bs"];

export default i18n;
