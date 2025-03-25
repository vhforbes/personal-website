import React from 'react'

import { ThemeProvider } from './Theme'
import { LanguageProvider } from './Language'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
