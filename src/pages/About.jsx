import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Fashionista - Tentang Kami";
  }, []);
  
  return (
    <>
      <section id="tentang" className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Judul */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Tentang Kami</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Fashionista adalah toko online yang berdedikasi menyediakan produk fashion terkini dengan kualitas terbaik dan harga terjangkau. Sejak berdiri tahun 2022, kami telah melayani ribuan pelanggan dari seluruh Indonesia.
          </p>

          {/* Visi Misi & Nilai */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi merek fashion lokal terpercaya yang mampu menghadirkan gaya dan kenyamanan bagi semua kalangan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Misi Kami</h3>
              <p className="text-gray-600">
                Menyediakan pilihan fashion terbaik, meningkatkan pengalaman belanja online, dan mendukung UMKM lokal dalam industri tekstil.
              </p>
            </div>
          </div>

          {/* Keunggulan */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Kenapa Belanja di Fashionista?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-md transition">
                <i className="fas fa-tshirt text-3xl text-pink-600 mb-4"></i>
                <h4 className="font-semibold text-lg mb-2">Produk Berkualitas</h4>
                <p className="text-sm text-gray-600">Kami hanya menjual produk dengan bahan terbaik dan finishing rapi.</p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-md transition">
                <i className="fas fa-shipping-fast text-3xl text-pink-600 mb-4"></i>
                <h4 className="font-semibold text-lg mb-2">Pengiriman Cepat</h4>
                <p className="text-sm text-gray-600">Pesanan dikirim maksimal 24 jam setelah pembayaran dikonfirmasi.</p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-md transition">
                <i className="fas fa-headset text-3xl text-pink-600 mb-4"></i>
                <h4 className="font-semibold text-lg mb-2">Layanan Pelanggan</h4>
                <p className="text-sm text-gray-600">Tim support kami siap membantu Anda setiap hari kerja.</p>
              </div>
            </div>
          </div>

          {/* (Opsional) Tim Kami */}
          {/* 
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Tim Kami</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <img src="https://source.unsplash.com/150x150/?woman,portrait" alt="Tim 1" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-semibold">Sarah Anindya</h4>
                <p className="text-sm text-gray-500">Founder & CEO</p>
              </div>
              <div>
                <img src="https://source.unsplash.com/150x150/?man,portrait" alt="Tim 2" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-semibold">Rico Pratama</h4>
                <p className="text-sm text-gray-500">Marketing Head</p>
              </div>
              <div>
                <img src="https://source.unsplash.com/150x150/?developer" alt="Tim 3" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-semibold">Maya Oktaviani</h4>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>
    </>
    
  );
}

export default About;