import './Categories.css'

// شريط تنقّل سريع بين أقسام المنيو — كل زر يمرّر الصفحة إلى القسم المطابق
function Categories({ categories }) {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <h2 className="section-title">استكشف المنيو</h2>
        <p className="section-subtitle">اختر القسم الذي يناسب ذوقك</p>

        <div className="categories-row">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="cat-btn">
              <span className="cat-btn__icon">{cat.icon}</span>
              <span className="cat-btn__label">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
