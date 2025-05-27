import React, { Suspense } from 'react'
import './globals.css'
import { Providers } from '../providers'
import { InitTheme } from '../providers/Theme/InitTheme'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const metadata = {
  description: 'Victor Hugo Forbes Web Deveoper Portfolio',
  title: 'Victor Hugo Forbes - Dev',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-background text-neutral font-display flex min-h-svh flex-col">
        {/* 
          Added this Suspense because of localeContext using useSearchParams()
          Should be intersesting to understand more
        */}
        <Suspense>
          <Providers>
            <Header />
            <main className="grow bg-[url(/topographyLight.svg)] bg-repeat dark:bg-[url(/topographyDark.svg)]">
              {children}
            </main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
