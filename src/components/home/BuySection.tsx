import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { site } from '../../data/site'
import { IconAmazon, IconArrow, IconFlipkart, IconPin } from '../Icons'
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
            Get your AIRBRACE product on Amazon or Flipkart, or visit the store in Anuppanadi, Madurai.
          </p>
          <div className="buy-actions">
            <a className="btn btn--cream" href={site.amazonStore} target="_blank" rel="noreferrer">
              <IconAmazon size={16} /> Buy on Amazon
            </a>
            <a className="btn btn--flipkart" href={site.flipkartUrl} target="_blank" rel="noreferrer">
              <IconFlipkart size={16} /> Buy on Flipkart
            </a>
            <Link className="btn btn--ghost" to="/store-locator">
              Find a Store Near You <IconArrow size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="buy-cards">
          <a className="buy-card" href={site.amazonStore} target="_blank" rel="noreferrer">
            <IconAmazon />
            <h3>amazon</h3>
            <p>Shop on Amazon Official Amazon Store</p>
          </a>
          <Link className="buy-card" to="/store-locator">
            <IconPin />
            <h3>Madurai Store</h3>
            <p>1C, Anuppanadi Rd, West Anuppanadi, Madurai 625009.</p>
          </Link>
          <a className="buy-card" href={site.flipkartUrl} target="_blank" rel="noreferrer">
            <IconFlipkart size={22} />
            <h3>Flipkart</h3>
            <p>Shop AIRBRACE on Flipkart.</p>
          </a>
        </div>
      </div>
    </section>
  )
}
