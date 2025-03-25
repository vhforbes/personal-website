'use client'

import { useSearchParams } from 'next/navigation'
import React, { createContext, useCallback, useContext, useState } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
  setLanguage: (language: Language) => void
  language?: Language
}

const validLocations: Language[] = ['en', 'pt']

const initialContext: LanguageContextType = {
  setLanguage: () => 'en',
  language: 'en',
}

const LanguageContext = createContext(initialContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()

  const selectedLanguage = searchParams.get('location')

  const validLocation = (language: string | null): language is Language => {
    return language !== null && validLocations.includes(language as Language)
  }

  const [language, setLanguageState] = useState<Language>(
    validLocation(selectedLanguage) ? selectedLanguage : 'en',
  )

  const setLanguage = useCallback((languageToSet: Language | null) => {
    if (languageToSet) {
      setLanguageState(languageToSet)
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        setLanguage,
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => useContext(LanguageContext)
