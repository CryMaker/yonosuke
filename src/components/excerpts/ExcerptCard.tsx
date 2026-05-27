import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import type { LiteraryExcerpt } from '../../types/excerpt'
import type { Author } from '../../types/author'

interface ExcerptCardProps {
  excerpt: LiteraryExcerpt
  author: Author
  index?: number
}

export function ExcerptCard({ excerpt, author }: ExcerptCardProps) {
  return (
    <Card href={`/excerpts/${excerpt.slug}`} padding="none" className="flex flex-col">
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="sage">{excerpt.language === 'zh' ? '中文' : excerpt.language.toUpperCase()}</Badge>
          {excerpt.tags.slice(0, 1).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className="font-serif text-h3 text-ink-900 mb-3 group-hover:text-burgundy-700 transition-colors">
          {excerpt.title}
        </h3>

        <p className="text-small text-ink-500 mb-3">
          {author.name}{author.nameNative && ` (${author.nameNative})`} &middot; {excerpt.source}
          {excerpt.sourceYear && `, ${excerpt.sourceYear}`}
        </p>

        <p className="text-ink-600 leading-relaxed italic line-clamp-3 font-serif flex-1">
          &ldquo;{excerpt.content.slice(0, 200)}&hellip;&rdquo;
        </p>

        {excerpt.notes && (
          <p className="text-caption text-ink-400 mt-3 line-clamp-2 border-t border-parchment-200 pt-3">
            {excerpt.notes}
          </p>
        )}
      </div>
    </Card>
  )
}
