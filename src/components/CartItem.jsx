export default function CartItem({ item, handleRemove }) {
  return (
    <div className="flex justify-between items-center border-none p-3 mb-2 rounded bg-gray-100  m-5">
      <p>{item.icon} {item.name}</p>
      <p>${item.price}</p>
      <button
        className="btn btn-error btn-sm"
        onClick={() => handleRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
}