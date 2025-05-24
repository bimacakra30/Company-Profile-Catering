import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  // Assume you fetch categories from props or context, or use a placeholder for now
  // Example: const categories = props.categories || [];
  // For demonstration, using a static array (replace with dynamic data fetching as needed)
  const categories = [
    { name: "Prasmanan", slug: "prasmanan" },
    { name: "Gubug", slug: "gubug" },
    { name: "Nasi Box", slug: "nasi-box" },
    { name: "Hampers", slug: "hampers" },
    { name: "Menu Spesial", slug: "menu-spesial" },
    { name: "Racikan", slug: "racikan" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <p>
            <strong>Dandanggulo</strong> selalu berkomitmen menghadirkan hidangan rumahan
             yang lezat dan penuh kehangatan. Dimasak dengan sepenuh hati oleh keluarga kami,
            {" "}
            <strong>setiap sajian dibuat dari bahan pilihan, halal, dan berkualitas</strong>
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /> FACEBOOK</a>
            <a href="#"><FaInstagram /> INSTAGRAM</a>
          </div>
        </div>

        <div className="footer-section services">
          <h3>PAKET LAYANAN</h3>
          <ul>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/menu/${cat.slug}`}>➜ {cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>KONTAK</h3>
          <ul>
            <li><FaWhatsapp className="icon whatsapp" /> 0851 0651 1818</li>
            <li><FaPhoneAlt className="icon" /> (0274) 865829</li>
            <li><FaInstagram className="icon" /> @saridewicatering_jogja</li>
            <li><FaEnvelope className="icon" /> cvsaridewimalika22@gmail.com</li>
            <li>
              <FaMapMarkerAlt className="icon" /> Jl. Magelang KM.10, Josari, Tridadi, Kec. Sleman, Kab. Sleman DIY 55511
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ALL RIGHTS ARE RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;