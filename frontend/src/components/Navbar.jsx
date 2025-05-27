import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getCategories } from "../services/api";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Gagal memuat kategori:", error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami", path: "/tentang" },
    {
      label: "Layanan Catering",
      submenu: categories.map((cat) => ({
        label: cat.name_category,
        path: `/menu/${slugify(cat.name_category)}`,
      })),
    },
    { label: "Galeri", path: "/galeri" },
    { label: "Ulasan", path: "/ulasan" },
    { label: "Portofolio", path: "/portofolio" },
    { label: "Kontak", path: "/kontak" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${scrolled ? "py-1.5" : "py-3"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className={`font-serif font-bold tracking-wide text-[#434f2a] hover:text-[#205e2e] transition-all duration-300 ${scrolled ? "text-lg" : "text-xl"}`}
        >
          DANDANGGULO CATERING
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 font-serif">
          {menuItems.map(({ label, path, submenu }) =>
            submenu ? (
              <div key={label} className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#434f2a] transition-all duration-300 font-medium py-2 px-2 rounded-lg hover:bg-[#f7f3e8]/50 text-sm">
                  {label}
                  <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full mt-2 bg-white/95 border rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
                  <div className="p-2">
                    {submenu.map(({ label: subLabel, path: subPath }, i) => (
                      <Link
                        key={subLabel}
                        to={subPath}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#205e2e] hover:bg-[#f7f3e8] rounded-lg transition"
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={label}
                to={path}
                className="text-gray-700 hover:text-[#434f2a] font-medium py-2 px-2 rounded-lg hover:bg-[#f7f3e8]/50 text-sm transition-all"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* WhatsApp Button Desktop */}
        <a
          href="https://wa.me/6285790220407"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-4 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm"
        >
          WhatsApp
        </a>

        {/* Toggle Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#434f2a] p-2 rounded-lg hover:bg-[#f7f3e8]/50"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md px-4 pb-4 font-serif border-t border-gray-100 shadow-lg animate-slide-down">
          {menuItems.map(({ label, path, submenu }) =>
            submenu ? (
              <div key={label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-between items-center w-full py-3 text-gray-700 hover:text-[#434f2a] border-t border-gray-100 font-medium"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="pl-4">
                    {submenu.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        to={subPath}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-gray-600 hover:text-[#205e2e] transition"
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-[#434f2a] border-t border-gray-100 font-medium"
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}

      {/* Animation */}
      <style>{`
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
      `}</style>
    </header>
  );
}