import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { site } from '../../data/site'
import { IconAmazon, IconArrow, IconPin } from '../Icons'
import { Reveal } from '../Reveal'

export function BuySection() {
  return (
    <section className="buy-section" id="buy">
      <img className="section-photo" src={images.buyHighway} alt="" />
      <div className="section-photo-mask buy-mask" />
      <div className="container-wide buy-layout">
        <Reveal className="buy-copy">
          <p className="eyebrow light">Available Online & Offline</p>
          <h2>Where to Buy AIRBRACE</h2>
          <p>
            Get your AIRBRACE product from your preferred channel — Amazon or our trusted retail
            partners.
          </p>
          <div className="buy-actions">
            <a className="btn btn--cream" href={site.amazonUrl} target="_blank" rel="noreferrer">
              <IconAmazon size={16} /> Buy on Amazon
            </a>
            <Link className="btn btn--ghost" to="/store-locator">
              Find a Store Near You <IconArrow size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="buy-cards">
          <a className="buy-card" href={site.amazonUrl} target="_blank" rel="noreferrer">
            <IconAmazon />
            <h3>amazon</h3>
            <p>Shop on Amazon Official Amazon Store</p>
          </a>
          <Link className="buy-card" to="/store-locator">
            <IconPin />
            <h3>Store Locator</h3>
            <p>Find a dealer or retail partner near you.</p>
          </Link>
          <Link className="buy-card" to="/store-locator">
            <IconPin />
            <h3>Retail Partners</h3>
            <p>Available at leading car accessory stores.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
