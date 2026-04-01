import React from "react";
import Navimg from "../assets/products/shopping-cart.png";

const Navbar = ({ cartCount }) => {
  return (
   <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between  z-50">
      <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

      <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <li className="hover:text-purple-600 cursor-pointer">Products</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <img src={Navimg} alt="cart" className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        <button className="text-gray-600 font-medium hover:text-purple-600">
          Login
        </button>

        <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;