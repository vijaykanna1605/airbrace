import { ProductCard } from '../components/ProductCard'
import { Seo } from '../components/Seo'
import { products } from '../data/products'

export function ProductsPage() {
  return (
    <>
      <Seo
        title="Products — AIRBRACE"
        description="Shop AIRBRACE Apron Pro, Neo, Plus, and Car Bed. Ventilated comfort for car and office."
        path="/products"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Our Products</p>
          <h1>Comfort for Every Journey</h1>
          <p>Ventilated seat cushions and foldable car comfort, engineered for Indian heat.</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container-wide product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
