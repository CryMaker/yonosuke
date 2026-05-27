import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-parchment-200/50 bg-parchment-100/50 mt-20">
      <div className="max-w-site mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-serif text-h3 text-burgundy-700">
          Yonosuke
        </Link>

        <p className="text-small text-ink-500 font-serif italic">
          &ldquo;A reader lives a thousand lives before he dies.&rdquo;
        </p>

        <p className="text-caption text-ink-300">
          &copy; {new Date().getFullYear()} Yonosuke. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
