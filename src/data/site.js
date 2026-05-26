import hero1 from '../assets/images/hero/hero-1.jpg'
import hero2 from '../assets/images/hero/hero-2.jpg'
import wood1 from '../assets/images/woodworking/wood-1.jpg'
import wood2 from '../assets/images/woodworking/wood-2.jpg'
import wood3 from '../assets/images/woodworking/wood-3.jpg'
import furn1 from '../assets/images/furniture/furn-1.jpg'
import furn2 from '../assets/images/furniture/furn-2.jpg'
import garage1 from '../assets/images/garage/garage-1.jpg'
import garage2 from '../assets/images/garage/garage-2.jpg'
import tut1 from '../assets/images/tutorials/tut-1.jpg'
import tut2 from '../assets/images/tutorials/tut-2.jpg'
import comm1 from '../assets/images/community/comm-1.jpg'
import comm2 from '../assets/images/community/comm-2.jpg'
import comm3 from '../assets/images/community/comm-3.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'

export const images = {
  hero1, hero2,
  wood1, wood2, wood3,
  furn1, furn2,
  garage1, garage2,
  tut1, tut2,
  comm1, comm2, comm3,
  blog1, blog2, blog3, blog4,
}

export const contact = {
  email: 'grandpasworkshop@gmail.com',
  phone: '(414) 555-9903',
  address: '216 Timber Ridge Rd, Milwaukee, WI 53217',
}

export const categories = [
  { slug: 'woodworking-basics', name: 'Woodworking Basics', img: wood1, desc: 'Beginner-friendly woodworking skills and safety practices for retirees getting started.' },
  { slug: 'furniture-restoration', name: 'Furniture Restoration', img: furn1, desc: 'Restore old chairs, tables, and heirlooms back to their original beauty.' },
  { slug: 'garage-projects', name: 'Garage Projects', img: garage1, desc: 'Weekend builds you can finish in your own garage workshop.' },
  { slug: 'diy-craft-ideas', name: 'DIY Craft Ideas', img: tut2, desc: 'Creative crafts using reclaimed wood, simple tools, and a little patience.' },
  { slug: 'tool-guides', name: 'Tool Guides', img: tut1, desc: 'Honest reviews and buying guides for essential workshop tools.' },
  { slug: 'rustic-home-decor', name: 'Rustic Home Decor', img: furn2, desc: 'Build warm, rustic decor pieces for every room of your home.' },
]

export const articles = [
  { id: 1, title: 'Easy Garage Projects for Beginners', cat: 'Garage Projects', img: garage1, excerpt: 'Five simple weekend builds anyone can tackle with basic tools and a little patience.', body: 'Start with a wall-mounted tool rack, a sturdy sawhorse, a shop stool, a pegboard organizer, and a rolling cart. Each project takes a single afternoon, uses lumber under $40, and teaches a fundamental skill — measuring, cutting straight, joining with screws, sanding smooth, and finishing with oil or wax. The goal is to finish something you actually use the very next day.' },
  { id: 2, title: 'Restoring Old Wooden Chairs', cat: 'Furniture Restoration', img: furn1, excerpt: 'Bring grandma\'s dining chairs back to life with stripping, sanding, and a fresh stain.', body: 'Begin by knocking the joints loose with a rubber mallet — old hide glue gives way easily. Strip the finish with a citrus-based remover, then sand with 120 then 220 grit. Re-glue with wood glue and clamp overnight. Finish with two coats of walnut stain and a satin polyurethane top coat. The whole project takes a weekend and turns a $5 yard-sale find into a treasured heirloom.' },
  { id: 3, title: 'Essential Woodworking Tools for Retirees', cat: 'Tool Guides', img: tut1, excerpt: 'Skip the gimmicks. These eight tools will handle 90% of every project you start.', body: 'A 16 oz claw hammer, a 25-foot tape measure, a combination square, a sharp block plane, a random orbital sander, a cordless drill/driver, a quality crosscut saw, and a pair of bar clamps. That is the entire starter kit. Buy mid-range — not the cheapest, not the fanciest — and these tools will last the rest of your life.' },
  { id: 4, title: 'DIY Rustic Shelf Ideas', cat: 'Rustic Home Decor', img: wood2, excerpt: 'Floating shelves, ladder shelves, and pipe shelves you can build in an afternoon.', body: 'Reclaimed barn wood + black iron pipe = a rustic shelf for under $60. Cut the wood to length, sand lightly, finish with a wipe-on oil, and mount with floor flanges. For floating shelves, hidden bracket kits are widely available. Ladder-style leaning shelves use simple butt joints and a stained 1x10 — no fancy joinery required.' },
  { id: 5, title: 'Building a Backyard Bench', cat: 'Garage Projects', img: blog3, excerpt: 'A solid cedar bench that will outlast your patio furniture by twenty years.', body: 'Use 2x4 cedar for the frame and 1x4 cedar for the seat slats. Pre-drill every joint and use exterior-rated screws. A seat height of 17 inches with a slight 5° backward tilt is the most comfortable. Finish with a UV-protective deck stain reapplied every two years and this bench will still be sitting in your yard at your grandkids\' high school graduation.' },
  { id: 6, title: 'Safe Woodworking Tips for Seniors', cat: 'Woodworking Basics', img: wood3, excerpt: 'Stay safe, stay sharp, stay woodworking for decades to come.', body: 'Always wear safety glasses and hearing protection. Keep one push stick within reach of every saw. Never wear loose sleeves or jewelry. Light your workshop with three times the brightness you think you need — older eyes love light. Take a five-minute break every 45 minutes, hydrate often, and never operate power tools when you are tired or rushed.' },
]

export const projects = [
  { title: 'Reclaimed Pallet Coffee Table', img: blog1, desc: 'Built from three free pallets, finished with dark walnut stain and a wax topcoat. Total cost: $14.' },
  { title: 'Cedar Garden Planter Box', img: garage2, desc: 'Rot-resistant cedar planter sized for tomatoes, herbs, and lettuce. Drains beautifully.' },
  { title: 'Hand-Carved Walking Stick', img: wood3, desc: 'Whittled from a maple sapling and finished with linseed oil. A lovely winter project.' },
]

export const stories = [
  { name: 'Harold, 68', img: comm1, quote: 'I built my first dovetail joint at 67. Best decision I made in retirement.' },
  { name: 'Margaret, 72', img: comm2, quote: 'Restoring my mother\'s rocking chair gave me back a piece of my childhood.' },
  { name: 'Walter, 65', img: comm3, quote: 'The community here makes the garage feel less lonely. Real folks, real projects.' },
]

export const testimonials = [
  { name: 'Frank D.', text: 'Best DIY blog I\'ve found. The tone respects older readers and the projects actually work.' },
  { name: 'Eleanor R.', text: 'The furniture restoration guide saved me $400 on a chair I was about to throw out.' },
  { name: 'Tom B.', text: 'Clear instructions, great photos, and no flashy nonsense. My kind of website.' },
]

export const faqs = [
  { q: 'What woodworking tools should beginners buy?', a: 'Start with a tape measure, combination square, hammer, cordless drill, hand saw, block plane, random orbit sander, and a pair of bar clamps. Skip the cheap starter sets — buy one decent tool at a time.' },
  { q: 'Is woodworking a good retirement hobby?', a: 'It is one of the very best. Woodworking keeps your hands busy, your mind engaged, and gives you finished projects you can use, give away, or sell. It is also social — workshops and clubs welcome new members of every age.' },
  { q: 'How do I restore old furniture?', a: 'Clean it, assess the joints, strip the old finish, repair any breaks, sand thoroughly, and apply a fresh stain and protective topcoat. We have a full guide in our Furniture Restoration category.' },
  { q: 'What wood is best for DIY projects?', a: 'Pine is cheap and forgiving — great for practice. Poplar paints beautifully. Oak and maple are excellent for furniture. Cedar and redwood resist rot and are perfect for outdoor projects.' },
  { q: 'Do I need a large workshop?', a: 'Absolutely not. A single-car garage, a corner of a basement, or even a backyard shed is plenty. Many of our readers build wonderful projects in spaces smaller than a parking spot.' },
]
