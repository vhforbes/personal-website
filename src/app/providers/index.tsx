import React from 'react'

import { ThemeProvider } from './Theme'
import { LocaleProvider } from './Locale'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  )
}
