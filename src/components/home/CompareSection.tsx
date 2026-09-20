import { Link } from 'react-router-dom'
import { compareProducts, compareRows } from '../../data/products'
import { IconArrow, IconCheck } from '../Icons'
import { Reveal } from '../Reveal'

export function CompareSection() {
  return (
    <section className="compare-section" id="compare">
      <div className="container-wide compare-layout">
        <Reveal className="compare-copy">
          <p className="eyebrow">Compare & Choose</p>
          <h2>Find Your Perfect Fit</h2>
          <p>Compare our models and choose the one that suits your comfort needs.</p>
          <Link className="btn btn--dark" to="/compare">
            Compare Products <IconArrow size={16} />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="table-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  {compareProducts.map((product) => (
                    <th key={product.slug}>
                      <div className="compare-th">
                        <img className="compare-unit" src={product.unitImage} alt="" />
                        {product.shortName}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.key}>
                    <td>{row.label}</td>
                    {compareProducts.map((product) => (
                      <td key={`${product.slug}-${row.key}`}>
                        {product.compare[row.key] ? (
                          <span className="check">
                            <IconCheck size={16} />
                          </span>
                        ) : (
                          <span className="dash-cell">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
