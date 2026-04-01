export default function ProductCard({ product, handleAdd, isAdded }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="card-body p-6 flex flex-col flex-1">
        
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{product.icon}</span>
          <h2 className="text-2xl font-bold text-neutral-900">
            {product.name}
          </h2>
        </div>

        {/* Description */}
        <p className="text-base-content/70 mb-5 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Price + Period */}
        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-4xl font-bold text-primary">
            ${product.price}
          </span>
          <span className="text-lg text-base-content/60">/{product.period}</span>
        </div>

        {/* Tag */}
        {product.tagType && (
          <div className="badge badge-primary badge-lg mb-6">
            {product.tagType}
          </div>
        )}

        {/* Features */}
        <div className="mb-8">
          <ul className="space-y-2 text-sm">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5 text-lg">✔</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button
            className={`btn w-full text-lg font-semibold py-3 transition-all duration-300 ${
              isAdded 
                ? "bg-green-600 hover:bg-green-700 text-white border-none" 
                : "btn-primary"
            }`}
            onClick={() => handleAdd(product)}
            disabled={isAdded}
          >
            {isAdded ? "✅ Already Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}