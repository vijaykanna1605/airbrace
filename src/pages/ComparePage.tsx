import { CompareSection } from '../components/home/CompareSection'
import { Seo } from '../components/Seo'

export function ComparePage() {
  return (
    <>
      <Seo
        title="Compare Products — AIRBRACE"
        description="Compare Apron Plus, Apron Neo, and Apron Pro ventilation features and choose your fit."
        path="/compare"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Compare & Choose</p>
          <h1>Find your perfect fit</h1>
          <p>All Apron models ventilate. Pro adds the densest fan grid and full speed control.</p>
        </div>
      </section>
      <CompareSection />
    </>
  )
}
