import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { IconArrow } from '../components/Icons'
import { Seo } from '../components/Seo'

function IndiaFlag() {
  const spokes = Array.from({ length: 24 }, (_, index) => {
    const angle = (index * Math.PI) / 12
    return (
      <line
        key={index}
        x1="45"
        y1="30"
        x2={45 + Math.cos(angle) * 5.4}
        y2={30 + Math.sin(angle) * 5.4}
        stroke="#000080"
        strokeWidth="0.45"
      />
    )
  })

  return (
    <svg className="india-flag" viewBox="0 0 90 60" role="img" aria-label="Flag of India">
      <rect width="90" height="20" fill="#FF9933" />
      <rect y="20" width="90" height="20" fill="#FFFFFF" />
      <rect y="40" width="90" height="20" fill="#138808" />
      <circle cx="45" cy="30" r="6.2" fill="none" stroke="#000080" strokeWidth="0.7" />
      {spokes}
      <circle cx="45" cy="30" r="0.9" fill="#000080" />
    </svg>
  )
}

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
                Our story
              </h2>
              <p className="muted">
                Long drives in Indian summers leave most car seats hot and sticky. AIRBRACE was
                started in Madurai to fix that with ventilated cushions that move air across the seat
                surface, quietly and without any wiring into the car.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                Today the Apron range and Car Bed serve drivers, commuters, and office users across
                India — all designed around real roads, real heat, and real seats.
              </p>
              <Link className="btn btn--outline-dark" to="/manufacturing" style={{ marginTop: 20 }}>
                How we make it <IconArrow size={16} />
              </Link>
            </div>
            <div className="panel media-panel">
              <img src={images.lifestyleOffice} alt="AIRBRACE ventilated cushion on an office chair" />
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
              <IndiaFlag />
              <span className="muted">Made in India product</span>
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
