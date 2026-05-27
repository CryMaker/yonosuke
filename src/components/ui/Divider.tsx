import { cn } from '../../lib/cn'

interface DividerProps {
  className?: string
  variant?: 'gold' | 'burgundy'
}

export function Divider({ className, variant = 'gold' }: DividerProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('h-px flex-1', variant === 'burgundy' ? 'bg-burgundy-700/20' : 'bg-gold-600/30')} />
      <div className={cn('w-2 h-2 rounded-full', variant === 'burgundy' ? 'bg-burgundy-700/40' : 'bg-gold-600/40')} />
      <div className={cn('h-px flex-1', variant === 'burgundy' ? 'bg-burgundy-700/20' : 'bg-gold-600/30')} />
    </div>
  )
}
