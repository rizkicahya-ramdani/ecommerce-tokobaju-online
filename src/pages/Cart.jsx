import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  console.log("Isi keranjang sekarang:", cartItems);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Keranjang Belanja</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Keranjang kamu masih kosong.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.gambar} className="w-20 h-20 object-cover rounded" alt={item.nama} />
                    <div>
                      <h4 className="font-semibold">{item.nama}</h4>
                      <p className="text-pink-600">{item.harga}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            {/* Tombol Checkout */}
            <div className="mt-8 text-right">
              <Link
                to="/checkout"
                className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Lanjut ke Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
