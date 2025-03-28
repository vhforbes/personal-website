import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'
import Link from 'next/link'
import { LanguageSelector } from '../LocaleSelector/localeSelector'

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
        </div>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  )
}
