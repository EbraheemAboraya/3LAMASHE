import { useState } from 'react'
import './ProductsSection.css'
import ProductCard from './ProductCard'

// شبكة منتجات بسيطة — تُستخدم لكل من الفئات العادية ومجموعات الفئة الفرعية
function ProductGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// تبويبات فرعية (مثال: ساخن/بارد داخل زاوية القهوة) — تُستخدم فقط عندما تملك
// الفئة حقل groups. لكل فئة تبويباتها الخاصة، وتُعاد للمجموعة الأولى تلقائياً
// عند تغيير الفئة النشطة بفضل key={category.id} في ProductsSection.
function CategoryGroups({ groups }) {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id)
  const activeGroup = groups.find((group) => group.id === activeGroupId) || groups[0]

  return (
    <div className="group-tabs-wrap">
      <div className="group-tabs" role="tablist" aria-label="نوع المشروبات">
        {groups.map((group) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={group.id === activeGroupId}
            className={`group-tab group-tab--${group.id}${
              group.id === activeGroupId ? ' group-tab--active' : ''
            }`}
            onClick={() => setActiveGroupId(group.id)}
          >
            <span className="group-tab__icon">{group.icon}</span>
            <span className="group-tab__label">{group.label}</span>
          </button>
        ))}
      </div>

      {/* key يجعل المحتوى يُعاد تركيبه عند كل تبديل فتُشغَّل حركة الظهور مجدداً */}
      <div key={activeGroup.id} className="group-panel">
        <ProductGrid products={activeGroup.products} />
      </div>
    </div>
  )
}

// يعرض قسم المنيو النشط فقط — يتحدد من التبويبات في Categories أو روابط الهيدر/الفوتر
function ProductsSection({ categories, activeCategoryId }) {
  const activeCategory = categories.find((cat) => cat.id === activeCategoryId) || categories[0]

  if (!activeCategory) return null

  const hasGroups = Array.isArray(activeCategory.groups) && activeCategory.groups.length > 0

  return (
    <section className="products-section" id="products-section">
      <div className="container">

        {/* رأس القسم */}
        <div className="cat-block__header">
          <span className="cat-block__icon">{activeCategory.icon}</span>
          <h2 className="section-title">{activeCategory.label}</h2>
        </div>
        <p className="section-subtitle">{activeCategory.subtitle}</p>

        {hasGroups ? (
          <CategoryGroups key={activeCategory.id} groups={activeCategory.groups} />
        ) : (
          <ProductGrid products={activeCategory.products} />
        )}

      </div>
    </section>
  )
}

export default ProductsSection
