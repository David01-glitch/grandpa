import { useState } from 'react'
import { faqs } from '../data/site'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <button onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-beige/40 transition-colors">
            <span className="font-heading text-lg font-semibold text-walnut">{f.q}</span>
            <span className="text-2xl text-cedar">{open === i ? '−' : '+'}</span>
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-charcoal/80">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
