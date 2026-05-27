export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  readingTimeMinutes: number
  tags: string[]
  coverImage?: string
  featured: boolean
}
