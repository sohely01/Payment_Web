import React, { useState } from 'react';
import Logo from "../../assets/images/stan.svg";
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8989/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                // Save token to localStorage
                localStorage.setItem('token', data.token);
                alert('Registration successful!');
                navigate('/loginform'); // Redirect after successful signup
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="box" style={{ marginTop: '7%' }}>
                <div className="col-md-12">

                    <div className="img" style={{ display: "flex", justifyContent: 'center' }}>
                        <a className="nav-logo p-0">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>

                    <div className="data" style={{ display: "flex", justifyContent: 'center' }}>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Create an account</p>
                    </div>

                    <div className="content mt-2" style={{ display: "flex", justifyContent: 'center', color: 'gray' }}>
                        <p>Start your journey!</p>
                    </div>

                    <div className="container mt-4" style={{ display: "flex", justifyContent: 'center' }}>
                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{ marginTop: '20px' }}>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    style={{ width: '360px', height: '38px', border: '1px solid gray' }}
                                    required
                                />
                            </div>

                            {/* Email */}
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
                                    required
                                />
                            </div>

                            {/* Password */}
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
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '360px', height: '38px', border: '1px solid gray', marginTop: '20px' }}>
                                Get Started
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                style={{
                                    width: '360px',
                                    height: '38px',
                                    border: '1px solid blue',
                                    marginTop: '20px',
                                    backgroundColor: 'white',
                                    color: 'blue',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                                onClick={() => alert('Google Signup not implemented')}
                            >
                                <i className="fab fa-google"></i>
                                Sign Up with Google
                            </button>

                            <p style={{
                                fontSize: '14px',
                                marginTop: '20px',
                                color: 'gray',
                                textAlign: 'center'
                            }}>
                                Already have an account?
                                <Link to='/loginform'>
                                    <span style={{ color: 'blue' }}> Log in</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
