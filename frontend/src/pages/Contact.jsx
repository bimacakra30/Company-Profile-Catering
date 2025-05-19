import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
        <p className="text-gray-600 mb-4">Kami siap membantu Anda merencanakan acara terbaik Anda.</p>
        <div className="flex justify-center flex-wrap gap-6 text-green-700">
          <a href="tel:+6281234567890" className="flex items-center space-x-2 hover:text-green-900">
            <Phone /> <span>+62 812-3456-7890</span>
          </a>
          <a href="mailto:info@saridewicatering.com" className="flex items-center space-x-2 hover:text-green-900">
            <Mail /> <span>info@saridewicatering.com</span>
          </a>
          <a href="https://instagram.com/saridewicatering" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-green-900">
            <Instagram /> <span>@saridewicatering</span>
          </a>
          <a href="https://facebook.com/saridewicatering" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-green-900">
            <Facebook /> <span>Sari Dewi Catering</span>
          </a>
        </div>
      </div>
    </section>
  );
}
