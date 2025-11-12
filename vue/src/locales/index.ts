import en from "./en.json";

export const languages = {
  en: en,
};

export type LanguageCode = keyof typeof languages;