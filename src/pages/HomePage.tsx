import { useArticles } from '../hooks/useArticles'
import { useExcerpts } from '../hooks/useExcerpts'
import { HeroSection } from '../components/home/HeroSection'
import { FeaturedArticles } from '../components/home/FeaturedArticles'
import { FeaturedExcerpts } from '../components/home/FeaturedExcerpts'
import { Skeleton } from '../components/ui/Skeleton'
import { ErrorState } from '../components/ui/ErrorState'
import { EmptyState } from '../components/ui/EmptyState'
import { Container } from '../components/ui/Container'
import { authors } from '../data/authors'

export function HomePage() {
  const { articles, loading: articlesLoading, error: articlesError } = useArticles()
  const { excerpts, loading: excerptsLoading, error: excerptsError } = useExcerpts()

  const loading = articlesLoading || excerptsLoading
  const error = articlesError ?? excerptsError

  const authorMap = Object.fromEntries(authors.map((a) => [a.id, a]))
  const featuredArticles = articles?.filter((a) => a.featured) ?? []
  const featuredExcerpts = excerpts?.filter((e) => e.featured) ?? []

  return (
    <div>
      <HeroSection />

      {loading && (
        <Container className="py-16 space-y-12">
          <Skeleton variant="hero" />
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton variant="card" />
            <Skeleton variant="card" />
          </div>
        </Container>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && (
        <>
          {featuredArticles.length > 0 ? (
            <FeaturedArticles articles={featuredArticles} />
          ) : (
            <EmptyState
              title="No articles yet"
              description="Articles will appear here once they are published."
              action={{ label: 'Browse excerpts', href: '/excerpts' }}
            />
          )}

          {featuredExcerpts.length > 0 ? (
            <FeaturedExcerpts excerpts={featuredExcerpts} authors={authorMap} />
          ) : (
            <EmptyState
              title="No excerpts yet"
              description="Literary excerpts will be curated and shared here soon."
              action={{ label: 'Read articles', href: '/articles' }}
            />
          )}
        </>
      )}
    </div>
  )
}
