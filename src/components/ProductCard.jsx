import './ProductCard.css'

// عند فشل تحميل صورة المنتج، تُستبدل تلقائياً بصورة بديلة تحمل اسم المنتج
function handleImageError(event, product) {
  event.currentTarget.onerror = null
  event.currentTarget.src = `https://placehold.co/500x500/2B211A/D4AF37?text=${encodeURIComponent(product.name)}`
}

// بطاقة منتج واحدة — صورة، اسم، وصف، سعر
function ProductCard({ product }) {
  return (
    <article className="product-card">
      {/* ── صورة المنتج ── */}
      <div className="card-img-wrap">
        <img
          src={product.image}
          alt={product.alt || product.name}
          className="card-img"
          loading="lazy"
          onError={(event) => handleImageError(event, product)}
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
