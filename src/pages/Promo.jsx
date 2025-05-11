function Promo() {
  return (
    <section id="promo" className="py-16 bg-pink-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-800 mb-4">Promo Spesial Minggu Ini</h2>
        <p className="text-lg text-pink-700 mb-6">
          Diskon hingga 40% untuk koleksi musim panas! Jangan lewatkan.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
          Lihat Promo
        </button>
      </div>
    </section>
  );
}

export default Promo;