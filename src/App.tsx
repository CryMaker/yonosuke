import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ArticlesPage } from './pages/ArticlesPage'
import { ArticleDetailPage } from './pages/ArticleDetailPage'
import { ExcerptsPage } from './pages/ExcerptsPage'
import { ExcerptDetailPage } from './pages/ExcerptDetailPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetailPage />} />
        <Route path="/excerpts" element={<ExcerptsPage />} />
        <Route path="/excerpts/:slug" element={<ExcerptDetailPage />} />
      </Route>
    </Routes>
  )
}
