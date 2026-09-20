import { images } from '../../assets/images'
import { whyFeatures } from '../../data/products'
import { featureIcons, type FeatureIconName } from '../Icons'
import { Reveal } from '../Reveal'

export function WhySection() {
  return (
    <section className="why-section" id="why">
      <img className="section-photo" src={images.whyLandscape} alt="" />
      <div className="section-photo-mask" />
      <div className="container-wide why-grid">
        <Reveal className="why-copy">
          <p className="eyebrow light">Why AIRBRACE</p>
          <h2>Engineered for Real Comfort</h2>
          <p>
            AIRBRACE designs innovative comfort solutions that keep you cool, fresh and focused — no
            matter the journey.
          </p>
        </Reveal>
        <div className="why-features">
          {whyFeatures.map((feature, index) => {
            const Icon = featureIcons[feature.icon as FeatureIconName]
            return (
              <Reveal className="why-feature" key={feature.title} delay={index * 0.07}>
                <span className="icon-wrap">
                  <Icon className="icon lg" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
