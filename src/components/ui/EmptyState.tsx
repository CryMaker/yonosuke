import { Link } from 'react-router-dom'

interface EmptyStateProps {
  title: string
  description: string
  action?: { label: string; href: string }
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-6 text-ink-300 font-serif">~</div>
      <h2 className="font-serif text-h2 text-ink-700 mb-3">{title}</h2>
      <p className="text-ink-500 mb-8 max-w-md mx-auto">{description}</p>
      {action && (
        <Link
          to={action.href}
          className="inline-flex items-center px-6 py-3 bg-burgundy-700 text-white rounded-button font-medium hover:bg-burgundy-500 transition-colors"
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}
