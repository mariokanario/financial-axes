import en from '../languages/en.json';
import es from '../languages/es.json';

export const LanguageReducer = (state, action) => {
    switch (action.type) {
        case "en":
            return en

        case "es":
            return es

        default:
            return state
    }
} 