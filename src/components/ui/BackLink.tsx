import { Link } from 'react-router-dom'

interface BackLinkProps {
  href: string
  label: string
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      to={href}
      className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-700 transition-colors text-small font-medium group"
    >
      <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span>
      {label}
    </Link>
  )
}
