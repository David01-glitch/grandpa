import { useState } from 'react'
import { contact } from '../data/site'
import Section from '../components/Section'
import { trackEvent } from '../utils/analytics'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    trackEvent('contact_submit', { name: form.name })
    setSent(true)
  }
  return (
    <Section eyebrow="Contact" title="Drop Us a Line">
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-4">
          <h3 className="font-heading text-2xl">Workshop Details</h3>
          <p className="text-charcoal/80">Have a project to share, a question about a tool, or a story you want to tell? We read every note that lands in our inbox.</p>
          <ul className="space-y-3 text-charcoal/85">
            <li><strong>Email:</strong> {contact.email}</li>
            <li><strong>Phone:</strong> {contact.phone}</li>
            <li><strong>Address:</strong> {contact.address}</li>
            <li><strong>Hours:</strong> Mon–Sat, 9am–5pm CT</li>
          </ul>
        </div>
        <div className="card p-6">
          {sent ? (
            <p className="text-cedar font-semibold text-center py-10">Thanks {form.name}! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <input required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-cedar" />
              <input required type="email" placeholder="Your email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-cedar" />
              <textarea required rows={5} placeholder="Your message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-cedar" />
              <button className="btn-primary w-full">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
