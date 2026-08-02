import './Hero.css'
import { STORE_INFO } from '../data/products'

function Hero() {
  return (
    <section className="hero" id="top" aria-label="البانر الرئيسي">

      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-content">

        {/* شعار المتجر */}
        <img
          src="/images/coffee/logo.png"
          alt={STORE_INFO.name}
          className="hero-logo-img"
        />

      </div>
    </section>
  )
}

export default Hero
