import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

export default function Products({ handleAdd, addedIds }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading products...</div>;
  }

  return (
    <div id="products-section" className="px-4 md:px-10 py-12 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-12">Our Premium Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            handleAdd={handleAdd}
            isAdded={addedIds.has(p.id)}
          />
        ))}
      </div>
    </div>
  );
}