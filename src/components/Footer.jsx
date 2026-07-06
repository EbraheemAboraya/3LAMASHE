import './Footer.css'
import { STORE_INFO } from '../data/products'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">

          {/* ── العمود الأول: العلامة التجارية ── */}
          <div className="footer-col">
            <div className="footer-logo">
              <span>☕</span> {STORE_INFO.name}
            </div>
            <p className="footer-tagline">{STORE_INFO.tagline}</p>
          </div>

          {/* ── العمود الثاني: التواصل ── */}
          <div className="footer-col">
            <h4 className="footer-heading">تواصل معنا</h4>
            <ul className="footer-list">
              <li>
                <span>📍</span>
                <span>{STORE_INFO.address}</span>
              </li>
              <li>
                <span>📞</span>
                <a href={`tel:${STORE_INFO.phone.replace(/\s|-/g, '')}`}>
                  {STORE_INFO.phone}
                </a>
              </li>
              <li>
                <span>🕐</span>
                <span>{STORE_INFO.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* ── العمود الثالث: روابط سريعة ── */}
          <div className="footer-col">
            <h4 className="footer-heading">روابط سريعة</h4>
            <ul className="footer-list footer-links">
              <li><a href="#milkshakes">الميلك شيك</a></li>
              <li><a href="#special">نكهات مميزة</a></li>
              <li><a href="#bakery">المخبوزات</a></li>
              <li><a href="#promotions">الأكثر طلباً</a></li>
            </ul>
          </div>

        </div>

        {/* ── الشريط السفلي ── */}
        <div className="footer-bottom">
          <p>© {year} {STORE_INFO.name}. جميع الحقوق محفوظة.</p>
          <p className="footer-love">صُنع بشغف ☕</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
