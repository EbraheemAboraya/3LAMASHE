import './ProductCard.css'

// بطاقة منتج واحدة — صورة، اسم، وصف، سعر
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

        {/* ── السعر ── */}
        <div className="card-footer">
          <span className="card-price">{product.price}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
