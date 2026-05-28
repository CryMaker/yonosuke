import { useState, useEffect } from 'react'
import type { Author } from '../types/author'
import { getAuthors } from '../lib/data-access'

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAuthors()
      .then(setAuthors)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { authors, loading, error }
}
