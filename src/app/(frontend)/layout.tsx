import React from 'react'
import './globals.css'
import { Providers } from '../providers'
import { InitTheme } from '../providers/Theme/InitTheme'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
      <body className="bg-background text-neutral font-display flex flex-col min-h-svh">
        <Providers>
          <Header />
          <main className="grow bg-[url(/topographyLight.svg)] dark:bg-[url(/topographyDark.svg)] bg-repeat">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
