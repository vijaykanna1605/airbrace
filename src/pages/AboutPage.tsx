import { Seo } from '../components/Seo'
import { images } from '../assets/images'
import { site } from '../data/site'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us — AIRBRACE INDIA"
        description="AIRBRACE is a Madurai-based comfort brand designing ventilated seat cushions and car rest solutions for Indian conditions."
        path="/about"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Company</p>
          <h1>Designed in Madurai. Made for India.</h1>
          <p>
            AIRBRACE started with a simple frustration: car seats that hold heat. We build quiet
            ventilation and rest products that belong in real Indian cars and offices.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="display" style={{ fontSize: 36, marginBottom: 12 }}>
                Manufacturing with intent
              </h2>
              <p className="muted">
                Product design, sourcing, and assembly are based in Madurai. We test fans, covers,
                and straps in cabin heat — not only on a bench — so Apron cushions stay reliable
                through summer and monsoon humidity.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                Careers and supplier enquiries: {site.salesEmail}
              </p>
            </div>
            <div className="panel" style={{ overflow: 'hidden', padding: 0 }}>
              <img src={images.aboutManufacturing} alt="AIRBRACE manufacturing" style={{ minHeight: 240, objectFit: 'cover', width: '100%' }} />
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <b>2019</b>
              <span className="muted">First Apron prototype</span>
            </div>
            <div className="stat">
              <b>4</b>
              <span className="muted">Comfort products</span>
            </div>
            <div className="stat">
              <b>12</b>
              <span className="muted">Cities with partners</span>
            </div>
            <div className="stat">
              <b>Madurai</b>
              <span className="muted">Design & manufacture</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
