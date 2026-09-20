import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { techSteps } from '../../data/products'
import { Airflow } from '../Airflow'
import { IconArrow } from '../Icons'
import { Reveal } from '../Reveal'

export function TechSection() {
  return (
    <section className="tech-section" id="technology">
      <div className="container-wide tech-layout">
        <Reveal className="tech-copy">
          <p className="eyebrow light">Our Technology</p>
          <h2>How AIRBRACE Works</h2>
          <p>A smart ventilation system that keeps air moving, so you stay cool.</p>
          <Link className="btn btn--ghost" to="/technology">
            Explore Technology <IconArrow size={16} />
          </Link>
        </Reveal>
        <Reveal className="tech-visual-wrap" delay={0.1}>
          <img className="tech-photo" src={images.techExploded} alt="Exploded AIRBRACE cushion layers" />
          <Airflow variant="card" />
        </Reveal>
        <div>
          <div className="tech-steps">
            {techSteps.map((step, index) => (
              <Reveal className="tech-step" key={step.n} delay={0.08 * index}>
                <b>{step.n}</b>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="tech-quote" style={{ marginTop: 28 }}>
              Feel the airflow.
              <br />
              Not the heat.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
