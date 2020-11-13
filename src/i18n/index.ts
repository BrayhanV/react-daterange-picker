import enTranslates from './translation/en.json'
import esTranslates from './translation/es.json'

function getCurrentLanguage(language: string) {
    switch(language) {
        case 'es': 
            return esTranslates;
        case 'en':
            return enTranslates;
        default: 
            return enTranslates;
    }
}

export const translate = (key: string, language: string) => {
    const translate = getCurrentLanguage(language);

    return translate[key] ? translate[key] : 'wrong id'; 
}