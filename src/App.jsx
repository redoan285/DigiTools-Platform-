import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./Banner";
import States from "./States";
import Products from "./sections/Products";
import Cart from "./sections/Cart";
import GetStarted from "./GetStarted";
import PricingCards from "./PricingCards";
import CTASection from "./CTASection";
import Footer from "./Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tools from "./components/Tools";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addedIds, setAddedIds] = useState(new Set());

  const handleAdd = (product) => {
    if (addedIds.has(product.id)) {
      toast.info("This item is already in your cart!");
      return;
    }

    setCart((prev) => [...prev, product]);
    setAddedIds((prev) => new Set(prev).add(product.id));
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setAddedIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    toast.error("Item removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    setAddedIds(new Set());
    toast.success("🎉 Checkout completed successfully! Thank you.");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Banner />
      <States />
      <Tools/>

      <div className="flex justify-center gap-4 my-10 px-4">
        <button
          className={`btn btn-lg rounded-full ${!showCart ? "btn-primary" : "btn-outline"}`}
          onClick={() => setShowCart(false)}
        >
           Products
        </button>
        <button
          className={`btn btn-lg rounded-full ${showCart ? "btn-primary" : "btn-outline"}`}
          onClick={() => setShowCart(true)}
        >
          🛒 Cart ({cart.length})
        </button>
      </div>

     
      <div className="min-h-[70vh]">
        {showCart ? (
          <Cart
            cart={cart}
            handleRemove={handleRemove}
            handleCheckout={handleCheckout}
          />
        ) : (
          <Products handleAdd={handleAdd} addedIds={addedIds} />
        )}
      </div>

      <GetStarted />
      <PricingCards />
      <CTASection />
      <Footer />

      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}