import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Kontak Kiri */}
        <div className="space-y-4">
          <h3 className="text-lg text-gray-700">Kontak Resmi</h3>
          <h2 className="text-4xl font-bold text-green-900 mb-6">SARI DEWI CATERING</h2>
          <div className="space-y-4 text-gray-800 text-lg">
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-600" />
              <span>0851 0651 1818</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-green-600" />
              <span>(0274) 865829</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-green-600" />
              <span>catering_sari.dewi@yahoo.co.id</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-green-600 mt-1" />
              <span>
                Jl. Magelang KM.10, Josari, Tridadi, Kec. Sleman, Kab. Sleman, DIY 55511
              </span>
            </div>
          </div>
        </div>

        {/* Peta Google Maps */}
        <div>
          <iframe
            title="Lokasi Sari Dewi Catering"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8071060443644!2d110.3417353750512!3d-7.812861677292878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58404240ec21%3A0xa65c244b5a0d6b1f!2sSari%20Dewi%20Catering!5e0!3m2!1sen!2sid!4v1716200000000!5m2!1sen!2sid"
            width="100%"
            height="350"
            className="rounded-lg shadow-md border"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}