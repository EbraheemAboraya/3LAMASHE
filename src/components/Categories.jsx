import './Categories.css'

// يمرّر التمرير إلى قسم عرض المنتجات بعد اختيار تبويب
function scrollToProducts() {
  document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// شريط تبويبات — كل زر يبدّل القسم المعروض في ProductsSection بدل التمرير لقسم منفصل
function Categories({ categories, activeCategoryId, onSelectCategory }) {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <h2 className="section-title">استكشف المنيو</h2>
        <p className="section-subtitle">اختر القسم الذي يناسب ذوقك</p>

        <div className="categories-row" role="tablist" aria-label="أقسام المنيو">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={cat.id === activeCategoryId}
              className={`cat-btn${cat.id === activeCategoryId ? ' cat-btn--active' : ''}`}
              onClick={() => {
                onSelectCategory(cat.id)
                scrollToProducts()
              }}
            >
              <span className="cat-btn__icon">{cat.icon}</span>
              <span className="cat-btn__label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
