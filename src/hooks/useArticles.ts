import { useState, useEffect } from 'react'
import type { Article } from '../types/article'
import { getArticles, getArticleBySlug } from '../lib/data-access'

export function useArticles() {
  const [articles, setArticles] = useState<Article[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getArticles()
      .then(setArticles)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { articles, loading, error }
}

export function useArticle(slug: string) {
  const [article, setArticle] = useState<Article | null | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setArticle(undefined)
    setError(null)
    getArticleBySlug(slug)
      .then((a) => setArticle(a ?? null))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  return { article, loading, error }
}
