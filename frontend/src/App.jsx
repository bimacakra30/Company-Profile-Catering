import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

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
            <Route path="/testimoni" element={<Testimonial />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;