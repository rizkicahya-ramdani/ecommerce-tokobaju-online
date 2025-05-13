function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Tampil Stylish Setiap Hari</h1>
        <p className="text-xl mb-6 max-w-xl">
          Temukan koleksi baju terbaru dan trendi untuk segala suasana hanya di toko kami.
        </p>
        <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          Belanja Sekarang
        </button>
      </div>
    </header>
  );
}

export default Header;
