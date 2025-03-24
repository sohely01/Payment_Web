import React from 'react'
import Service1 from '../assets/images/feauter/lady-mobile.png'
import Service2 from '../assets/images/icon/whitStar.png'


const FeatureServices = () => {
  return (
    <div>
                 <section className="services">
            <div className="container">
                <div className="row gap-md-0 gap-sm-4 gap-4">
                    <div className="col-lg-6 col-md-6" data-aos="fade-down">
                        <h2 className="text-lg-start text-md-start text-sm-center text-center">EXCEPTIONAL SERVICES AND
                            SOLUTIONS</h2>
                        <p
                            className="text-lg-start text-md-start text-sm-center text-center mt-lg-4 mt-md-2 mt-sm-2 mt-2 pb-4 ">
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Odio possimus quo ducimus
                            suscipit
                            officiis natus impedit et deleniti omnis, sint, facere aliquam asperiores dolores qui id
                            mollitia obcaecati error perferendis.</p>
                        <div className=" d-flex  justify-content-center gap-lg-4 gap-md-3 gap-sm-2 gap-2">
                            <div className="offers">
                                <h5 className="mb-2">Any Time Transection</h5>
                                <p className="p-f-s">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consequatur!</p>
                            </div>
                            <div className="offers">
                                <h5 className=" mb-2">Zero Hidden Cost</h5>
                                <p className="p-f-s">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consequatur!</p>
                            </div>
                        </div>
                        <div
                            className="serives-btn justify-content-md-start justify-content-ms-center justify-content-center d-flex">
                            <a className="btn-hover1" href="#">Learn More</a>
                            <div className="d-flex align-items-center">
                                <a className="ps-4" href="#">Register Now </a>
                                <i className="fa-solid fa-greater-than ps-md-3 ps-sm-1 ps-0"></i>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center sevices_img"
                        data-aos="fade-up">
                        <div className="position-relative">
                            <div className="social-rating">
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <span><i className="fa-brands fa-youtube"></i></span>
                                        <div>
                                            <h6>Youtube Premium</h6>
                                            <p>9 June 2023</p>
                                        </div>
                                    </div>
                                    <div className="d-flex text-pink">
                                        <p>-$</p>
                                        <p className="count">3.00</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <span><i className="fa-brands fa-facebook"></i></span>
                                        <div>
                                            <h6>Facebook Ads</h6>
                                            <p>5 June 2023</p>
                                        </div>
                                    </div>
                                    <div className="d-flex text-green">
                                        <p>+$</p>
                                        <p className="count">21.00</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <span><i className="fa-brands fa-pinterest-p"></i></span>
                                        <div>
                                            <h6>Pinterest</h6>
                                            <p>2 June 2023</p>
                                        </div>
                                    </div>
                                    <div className="d-flex text-pink">
                                        <p>-$</p>
                                        <p className="count">14.00</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <span><i className="fa-brands fa-twitter"></i></span>
                                        <div>
                                            <h6>Twitter</h6>
                                            <p>1 June 2023</p>
                                        </div>

                                    </div>
                                    <div className="d-flex text-green">
                                        <p>+$</p>
                                        <p className="count">51.00</p>
                                    </div>
                                </div>
                            </div>
                            <figure><img src={Service1} alt="sevice_img2" /></figure>
                            <figure><img src={Service2} alt="sevice_img3" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeatureServices
