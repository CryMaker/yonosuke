import type { Article } from '../types/article'
import type { LiteraryExcerpt } from '../types/excerpt'
import type { Author } from '../types/author'

const API_BASE = 'http://localhost:8000/api/v1'

interface Envelope<T> {
  data: T
}
interface ListEnvelope<T> {
  data: T[]
  meta: { total: number; limit: number; offset: number; hasMore: boolean }
}

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.json().catch(() => null)
    const msg = body?.error?.message ?? body?.detail ?? `${res.status} ${res.statusText}`
    throw new Error(msg)
  }
  return res.json()
}

export async function getArticles(): Promise<Article[]> {
  const json = await fetchJSON<ListEnvelope<Article>>(`${API_BASE}/articles?limit=50`)
  return json.data
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const json = await fetchJSON<Envelope<Article>>(`${API_BASE}/articles/${encodeURIComponent(slug)}`)
  return json.data ?? null
}

export async function getExcerpts(): Promise<LiteraryExcerpt[]> {
  const json = await fetchJSON<ListEnvelope<LiteraryExcerpt>>(`${API_BASE}/excerpts?limit=50`)
  return json.data
}

export async function getExcerptBySlug(slug: string): Promise<LiteraryExcerpt | null> {
  const json = await fetchJSON<Envelope<LiteraryExcerpt>>(`${API_BASE}/excerpts/${encodeURIComponent(slug)}`)
  return json.data ?? null
}

export async function getAuthors(): Promise<Author[]> {
  const json = await fetchJSON<ListEnvelope<Author>>(`${API_BASE}/authors?limit=50`)
  return json.data
}

export async function getAuthorById(id: string): Promise<Author | null> {
  const json = await fetchJSON<Envelope<Author>>(`${API_BASE}/authors/${encodeURIComponent(id)}`)
  return json.data ?? null
}
