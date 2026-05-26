import { useParams, Link } from 'react-router-dom'
import { categories, articles } from '../data/site'
import Section from '../components/Section'
import ExpandableCard from '../components/ExpandableCard'

export default function Category() {
  const { slug } = useParams()
  const cat = categories.find(c => c.slug === slug)
  if (!cat) {
    return (
      <Section title="Category not found">
        <p className="text-center"><Link to="/" className="text-cedar font-semibold">← Back home</Link></p>
      </Section>
    )
  }
  const items = articles.filter(a => a.cat.toLowerCase().includes(cat.name.toLowerCase().split(' ')[0]))
  const list = items.length ? items : articles.slice(0, 3)
  return (
    <>
      <section className="bg-walnut text-cream">
        <div className="container-x py-16 text-center">
          <p className="text-cedar font-semibold uppercase tracking-wider text-sm mb-2">Category</p>
          <h1 className="text-cream text-4xl md:text-5xl font-bold mb-3">{cat.name}</h1>
          <p className="text-beige/85 max-w-2xl mx-auto">{cat.desc}</p>
        </div>
      </section>
      <Section title="Articles in this category">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(a => (
            <ExpandableCard key={a.id} tag={a.cat} img={a.img} title={a.title} excerpt={a.excerpt} body={a.body} />
          ))}
        </div>
      </Section>
    </>
  )
}
