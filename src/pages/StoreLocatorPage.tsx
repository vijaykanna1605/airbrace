import { IconAmazon, IconFlipkart } from '../components/Icons'
import { Seo } from '../components/Seo'
import { site, whatsappUrl } from '../data/site'
import { stores } from '../data/stores'

export function StoreLocatorPage() {
  const store = stores[0]

  return (
    <>
      <Seo
        title="Store Locator — AIRBRACE"
        description="Visit the AIRBRACE store in Anuppanadi, Madurai, or shop the official Amazon store."
        path="/store-locator"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Where to buy</p>
          <h1>Find a store</h1>
          <p>Visit us in Madurai, or order from the official Amazon store.</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container store-layout">
          <article className="panel store-card">
            <p className="meta">
              {store.city} · {store.state}
            </p>
            <h3>{store.name}</h3>
            <p className="muted">{store.address}</p>
            <p className="muted" style={{ marginTop: 8 }}>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                WhatsApp {site.whatsappDisplay}
              </a>
            </p>
            <div className="store-actions">
              <a className="btn btn--dark" href={store.mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <a className="btn btn--outline-dark" href={site.amazonStore} target="_blank" rel="noreferrer">
                <IconAmazon size={16} /> Amazon store
              </a>
              <a className="btn btn--flipkart" href={site.flipkartUrl} target="_blank" rel="noreferrer">
                <IconFlipkart size={16} /> Flipkart
              </a>
            </div>
          </article>
          <div className="store-map">
            <iframe
              title="AIRBRACE on Google Maps"
              src={store.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
