import { ThemeSelector } from '@/components/ThemeSelector'
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
          <Link className="underline-animation no-underline" href={'/'}>
            Timeline
          </Link>
          <Link className="underline-animation no-underline" href={'/'}>
            Portfolio
          </Link>
          <Link className="underline-animation no-underline" href={'/'}>
            About
          </Link>
        </div>

        <LanguageSelector />
        <ThemeSelector />
      </nav>
    </div>
  )
}
