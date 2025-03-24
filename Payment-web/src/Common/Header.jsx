import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSlideDropdownOpen, setIsSlideDropdownOpen] = useState(false);

  return (
    <header>
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid" style={{marginTop:'1%'}}>
          {/* Site logo */}
          <a className="nav-logo p-0" href="/">
            <img src={Logo} alt="logo" />
          </a>

          {/* Navigation toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Navigation menu */}
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex justify-content-center align-items-center gap-5 mb-2 mb-lg-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>

              <Link to="/about" className="nav-item nav-link ">
                About us
              </Link>

              <Link to="/feature" className="nav-item nav-link">
                Feature
              </Link>

              <Link to="/pricing" className="nav-item nav-link">
                Pricing
              </Link>

              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>



              <Link to='/adminsignup'>
              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "5px",
                  color: "white",
                  padding: "6px 17px",
                  border:'none'

                }}
              >
                Admin Sign up &rarr;
              </button>
              </Link>



              <Link to='/signup'>
              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "5px",
                  color: "white",
                  padding: "6px 17px",
                  border:'none'

                }}
              >
                Signup &rarr;
              </button>
              </Link>
             
            </ul>
          </div>
        </div>
      </nav>

      {/* Left Sidebar */}
      <aside>
        <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <div className="side-nav-logo d-flex justify-content-between align-items-center ps-4 pe-3">
            <figure className="navbar-brand">
              <a href="/">
                <img src={Logo} alt="img" className="nav-logo" />
              </a>
            </figure>
            <div className="closebtn" onClick={() => setIsNavOpen(false)}>
              <i className="fa-solid fa-square-xmark side-bar-close-btn"></i>
            </div>
          </div>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/feature">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <div
                className="d-flex align-items-center justify-content-between pt-3"
                onClick={() => setIsSlideDropdownOpen(!isSlideDropdownOpen)}
              >
                <button className="a-slid">Pages</button>
                <i className="fa-solid fa-caret-down pe-4"></i>
              </div>
              {isSlideDropdownOpen && (
                <ul className="myst">
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                  <li>
                    <a href="/testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/404">404</a>
                  </li>
                  <li>
                    <a href="/coming-soon">Coming Soon</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="search" id="search-bar">
          <form className="d-flex nav-search">
            <input type="text" name="search" placeholder="Enter your text" />
            <button className="btn-hover1" type="submit">
              Search
            </button>
          </form>
          <button id="remove-btn" onClick={() => setIsSearchOpen(false)}>
            <i className="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      )}

      {/* Right Sidebar */}
      {isRightSidebarOpen && (
        <section className="right-sidbar" id="right_side">
          <div className="d-flex justify-content-between align-items-center">
            <a className="p-0" href="/">
              <img src={Logo} alt="logo" />
            </a>
            <button
              className="close_right_sidebar fa-solid fa-xmark"
              onClick={() => setIsRightSidebarOpen(false)}
            ></button>
          </div>
          <p className="mt-4 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="#" className="btn-hover1">
            Discover More
          </a>
          <hr />
          <h5 className="mt-4 mb-4">Connected details:</h5>
          <ul className="d-flex flex-column gap-3">
            <li>
              <a href="#">
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href="#">+123-456-7890</a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="#">info@example.com</a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-clock"></i>
              </a>
              <a href="#">Office Hours: 8AM - 11PM</a>
            </li>
          </ul>
          <span className="d-flex gap-4 mt-4">
            <a href="#" className="p-0">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="p-0">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="p-0">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </span>
        </section>
      )}
    </header>
  );
};

export default Header;
