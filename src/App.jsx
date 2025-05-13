import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import ProdukUnggulan from './pages/ProdukUnggulan.jsx'
import Katalog from './pages/Katalog.jsx'
import Kontak from './pages/Kontak.jsx'
import Promo from './pages/Promo.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import Checkout from "./pages/Checkout.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <ProdukUnggulan />
                <Promo />
              </>
            }
          />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </>
  )
}

export default App
