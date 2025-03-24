import React from 'react'
import bgImage from '../assets/images/signup.jpg' // adjust path as needed
import Logo from "../assets/images/Logo.png"

const SignUp = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional: makes it fixed while scrolling
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        
      }}
    >
      <div className="container d-flex justify-content-end">
        <div className="col-md-5">
          <div className="box_content bg-white p-4 rounded shadow" style={{height:'95%'}}>
            <div className="contain text-center">
              <img src={Logo} alt="Logo" width="30%" style={{display:'flex'}} />
              <h3 className="wel" style={{ fontSize: '14px',display:'flex' }}>Welcome to PayPath</h3>
              <h3 className="fz" style={{ fontWeight: 600, fontSize: '18px',display:'flex' }}>
                Get started with your email or phone number
              </h3>
              <input
                type="text"
                placeholder="Enter email or phone number"
                style={{
                  padding: '8px 12px',
                  borderRadius: '5px',
                  width: '100%',
                  marginTop: '10px'
                }}
              />
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '12px' }}
              >
                Continue
              </button>
            </div>
            <p>or</p>
            <button
                type="button"
                className="btn btn-light"
                style={{ width: '100%', marginTop: '12px',border:'1px solid black' }}
              >
                Continue with Google
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
