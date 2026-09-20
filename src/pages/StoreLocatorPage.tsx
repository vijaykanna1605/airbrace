import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { stores } from '../data/stores'

export function StoreLocatorPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return stores
    return stores.filter((store) =>
      `${store.name} ${store.city} ${store.state} ${store.type}`.toLowerCase().includes(value),
    )
  }, [query])

  return (
    <>
      <Seo
        title="Store Locator — AIRBRACE"
        description="Find AIRBRACE dealers and retail partners across India."
        path="/store-locator"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Where to buy</p>
          <h1>Find a store near you</h1>
          <p>Dealers, retail partners, and service points across major Indian cities.</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="store-toolbar">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by city, store, or state"
              aria-label="Search stores"
            />
          </div>
          {filtered.length === 0 ? (
            <p className="muted">No stores match that search. Try another city.</p>
          ) : (
            <div className="store-grid">
              {filtered.map((store) => (
                <article className="panel store-card" key={store.id}>
                  <p className="meta">
                    {store.type} · {store.city}
                  </p>
                  <h3>{store.name}</h3>
                  <p className="muted">{store.address}</p>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {store.phone}
                    <br />
                    {store.hours}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
