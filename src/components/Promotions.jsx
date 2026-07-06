import './Promotions.css'
import ProductCard from './ProductCard'
import { WHATSAPP_NUMBER } from '../data/products'

// قسم "الأكثر طلباً" — يجمع تلقائياً كل المنتجات المعلَّمة featured: true
// من جميع أقسام المنيو (انظر src/data/products.js لتغيير المنتجات المميزة)
function Promotions({ categories }) {
  const featuredProducts = categories
    .flatMap((cat) => cat.products)
    .filter((product) => product.featured)

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً! أودّ الاستفسار عن توصياتكم اليوم.")}`

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

        {/* دعوة للتواصل */}
        <div className="promos-cta">
          <p>هل لديك سؤال قبل الطلب؟</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="promos-wa-btn"
          >
            💬 تحدّث معنا على واتساب
          </a>
        </div>
      </div>
    </section>
  )
}

export default Promotions
