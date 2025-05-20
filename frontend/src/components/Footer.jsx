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
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <p>
            <strong>Sari Dewi Catering</strong> senantiasa menyajikan makanan dengan
            standar cita rasa yang berkelas. Diolah oleh para koki profesional dan
            memiliki passion yang tinggi dalam menyajikan{" "}
            <strong>sajian masakan yang lezat, halal, dan berkualitas.</strong>
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /> FACEBOOK</a>
            <a href="#"><FaInstagram /> INSTAGRAM</a>
          </div>
        </div>

        <div className="footer-section services">
          <h3>PAKET LAYANAN</h3>
          <ul>
            <li><Link to="/menu">➜ Prasmanan</Link></li>
            <li><Link to="/menu">➜ Gubug</Link></li>
            <li><Link to="/menu">➜ Nasi Box</Link></li>
            <li><Link to="/menu">➜ Hampers</Link></li>
            <li><Link to="/menu">➜ Menu Spesial</Link></li>
            <li><Link to="/menu">➜ Racikan</Link></li>
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