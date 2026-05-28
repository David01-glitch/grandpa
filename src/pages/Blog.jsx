import { articles } from '../data/site'
import Section from '../components/Section'
import ExpandableCard from '../components/ExpandableCard'

export default function Blog() {
  return (
    <Section eyebrow="The Blog" title="Stories, Projects & Tips" subtitle="Click any article to read it right here — no new pages, no clutter.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(a => (
          <ExpandableCard key={a.id} tag={a.cat} img={a.img} title={a.title} excerpt={a.excerpt} body={a.body} />
        ))}
      </div>
    </Section>
  )
}
