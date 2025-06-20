import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'
import Link from 'next/link'
import { LanguageSelector } from '../LocaleSelector/localeSelector'
import { Suspense } from 'react'

export const Header = () => {
  return (
    <div className="px-2">
      <nav className="flex justify-between border-b-[1px] border-black/20 p-2 px-8 dark:border-white/20">
        <div className="flex items-center gap-6">
          <Link className="underline-animation no-underline" href={'/'}>
            Home
          </Link>
          <Link className="underline-animation no-underline" href={'/blog'}>
            Blog
          </Link>
          <Link className="underline-animation no-underline" href={'/contact'}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Suspense>
            <LanguageSelector />
          </Suspense>
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  )
}
