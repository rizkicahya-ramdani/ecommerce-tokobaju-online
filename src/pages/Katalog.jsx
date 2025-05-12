import { useEffect } from "react";

function Katalog() {
  useEffect(() => {
    document.title = "Fashionista - Katalog Produk";
  }, []);

  const produk = [
    { id: 1, nama: "Kaos Polos", harga: "Rp 99.000", gambar: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-21021909/kasual_kasual_crew_black_tee-_full01_skcvqsml.jpg" },
    { id: 2, nama: "Jaket Denim", harga: "Rp 249.000", gambar: "https://img.lazcdn.com/g/p/4a4ec214f796f4864b6c05eceb46cfec.jpg_720x720q80.jpg" },
    { id: 3, nama: "Dress Wanita", harga: "Rp 179.000", gambar: "https://id-live-02.slatic.net/p/4918f3de72d2d3ec96a78e4f7871f153.jpg" },
    { id: 4, nama: "Kemeja Pria", harga: "Rp 139.000", gambar: "https://img.lazcdn.com/g/p/b9e45e1a853406381cd9a277a3d499e5.jpg_720x720q80.jpg" },
  ];

  return (
    <>
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
    </>
  );
}

export default Katalog;
