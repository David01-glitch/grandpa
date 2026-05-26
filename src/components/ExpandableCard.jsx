import { useState } from 'react'

export default function ExpandableCard({ img, title, excerpt, body, tag, cta = 'Read More' }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="card flex flex-col">
      {img && (
        <img src={img} alt={title} loading="lazy" className="w-full h-52 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-1">
        {tag && <span className="text-xs font-semibold uppercase tracking-wider text-cedar mb-2">{tag}</span>}
        <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
        <p className="text-charcoal/75 text-[15px] mb-4">{excerpt}</p>
        <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="text-charcoal/80 text-[15px] leading-relaxed">{body}</p>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="mt-auto self-start text-walnut font-semibold hover:text-cedar transition-colors">
          {open ? 'Show Less ↑' : `${cta} →`}
        </button>
      </div>
    </article>
  )
}
