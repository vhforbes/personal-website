'use client'

import { useLocale } from '@/app/providers/Locale'

export const LocalizedDate = ({ date }: { date: Date }) => {
  const { locale } = useLocale()

  const convertDateToLocale = (date: Date) => {
    if (locale === 'pt') {
      return date.toLocaleString('pt-br')
    }

    return date.toLocaleString('en-us')
  }

  return <p className="opacity-50">{convertDateToLocale(date)}</p>
}
