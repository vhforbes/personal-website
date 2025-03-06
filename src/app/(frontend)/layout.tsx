import React from 'react'
import './globals.css'
import { Providers } from '../providers'
import { ThemeSelector } from '../providers/Theme/ThemeSelector'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeSelector />
          <main className="bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
