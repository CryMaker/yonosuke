import { cn } from '../../lib/cn'

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={cn('max-w-content mx-auto font-serif text-body-serif text-ink-700 prose-content', className)}>
      {children}
    </div>
  )
}
