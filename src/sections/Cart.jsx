import CartItem from "../components/CartItem";
import Tairyimg from "../assets/products/shopping-cart.png"

export default function Cart({ cart, handleRemove, handleCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="card w-full p-9 m-9 bg-base-100 shadow-sm">
      {cart.length === 0 ? (
        <p className="text-center text-lg"><img src={Tairyimg} alt="" /> Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
            />
          ))}

          <h2 className="text-xl mt-4 font-bold">
            Total: ${total}
          </h2>

          <button
            className=" btn mt-3.5 bg-gradient-to-r from-blue-600 to-pink-700 text-white px-6 py-3 rounded-full font-medium w-full"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}