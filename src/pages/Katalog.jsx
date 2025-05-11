import React from "react";

import Navbar from "../components/Navbar";

function Katalog() {
  const produk = [
    { id: 1, nama: "Kaos Polos", harga: "Rp 99.000", gambar: "https://source.unsplash.com/400x400/?tshirt" },
    { id: 2, nama: "Jaket Denim", harga: "Rp 249.000", gambar: "https://source.unsplash.com/400x400/?jacket" },
    { id: 3, nama: "Dress Wanita", harga: "Rp 179.000", gambar: "https://source.unsplash.com/400x400/?dress" },
    { id: 4, nama: "Kemeja Pria", harga: "Rp 139.000", gambar: "https://source.unsplash.com/400x400/?shirt" },
  ];

  return (
    <section id="katalog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Katalog Produk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {produk.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.gambar} alt={item.nama} className="w-full h-60 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">{item.nama}</h3>
              <p className="text-pink-600 font-bold">{item.harga}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Katalog;