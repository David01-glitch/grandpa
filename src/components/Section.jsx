export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div className="text-center mb-10 max-w-2xl mx-auto">
            {eyebrow && <p className="text-cedar font-semibold uppercase tracking-wider text-sm mb-2">{eyebrow}</p>}
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>}
            {subtitle && <p className="text-charcoal/70">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
