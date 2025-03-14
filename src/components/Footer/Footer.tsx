import { ThemeSelector } from '@/components/ThemeSelector'

export const Footer = () => {
  return (
    <div className="">
      <footer className="flex justify-between border-t-[1px] border-black/20 p-8 px-8 dark:border-white/20">
        <div className="flex items-center gap-6">This is My Footer :)</div>

        <ThemeSelector />
      </footer>
    </div>
  )
}
