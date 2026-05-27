import type { Article } from '../types/article'
import type { LiteraryExcerpt } from '../types/excerpt'
import type { Author } from '../types/author'
import { articles } from '../data/articles'
import { excerpts } from '../data/excerpts'
import { authors } from '../data/authors'

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function getArticles(): Promise<Article[]> {
  await delay(200)
  return articles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  await delay(150)
  return articles.find((a) => a.slug === slug) ?? null
}

export async function getExcerpts(): Promise<LiteraryExcerpt[]> {
  await delay(200)
  return excerpts
}

export async function getExcerptBySlug(slug: string): Promise<LiteraryExcerpt | null> {
  await delay(150)
  return excerpts.find((e) => e.slug === slug) ?? null
}

export async function getAuthors(): Promise<Author[]> {
  await delay(150)
  return authors
}

export async function getAuthorById(id: string): Promise<Author | null> {
  await delay(100)
  return authors.find((a) => a.id === id) ?? null
}
