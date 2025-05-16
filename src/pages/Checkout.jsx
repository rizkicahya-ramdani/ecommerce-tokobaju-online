import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cartItems } = useCart();
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    metode: "Transfer Bank",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    console.log("Data Pesanan:", {
      ...form,
      produk: cartItems,
    });

    alert("Pesanan berhasil dikirim!");
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Keranjang kamu masih kosong.</p>
      ) : (
        <>
          <div className="bg-gray-100 p-4 rounded mb-6">
            <h3 className="font-semibold mb-2">Ringkasan Belanja:</h3>
            <ul className="list-disc ml-5 space-y-1">
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.nama} - {item.harga}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
            <div>
              <label className="block font-medium">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-500 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Alamat Pengiriman</label>
              <textarea
                name="alamat"
                onChange={handleChange}
                required
                rows="3"
                className="w-full mt-1 p-2 border border-gray-500 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Metode Pembayaran</label>
              <select
                name="metode"
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-500 rounded"
              >
                <option>Transfer Bank</option>
                <option>COD (Bayar di Tempat)</option>
                <option>QRIS</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              Konfirmasi Pesanan
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Checkout;
