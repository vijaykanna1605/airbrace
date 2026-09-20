import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { whatsappUrl } from '../data/site'
import { Footer } from './Footer'
import { Header } from './Header'
import { IconWhatsApp } from './Icons'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const node = document.getElementById(location.hash.slice(1))
      if (node) {
        node.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsApp size={26} />
      </a>
    </div>
  )
}
