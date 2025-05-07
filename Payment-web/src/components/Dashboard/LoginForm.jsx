import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Logo from "../../assets/images/stan.svg";

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8989/api/v1/login', formData); // Update this URL
            const { token } = response.data;

            // Save token to localStorage (or cookie)     //use session storage here 
            localStorage.setItem('authToken', token);

            // Navigate to dashboard
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="container">
            <div className="box" style={{ marginTop: '7%' }}>
                <div className="col-md-12">
                    <div className="img" style={{ display: "flex", justifyContent: 'center' }}>
                        <a className="nav-logo p-0" href="/">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div className="data" style={{ display: "flex", justifyContent: 'center' }}>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Log in to your account</p>
                    </div>
                    <div className="content" style={{ display: "flex", justifyContent: 'center', color: 'gray', marginTop: '15px' }}>
                        <p>Welcome back! Please enter your details.</p>
                    </div>

                    <div className="container mt-4" style={{ display: "flex", justifyContent: 'center' }}>
                        <form onSubmit={handleSubmit}>
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ marginTop: '20px' }}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    style={{ width: '360px', height: '38px', border: '1px solid gray' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label" style={{ marginTop: '20px' }}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    style={{ width: '360px', height: '38px', border: '1px solid gray' }}
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3" style={{ marginTop: '5px' }}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                                    <label className="form-check-label mt-2" htmlFor="rememberMe" style={{ fontSize: '12px' }}>
                                        Remember Me
                                    </label>
                                </div>
                                <a href="#" className="text-primary">Forgot Password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '360px', height: '38px', marginTop: '20px' }}>Sign In</button>

                            <button type="button" className="btn btn-light" style={{ width: '360px', height: '38px', marginTop: '20px', color: 'blue', border: '1px solid blue', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <i className="fab fa-google"></i>
                                Sign Up with Google
                            </button>

                            <p style={{ fontSize: '14px', marginTop: '20px', color: 'gray', textAlign: 'center' }}>
                                Don’t have an account?
                                <Link to="/signinform"><span style={{ color: 'blue' }}> Sign Up</span></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
