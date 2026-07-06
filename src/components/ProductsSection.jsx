import './ProductsSection.css'
import ProductCard from './ProductCard'

// يعرض كل قسم من أقسام المنيو مع شبكة منتجاته بالكامل
function ProductsSection({ categories }) {
  return (
    <>
      {categories.map((cat) => (
        <section key={cat.id} className="products-section" id={cat.id}>
          <div className="container">

            {/* رأس القسم */}
            <div className="cat-block__header">
              <span className="cat-block__icon">{cat.icon}</span>
              <h2 className="section-title">{cat.label}</h2>
            </div>
            <p className="section-subtitle">{cat.subtitle}</p>

            {/* شبكة المنتجات */}
            <div className="products-grid">
              {cat.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </div>
        </section>
      ))}
    </>
  )
}

export default ProductsSection
