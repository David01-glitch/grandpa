import { images } from '../data/site'
import Section from '../components/Section'
import ExpandableCard from '../components/ExpandableCard'

const tutorials = [
  { img: images.tut1, title: 'How to Sharpen a Hand Plane', excerpt: 'A dull plane is a dangerous plane. Here is how to keep yours razor-sharp.', body: 'Start with a flat sharpening stone — diamond or waterstone, your choice. Lock the blade in a honing guide at 25 degrees, work the bevel through 1000, 4000, and 8000 grit. Flatten the back of the blade against the same stones. Strop on leather with a touch of compound and test on end grain. If the shaving is paper-thin and continuous, you are done.' },
  { img: images.tut2, title: 'Choosing the Right Wood for Your Project', excerpt: 'Pine, oak, walnut, maple — which species belongs in which build?', body: 'Pine and poplar are forgiving, cheap, and easy to work — perfect for practice. Oak and maple offer beautiful grain and last for generations. Walnut and cherry add elegance but cost more. For outdoor work, choose cedar, cypress, or redwood for natural rot resistance. Always check the moisture content before joinery — anything over 12% will move on you.' },
  { img: images.wood2, title: 'Building Your First Dovetail Joint', excerpt: 'The classic mark of a craftsman — and easier than it looks.', body: 'Mark your tails first with a dovetail marker at 1:6 for softwoods, 1:8 for hardwoods. Saw down to the baseline, chop the waste with a sharp chisel, and transfer to the pin board. Saw the pins, chisel the waste, and dry-fit before gluing. Your first dovetail will be ugly. Your tenth will not. Practice on scrap pine until your eyes and hands agree.' },
  { img: images.wood3, title: 'Applying a Hand-Rubbed Oil Finish', excerpt: 'The warmest, most touchable finish in woodworking.', body: 'Sand to 220 grit. Wipe on a generous coat of tung or boiled linseed oil. Wait 15 minutes. Wipe off everything that hasn\'t soaked in — this step is non-negotiable. Wait 24 hours. Repeat for three to five coats, lightly buffing with 0000 steel wool between the last two. The result is a finish that highlights every grain line and ages like a friendship.' },
  { img: images.garage2, title: 'Setting Up a Small Garage Workshop', excerpt: 'You don\'t need 1000 square feet. You need a smart layout.', body: 'Anchor your workbench against the longest wall under the brightest light. Mount a pegboard above it for hand tools. Reserve one corner for a small dust collector and shop vac. Keep your saws and drills on a mobile cart so the floor stays clear. Add overhead LEDs at 5000 K and a comfortable rubber mat. That is a complete shop in under 200 square feet.' },
  { img: images.furn2, title: 'Refinishing Without Stripping', excerpt: 'A faster, gentler approach for furniture that isn\'t too far gone.', body: 'Clean the piece thoroughly with mineral spirits and a soft cloth. Scuff the existing finish lightly with 320 grit. Apply a gel stain in the direction of the grain for color enrichment, or skip straight to a wipe-on polyurethane for protection. Two thin coats, lightly sanded between, will breathe new life into furniture you thought was past saving.' },
]

export default function Tutorials() {
  return (
    <Section eyebrow="Tutorials & Resources" title="Step-by-Step Guides" subtitle="Click any tutorial to expand the full walkthrough right here on this page.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((t, i) => (
          <ExpandableCard key={i} img={t.img} title={t.title} excerpt={t.excerpt} body={t.body} cta="Explore" />
        ))}
      </div>
    </Section>
  )
}
