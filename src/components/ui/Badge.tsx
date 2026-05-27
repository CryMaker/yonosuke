import { cn } from '../../lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'burgundy' | 'gold' | 'sage'
  size?: 'sm' | 'md'
}

const variantClasses = {
  default: 'bg-ink-300/20 text-ink-500',
  burgundy: 'bg-burgundy-100 text-burgundy-700',
  gold: 'bg-gold-200 text-gold-600',
  sage: 'bg-sage-100 text-sage-600',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-caption',
  md: 'px-3 py-1 text-small',
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center rounded-full font-medium', variantClasses[variant], sizeClasses[size])}>
      {children}
    </span>
  )
}
