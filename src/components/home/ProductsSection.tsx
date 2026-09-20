import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { IconArrow } from '../Icons'
import { ProductCard } from '../ProductCard'
import { Reveal } from '../Reveal'

export function ProductsSection() {
  return (
    <section className="products-section" id="products">
      <div className="container-wide">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Our Products</p>
            <h2>Comfort for Every Journey</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link className="section-link" to="/products">
              View All Products <IconArrow size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
