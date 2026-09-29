import { NavLink } from 'react-router-dom'
import { featureIcons, IconAmazon, IconArrow, IconFlipkart, type FeatureIconName } from './Icons'
import { site } from '../data/site'
import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-media">
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p className="tagline">{product.tagline}</p>
      <ul className="feature-row">
        {product.features.map((feature) => {
          const Icon = featureIcons[feature.icon as FeatureIconName] ?? featureIcons.air
          return (
            <li key={feature.label}>
              <Icon />
              {feature.label}
            </li>
          )
        })}
      </ul>
      <div className="card-actions">
        <NavLink className="btn btn--dark" to={`/products/${product.slug}`}>
          View Product <IconArrow size={16} />
        </NavLink>
        <a className="btn btn--outline-dark" href={product.amazonUrl} target="_blank" rel="noreferrer">
          <IconAmazon size={16} /> Buy on Amazon
        </a>
        <a className="btn btn--flipkart" href={site.flipkartUrl} target="_blank" rel="noreferrer">
          <IconFlipkart size={16} /> Buy on Flipkart
        </a>
      </div>
    </article>
  )
}
