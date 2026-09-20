import { TechSection } from '../components/home/TechSection'
import { Seo } from '../components/Seo'

export function TechnologyPage() {
  return (
    <>
      <Seo
        title="Technology — How AIRBRACE Works"
        description="A four-step ventilation system: outside air, turbo fans, air channels, and a cool seat surface."
        path="/technology"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow light">Our Technology</p>
          <h1>Feel the airflow. Not the heat.</h1>
          <p>
            AIRBRACE cushions are a complete air path — intake, fans, channels, and a breathable
            surface — tuned to stay quiet in the cabin.
          </p>
        </div>
      </section>
      <TechSection />
      <section className="page-body">
        <div className="container split">
          <div className="panel">
            <h2>Materials</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Leather-grain and mesh covers, a non-slip base, and fan housings sealed against dust.
              Power leads are strain-relieved for daily plug-in use.
            </p>
          </div>
          <div className="panel">
            <h2>Install in minutes</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Place the cushion, clip the straps around the seat, and plug into 12V or USB. No seat
              removal. No wiring into the car harness.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
