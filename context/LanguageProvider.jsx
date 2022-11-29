import React, { createContext, useReducer, useEffect } from 'react'
import { LanguageReducer } from './LanguageReducer'
import en from '../languages/en.json'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [language, dispatch] = useReducer(LanguageReducer, en)

    return (
        <LanguageContext.Provider value={{ language, dispatch }} >
            {children}
        </LanguageContext.Provider>
    )
}
