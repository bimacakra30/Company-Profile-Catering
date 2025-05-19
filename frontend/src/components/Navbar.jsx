import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700">Sari Dewi Catering</div>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/">Beranda</Link>
          <Link to="/tentang">Tentang Kami</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/testimoni">Testimoni</Link>
          <Link to="/kontak">Kontak</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link className="block py-2" to="/">Beranda</Link>
          <Link className="block py-2" to="/tentang">Tentang Kami</Link>
          <Link className="block py-2" to="/menu">Menu</Link>
          <Link className="block py-2" to="/testimoni">Testimoni</Link>
          <Link className="block py-2" to="/kontak">Kontak</Link>
        </div>
      )}
    </header>
  );
}
