import { Link } from 'react-router-dom'
import { site, whatsappUrl } from '../data/site'
import { IconFacebook, IconInstagram, IconWhatsApp, IconYoutube } from './Icons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Engineered Comfort for Every Drive.</p>
        </div>
        <div className="footer-col">
          <h3>Products</h3>
          <Link to="/products/apron-pro">Apron Pro</Link>
          <Link to="/products/apron-neo">Apron Neo</Link>
          <Link to="/products/apron-plus">Apron Plus</Link>
          <Link to="/products/car-bed">Car Beds</Link>
          <Link to="/products">All Products</Link>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <Link to="/about">About AIRBRACE</Link>
          <Link to="/why-airbrace">Why AIRBRACE</Link>
          <Link to="/about">Manufacturing</Link>
          <Link to="/about">Careers</Link>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <Link to="/support">Contact</Link>
          <Link to="/warranty">Warranty</Link>
          <Link to="/support">Installation</Link>
          <Link to="/support">Manuals</Link>
          <Link to="/support">Service Request</Link>
        </div>
        <div className="footer-col">
          <h3>Business</h3>
          <Link to="/business">Become a Dealer</Link>
          <Link to="/business">Distributor</Link>
          <Link to="/business">B2B Enquiry</Link>
          <h3 style={{ marginTop: 22 }}>Connect With Us</h3>
          <div className="socials">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <IconInstagram />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <IconFacebook />
            </a>
            <a href={site.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <IconYoutube />
            </a>
            <a href={whatsappUrl()} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <IconWhatsApp />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Where to Buy</h3>
          <a href={site.amazonUrl} target="_blank" rel="noreferrer">
            amazon
          </a>
          <Link to="/store-locator">Store Locator</Link>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <p>© {new Date().getFullYear()} {site.legalName}. All Rights Reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/warranty">Warranty Policy</Link>
          <Link to="/shipping">Shipping Policy</Link>
        </div>
      </div>
    </footer>
  )
}
