import { cn } from '../../lib/cn'
import { Link } from 'react-router-dom'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
  onClick?: () => void
  href?: string
}

const paddingMap = {
  none: '',
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
}

export function Card({ children, className, hover = true, padding = 'medium', onClick, href }: CardProps) {
  const classes = cn(
    'bg-parchment-100 rounded-card shadow-card overflow-hidden transition-all duration-300',
    hover && 'hover:-translate-y-1 hover:shadow-card-hover',
    paddingMap[padding],
    (onClick || href) && 'cursor-pointer',
    className,
  )

  if (href) {
    return (
      <Link to={href} className={cn(classes, 'block')}>
        {children}
      </Link>
    )
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}
