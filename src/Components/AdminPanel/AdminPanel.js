import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Welcome to Admin Panel</h2>
            <button className="login-btn" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AdminPanel;
