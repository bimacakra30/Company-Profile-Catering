import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Portfolio from "./pages/Portfolio";
import MenuByCategory from "./pages/Menu";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:slug" element={<MenuByCategory />} />
            <Route path="/ulasan" element={<Testimonial />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/portofolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
