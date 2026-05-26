import { Link } from 'react-router-dom'
import { images, categories, articles, projects, stories, testimonials } from '../data/site'
import Section from '../components/Section'
import ExpandableCard from '../components/ExpandableCard'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <p className="text-cedar font-semibold uppercase tracking-wider text-sm mb-3">Woodworking & DIY for Older Adults</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">Slow down. Build something that lasts.</h1>
            <p className="text-lg text-charcoal/75 mb-7 max-w-xl">Honest woodworking guides, furniture restoration tips, and weekend garage projects designed for retirees, hobbyists, and anyone who loves the smell of fresh sawdust.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog" className="btn-primary">Read the Blog</Link>
              <Link to="/tutorials" className="btn-outline">Browse Tutorials</Link>
            </div>
          </div>
          <div className="relative">
            <img src={images.hero1} alt="Older woodworker in a warm garage workshop" loading="eager" className="rounded-3xl shadow-warm w-full h-[420px] object-cover" />
            <img src={images.hero2} alt="Hand tools on a workbench" loading="lazy" className="hidden md:block absolute -bottom-8 -left-8 w-44 h-44 object-cover rounded-2xl shadow-warm border-4 border-cream" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <Section eyebrow="Explore" title="Featured Categories" subtitle="Find your next project — from beginner basics to weekend builds.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(c => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="card group">
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold mb-1">{c.name}</h3>
                <p className="text-sm text-charcoal/70">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Trending Articles */}
      <Section eyebrow="Read" title="Trending DIY Articles" subtitle="Most popular reads from our community this week." className="bg-beige/40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 6).map(a => (
            <ExpandableCard key={a.id} tag={a.cat} img={a.img} title={a.title} excerpt={a.excerpt} body={a.body} />
          ))}
        </div>
      </Section>

      {/* Workshop Project Showcase */}
      <Section eyebrow="Showcase" title="Workshop Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ExpandableCard key={i} img={p.img} title={p.title} excerpt={p.desc} body={`${p.desc} A perfect weekend build for sharpening your skills, this project uses common lumber, a handful of tools you already own, and finishes that bring out the natural beauty of the grain. We walk through every cut, every joint, and every finishing step in the full tutorial.`} cta="View Project" />
          ))}
        </div>
      </Section>

      {/* Community Stories */}
      <Section eyebrow="Community" title="Reader Stories" subtitle="Real workshops, real builders, real friendships." className="bg-beige/40">
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div key={i} className="card p-6 text-center">
              <img src={s.img} alt={s.name} loading="lazy" className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
              <p className="italic text-charcoal/80 mb-3">"{s.quote}"</p>
              <p className="font-heading text-walnut font-semibold">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title="What Our Readers Say">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6">
              <div className="text-cedar text-2xl mb-2">★★★★★</div>
              <p className="text-charcoal/80 mb-4">"{t.text}"</p>
              <p className="font-semibold text-walnut">— {t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-beige/40">
        <Newsletter />
      </Section>

      {/* FAQ */}
      <Section eyebrow="Help" title="Frequently Asked Questions">
        <FAQ />
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in touch" title="Visit the Workshop" className="bg-walnut text-cream">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-beige/90 mb-6">Have a project question? A tool you love? A restoration story to share? We read every message.</p>
          <Link to="/contact" className="inline-block bg-cedar hover:bg-rust transition-colors text-cream px-8 py-3 rounded-full font-semibold">Contact Us</Link>
        </div>
      </Section>
    </>
  )
}
