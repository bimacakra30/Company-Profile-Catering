import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="py-24 pt-20 min-h-screen bg-gradient-to-br from-[#fefdf8] to-[#f8f6f0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#434f2a] mb-4 tracking-wide">
            Dandanggulo Catering
          </h2>
          <p className="text-[#205e2e] italic text-lg font-light">
            Hubungi Kami Kapan Saja
          </p>
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-24 h-1 bg-[#434f2a] rounded-full"></div>
            <div className="w-12 h-1 bg-[#434f2a] rounded-full opacity-60"></div>
            <div className="w-6 h-1 bg-[#434f2a] rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Contact Info & Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Contact Box */}
          <div className="bg-white rounded-2xl shadow p-4 border-b-2 border-[#205e2e] min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-[#f7f3e8] text-[#434f2a] rounded-full text-xs font-semibold">
                  📋 Informasi Kontak
                </span>
              </div>
              <div className="space-y-2 text-gray-800">
                {[
                  {
                    icon: <FaWhatsapp className="text-white text-base" />,
                    title: "WhatsApp",
                    text: "0857 9022 0407 / 0819 4494 4755",
                  },
                  {
                    icon: <Phone className="text-white h-4 w-4" />,
                    title: "Telepon",
                    text: "0857 9022 0407 / 0819 4494 4755",
                  },
                  {
                    icon: <Mail className="text-white h-4 w-4" />,
                    title: "Email",
                    text: "dandanggulo@gmail.com",
                  },
                  {
                    icon: <FaInstagram className="text-white text-base" />,
                    title: "Instagram",
                    text: "@dandanggulo.crb",
                  },
                  {
                    icon: <FaFacebookF className="text-white text-base" />,
                    title: "Facebook",
                    text: "@ifa dandanggulo",
                  },
                  {
                    icon: <FaTiktok className="text-white text-base" />,
                    title: "TikTok",
                    text: "@nesia.team / @dandanggulo.85",
                  },
                  {
                    icon: <MapPin className="text-white h-4 w-4" />,
                    title: "Alamat",
                    text: "Jl. Cisadane, Pereng, Mejayan, Kab. Madiun, Jawa Timur 63153",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 hover:bg-[#f7f3e8] p-3 rounded-xl">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center shadow">
                      {item.icon}
                    </div>
                    <div className="text-sm leading-snug">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-[#1a2c4e] font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl shadow p-4 border-b-2 border-[#434f2a] min-h-[400px] flex flex-col justify-between">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-[#f7f3e8] text-[#434f2a] rounded-full text-xs font-semibold">
                🗺️ Lokasi Kami
              </span>
            </div>
            <div className="rounded-xl overflow-hidden h-full">
              <iframe
                title="Lokasi Dandanggulo Catering"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2791912204684!2d111.6688604!3d-7.5445017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c9968cdb67c7%3A0xb295f481ab30366d!2sDandanggulo%20katering%20Caruban!5e0!3m2!1sid!2sid!4v1748315392554!5m2!1sid!2sid"
                width="100%"
                height="100%"
                className="border-0 rounded-xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-[#434f2a] to-[#205e2e] rounded-2xl p-6 text-white shadow relative w-full max-w-4xl">
            <div className="relative z-10">
              <div className="mb-2 text-center">
                <span className="inline-block px-4 py-1 bg-[#f7f3e8] text-[#434f2a] rounded-full text-xs font-medium">
                  💬 Siap Melayani
                </span>
              </div>
              <p className="text-base leading-relaxed text-[#f7f3e8] text-center">
                <strong className="text-white">
                  Kami siap melayani kebutuhan catering Anda dengan pelayanan terbaik. Hubungi kami sekarang.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Service Hours */}
        <div className="max-w-5 före:ml-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#434f2a] mb-2">Jam Operasional & Tempat</h3>
            <div className="w-12 h-1 bg-[#205e2e] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 px-2">
            {[
              { hari: "Senin - Minggu", jam: "08:00 - 20:00 WIB", catatan: "Pelayanan Konsultasi dan Pemesanan di Dapur Dandanggulo" },
              { hari: "Senin - Minggu", jam: "17:00 - 21:00 WIB", catatan: "Buka Lapak di Jl. Mt. Haryono" },
              { hari: "Minggu", jam: "07:00 - 10:00 WIB", catatan: "Buka Lapak di Caruban Fun Day" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg border-b-2 transition duration-300"
              >
                <div className="mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#434f2a] to-[#205e2e] rounded-full flex items-center justify-center mx-auto shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#434f2a] mb-1">{item.hari}</h4>
                <p className="text-gray-600 text-sm">
                  {item.jam}
                  <br />
                  {item.catatan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}