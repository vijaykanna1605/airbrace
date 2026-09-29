import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, site, whatsappUrl } from '../data/site'
import { IconAmazon, IconFlipkart, IconWhatsApp } from './Icons'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const media = window.matchMedia('(min-width: 1024px)')
    const onMedia = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    media.addEventListener('change', onMedia)
    return () => {
      window.removeEventListener('keydown', onKey)
      media.removeEventListener('change', onMedia)
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container-wide header-inner">
        <NavLink to="/" aria-label="AIRBRACE home">
          <Logo />
        </NavLink>
        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn btn--amazon" href={site.amazonStore} target="_blank" rel="noreferrer">
            <IconAmazon size={16} /> Amazon
          </a>
          <a className="btn btn--flipkart" href={site.flipkartUrl} target="_blank" rel="noreferrer">
            <IconFlipkart size={16} /> Flipkart
          </a>
          <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <IconWhatsApp size={16} /> WhatsApp
          </a>
        </div>
        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn--cream" href={site.amazonStore} target="_blank" rel="noreferrer">
            <IconAmazon size={16} /> Buy on Amazon
          </a>
          <a className="btn btn--flipkart" href={site.flipkartUrl} target="_blank" rel="noreferrer">
            <IconFlipkart size={16} /> Buy on Flipkart
          </a>
          <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <IconWhatsApp size={16} /> WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  )
}
