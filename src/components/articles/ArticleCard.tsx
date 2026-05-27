import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import type { Article } from '../../types/article'

interface ArticleCardProps {
  article: Article
  index?: number
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <Card
      href={`/articles/${article.slug}`}
      padding="none"
      className="flex flex-col"
    >
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          {article.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="burgundy">{tag}</Badge>
          ))}
          <span className="text-caption text-ink-300">{article.readingTimeMinutes} min read</span>
        </div>

        <h3 className="font-serif text-h3 text-ink-900 mb-3 group-hover:text-burgundy-700 transition-colors">
          {article.title}
        </h3>

        <p className="text-ink-500 leading-relaxed flex-1 line-clamp-3">{article.excerpt}</p>

        <p className="text-caption text-ink-300 mt-4">
          {new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </Card>
  )
}
