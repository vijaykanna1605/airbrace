import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found — AIRBRACE"
        description="The page you requested is not on the AIRBRACE website."
        path="/404"
      />
      <div className="not-found">
        <div>
          <p className="eyebrow">404</p>
          <h1>This page has drifted off the map.</h1>
          <p className="muted" style={{ margin: '12px 0 24px' }}>
            Check the URL or head back to products.
          </p>
          <Link className="btn btn--dark" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}
