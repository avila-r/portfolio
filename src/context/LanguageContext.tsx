import { createContext, useContext, useState } from "react"

export type Language = 'en' | 'br'

export type LanguageProviderProps = {
    children: React.ReactNode
    def?: Language
    key?: string
}

type LanguageProviderState = {
    language: Language
    setLanguage: (l: Language) => void
}

const initialState: LanguageProviderState = {
    language: 'br',
    setLanguage: () => null
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export const LanguageProvider = ({ children, def = 'br', key = 'vite-ui-language', ...props}: LanguageProviderProps) => {
    const [ language, setLanguage ] = useState<Language>(() => {
        const stored = localStorage.getItem(key)

        return (stored === 'en' || stored === 'br') ? stored : def
    })
    

    const value = {
        language,
        setLanguage: (l: Language) => {
            localStorage.setItem(key, l)
            setLanguage(l)
        }
    }

    return (
        <LanguageProviderContext.Provider {...props} value={value}>
            {children}
        </LanguageProviderContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext<LanguageProviderState>(LanguageProviderContext);

    if (context === undefined) 
        throw new Error('useLanguage method must be used within a LanguageProvider');

    return context;
}
