import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

import user_icon from "../Assets/user.png";
import password_icon from "../Assets/password.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Untuk menampilkan error
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset error message sebelum mencoba login

        try {
            const response = await axios.post("http://localhost:5001/login", { email, password });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                navigate("/admin"); // Arahkan ke halaman admin jika berhasil login
            } else {
                setErrorMessage("Login failed! Invalid response from server.");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Login failed! Please try again.");
            }
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Admin Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleLogin}>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password Icon" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Tampilkan pesan error */}

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
