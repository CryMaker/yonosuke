import { useState, useEffect } from 'react'
import type { LiteraryExcerpt } from '../types/excerpt'
import type { Author } from '../types/author'
import { getExcerpts, getExcerptBySlug, getAuthorById } from '../lib/data-access'

export function useExcerpts() {
  const [excerpts, setExcerpts] = useState<LiteraryExcerpt[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getExcerpts()
      .then(setExcerpts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { excerpts, loading, error }
}

export function useExcerpt(slug: string) {
  const [excerpt, setExcerpt] = useState<LiteraryExcerpt | null | undefined>(undefined)
  const [author, setAuthor] = useState<Author | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setExcerpt(undefined)
    setError(null)
    getExcerptBySlug(slug)
      .then(async (e) => {
        if (!e) {
          setExcerpt(null)
          return
        }
        setExcerpt(e)
        const a = await getAuthorById(e.authorId)
        setAuthor(a)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  return { excerpt, author, loading, error }
}
