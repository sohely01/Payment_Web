import React from 'react'
import Hero1 from '../assets/images/about/lady-mobile.png'
import Hero2 from '../assets/images/icon/whitStar.png'

const AboutHero = () => {
  return (
    <div>
                     <section>
                <div className="about-hero container">
                    <h1 className="text-center">About Us</h1>
                    <p className="text-center about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                        laborum quibusdam consequatur.</p>
                    <div className="services  pb-lg-4 pb-md-2 pb-sm-0 pb-0 mb-lg-2 mb-md-1 mb-sm-0 mb-0">
                        <div className="container">
                            <div className="row gap-md-0 gap-sm-4 gap-4">
                                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                                    <h2 className="text-lg-start text-md-start text-sm-center text-center">FINANCIAL GOALS
                                        ARE OUR PRIORITY</h2>
                                    <p
                                      className="text-lg-start text-md-start text-sm-center text-center mt-lg-4 mt-md-2 mt-sm-2 mt-2 pb-4 ">
                                        Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Odio possimus quo ducimus
                                        suscipit
                                        officiis natus impedit et deleniti omnis, sint, facere aliquam asperiores
                                        dolores
                                        .</p>
                                    <p className="text-lg-start text-md-start text-sm-center text-center pb-4 ">
                                        Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Odio possimus quo ducimus
                                        suscipit
                                        officiis natus impedit et deleniti omnis, sint, facere aliquam asperiores
                                        dolores
                                        .</p>

                                    <div
                                        className="serives-btn justify-content-md-start justify-content-ms-center justify-content-center d-flex pt-lg-4 pt-md-2 pt-sm-2 pt-2">
                                        <a className="btn-hover1" href="#">Get The Card</a>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center abt" data-aos="fade-down">
                                    <div className="position-relative">
                                        <figure className="abut-hero-img1"><img src={Hero1} alt="img" /></figure>
                                        <figure className="abut-hero-img2"><img src={Hero2} alt="img" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default AboutHero
