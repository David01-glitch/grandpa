import { stories, images } from '../data/site'
import Section from '../components/Section'
import ExpandableCard from '../components/ExpandableCard'

export default function Community() {
  return (
    <>
      <Section eyebrow="Community" title="Builders, Stories & Workshops">
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div key={i} className="card p-6 text-center">
              <img src={s.img} alt={s.name} loading="lazy" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
              <p className="italic text-charcoal/80 mb-3">"{s.quote}"</p>
              <p className="font-heading text-walnut font-semibold">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Meet-ups" title="Workshop Gatherings" className="bg-beige/40">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ExpandableCard img={images.garage1} title="Milwaukee Monthly Build Day" excerpt="The first Saturday of every month at our Timber Ridge Rd workshop." body="Bring a project, a tool you love, or just a thermos of coffee. We share benches, ideas, and stories from 9am to noon. Free for all readers — beginners especially welcome. We provide safety glasses, ear protection, and plenty of patience." cta="View Project" />
          <ExpandableCard img={images.comm2} title="The Saturday Restoration Circle" excerpt="A weekly group focused on furniture restoration and refinishing." body="Every Saturday at 10am, we meet to work on rescued furniture together. Bring a chair, a side table, or a dresser — leave with new techniques and a few new friends. Membership is free; bring your own stripping solvent and elbow grease." cta="View Project" />
        </div>
      </Section>
    </>
  )
}
