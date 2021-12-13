// @ts-ignore
const userLang: string = (navigator.language || navigator.userLanguage).split('-')[0];
const availableLanguages: string[] = ['ru', 'en'];
export const defaultTranslationLanguage: string = availableLanguages.includes(userLang) ? userLang : 'en';

const getLanguage = (lang?: string): string => {
    if (lang && availableLanguages.includes(lang)) {
        return lang;
    }

    return defaultTranslationLanguage;
};

export const language: string = getLanguage(localStorage.getItem('language'));
