import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-parchment-50 via-parchment-50 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-burgundy-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold-200/20 rounded-full blur-3xl" />

      <Container className="relative py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-display md:text-[64px] text-ink-900 mb-6 text-balance leading-[1.1]">
            A space for
            <br />
            <span className="text-burgundy-700">words that matter</span>
          </h1>
          <p className="text-subtitle text-ink-500 max-w-lg mb-10 leading-relaxed">
            Personal essays and curated excerpts from the world's greatest literature — a quiet corner of the internet for thoughtful reading.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/articles"
              className="inline-flex items-center px-8 py-3.5 bg-burgundy-700 text-white rounded-button font-medium hover:bg-burgundy-500 transition-colors text-body shadow-elevated shadow-burgundy-700/20"
            >
              Read my articles
            </Link>
            <Link
              to="/excerpts"
              className="inline-flex items-center px-8 py-3.5 border-2 border-parchment-200 text-ink-700 rounded-button font-medium hover:border-burgundy-700 hover:text-burgundy-700 transition-colors text-body"
            >
              Explore excerpts
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
