import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { cn } from '../../lib/cn'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { pathname } = useLocation()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-parchment-50 shadow-elevated p-6 pt-20">
        <button
          className="absolute top-4 right-4 p-2 text-ink-500 hover:text-ink-900 transition-colors"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="flex flex-col gap-4">
          {navigation.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={cn(
                'text-h3 font-serif transition-colors',
                pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
                  ? 'text-burgundy-700'
                  : 'text-ink-500 hover:text-ink-700',
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
