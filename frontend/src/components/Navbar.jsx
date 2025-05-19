import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-light tracking-wider text-olive-800">
          SARI DEWI CATERING
        </Link>
        
        <nav className="hidden md:flex space-x-6 font-serif">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-olive-800 transition-colors duration-300 relative group"
          >
            Beranda
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-olive-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/tentang" 
            className="text-gray-700 hover:text-olive-800 transition-colors duration-300 relative group"
          >
            Tentang Kami
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-olive-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/menu" 
            className="text-gray-700 hover:text-olive-800 transition-colors duration-300 relative group"
          >
            Menu
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-olive-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/testimoni" 
            className="text-gray-700 hover:text-olive-800 transition-colors duration-300 relative group"
          >
            Testimoni
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-olive-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/kontak" 
            className="text-gray-700 hover:text-olive-800 transition-colors duration-300 relative group"
          >
            Kontak
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-olive-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-olive-800 focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 font-serif border-t border-green-100 animate-slide-down">
          <Link 
            className="block py-3 text-gray-700 hover:text-olive-800 transition-colors duration-300" 
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link 
            className="block py-3 text-gray-700 hover:text-olive-800 transition-colors duration-300 border-t border-green-50" 
            to="/tentang"
            onClick={() => setMenuOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link 
            className="block py-3 text-gray-700 hover:text-olive-800 transition-colors duration-300 border-t border-green-50" 
            to="/menu"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>
          <Link 
            className="block py-3 text-gray-700 hover:text-olive-800 transition-colors duration-300 border-t border-green-50" 
            to="/testimoni"
            onClick={() => setMenuOpen(false)}
          >
            Testimoni
          </Link>
          <Link 
            className="block py-3 text-gray-700 hover:text-olive-800 transition-colors duration-300 border-t border-green-50" 
            to="/kontak"
            onClick={() => setMenuOpen(false)}
          >
            Kontak
          </Link>
        </div>
      )}
      
      {/* Custom styles for olive colors and animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        
        /* Olive/Green colors */
        .text-olive-800 { color: #434f2a; }
        .hover\\:text-olive-800:hover { color: #434f2a; }
        .bg-olive-500 { background-color: #9aad5d; }
        .border-green-50 { border-color: #f0faf0; }
        .border-green-100 { border-color: #dcfce7; }
      `}</style>
    </header>
  );
}