export interface LiteraryExcerpt {
  slug: string
  title: string
  content: string
  source: string
  sourceYear?: number
  authorId: string
  language: 'zh' | 'en' | 'ru' | 'fr' | 'de' | 'ja' | 'other'
  translator?: string
  notes?: string
  tags: string[]
  featured: boolean
}
