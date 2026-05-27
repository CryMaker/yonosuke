import { cn } from '../../lib/cn'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'card' | 'hero'
}

export function Skeleton({ className, variant = 'text' }: SkeletonProps) {
  if (variant === 'card') {
    return (
      <div className={cn('bg-parchment-100 rounded-card overflow-hidden animate-pulse', className)}>
        <div className="aspect-[3/2] bg-parchment-200" />
        <div className="p-6 space-y-3">
          <div className="h-6 bg-parchment-200 rounded w-3/4" />
          <div className="h-4 bg-parchment-200 rounded w-full" />
          <div className="h-4 bg-parchment-200 rounded w-2/3" />
        </div>
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <div className={cn('animate-pulse space-y-6', className)}>
        <div className="h-16 bg-parchment-200 rounded w-2/3" />
        <div className="h-6 bg-parchment-200 rounded w-1/2" />
        <div className="h-12 bg-parchment-200 rounded w-40" />
      </div>
    )
  }

  return <div className={cn('h-4 bg-parchment-200 rounded animate-pulse', className)} />
}
