import './Header.css'

function Header({ activeCategoryId, onSelectCategory }) {
  // يبدّل القسم النشط ثم يمرّر الصفحة إلى قسم عرض المنتجات
  function handleSelect(categoryId) {
    return (event) => {
      event.preventDefault()
      onSelectCategory(categoryId)
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="header">
      <div className="container header-inner">

        {/* ── روابط التنقل ── */}
        <nav className="header-nav" aria-label="التنقل الرئيسي">
          <a
            href="#milkshakes"
            className={`nav-link${activeCategoryId === 'milkshakes' ? ' nav-link--active' : ''}`}
            onClick={handleSelect('milkshakes')}
          >
            الميلك شيك
          </a>
          <a
            href="#coffee"
            className={`nav-link${activeCategoryId === 'coffee' ? ' nav-link--active' : ''}`}
            onClick={handleSelect('coffee')}
          >
            زاوية القهوة
          </a>
          <a
            href="#bakery"
            className={`nav-link${activeCategoryId === 'bakery' ? ' nav-link--active' : ''}`}
            onClick={handleSelect('bakery')}
          >
            المخبوزات
          </a>
          <a href="#footer" className="nav-link">تواصل معنا</a>
        </nav>

      </div>
    </header>
  )
}

export default Header
