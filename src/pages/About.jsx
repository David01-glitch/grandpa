import { images } from '../data/site'
import Section from '../components/Section'

export default function About() {
  return (
    <>
      <Section eyebrow="About" title="The Story Behind the Workshop">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <img src={images.wood1} alt="Hands working a piece of wood" loading="lazy" className="rounded-3xl shadow-warm w-full h-[400px] object-cover" />
          <div className="space-y-4 text-charcoal/85">
            <p>Grandpa's Workshop started in a one-car garage in Milwaukee, Wisconsin. After forty years of carpentry, our founder Hal hung up his apron — and almost immediately took it back down again. Retirement, it turned out, was not about stopping. It was about building what <em>you</em> wanted to build.</p>
            <p>This site is a love letter to that idea. We publish honest, unrushed tutorials and stories for older adults who refuse to put down the tools. No clickbait. No trendy hacks. Just real projects, real techniques, and real respect for craftsmanship.</p>
            <p>Whether you're picking up a chisel for the first time at 70 or you've been turning bowls since the Carter administration, you belong here.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Our values" title="What We Believe" className="bg-beige/40">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { t: 'Patience over speed', d: 'The best joinery is unhurried. So is the best writing about it.' },
            { t: 'Respect for the craft', d: 'Old tools, old techniques, and the older hands that mastered them.' },
            { t: 'Community first', d: 'Every reader has a project worth sharing. We make room for all of them.' },
          ].map((v, i) => (
            <div key={i} className="card p-6 text-center">
              <h3 className="font-heading text-xl mb-2">{v.t}</h3>
              <p className="text-charcoal/75">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
