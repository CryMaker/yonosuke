import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { MobileNav } from './MobileNav'
import { cn } from '../../lib/cn'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-parchment-50/80 backdrop-blur-md border-b border-parchment-200/50">
      <nav className="max-w-site mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-h3 text-burgundy-700 hover:text-burgundy-500 transition-colors">
          Yonosuke
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-small font-medium transition-colors relative py-1',
                'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-burgundy-500 after:transition-all after:duration-300',
                pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
                  ? 'text-burgundy-700 after:w-full'
                  : 'text-ink-500 hover:text-ink-700 after:w-0 hover:after:w-full',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-ink-700 hover:text-ink-900 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
