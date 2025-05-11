function Kontak() {
  return (
    <section id="kontak" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hubungi Kami</h2>
        <p className="text-center text-gray-600 mb-10">
          Ada pertanyaan atau ingin bekerjasama? Silakan kirim pesan melalui form di bawah.
        </p>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label htmlFor="nama" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email aktif"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="pesan" className="block text-gray-700 font-medium mb-2">Pesan</label>
            <textarea
              id="pesan"
              rows="5"
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Kontak;
