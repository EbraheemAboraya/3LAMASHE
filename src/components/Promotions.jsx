import './Promotions.css'
import ProductCard from './ProductCard'

// قسم "الأكثر طلباً" — يجمع تلقائياً كل المنتجات المعلَّمة featured: true
// من جميع أقسام المنيو (انظر src/data/products.js لتغيير المنتجات المميزة)
function Promotions({ categories }) {
  const featuredProducts = categories
    .flatMap((cat) => cat.products)
    .filter((product) => product.featured)

  if (featuredProducts.length === 0) return null

  return (
    <section className="promos-section" id="promotions">
      <div className="container">
        <h2 className="section-title">⭐ الأكثر طلباً</h2>
        <p className="section-subtitle">توصياتنا المفضّلة لهذا اليوم</p>

        <div className="products-grid promos-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promotions
