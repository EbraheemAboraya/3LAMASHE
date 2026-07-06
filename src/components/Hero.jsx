import './Hero.css'
import { WHATSAPP_NUMBER, STORE_INFO } from '../data/products'

function Hero() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً! أودّ الاستفسار عن المنيو.")}`

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

        {/* أزرار الإجراء */}
        <div className="hero-buttons">
          <a href="#milkshakes" className="hero-btn hero-btn--primary">
            تصفح المنيو
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--whatsapp"
          >
            💬 اطلب الآن
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
