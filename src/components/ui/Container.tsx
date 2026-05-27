import { cn } from '../../lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
  maxWidth?: 'site' | 'content'
}

export function Container({ children, className, as: Tag = 'div', maxWidth = 'site' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto px-6', maxWidth === 'content' ? 'max-w-content' : 'max-w-site', className)}>
      {children}
    </Tag>
  )
}
