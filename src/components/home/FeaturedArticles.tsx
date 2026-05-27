import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import type { Article } from '../../types/article'

interface FeaturedArticlesProps {
  articles: Article[]
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <Container as="section" className="py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="font-serif text-h2 text-ink-900">My Articles</h2>
          <p className="text-ink-500 mt-2">Thoughts on literature, culture, and the art of reading.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.slice(0, 2).map((article) => (
          <Card key={article.slug} href={`/articles/${article.slug}`} padding="none">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                {article.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="burgundy">{tag}</Badge>
                ))}
                <span className="text-caption text-ink-300">{article.readingTimeMinutes} min read</span>
              </div>
              <h3 className="font-serif text-h3 text-ink-900 mb-3 group-hover:text-burgundy-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-ink-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
              <p className="text-caption text-ink-300 mt-4">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  )
}
