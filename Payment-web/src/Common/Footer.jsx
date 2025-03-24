import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

import Logo from '../assets/images/Logo.png'
import Icon1 from '../assets/images/icon/logoipsum-228.png'
import Icon2 from '../assets/images/icon/logoipsum-233.png'
import Icon3 from '../assets/images/icon/logoipsum-229.png'

const Footer = () => {
  return (
    <div>
      <footer className="position-relative">
        <div className="container">
          <h4 className="text-center">SUBSCRIBE OUR NEWSLETTER</h4>
          <p className="text-center pt-2 pb-3">Get latest News and Updates</p>
          <form className="d-flex align-items-center justify-content-center" id="footer-sub2">
            <div id="Succes-box2"></div>
            <div className="d-flex footer-search">
              <input type="email" name="search" placeholder="Enter your Email" required />
              <button type="submit" className="btn-hover1">Subscribe</button>
            </div>
          </form>

          <div className="footer-logo text-center pb-lg-4 pb-md-3 pb-sm-2 pb-4">
            <a href="/">
              <figure><img src={Logo} alt="Logo" /></figure>
            </a>
          </div>

          <ul className="d-flex align-items-center justify-content-center">
            <li><a href="#">Feature</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Faq</a></li>
          </ul>

          <hr />

          <div className="row footer-nav-icon">
            <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-md-start justify-content-sm-center justify-content-center">
              <div className="social-icon d-flex gap-2 justify-content-md-start justify-content-sm-center justify-content-center">
                <a href="#"><i className="fa-brands fa-facebook-f foot-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
              <div className="d-flex gap-3 p-2">
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                slidesPerView={3}
                className="footer_ispsum_slider"
              >
                {[Icon1, Icon2, Icon3, Icon1, Icon2, Icon3].map((icon, idx) => (
                  <SwiperSlide key={idx}>
                    <figure><a href="#"><img src={icon} alt={`qr-code-${idx}`} /></a></figure>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <hr />

          <div className="Copyright d-flex justify-content-between flex-wrap dir">
            <p>Copyright © 2023 Paypath by Evonicmedia. All Right Reserved.</p>
            <p>Powered by Evonicsoft</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
