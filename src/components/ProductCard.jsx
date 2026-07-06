import './ProductCard.css'
import { WHATSAPP_NUMBER } from '../data/products'

// يبني رابط واتساب مع رسالة طلب جاهزة باللغة العربية
function buildWhatsAppLink(productName) {
  const message = `مرحباً، أريد طلب: ${productName}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// بطاقة منتج واحدة — صورة، اسم، وصف، سعر، زر طلب عبر واتساب
function ProductCard({ product }) {
  return (
    <article className="product-card">
      {product.featured && <span className="card-badge">الأكثر طلباً</span>}

      {/* ── صورة المنتج ── */}
      <div className="card-img-wrap">
        <img
          src={product.image}
          alt={product.alt || product.name}
          className="card-img"
          loading="lazy"
        />
      </div>

      {/* ── محتوى البطاقة ── */}
      <div className="card-body">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-desc">{product.description}</p>

        {/* ── السعر + زر واتساب ── */}
        <div className="card-footer">
          <span className="card-price">{product.price}</span>
          <a
            href={buildWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="card-wa-btn"
            aria-label={`اطلب ${product.name} عبر واتساب`}
          >
            💬 اطلب عبر واتساب
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
