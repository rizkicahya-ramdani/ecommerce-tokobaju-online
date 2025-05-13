import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo atau Nama Brand */}
        <div className="text-2xl font-extrabold text-pink-600">Fashionista</div>

        {/* Menu Navigasi (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><a href="/" className="hover:text-pink-600 transition">Beranda</a></li>
          <li><a href="/katalog" className="hover:text-pink-600 transition">Katalog</a></li>
          <li><Link to="/cart" className="text-pink-600">Keranjang</Link></li>
          <li><a href="/about" className="hover:text-pink-600 transition">Tentang Kami</a></li>
          <li><a href="/kontak" className="hover:text-pink-600 transition">Kontak</a></li>
        </ul>

        {/* Ikon Keranjang & Menu Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-pink-600 transition">
            {/* Ikon Keranjang */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m13-9l2 9m-5-9v9" />
            </svg>
          </button>
          <button className="md:hidden text-gray-700 focus:outline-none">
            {/* Menu Hamburger (Mobile) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
