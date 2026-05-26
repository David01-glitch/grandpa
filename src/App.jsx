import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Community from './pages/Community'
import Tutorials from './pages/Tutorials'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import { trackPageView } from './utils/analytics'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/privacy" element={<Legal which="privacy" />} />
          <Route path="/terms" element={<Legal which="terms" />} />
          <Route path="/refund" element={<Legal which="refund" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
