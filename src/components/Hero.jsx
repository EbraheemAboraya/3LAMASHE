import './Hero.css'
import { STORE_INFO } from '../data/products'

function Hero() {
  return (
    <section className="hero" id="top" aria-label="البانر الرئيسي">

      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-content">

        {/* شارة صغيرة */}
        <div className="hero-badge">☕ قائمة رقمية أنيقة</div>

        {/* اسم المتجر */}
        <h1 className="hero-title">{STORE_INFO.name}</h1>

        {/* الشعار التعريفي */}
        <p className="hero-subtitle">{STORE_INFO.tagline}</p>

        {/* زر الإجراء */}
        <div className="hero-buttons">
          <a href="#milkshakes" className="hero-btn hero-btn--primary">
            تصفح المنيو
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
