import './Header.css'
import { STORE_INFO } from '../data/products'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        {/* ── الشعار ── */}
        <a href="#top" className="header-logo">
          <span className="logo-icon">☕</span>
          <span className="logo-text">{STORE_INFO.name}</span>
        </a>

        {/* ── روابط التنقل ── */}
        <nav className="header-nav" aria-label="التنقل الرئيسي">
          <a href="#milkshakes" className="nav-link">الميلك شيك</a>
          <a href="#special"    className="nav-link">نكهات مميزة</a>
          <a href="#bakery"     className="nav-link">المخبوزات</a>
          <a href="#footer"     className="nav-link">تواصل معنا</a>
        </nav>

      </div>
    </header>
  )
}

export default Header
