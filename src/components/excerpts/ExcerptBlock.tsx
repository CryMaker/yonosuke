interface ExcerptBlockProps {
  content: string
  source: string
  attribution?: string
}

export function ExcerptBlock({ content, source, attribution }: ExcerptBlockProps) {
  return (
    <div className="relative my-8">
      <div className="absolute -top-4 -left-4 text-8xl font-serif text-gold-600/20 select-none leading-none">
        &ldquo;
      </div>
      <blockquote className="relative border-l-4 border-gold-600 bg-gold-200/20 p-6 md:p-10 rounded-r-lg">
        <div className="font-serif text-body-serif md:text-subtitle text-ink-800 leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </blockquote>
      <footer className="mt-4 text-right text-small text-ink-500">
        <cite className="not-italic font-medium text-ink-700">&mdash; {source}</cite>
        {attribution && (
          <span className="block text-caption text-ink-400 mt-1">{attribution}</span>
        )}
      </footer>
    </div>
  )
}
