'use client'

import { Language, useLanguage } from '@/app/providers/Language'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const LanguageSelector = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { setLanguage, language } = useLanguage()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const onLanguageChange = (languageToSet: Language & 'en') => {
    setLanguage(languageToSet)
    router.push(pathname + '?' + createQueryString('locale', languageToSet))
  }

  return (
    <Select onValueChange={onLanguageChange} value={language}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto cursor-pointer gap-2 border-[1px] pl-0 md:pl-3"
      >
        <SelectValue>{language?.toUpperCase()}</SelectValue>
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
