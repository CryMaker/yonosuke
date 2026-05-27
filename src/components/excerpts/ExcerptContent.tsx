import { Container } from '../ui/Container'
import { Badge } from '../ui/Badge'
import { BackLink } from '../ui/BackLink'
import { ExcerptBlock } from './ExcerptBlock'
import type { LiteraryExcerpt } from '../../types/excerpt'
import type { Author } from '../../types/author'

interface ExcerptContentProps {
  excerpt: LiteraryExcerpt
  author: Author
}

export function ExcerptContent({ excerpt, author }: ExcerptContentProps) {
  return (
    <article>
      <header className="mb-10">
        <BackLink href="/excerpts" label="Back to excerpts" />
        <h1 className="font-serif text-display md:text-h1 text-ink-900 mt-6 mb-4 text-balance">
          {excerpt.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="sage" size="md">{excerpt.language === 'zh' ? '中文' : excerpt.language.toUpperCase()}</Badge>
          {excerpt.tags.map((tag) => (
            <Badge key={tag} size="md">{tag}</Badge>
          ))}
        </div>

        <p className="text-subtitle text-ink-600 font-serif">
          From{' '}
          <cite className="not-italic font-semibold text-ink-900">
            {excerpt.source}
          </cite>
          {excerpt.sourceYear && <span className="text-ink-400"> ({excerpt.sourceYear})</span>}
          {excerpt.translator && (
            <span className="text-small text-ink-400 block mt-1">
              Translated by {excerpt.translator}
            </span>
          )}
        </p>
      </header>

      <ExcerptBlock
        content={excerpt.content}
        source={`${author.name}${author.nameNative ? ` (${author.nameNative})` : ''}`}
        attribution={excerpt.source}
      />

      {/* Author bio sidebar */}
      <div className="mt-12 p-8 bg-parchment-100 rounded-card border border-parchment-200">
        <h3 className="font-serif text-h3 text-ink-900 mb-3">
          About {author.name}
          {author.nameNative && <span className="text-ink-400 text-subtitle"> ({author.nameNative})</span>}
        </h3>
        <p className="text-ink-600 leading-relaxed">{author.bio}</p>
        <div className="flex gap-4 mt-4 text-small text-ink-500">
          <span>{author.nationality}</span>
          <span>&middot;</span>
          <span>{author.period}</span>
        </div>
      </div>

      {/* Curator's notes */}
      {excerpt.notes && (
        <div className="mt-8 p-8 border-l-4 border-burgundy-700 bg-burgundy-100/50 rounded-r-lg">
          <h4 className="font-serif text-subtitle text-burgundy-700 mb-2">Curator's Note</h4>
          <p className="text-ink-700 leading-relaxed">{excerpt.notes}</p>
        </div>
      )}
    </article>
  )
}
