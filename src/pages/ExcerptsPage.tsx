import { useExcerpts } from '../hooks/useExcerpts'
import { ExcerptGrid } from '../components/excerpts/ExcerptGrid'
import { Container } from '../components/ui/Container'
import { Skeleton } from '../components/ui/Skeleton'
import { EmptyState } from '../components/ui/EmptyState'
import { ErrorState } from '../components/ui/ErrorState'
import { authors } from '../data/authors'

export function ExcerptsPage() {
  const { excerpts, loading, error } = useExcerpts()
  const authorMap = Object.fromEntries(authors.map((a) => [a.id, a]))

  return (
    <Container as="section" className="py-16">
      <div className="mb-12">
        <h1 className="font-serif text-display md:text-h1 text-ink-900 mb-3">Literary Excerpts</h1>
        <p className="text-subtitle text-ink-500">
          Curated passages from world literature, each with a personal note on why it resonates.
        </p>
      </div>

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="card" />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && excerpts && excerpts.length === 0 && (
        <EmptyState
          title="No excerpts yet"
          description="Literary excerpts will be curated here soon."
          action={{ label: 'Go home', href: '/' }}
        />
      )}

      {!loading && !error && excerpts && excerpts.length > 0 && (
        <ExcerptGrid excerpts={excerpts} authors={authorMap} />
      )}
    </Container>
  )
}
