import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem('gw_cookie_ok')) setShow(true)
  }, [])
  if (!show) return null
  const accept = () => {
    localStorage.setItem('gw_cookie_ok', '1')
    setShow(false)
  }
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md bg-charcoal text-cream rounded-2xl shadow-warm p-5 z-50">
      <p className="text-sm mb-3">We use cookies to improve your experience and analyze traffic. By continuing, you agree to our cookie policy.</p>
      <div className="flex gap-2">
        <button onClick={accept} className="bg-cedar hover:bg-rust text-cream px-4 py-2 rounded-full text-sm font-semibold transition-colors">Accept</button>
        <a href="/privacy" className="border border-cream/40 px-4 py-2 rounded-full text-sm hover:bg-cream/10 transition-colors">Learn more</a>
      </div>
    </div>
  )
}
