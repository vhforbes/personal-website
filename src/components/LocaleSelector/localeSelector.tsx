'use client'

import { Locale, useLocale } from '@/app/providers/Locale'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const LanguageSelector = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { setLocale, locale } = useLocale()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const onLanguageChange = (languageToSet: Locale & 'en') => {
    setLocale(languageToSet)
    router.push(pathname + '?' + createQueryString('locale', languageToSet))
  }

  return (
    <Select onValueChange={onLanguageChange} value={locale}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto cursor-pointer gap-2 border-[1px] p-2"
      >
        <SelectValue>{locale?.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-background">
        <SelectItem className="cursor-pointer" value="pt">
          PT-BR
        </SelectItem>
        <SelectItem className="cursor-pointer" value="en">
          ENG
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
