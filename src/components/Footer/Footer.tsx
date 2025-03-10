import { ThemeSelector } from '@/components/ThemeSelector'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="px-0">
      <footer className="flex justify-between  border-t-[1px] dark:border-white/20 border-black/20 px-8 p-8">
        <div className="flex gap-6 items-center">This is My Footer :)</div>

        <ThemeSelector />
      </footer>
    </div>
  )
}
