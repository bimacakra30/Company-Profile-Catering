import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/login"); // Arahkan ke halaman login
  };

  return (
    <nav className="navbar">
      <h1 className="logo">ADMIN PANEL</h1>
      <ul className="nav-links">
        <li><a href="/admin">Admin</a></li>
        <li><a href="/tentang">Tentang Kami</a></li>
        <li><a href="/layanan">Layanan Catering</a></li>
        <li><a href="/galeri">Galeri</a></li>
        <li><a href="/portofolio">Portofolio</a></li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
    </nav>
  );
};

export default Navbar;
