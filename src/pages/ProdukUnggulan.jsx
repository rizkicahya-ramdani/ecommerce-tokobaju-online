function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Blouse Floral Wanita",
      price: "Rp 149.000",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/104/MTA-175120798/brd-44261_blouse-formal-polos-wanita-lengan-panjang-putih-m_full05-cbc0f0e4.jpg",
    },
    {
      id: 2,
      name: "Kaos Oversize Pria",
      price: "Rp 119.000",
      image: "https://images.tokopedia.net/img/cache/700/product-1/2020/11/22/5931845/5931845_4a7d4311-5f71-4a96-9ca1-4722268aa219.jpg",
    },
    {
      id: 3,
      name: "Dress Casual",
      price: "Rp 179.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsmT-G1zR9nV3wdnnm-SnUHwdBpWLaTW5AA&s",
    },
    {
      id: 4,
      name: "Hoodie Unisex",
      price: "Rp 199.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S3-ehujPsEjMwvDQNQ1PQacPoEihK2XgfA&s",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Produk Unggulan</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-pink-600 font-bold">{product.price}</p>
              <button className="mt-3 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
