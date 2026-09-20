import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, site, whatsappUrl } from '../data/site'
import { IconAmazon, IconWhatsApp } from './Icons'
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
          <a className="btn btn--amazon" href={site.amazonUrl} target="_blank" rel="noreferrer">
            <IconAmazon size={16} /> Buy on Amazon
          </a>
          <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <IconWhatsApp size={16} /> WhatsApp
          </a>
        </div>
        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn--cream" href={site.amazonUrl} target="_blank" rel="noreferrer">
            <IconAmazon size={16} /> Buy on Amazon
          </a>
          <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <IconWhatsApp size={16} /> WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  )
}
