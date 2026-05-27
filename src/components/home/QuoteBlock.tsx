export function QuoteBlock() {
  return (
    <div className="relative py-20 text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[200px] font-serif text-gold-600/10 leading-none">&ldquo;</span>
      </div>
      <blockquote className="relative max-w-2xl mx-auto">
        <p className="font-serif text-subtitle md:text-h3 text-ink-700 italic leading-relaxed">
          A reader lives a thousand lives before he dies. The man who never reads lives only one.
        </p>
        <footer className="mt-6 text-small text-ink-500">
          &mdash; George R. R. Martin
        </footer>
      </blockquote>
    </div>
  )
}
