interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="text-center py-20">
      <div className="text-5xl mb-6">!</div>
      <h2 className="font-serif text-h2 text-burgundy-700 mb-3">Something went wrong</h2>
      <p className="text-ink-500 mb-8">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-6 py-3 bg-burgundy-700 text-white rounded-button font-medium hover:bg-burgundy-500 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  )
}
