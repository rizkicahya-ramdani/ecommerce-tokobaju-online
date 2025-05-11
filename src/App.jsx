import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './pages/Header.jsx'
import ProdukUnggulan from './pages/ProdukUnggulan.jsx'
import Katalog from './pages/Katalog.jsx'
import Kontak from './pages/Kontak.jsx'
import Promo from './pages/Promo.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
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
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
