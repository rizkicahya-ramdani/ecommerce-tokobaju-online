import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './pages/Header.jsx'
import ProdukUnggulan from './pages/ProdukUnggulan.jsx'
import Katalog from './pages/Katalog.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              </>
            }
          />
          <Route path="/katalog" element={<Katalog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
