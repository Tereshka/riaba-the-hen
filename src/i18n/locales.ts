export type LocaleType = {
  [id: string]: Language;
};

type Language = {
  bcp47: string;
  displayName: string;
  englishName: string;
  rtl: boolean;
};

export const LOCALES: LocaleType = Object.freeze({
  en_US: Object.freeze({
    bcp47: 'en-US',
    displayName: 'English (US)\u200e',
    englishName: 'English (US)',
    rtl: false,
  }),
  ru_RU: Object.freeze({
    bcp47: 'ru',
    displayName: 'Русский',
    englishName: 'Russian',
    rtl: false,
  }),
  es_LA: Object.freeze({
    bcp47: 'es-419',
    displayName: 'Espa\u00F1ol',
    englishName: 'Spanish',
    rtl: false,
  }),
  ar_AR: Object.freeze({
    bcp47: 'ar',
    displayName: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
    englishName: 'Arabic',
    rtl: true,
  }),
  fr_FR: Object.freeze({
    bcp47: 'fr',
    displayName: 'Français',
    englishName: 'French',
    rtl: false,
  }),
  de_DE: Object.freeze({
    bcp47: 'de',
    displayName: 'Deutch',
    englishName: 'German',
    rtl: false,
  }),
  zh_CN: Object.freeze({
    bcp47: 'zh-CN',
    displayName: '中文',
    englishName: 'Chinese',
    rtl: false,
  }),
});
