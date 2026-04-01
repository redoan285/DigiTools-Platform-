export default function ProductCard({ product, handleAdd, isAdded }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="card-body p-6">
        <h2 className="text-3xl mb-3">{product.icon} {product.name}</h2>

        <p className="text-base-content/70 mb-5">{product.description}</p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-primary">${product.price}</span>
          <span className="text-sm text-base-content/60">/{product.period}</span>
        </div>

        {product.tagType && (
          <div className="badge badge-primary badge-lg mb-5">{product.tagType}</div>
        )}

        <ul className="space-y-2 mb-8 text-sm">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-500">✔</span> {f}
            </li>
          ))}
        </ul>

        <button
          className={`btn w-full text-lg ${isAdded ? "btn-success" : "btn-primary"}`}
          onClick={() => handleAdd(product)}
          disabled={isAdded}
        >
          {isAdded ? "✅ Already Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}