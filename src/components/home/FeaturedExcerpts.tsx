import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Divider } from '../ui/Divider'
import { QuoteBlock } from './QuoteBlock'
import type { LiteraryExcerpt } from '../../types/excerpt'
import type { Author } from '../../types/author'

interface FeaturedExcerptsProps {
  excerpts: LiteraryExcerpt[]
  authors: Record<string, Author>
}

export function FeaturedExcerpts({ excerpts, authors }: FeaturedExcerptsProps) {
  return (
    <>
      <Divider className="max-w-site mx-auto px-6" />
      <QuoteBlock />
      <Divider className="max-w-site mx-auto px-6" />

      <Container as="section" className="py-16">
        <div className="mb-10">
          <h2 className="font-serif text-h2 text-ink-900">Literary Excerpts</h2>
          <p className="text-ink-500 mt-2">Curated passages from world literature, with personal annotations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {excerpts.slice(0, 2).map((excerpt) => {
            const author = authors[excerpt.authorId]
            return (
              <Card key={excerpt.slug} href={`/excerpts/${excerpt.slug}`} padding="none">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="sage">{excerpt.language === 'zh' ? '中文' : 'English'}</Badge>
                    {excerpt.tags.slice(0, 1).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="font-serif text-h3 text-ink-900 mb-3">{excerpt.title}</h3>
                  <p className="text-small text-ink-500 mb-4">
                    {author ? author.name : 'Unknown'} &middot; {excerpt.source}{' '}
                    {excerpt.sourceYear && `(${excerpt.sourceYear})`}
                  </p>
                  <p className="text-ink-600 leading-relaxed italic line-clamp-3 font-serif">
                    &ldquo;{excerpt.content.slice(0, 200)}&hellip;&rdquo;
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </>
  )
}
