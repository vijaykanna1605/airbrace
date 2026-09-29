import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { IconArrow, IconCheck } from '../components/Icons'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

const process = [
  {
    n: '01',
    title: 'Design & prototyping',
    text: 'Every Apron cushion starts as a prototype in Madurai. We shape the base, fan layout, and air channels around real Indian car seats before a single production run.',
  },
  {
    n: '02',
    title: 'Material selection',
    text: 'Leather-grain and breathable mesh covers, a non-slip base, and dust-sealed fan housings are chosen to handle summer heat and monsoon humidity.',
  },
  {
    n: '03',
    title: 'Stitching & assembly',
    text: 'Covers are cut and stitched in-house, then fans, wiring, and straps are fitted by hand so every seam and connector sits exactly where it should.',
  },
  {
    n: '04',
    title: 'Testing & packing',
    text: 'Each unit is powered on and checked for airflow, noise, and fit before it is packed and shipped to customers across India.',
  },
]

const checks = [
  'Fan airflow and speed modes checked on every unit',
  'Stitching, straps, and buckles pull-tested for daily use',
  'Power leads strain-relieved and tested on 12V and USB',
  'Fit checked on hatchback, sedan, and SUV seats',
  'Final visual inspection before packing',
]

export function ManufacturingPage() {
  return (
    <>
      <Seo
        title="Manufacturing — Made in Madurai | AIRBRACE"
        description="How AIRBRACE designs, stitches, assembles, and tests ventilated seat cushions in Madurai, Tamil Nadu."
        path="/manufacturing"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Manufacturing</p>
          <h1>Made in Madurai, stitch by stitch.</h1>
          <p>
            From the first prototype to the final quality check, every AIRBRACE product is designed,
            assembled, and tested in Madurai, Tamil Nadu.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split mfg-intro">
            <div>
              <h2 className="display" style={{ fontSize: 36, marginBottom: 12 }}>
                Manufacturing with intent
              </h2>
              <p className="muted">
                We keep design, sourcing, and assembly close together. That lets us test fans, covers,
                and straps in real cabin heat — not only on a bench — and fix problems before they
                reach a customer.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                Being a Made in India brand means shorter supply lines, faster improvements, and
                products tuned for Indian roads and weather.
              </p>
            </div>
            <div className="panel media-panel">
              <img src={images.manufacturingStitching} alt="Sewing machine stitching a cushion cover" />
            </div>
          </div>

          <h2 className="display mfg-heading">How an AIRBRACE cushion is made</h2>
          <div className="mfg-steps">
            {process.map((step) => (
              <article className="panel mfg-step" key={step.n}>
                <span className="mfg-step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="split mfg-quality">
            <div className="panel media-panel">
              <img src={images.manufacturingCraft} alt="Hands working fabric on a loom" />
            </div>
            <div>
              <h2 className="display" style={{ fontSize: 36, marginBottom: 12 }}>
                Quality checks on every unit
              </h2>
              <p className="muted">
                Nothing leaves the workshop without passing the same checklist.
              </p>
              <ul className="checklist">
                {checks.map((item) => (
                  <li key={item}>
                    <IconCheck size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel mfg-cta">
            <div>
              <h2>Bulk orders & supplier enquiries</h2>
              <p className="muted" style={{ marginTop: 8 }}>
                Dealers, fleet operators, and material suppliers can reach us at {site.salesEmail}.
              </p>
            </div>
            <Link className="btn btn--dark" to="/business">
              Business enquiries <IconArrow size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
