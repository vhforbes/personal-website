'use client'

import { useSearchParams } from 'next/navigation'
import React, { createContext, useCallback, useContext, useState } from 'react'

export type Locale = 'pt' | 'en'

interface LocaleContextType {
  setLocale: (locale: Locale) => void
  locale?: Locale
}

const validLocations: Locale[] = ['en', 'pt']

const initialContext: LocaleContextType = {
  setLocale: () => 'en',
  locale: 'en',
}

const LocaleContext = createContext(initialContext)

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()

  const selectedLocale = searchParams.get('locale')

  const validLocale = (locale: string | null): locale is Locale => {
    return locale !== null && validLocations.includes(locale as Locale)
  }

  const [locale, setLocaleState] = useState<Locale>(
    validLocale(selectedLocale) ? selectedLocale : 'en',
  )

  const setLocale = useCallback((localeToSet: Locale | null) => {
    if (localeToSet) {
      setLocaleState(localeToSet)
    }
  }, [])

  return (
    <LocaleContext.Provider
      value={{
        setLocale,
        locale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = (): LocaleContextType => useContext(LocaleContext)
