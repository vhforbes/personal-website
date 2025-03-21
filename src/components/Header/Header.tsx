import { ThemeSelector } from '@/components/ThemeSelector'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="px-2">
      <nav className="flex justify-between  border-b-[1px] dark:border-white/20 border-black/20 px-8 p-2">
        <div className="flex gap-6 items-center">
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

        <ThemeSelector />
      </nav>
    </div>
  )
}
