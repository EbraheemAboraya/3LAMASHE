import './Footer.css'
import { STORE_INFO } from '../data/products'

function Footer({ activeCategoryId, onSelectCategory }) {
  const year = new Date().getFullYear()

  // يبدّل القسم النشط ثم يمرّر الصفحة إلى قسم عرض المنتجات
  function handleSelect(categoryId) {
    return (event) => {
      event.preventDefault()
      onSelectCategory(categoryId)
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
              <li>
                <a
                  href="#milkshakes"
                  className={activeCategoryId === 'milkshakes' ? 'footer-link--active' : ''}
                  onClick={handleSelect('milkshakes')}
                >
                  الميلك شيك
                </a>
              </li>
              <li>
                <a
                  href="#coffee"
                  className={activeCategoryId === 'coffee' ? 'footer-link--active' : ''}
                  onClick={handleSelect('coffee')}
                >
                  زاوية القهوة
                </a>
              </li>
              <li>
                <a
                  href="#bakery"
                  className={activeCategoryId === 'bakery' ? 'footer-link--active' : ''}
                  onClick={handleSelect('bakery')}
                >
                  المخبوزات
                </a>
              </li>
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
