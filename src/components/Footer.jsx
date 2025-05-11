function Footer() {
  return (
    <footer className="bg-pink-600 text-white pt-14 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand + Deskripsi */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide mb-4">Fashionista</h2>
          <p className="text-sm text-pink-100">
            Toko online baju terpercaya yang menyediakan fashion terkini dengan kualitas terbaik dan harga terjangkau.
          </p>
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-pink-100">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/katalog" className="hover:underline">Katalog</a></li>
            <li><a href="#promo" className="hover:underline">Promo</a></li>
            <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#kontak" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
          <ul className="space-y-2 text-sm text-pink-100">
            <li><a href="#" className="hover:underline">Cara Belanja</a></li>
            <li><a href="#" className="hover:underline">Pengiriman</a></li>
            <li><a href="#" className="hover:underline">Kebijakan Pengembalian</a></li>
            <li><a href="#" className="hover:underline">Syarat & Ketentuan</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-pink-500 pt-6 text-center text-sm text-pink-200">
        &copy; {new Date().getFullYear()} Fashionista. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
