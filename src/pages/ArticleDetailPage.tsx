import { useParams } from 'react-router-dom'
import { useArticle } from '../hooks/useArticles'
import { ArticleContent } from '../components/articles/ArticleContent'
import { Container } from '../components/ui/Container'
import { BackLink } from '../components/ui/BackLink'
import { Skeleton } from '../components/ui/Skeleton'
import { ErrorState } from '../components/ui/ErrorState'

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { article, loading, error } = useArticle(slug!)

  return (
    <Container maxWidth="content" as="article" className="py-16">
      {loading && (
        <div className="space-y-6">
          <Skeleton variant="hero" />
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-2/3" />
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && !article && (
        <div className="text-center py-20">
          <h1 className="font-serif text-h1 text-ink-700 mb-4">Article not found</h1>
          <p className="text-ink-500 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <BackLink href="/articles" label="Back to articles" />
        </div>
      )}

      {!loading && !error && article && <ArticleContent article={article} />}
    </Container>
  )
}
