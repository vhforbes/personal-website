'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'

import type { Theme } from './types'

import { useTheme } from '../../app/providers/Theme'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto gap-2 pl-0 md:pl-3 border-[1px] cursor-pointer"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="bg-background">
        <SelectItem className="cursor-pointer" value="auto">
          Auto
        </SelectItem>
        <SelectItem className="cursor-pointer" value="light">
          Light
        </SelectItem>
        <SelectItem className="cursor-pointer" value="dark">
          Dark
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
