import { Airflow } from './Airflow'
import type { ProductVisualKind } from '../data/products'

type ProductVisualProps = {
  kind: ProductVisualKind
  fans?: number
}

export function ProductVisual({ kind, fans = 10 }: ProductVisualProps) {
  if (kind === 'bed') {
    return (
      <div className="pv" aria-hidden="true">
        <div className="pv-cabin">
          <div className="pv-bed" />
        </div>
      </div>
    )
  }

  const count = kind === 'pro' ? fans : kind === 'neo' ? 6 : 4

  return (
    <div className="pv" aria-hidden="true">
      <div className="pv-seat">
        <div className="pv-head" />
        <div className="pv-mesh">
          <div className="fan-grid" style={{ gridTemplateRows: `repeat(${Math.ceil(count / 5)}, 1fr)` }}>
            {Array.from({ length: count }, (_, i) => (
              <span className="fan" key={i} />
            ))}
          </div>
        </div>
      </div>
      <Airflow variant="card" />
    </div>
  )
}

export function ExplodedVisual() {
  return (
    <div className="explode" aria-hidden="true">
      <div className="explode-glow" />
      <div className="explode-layer" />
      <div className="explode-layer" />
      <div className="explode-layer" />
      <div className="explode-layer" />
      <Airflow variant="card" />
    </div>
  )
}
