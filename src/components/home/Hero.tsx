import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { images } from '../../assets/images'
import { site } from '../../data/site'
import { IconAmazon, IconArrow, IconBag, IconFlipkart, IconPin } from '../Icons'

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-scene" aria-hidden="true">
        <img className="hero-photo" src={images.heroCar} alt="" />
        <div className="hero-photo-mask" />
      </div>
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Engineered Comfort for Every Drive
        </motion.p>
        <motion.h1
          className="display"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Beat the Heat.
          <br />
          Drive in <em>Comfort.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          Advanced cooling and comfort solutions for a better driving experience.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <Link className="btn btn--cream" to="/products">
            Explore Products <IconArrow size={16} />
          </Link>
          <a className="btn btn--ghost" href={site.amazonStore} target="_blank" rel="noreferrer">
            <IconAmazon size={16} /> Buy on Amazon
          </a>
          <a className="btn btn--flipkart" href={site.flipkartUrl} target="_blank" rel="noreferrer">
            <IconFlipkart size={16} /> Buy on Flipkart
          </a>
        </motion.div>
      </div>
      <div className="hero-avail">
        <div className="container">
          <span className="avail-label">
            <IconBag size={16} /> Available Online & Offline
          </span>
          <div className="avail-pills">
            <span>
              <IconAmazon size={16} /> Amazon
            </span>
            <span>
              <IconFlipkart size={16} /> Flipkart
            </span>
            <span>
              <IconPin size={16} /> Madurai Store
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
