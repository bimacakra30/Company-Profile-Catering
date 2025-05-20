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

  return (
    <div className="font-serif">
      {/* Content intentionally truncated for brevity */}
    </div>
  );
}