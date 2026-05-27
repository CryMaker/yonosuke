import { ExcerptCard } from './ExcerptCard'
import type { LiteraryExcerpt } from '../../types/excerpt'
import type { Author } from '../../types/author'

interface ExcerptGridProps {
  excerpts: LiteraryExcerpt[]
  authors: Record<string, Author>
}

export function ExcerptGrid({ excerpts, authors }: ExcerptGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {excerpts.map((excerpt) => (
        <ExcerptCard
          key={excerpt.slug}
          excerpt={excerpt}
          author={authors[excerpt.authorId]}
        />
      ))}
    </div>
  )
}
