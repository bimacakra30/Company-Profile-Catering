import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

import user_icon from "../Assets/user.png";
import password_icon from "../Assets/password.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(""); 

        try {
            // Kirim password dalam bentuk teks biasa, biarkan backend yang meng-hash dengan MD5
            const response = await axios.post("http://localhost:5001/login", { username, password });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                navigate("/admin"); 
            } else {
                setErrorMessage("Login failed! Invalid response from server.");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Login failed! Please try again.");
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
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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

                {errorMessage && <p className="error-message">{errorMessage}</p>} 

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
