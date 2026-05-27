import { Prose } from '../ui/Prose'
import { Badge } from '../ui/Badge'
import type { Article } from '../../types/article'

interface ArticleContentProps {
  article: Article
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article>
      <header className="mb-12">
        <h1 className="font-serif text-display md:text-h1 text-ink-900 mb-4 text-balance">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-small text-ink-500">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="text-ink-300">&middot;</span>
          <span className="text-small text-ink-500">{article.readingTimeMinutes} min read</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="burgundy" size="md">{tag}</Badge>
          ))}
        </div>
      </header>

      <Prose>
        {article.content.split('\n\n').map((paragraph, i) => {
          if (paragraph.startsWith('## ')) {
            return <h2 key={i}>{paragraph.replace('## ', '')}</h2>
          }
          return <p key={i}>{paragraph}</p>
        })}
      </Prose>
    </article>
  )
}
