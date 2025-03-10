import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Panel</h1>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}>Logout</button>
      </header>
      <div className="dashboard-body">
        <nav className="sidebar">
          <h2>Menu</h2>
          <ul className="nav-links">
            <li><a href="/admin">Admin</a></li>
            <li><a href="/tentang">Tentang Kami</a></li>
            <li><a href="/layanan">Layanan Catering</a></li>
            <li><a href="/galeri">Galeri</a></li>
            <li><a href="/portofolio">Portofolio</a></li>
          </ul>
        </nav>
        <main className="content">
          <div className="welcome-card">
            <h2>Selamat Datang, Admin!</h2>
            <p>Kelola layanan catering dengan mudah di sini.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;