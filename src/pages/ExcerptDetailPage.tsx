import { useParams } from 'react-router-dom'
import { useExcerpt } from '../hooks/useExcerpts'
import { ExcerptContent } from '../components/excerpts/ExcerptContent'
import { Container } from '../components/ui/Container'
import { BackLink } from '../components/ui/BackLink'
import { Skeleton } from '../components/ui/Skeleton'
import { ErrorState } from '../components/ui/ErrorState'

export function ExcerptDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { excerpt, author, loading, error } = useExcerpt(slug!)

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

      {!loading && !error && (!excerpt || !author) && (
        <div className="text-center py-20">
          <h1 className="font-serif text-h1 text-ink-700 mb-4">Excerpt not found</h1>
          <p className="text-ink-500 mb-8">The excerpt you're looking for doesn't exist or has been removed.</p>
          <BackLink href="/excerpts" label="Back to excerpts" />
        </div>
      )}

      {!loading && !error && excerpt && author && (
        <ExcerptContent excerpt={excerpt} author={author} />
      )}
    </Container>
  )
}
