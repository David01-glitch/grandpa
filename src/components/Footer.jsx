import { Link } from 'react-router-dom'
import { contact } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-16">
      <div className="container-x py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-xl text-cream mb-3">Grandpa's Workshop</h3>
          <p className="text-sm text-beige/80">Woodworking, DIY, and garage projects for retirees and older adults who love working with their hands.</p>
        </div>
        <div>
          <h4 className="font-heading text-cream mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-cedar">Blog</Link></li>
            <li><Link to="/tutorials" className="hover:text-cedar">Tutorials</Link></li>
            <li><Link to="/community" className="hover:text-cedar">Community</Link></li>
            <li><Link to="/category/woodworking-basics" className="hover:text-cedar">Categories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-cream mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-cedar">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-cedar">Terms</Link></li>
            <li><Link to="/refund" className="hover:text-cedar">Refund</Link></li>
            <li><Link to="/about" className="hover:text-cedar">About</Link></li>
            <li><Link to="/contact" className="hover:text-cedar">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-cream mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-beige/80">
            <li>{contact.email}</li>
            <li>{contact.phone}</li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-walnut/40">
        <div className="container-x py-4 text-center text-sm text-beige/70">
          © {new Date().getFullYear()} Grandpa's Workshop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
