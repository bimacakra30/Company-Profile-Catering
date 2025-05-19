import { useEffect, useState } from "react";
import { Check, Phone, Mail, Instagram, Facebook, ArrowRight, ChevronRight, Star } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/api/placeholder/1200x600?text=Elegant+Catering+1",
      title: "Selamat Datang di Sari Dewi Catering",
      description: "Solusi Catering Mewah dan Berkelas untuk Setiap Acara Istimewa Anda",
    },
    {
      image: "/api/placeholder/1200x600?text=Premium+Menu+2",
      title: "Menu Eksklusif, Cita Rasa Premium",
      description: "Nikmati Hidangan Signature dengan Sentuhan Kuliner Terbaik",
    },
    {
      image: "/api/placeholder/1200x600?text=Professional+Service+3",
      title: "Pelayanan Profesional yang Memukau",
      description: "Dedikasi Kami untuk Menjadikan Acara Anda Tak Terlupakan",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  }

  const menuItems = [
    { name: "Nasi Kuning Royal", price: "Rp35.000/porsi", image: "/api/placeholder/300x200" },
    { name: "Tumpeng Eksekutif", price: "Rp450.000/set", image: "/api/placeholder/300x200" },
    { name: "Premium Snack Box", price: "Rp28.000/box", image: "/api/placeholder/300x200" },
  ];

  const packages = [
    {
      name: "Gold Package",
      price: "Rp45.000",
      features: ["Nasi Putih Premium", "Ayam Bakar Madu", "Sayur Asem Spesial", "Sambal Dadak", "Kerupuk Udang", "Es Jeruk Segar"],
    },
    {
      name: "Platinum Package",
      price: "Rp65.000",
      features: ["Nasi Uduk Aromatik", "Ayam Betutu", "Urap Sayuran Organik", "Telur Balado Spesial", "Perkedel Kentang", "Es Teh Mawar", "Puding Karamel"]
    },
  ];

  const testimonials = [
    {
      name: "Siti Aminah",
      role: "Event Organizer",
      rating: 5,
      text: "Pelayanan sangat profesional, presentasi makanan cantik, dan rasanya luar biasa. Semua tamu terpukau!"
    },
    {
      name: "Rudi Hartono",
      role: "Corporate Manager",
      rating: 5,
      text: "Sudah berlangganan catering di sini untuk acara kantor. Konsistensi kualitas sangat terjaga dan selalu memuaskan."
    }
  ];

  return (
    <div className="font-serif">
      {/* Hero Slider */}
      <section className="relative h-screen">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <img 
                src={slide.image} 
                alt="Slide" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <div className="transform translate-y-4 opacity-0 animate-fade-in-up">
                  <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
                    {slide.title}
                  </h2>
                  <div className="w-24 h-1 bg-olive-400 mx-auto mb-6"></div>
                  <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <button className="mt-8 px-8 py-3 bg-olive-800 hover:bg-olive-700 text-white rounded-sm transition-colors duration-300 flex items-center mx-auto">
                    Pesan Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider navigation dots */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-olive-400 w-8' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Elegant divider */}
      <div className="w-full h-8 bg-olive-800"></div>

      {/* Tentang Singkat with parallax effect */}
      <section className="py-24 bg-[url('/api/placeholder/1920x1080?text=Elegant+Background')] bg-fixed bg-cover text-center relative">
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light text-olive-900 mb-6 tracking-wide">Tentang Kami</h2>
          <div className="w-24 h-0.5 bg-olive-800 mx-auto mb-10"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Sari Dewi Catering didirikan pada tahun 2010 dengan visi menyajikan pengalaman kuliner premium untuk setiap acara istimewa. 
            Dengan memadukan resep tradisional dan teknik modern, kami menciptakan hidangan yang tidak hanya lezat, tetapi juga 
            mempesona dalam presentasi. Kami berkomitmen untuk menggunakan bahan-bahan berkualitas terbaik dan layanan yang 
            disesuaikan dengan kebutuhan setiap klien.
          </p>
          <a 
            href="/tentang" 
            className="mt-10 inline-flex items-center text-olive-800 font-medium hover:text-olive-600 transition-colors duration-300"
          >
            Selengkapnya <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </section>

      {/* Menu Favorit */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-olive-900 mb-6 tracking-wide">Menu Signature</h2>
            <div className="w-24 h-0.5 bg-olive-800 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nikmati hidangan eksklusif yang menjadi kebanggaan Sari Dewi Catering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 bg-olive-800 text-white rounded-sm transform translate-y-4 opacity-0 hover:bg-olive-700 transition group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                      Lihat Detail
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-olive-900 mb-2">{item.name}</h3>
                  <p className="text-olive-800 font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/menu" 
              className="inline-flex items-center px-8 py-3 border-2 border-olive-800 text-olive-800 hover:bg-olive-800 hover:text-white transition-colors duration-300 font-medium"
            >
              Lihat Semua Menu <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Paket Populer with gradient background */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-olive-900 mb-6 tracking-wide">Paket Eksklusif</h2>
            <div className="w-24 h-0.5 bg-olive-800 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi catering lengkap untuk berbagai acara dengan harga yang kompetitif
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {packages.map((pack, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-8 border border-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-olive-900 mb-2">{pack.name}</h3>
                    <div className="w-12 h-0.5 bg-green-500"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-light text-olive-800">{pack.price}</p>
                    <p className="text-gray-500 text-sm">per porsi</p>
                  </div>
                </div>
                
                <ul className="text-gray-700 space-y-4">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" /> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-8 py-3 bg-olive-800 hover:bg-olive-700 text-white font-medium transition-colors duration-300">
                  Pesan Paket Ini
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/paket" 
              className="inline-flex items-center text-olive-800 font-medium hover:text-olive-600 transition-colors duration-300"
            >
              Lihat Semua Paket <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimoni with elegant design */}
      <section className="py-24 bg-olive-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 tracking-wide">Testimoni Pelanggan</h2>
            <div className="w-24 h-0.5 bg-green-400 mx-auto mb-6"></div>
            <p className="text-green-100 max-w-2xl mx-auto">
              Apa yang dikatakan klien tentang pengalaman mereka bersama kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-olive-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-olive-700"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-green-400" />
                  ))}
                </div>
                <p className="text-green-100 italic mb-6 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-olive-700 rounded-full mr-4 flex items-center justify-center text-lg font-medium">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{t.name}</h4>
                    <p className="text-green-300">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/testimoni" 
              className="inline-flex items-center px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-olive-900 transition-colors duration-300"
            >
              Lihat Semua Testimoni <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact section with elegant layout - message form removed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-olive-50 rounded-lg shadow-lg overflow-hidden p-8 md:p-12">
            <h2 className="text-3xl font-light text-olive-900 mb-6 text-center">Hubungi Kami</h2>
            <div className="w-20 h-0.5 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-700 mb-8 text-center">
              Kami siap membantu Anda merencanakan acara istimewa dengan menu dan layanan yang disesuaikan dengan kebutuhan Anda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="tel:+6281234567890" 
                className="flex items-center space-x-4 text-gray-700 hover:text-olive-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-olive-800 transition-colors">
                  <Phone className="w-5 h-5 text-olive-800 group-hover:text-white transition-colors" />
                </div>
                <span>+62 812-3456-7890</span>
              </a>
              
              <a 
                href="mailto:info@saridewicatering.com" 
                className="flex items-center space-x-4 text-gray-700 hover:text-olive-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-olive-800 transition-colors">
                  <Mail className="w-5 h-5 text-olive-800 group-hover:text-white transition-colors" />
                </div>
                <span>info@saridewicatering.com</span>
              </a>
              
              <a 
                href="https://instagram.com/saridewicatering" 
                className="flex items-center space-x-4 text-gray-700 hover:text-olive-800 transition-colors group" 
                target="_blank" 
                rel="noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-olive-800 transition-colors">
                  <Instagram className="w-5 h-5 text-olive-800 group-hover:text-white transition-colors" />
                </div>
                <span>@saridewicatering</span>
              </a>
              
              <a 
                href="https://facebook.com/saridewicatering" 
                className="flex items-center space-x-4 text-gray-700 hover:text-olive-800 transition-colors group" 
                target="_blank" 
                rel="noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-olive-800 transition-colors">
                  <Facebook className="w-5 h-5 text-olive-800 group-hover:text-white transition-colors" />
                </div>
                <span>Sari Dewi Catering</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with elegant design */}
      <footer className="bg-olive-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-2xl font-light tracking-wider mb-4">SARI DEWI CATERING</div>
          </div>
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-6"></div>
          <div className="text-center text-green-200 text-sm">
            &copy; {new Date().getFullYear()} Sari Dewi Catering. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Add custom style for animation */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        /* Custom Olive/Green colors to replace amber/brown */
        .bg-olive-50 { background-color: #f8faee; }
        .bg-olive-100 { background-color: #f0f4d8; }
        .bg-olive-200 { background-color: #e4ebbe; }
        .bg-olive-300 { background-color: #d0db9e; }
        .bg-olive-400 { background-color: #b9c77b; }
        .bg-olive-500 { background-color: #9aad5d; }
        .bg-olive-600 { background-color: #788a4a; }
        .bg-olive-700 { background-color: #5c6c39; }
        .bg-olive-800 { background-color: #434f2a; }
        .bg-olive-900 { background-color: #2c341c; }
        
        .text-olive-50 { color: #f8faee; }
        .text-olive-100 { color: #f0f4d8; }
        .text-olive-200 { color: #e4ebbe; }
        .text-olive-300 { color: #d0db9e; }
        .text-olive-400 { color: #b9c77b; }
        .text-olive-500 { color: #9aad5d; }
        .text-olive-600 { color: #788a4a; }
        .text-olive-700 { color: #5c6c39; }
        .text-olive-800 { color: #434f2a; }
        .text-olive-900 { color: #2c341c; }
        
        .border-olive-50 { border-color: #f8faee; }
        .border-olive-100 { border-color: #f0f4d8; }
        .border-olive-200 { border-color: #e4ebbe; }
        .border-olive-300 { border-color: #d0db9e; }
        .border-olive-400 { border-color: #b9c77b; }
        .border-olive-500 { border-color: #9aad5d; }
        .border-olive-600 { border-color: #788a4a; }
        .border-olive-700 { border-color: #5c6c39; }
        .border-olive-800 { border-color: #434f2a; }
        .border-olive-900 { border-color: #2c341c; }
        
        .hover\\:bg-olive-700:hover { background-color: #5c6c39; }
        .hover\\:bg-olive-800:hover { background-color: #434f2a; }
        .hover\\:text-olive-600:hover { color: #788a4a; }
        .hover\\:text-olive-800:hover { color: #434f2a; }
        .hover\\:border-olive-300:hover { border-color: #d0db9e; }
        
        .from-olive-50 { --tw-gradient-from: #f8faee; }
        .to-olive-50 { --tw-gradient-to: #f8faee; }
        
        .group-hover\\:bg-olive-800:hover { background-color: #434f2a; }
        .group-hover\\:text-white:hover { color: #ffffff; }
      `}</style>
    </div>
  );
}