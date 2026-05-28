import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-x text-center max-w-xl mx-auto">
        <p className="text-7xl mb-4">🪚</p>
        <h1 className="text-5xl font-bold mb-3">404</h1>
        <p className="text-charcoal/75 mb-6">This page seems to have been planed away. Let's get you back to the workshop.</p>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </div>
    </section>
  )
}
