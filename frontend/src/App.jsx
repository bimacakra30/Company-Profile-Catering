import { useEffect, useState } from "react";
import { Phone, Mail, Instagram, Facebook, Check } from "lucide-react";

export default function SariDewiCatering() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      image: "/api/placeholder/1200x600?text=Slide+1",
      title: "Selamat Datang di Sari Dewi Catering",
      description: "Solusi Catering Lezat dan Terjangkau untuk Setiap Acara",
    },
    {
      image: "/api/placeholder/1200x600?text=Slide+2",
      title: "Menu Beragam, Rasa Istimewa",
      description: "Nikmati Hidangan Pilihan dengan Kualitas Terbaik",
    },
    {
      image: "/api/placeholder/1200x600?text=Slide+3",
      title: "Pelayanan Profesional dan Ramah",
      description: "Kami Hadir untuk Membuat Acara Anda Berkesan",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const menuItems = [
    { name: "Nasi Kuning", image: "/api/placeholder/300x200" },
    { name: "Nasi Uduk", image: "/api/placeholder/300x200" },
    { name: "Tumpeng", image: "/api/placeholder/300x200" },
    { name: "Snack Box", image: "/api/placeholder/300x200" },
  ];

  const packages = [
    {
      name: "Paket A",
      price: "Rp25.000",
      features: ["Nasi Putih", "Ayam Goreng", "Sayur Asem", "Sambal", "Kerupuk"],
    },
    {
      name: "Paket B",
      price: "Rp30.000",
      features: ["Nasi Uduk", "Ayam Bakar", "Urap", "Telur Balado", "Kerupuk"]
    },
    {
      name: "Paket C",
      price: "Rp35.000",
      features: ["Nasi Kuning", "Rendang", "Perkedel", "Sambal Goreng Kentang", "Kerupuk"]
    },
  ];

  const testimonials = [
    {
      name: "Siti Aminah",
      role: "Ibu Rumah Tangga",
      text: "Pelayanan cepat, makanan enak, semua tamu puas!"
    },
    {
      name: "Rudi Hartono",
      role: "Karyawan Swasta",
      text: "Sudah langganan catering di sini. Tidak pernah mengecewakan."
    },
    {
      name: "Dewi Lestari",
      role: "Event Organizer",
      text: "Sari Dewi Catering selalu menjadi pilihan utama untuk event kami."
    }
  ];

  return (
    <div>
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">Sari Dewi Catering</div>
          <nav className="hidden md:flex space-x-6 text-gray-700">
            <a href="#about">Tentang Kami</a>
            <a href="#menu">Menu</a>
            <a href="#package">Paket</a>
            <a href="#testimonial">Testimoni</a>
            <a href="#contact">Kontak</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4">
            <a className="block py-2" href="#about">Tentang Kami</a>
            <a className="block py-2" href="#menu">Menu</a>
            <a className="block py-2" href="#package">Paket</a>
            <a className="block py-2" href="#testimonial">Testimoni</a>
            <a className="block py-2" href="#contact">Kontak</a>
          </div>
        )}
      </header>

      <section className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide.image} alt="Slide" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tentang Kami</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Sari Dewi Catering telah berdiri sejak tahun 2010, menyediakan layanan catering untuk berbagai acara seperti ulang tahun, pernikahan, arisan, dan acara perusahaan. Kami mengutamakan kualitas rasa dan pelayanan yang profesional.
          </p>
        </div>
      </section>

      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Menu Favorit</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="package" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Paket Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pack, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">{pack.name}</h3>
                <p className="text-2xl font-semibold text-gray-800 mb-4">{pack.price}</p>
                <ul className="text-gray-700 space-y-2">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonial" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <h4 className="text-lg font-semibold text-green-700">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
          <p className="text-gray-600 mb-4">Kami siap membantu Anda merencanakan acara terbaik Anda.</p>
          <div className="flex justify-center space-x-6 text-green-700">
            <a href="tel:+6281234567890" className="flex items-center space-x-2 hover:text-green-900">
              <Phone /> <span>+62 812-3456-7890</span>
            </a>
            <a href="mailto:info@saridewicatering.com" className="flex items-center space-x-2 hover:text-green-900">
              <Mail /> <span>info@saridewicatering.com</span>
            </a>
            <a href="https://instagram.com/saridewicatering" className="flex items-center space-x-2 hover:text-green-900" target="_blank" rel="noreferrer">
              <Instagram /> <span>@saridewicatering</span>
            </a>
            <a href="https://facebook.com/saridewicatering" className="flex items-center space-x-2 hover:text-green-900" target="_blank" rel="noreferrer">
              <Facebook /> <span>Sari Dewi Catering</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>&copy; 2025 Sari Dewi Catering. All rights reserved.</p>
      </footer>
    </div>
  );
}