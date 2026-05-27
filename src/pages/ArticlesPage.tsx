import { useArticles } from '../hooks/useArticles'
import { ArticleGrid } from '../components/articles/ArticleGrid'
import { Container } from '../components/ui/Container'
import { Skeleton } from '../components/ui/Skeleton'
import { EmptyState } from '../components/ui/EmptyState'
import { ErrorState } from '../components/ui/ErrorState'

export function ArticlesPage() {
  const { articles, loading, error } = useArticles()

  return (
    <Container as="section" className="py-16">
      <div className="mb-12">
        <h1 className="font-serif text-display md:text-h1 text-ink-900 mb-3">My Articles</h1>
        <p className="text-subtitle text-ink-500">Personal essays on literature, culture, and the habit of reading.</p>
      </div>

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="card" />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && articles && articles.length === 0 && (
        <EmptyState
          title="No articles yet"
          description="Check back soon for new writing."
          action={{ label: 'Go home', href: '/' }}
        />
      )}

      {!loading && !error && articles && articles.length > 0 && <ArticleGrid articles={articles} />}
    </Container>
  )
}
