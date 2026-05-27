# Yonosuke API Documentation

## Overview

RESTful API for the Yonosuke literary platform. Base URL: `https://api.yonosuke.com/v1`

All responses are JSON. All endpoints return standardized response envelopes.

---

## Response Envelope

### Success (Single Item)
```json
{
  "data": { ... }
}
```

### Success (List)
```json
{
  "data": [ ... ],
  "meta": {
    "total": 42,
    "limit": 10,
    "offset": 0,
    "hasMore": true
  }
}
```

### Error
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "No article found with slug 'nonexistent'"
  }
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200  | Success |
| 201  | Resource created |
| 400  | Bad request / validation error |
| 404  | Resource not found |
| 500  | Internal server error |

---

## Resources

### Article

```json
{
  "slug": "why-we-read-classics",
  "title": "Why We Still Read the Classics",
  "excerpt": "In an age of endless content...",
  "content": "## The Patience Problem\n\nFull markdown body...",
  "publishedAt": "2026-05-20T08:00:00Z",
  "updatedAt": "2026-05-21T10:00:00Z",
  "readingTimeMinutes": 6,
  "tags": ["reading", "literature", "culture"],
  "coverImage": "https://cdn.yonosuke.com/covers/classics.jpg",
  "featured": true
}
```

### LiteraryExcerpt

```json
{
  "slug": "to-be-or-not-to-be",
  "title": "To Be, or Not to Be",
  "content": "To be, or not to be...",
  "source": "Hamlet, Act III, Scene I",
  "sourceYear": 1603,
  "authorId": "shakespeare",
  "language": "en",
  "translator": null,
  "notes": "Perhaps the most famous soliloquy...",
  "tags": ["existentialism", "drama", "philosophy"],
  "featured": true
}
```

### Author

```json
{
  "id": "shakespeare",
  "name": "William Shakespeare",
  "nameNative": null,
  "nationality": "English",
  "period": "Elizabethan / Jacobean",
  "bio": "William Shakespeare (1564-1616) was an English playwright...",
  "avatarUrl": "https://cdn.yonosuke.com/avatars/shakespeare.jpg",
  "wikipediaUrl": "https://en.wikipedia.org/wiki/William_Shakespeare"
}
```

---

## Endpoints

### 1. List Articles

```http
GET /articles
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `featured` | boolean | — | Filter featured articles only |
| `tag` | string | — | Filter by tag (e.g., `reading`) |
| `limit` | integer | 20 | Items per page (max 50) |
| `offset` | integer | 0 | Pagination offset |

**Example Request:**
```http
GET /v1/articles?featured=true&limit=6 HTTP/1.1
Host: api.yonosuke.com
```

**Example Response (200):**
```json
{
  "data": [
    {
      "slug": "why-we-read-classics",
      "title": "Why We Still Read the Classics",
      "excerpt": "In an age of endless content, sitting down with a 150-year-old novel...",
      "publishedAt": "2026-05-20T08:00:00Z",
      "readingTimeMinutes": 6,
      "tags": ["reading", "literature", "culture"],
      "featured": true
    }
  ],
  "meta": {
    "total": 3,
    "limit": 6,
    "offset": 0,
    "hasMore": false
  }
}
```

---

### 2. Get Article by Slug

```http
GET /articles/:slug
```

**Path Parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `slug` | string | Article URL slug |

**Example Request:**
```http
GET /v1/articles/why-we-read-classics HTTP/1.1
Host: api.yonosuke.com
```

**Example Response (200):**
```json
{
  "data": {
    "slug": "why-we-read-classics",
    "title": "Why We Still Read the Classics",
    "excerpt": "In an age of endless content...",
    "content": "## The Patience Problem\n\nIn an age of endless content...",
    "publishedAt": "2026-05-20T08:00:00Z",
    "updatedAt": null,
    "readingTimeMinutes": 6,
    "tags": ["reading", "literature", "culture"],
    "coverImage": null,
    "featured": true
  }
}
```

**Error (404):**
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "No article found with slug 'nonexistent'"
  }
}
```

---

### 3. List Excerpts

```http
GET /excerpts
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `featured` | boolean | — | Filter featured excerpts only |
| `authorId` | string | — | Filter by author (e.g., `tolstoy`) |
| `language` | string | — | Filter by language (`zh`, `en`, `ru`, etc.) |
| `tag` | string | — | Filter by tag |
| `limit` | integer | 20 | Items per page (max 50) |
| `offset` | integer | 0 | Pagination offset |

**Example Request:**
```http
GET /v1/excerpts?language=en&featured=true&limit=10 HTTP/1.1
Host: api.yonosuke.com
```

**Example Response (200):**
```json
{
  "data": [
    {
      "slug": "to-be-or-not-to-be",
      "title": "To Be, or Not to Be",
      "content": "To be, or not to be...",
      "source": "Hamlet, Act III, Scene I",
      "sourceYear": 1603,
      "authorId": "shakespeare",
      "language": "en",
      "translator": null,
      "notes": "Perhaps the most famous soliloquy...",
      "tags": ["existentialism", "drama", "philosophy"],
      "featured": true
    }
  ],
  "meta": {
    "total": 2,
    "limit": 10,
    "offset": 0,
    "hasMore": false
  }
}
```

---

### 4. Get Excerpt by Slug

```http
GET /excerpts/:slug
```

**Path Parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `slug` | string | Excerpt URL slug |

**Example Request:**
```http
GET /v1/excerpts/to-be-or-not-to-be HTTP/1.1
Host: api.yonosuke.com
```

**Example Response (200):**
```json
{
  "data": {
    "slug": "to-be-or-not-to-be",
    "title": "To Be, or Not to Be",
    "content": "To be, or not to be...",
    "source": "Hamlet, Act III, Scene I",
    "sourceYear": 1603,
    "authorId": "shakespeare",
    "language": "en",
    "translator": null,
    "notes": "Perhaps the most famous soliloquy...",
    "tags": ["existentialism", "drama", "philosophy"],
    "featured": true
  }
}
```

---

### 5. List Authors

```http
GET /authors
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `nationality` | string | — | Filter by nationality |
| `limit` | integer | 20 | Items per page |
| `offset` | integer | 0 | Pagination offset |

**Example Request:**
```http
GET /v1/authors?nationality=Russian HTTP/1.1
Host: api.yonosuke.com
```

**Example Response (200):**
```json
{
  "data": [
    {
      "id": "tolstoy",
      "name": "Leo Tolstoy",
      "nameNative": "Лев Николаевич Толстой",
      "nationality": "Russian",
      "period": "19th Century",
      "bio": "Count Lev Nikolayevich Tolstoy...",
      "avatarUrl": null
    }
  ],
  "meta": {
    "total": 2,
    "limit": 20,
    "offset": 0,
    "hasMore": false
  }
}
```

---

### 6. Get Author by ID

```http
GET /authors/:id
```

**Path Parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `id` | string | Author identifier |

**Example Request:**
```http
GET /v1/authors/lu-xun HTTP/1.1
Host: api.yonosuke.com
```

**Example Response (200):**
```json
{
  "data": {
    "id": "lu-xun",
    "name": "Lu Xun",
    "nameNative": "鲁迅",
    "nationality": "Chinese",
    "period": "Modern Chinese (Early 20th Century)",
    "bio": "Lu Xun (1881-1936), born Zhou Shuren...",
    "avatarUrl": null,
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Lu_Xun"
  }
}
```

---

## Pagination Convention

All list endpoints follow the same pagination pattern:

- **Request**: `?limit=N&offset=M`
- **Response**: `meta.total` = total matching records, `meta.hasMore` = whether more pages exist after this one
- **Default limit**: 20 items per page
- **Maximum limit**: 50 items per page (values > 50 are clamped)

### Example pagination flow:

```http
GET /v1/articles?limit=10&offset=0   → first 10 articles
GET /v1/articles?limit=10&offset=10  → next 10 articles
GET /v1/articles?limit=10&offset=20  → final page (meta.hasMore: false)
```

---

## Filtering Convention

- All filter parameters are optional and can be combined
- Boolean filters (`featured`) accept `true` or `false`
- String filters (`tag`, `authorId`, `language`, `nationality`) are case-insensitive exact matches
- Multiple values for the same filter are comma-separated: `?tag=poetry,wisdom`

---

## Error Codes Reference

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `NOT_FOUND` | 404 | Requested resource does not exist |
| `VALIDATION_ERROR` | 400 | Request parameters are invalid |
| `INTERNAL_ERROR` | 500 | Unexpected server error |

---

## Rate Limiting

- **Anonymous**: 60 requests per minute
- **Authenticated**: 300 requests per minute (future)
- Rate limit headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

---

## Extensibility

This API is designed to be extended with additional modules in the future:

- `GET /series` — Article series/collections
- `GET /topics` — Topic/category taxonomy
- `GET /search?q=term` — Full-text search across articles, excerpts, and authors
- `POST /newsletter` — Newsletter subscription
- `GET /reading-lists` — Curated reading lists

New modules follow the same conventions: RESTful resource naming, envelope-wrapped responses, offset-limit pagination, and optional filter parameters.
