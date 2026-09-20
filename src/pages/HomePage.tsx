import { BuySection } from '../components/home/BuySection'
import { CompareSection } from '../components/home/CompareSection'
import { Hero } from '../components/home/Hero'
import { ProductsSection } from '../components/home/ProductsSection'
import { TechSection } from '../components/home/TechSection'
import { WhySection } from '../components/home/WhySection'
import { Seo } from '../components/Seo'

export function HomePage() {
  return (
    <>
      <Seo
        title="AIRBRACE — Beat the Heat. Drive in Comfort."
        description="Advanced cooling and comfort solutions for a better driving experience. Ventilated seat cushions engineered in India."
        path="/"
      />
      <Hero />
      <ProductsSection />
      <WhySection />
      <TechSection />
      <CompareSection />
      <BuySection />
    </>
  )
}
