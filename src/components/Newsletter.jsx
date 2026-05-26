import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    trackEvent('newsletter_signup', { email })
    setDone(true)
    setEmail('')
  }
  return (
    <div className="bg-walnut text-cream rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-warm">
      <h2 className="text-cream text-3xl md:text-4xl font-bold mb-3">Join the Workshop Newsletter</h2>
      <p className="text-beige/80 mb-6">Weekly project ideas, tool tips, and reader stories delivered to your inbox. No spam — just sawdust and stories.</p>
      {done ? (
        <p className="text-cedar font-semibold">Thanks! Welcome to the workshop. 🪵</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-cedar" />
          <button type="submit" className="bg-cedar hover:bg-rust transition-colors px-6 py-3 rounded-full font-semibold">Subscribe</button>
        </form>
      )}
    </div>
  )
}
