import { WhySection } from '../components/home/WhySection'
import { Seo } from '../components/Seo'

export function WhyPage() {
  return (
    <>
      <Seo
        title="Why AIRBRACE — Engineered for Real Comfort"
        description="Powerful airflow, universal fit, and products built for Indian heat. Designed and manufactured in Madurai."
        path="/why-airbrace"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Why AIRBRACE</p>
          <h1>Engineered for Real Comfort</h1>
          <p>
            We design for the heat you actually drive in — traffic, highways, and long days at a desk
            — not a lab at 22°C.
          </p>
        </div>
      </section>
      <WhySection />
      <section className="page-body">
        <div className="container split">
          <div>
            <h2 className="display" style={{ fontSize: 36, marginBottom: 12 }}>
              Built around airflow, not gimmicks
            </h2>
            <p className="muted">
              Every Apron model starts with the same idea: keep air moving across the seat surface so
              heat and humidity cannot settle. Fans, channels, and covers are tuned as one system.
            </p>
          </div>
          <div className="panel">
            <h3>What drivers notice first</h3>
            <ul className="checklist" style={{ marginTop: 12 }}>
              <li>Cabin feels cooler within a few minutes of turning the fans on</li>
              <li>Less sweat on long NH stretches and city jams</li>
              <li>Straps that stay put on leather and fabric seats</li>
              <li>USB or 12V power without extra hardware</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
