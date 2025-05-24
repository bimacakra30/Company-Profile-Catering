import { useEffect, useState } from "react";
import { Check, Phone, Mail, Instagram, Facebook, ArrowRight, ChevronRight, Star, Award, Users, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/api/placeholder/1200x600?text=Elegant+Catering+Setup",
      title: "Selamat Datang di Sari Dewi Catering",
      description: "Solusi Catering Mewah dan Berkelas untuk Setiap Acara Istimewa Anda",
      cta: "Lihat Menu Kami"
    },
    {
      image: "/api/placeholder/1200x600?text=Premium+Indonesian+Cuisine",
      title: "Menu Eksklusif, Cita Rasa Premium",
      description: "Nikmati Hidangan Signature dengan Sentuhan Kuliner Terbaik",
      cta: "Pesan Sekarang"
    },
    {
      image: "/api/placeholder/1200x600?text=Professional+Wedding+Service",
      title: "Pelayanan Profesional yang Memukau",
      description: "Dedikasi Kami untuk Menjadikan Acara Anda Tak Terlupakan",
      cta: "Hubungi Kami"
    },
  ];

  const services = [
    {
      icon: "🎊",
      title: "Pernikahan & Resepsi",
      description: "Paket lengkap catering pernikahan dengan dekorasi elegan dan pelayanan premium"
    },
    {
      icon: "🏢", 
      title: "Corporate Event",
      description: "Solusi catering profesional untuk meeting, seminar, dan acara perusahaan"
    },
    {
      icon: "🎂",
      title: "Birthday Party",
      description: "Rayakan ulang tahun dengan menu spesial dan pelayanan yang berkesan"
    },
    {
      icon: "🕌",
      title: "Acara Keagamaan",
      description: "Catering untuk pengajian, akikah, syukuran, dan acara religius lainnya"
    },
    {
      icon: "🎓",
      title: "Wisuda & Graduation",
      description: "Paket catering istimewa untuk merayakan pencapaian akademik"
    },
    {
      icon: "🍽️",
      title: "Prasmanan & Buffet",
      description: "Layanan prasmanan dengan beragam pilihan menu dan presentasi menarik"
    }
  ];

  const menuHighlights = [
    {
      category: "Nasi & Rice Box",
      items: ["Nasi Gudeg Jogja", "Nasi Liwet Solo", "Nasi Kuning Komplit", "Rice Box Premium"],
      image: "/api/placeholder/300x200?text=Nasi+Gudeg"
    },
    {
      category: "Lauk Utama",
      items: ["Ayam Bakar Bumbu Rujak", "Rendang Sapi Padang", "Ikan Bakar Kecap", "Sate Ayam Madura"],
      image: "/api/placeholder/300x200?text=Ayam+Bakar"
    },
    {
      category: "Sayuran & Lalap",
      items: ["Gado-gado Jakarta", "Urap Sayuran", "Lalap Segar", "Tumis Kangkung"],
      image: "/api/placeholder/300x200?text=Gado+Gado"
    },
    {
      category: "Minuman & Dessert",
      items: ["Es Teh Manis", "Jus Buah Segar", "Puding Buah", "Es Campur Jakarta"],
      image: "/api/placeholder/300x200?text=Minuman+Segar"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      event: "Pernikahan",
      rating: 5,
      comment: "Pelayanan luar biasa! Menu yang disajikan sangat lezat dan presentasi yang elegan. Tamu undangan semua puas!",
      location: "Sleman, Yogyakarta"
    },
    {
      name: "Siti Nurhaliza",
      event: "Corporate Event",
      rating: 5,
      comment: "Profesional dan tepat waktu. Menu yang bervariasi dan sesuai dengan budget perusahaan. Sangat recommended!",
      location: "Bantul, Yogyakarta"
    },
    {
      name: "Ahmad Wijaya", 
      event: "Ulang Tahun",
      rating: 5,
      comment: "Acara ulang tahun anak saya jadi berkesan. Menu anak-anak yang disediakan sangat disukai. Terima kasih!",
      location: "Jogja Kota"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="font-serif">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="mb-6">
                <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium shadow-lg animate-pulse">
                  ⭐ Premium Catering Service
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#434f2a] transition-all duration-300 flex items-center justify-center">
                  <FaWhatsapp className="mr-2" />
                  0851 0651 1818
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-sm md:text-base opacity-90">Tahun Pengalaman</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-sm md:text-base opacity-90">Acara Sukses</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm md:text-base opacity-90">Menu Pilihan</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm md:text-base opacity-90">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium">
                  🏆 Tentang Kami
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-6">
                Sari Dewi Catering
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun, Sari Dewi Catering telah menjadi pilihan utama 
                untuk berbagai acara istimewa di Yogyakarta dan sekitarnya. Kami menghadirkan cita rasa 
                autentik Indonesia dengan sentuhan modern dan pelayanan profesional.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Menu tradisional dan modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Bahan berkualitas premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Pelayanan profesional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-[#205e2e] bg-[#f7f3e8] rounded-full p-1" />
                  <span className="text-gray-700">Harga kompetitif</span>
                </div>
              </div>
              <button className="group bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                Selengkapnya
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/500x400?text=Chef+Cooking"
                alt="Sari Dewi Catering"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="text-[#205e2e] w-8 h-8" />
                  <div>
                    <div className="font-bold text-[#434f2a]">Sertifikat Halal</div>
                    <div className="text-sm text-gray-600">MUI Yogyakarta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4">
              🎉 Layanan Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-6">
              Berbagai Pilihan Acara
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami melayani berbagai jenis acara dengan menu dan paket yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-[#f7f3e8] to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#f7f3e8]">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#434f2a] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-6 text-[#205e2e] font-semibold group-hover:underline flex items-center justify-center mx-auto">
                  Lihat Detail
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-24 bg-gradient-to-b from-[#f7f3e8] via-white to-[#f7f3e8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4">
              🍽️ Menu Unggulan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-6">
              Cita Rasa Terbaik Indonesia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati kelezatan menu tradisional dan modern yang diolah dengan resep turun temurun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuHighlights.map((menu, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.category}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#434f2a] mb-4">{menu.category}</h3>
                  <ul className="space-y-2">
                    {menu.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-[#205e2e] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
              Lihat Menu Lengkap
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#205e2e] text-white rounded-full text-sm font-medium mb-4">
              ⭐ Testimoni
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#434f2a] mb-6">
              Kata Mereka Tentang Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f7f3e8] to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#434f2a]">{testimonial.name}</div>
                  <div className="text-sm text-[#205e2e] font-medium">{testimonial.event}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#434f2a] to-[#205e2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-6 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            📞 Hubungi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Wujudkan Acara Impian Anda
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Konsultasikan kebutuhan catering Anda dengan tim profesional kami. 
            Dapatkan penawaran terbaik dan pelayanan yang memuaskan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/6285106511818"
              className="group bg-white text-[#434f2a] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              <FaWhatsapp className="mr-2 text-green-500" />
              WhatsApp: 0851 0651 1818
            </a>
            <a
              href="tel:(0274)865829"
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#434f2a] transition-all duration-300 flex items-center"
            >
              <Phone className="mr-2" />
              Telepon: (0274) 865829
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="font-semibold mb-2">Jam Operasional</h3>
              <p className="opacity-80">Senin - Sabtu: 08:00 - 17:00</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="font-semibold mb-2">Lokasi</h3>
              <p className="opacity-80">Jl. Magelang KM.10, Sleman</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-80">catering_sari.dewi@yahoo.co.id</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}