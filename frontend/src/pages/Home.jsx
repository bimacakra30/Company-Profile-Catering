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
      {/* Content intentionally truncated for brevity */}
    </div>
  );
}