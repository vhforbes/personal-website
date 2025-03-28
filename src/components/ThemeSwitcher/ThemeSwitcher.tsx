'use client'

import { Moon, Sun } from 'lucide-react'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

import type { Theme } from './types'
import { useTheme } from '../../app/providers/Theme'
import { themeLocalStorageKey } from './types'

export const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<Theme | 'auto'>('auto')
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  // Detect system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Load saved preference
  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey) as Theme | 'auto' | null
    setCurrentTheme(preference ?? 'auto')
  }, [])

  // Toggle between light and dark
  const toggleTheme = () => {
    const effectiveTheme = currentTheme === 'auto' ? systemTheme : currentTheme
    const newTheme = effectiveTheme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme as Theme)
    setCurrentTheme(newTheme as Theme)
    window.localStorage.setItem(themeLocalStorageKey, newTheme)
  }

  // Determine which icon to show based on current effective theme
  const effectiveTheme = currentTheme === 'auto' ? systemTheme : currentTheme

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-full bg-transparent p-2 hover:bg-none"
      aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {effectiveTheme === 'dark' ? <Sun className="w-5" /> : <Moon className="w-5" />}
    </button>
  )
}
