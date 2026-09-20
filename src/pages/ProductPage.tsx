import { Link, Navigate, useParams } from 'react-router-dom'
import { IconAmazon, IconArrow, IconCheck } from '../components/Icons'
import { Seo } from '../components/Seo'
import { images } from '../assets/images'
import { formatPrice } from '../data/site'
import { getProduct, products } from '../data/products'
import { useEffect, useState } from 'react'

export function ProductPage() {
  const { slug = '' } = useParams()
  const product = getProduct(slug)
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
  }, [slug])

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const gallery =
    product.visual === 'bed'
      ? [product.image]
      : [product.image, product.unitImage, images.lifestyleDrive, images.lifestyleOffice]
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${product.name} — AIRBRACE`}
        description={product.description}
        path={`/products/${product.slug}`}
      />
      <section className="page-body">
        <div className="container product-detail">
          <div>
            <div className="product-media visual-frame" style={{ minHeight: 420, borderRadius: 24 }}>
              {product.badge ? <span className="product-badge">{product.badge}</span> : null}
              <img src={gallery[active]} alt={product.name} />
            </div>
            <div className="gallery-row">
              {gallery.map((image, index) => (
                <button
                  key={`${product.slug}-${index}`}
                  type="button"
                  className={active === index ? 'is-active' : ''}
                  onClick={() => setActive(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">{product.sku}</p>
            <h1 className="display" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              {product.name}
            </h1>
            <p className="muted" style={{ marginTop: 8 }}>
              {product.tagline}
            </p>
            <div className="price-row">
              <span className="price">{formatPrice(product.price)}</span>
              <span className="mrp">{formatPrice(product.mrp)}</span>
            </div>
            <p>{product.longDescription}</p>
            <ul className="checklist">
              {product.highlights.map((item) => (
                <li key={item}>
                  <IconCheck size={16} /> {item}
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <a className="btn btn--dark" href={product.amazonUrl} target="_blank" rel="noreferrer">
                <IconAmazon size={16} /> Buy on Amazon
              </a>
              <Link className="btn btn--outline-dark" to="/compare">
                Compare models <IconArrow size={16} />
              </Link>
            </div>
            <ul className="spec-list">
              {product.specs.map((spec) => (
                <li key={spec.label}>
                  <span>{spec.label}</span>
                  <strong>{spec.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container" style={{ marginTop: 64 }}>
          <h2 className="display" style={{ fontSize: 32, marginBottom: 24 }}>
            You may also like
          </h2>
          <div className="product-grid">
            {related.map((item) => (
              <article className="product-card" key={item.slug}>
                <Link to={`/products/${item.slug}`}>
                  <div className="product-media">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                  <p className="tagline">{formatPrice(item.price)}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
