import React from 'react'
import Gateway from '../assets/images/index/gateway-1.png'
import Icon1 from '../assets/images/icon/gate-icon1.png'
import Icon2 from '../assets/images/icon/gate-icon2.png'
import Icon3 from '../assets/images/icon/gate-icon3.png'


const Home_gateway = () => {
  return (
    <div>
               <section className="gateway">
            <div className="container">
                <div className="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
                        <div className=" gateway-bg-img mt-5 ">
                            <figure><img src={Gateway} alt="gate_img1" className="moving" /></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6  text-md-start text-sm-center text-center" data-aos="fade-down">
                        <h2>SIMPLIFY YOUR PAYMENT PROCESSES</h2>
                        <p className="pt-lg-4 pt-md-3 pt-sm-2 pt-2 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Perferendis iure eius autem
                            beatae
                            mollitia quasi, neque magni excepturi velit ullam sunt eos minima.</p>
                        <div
                            className="gate mt-md-3 mt-sm-0 mt-4   d-flex flex-md-row flex-sm-column flex-column align-items-center">
                            <figure className="d-flex align-items-center"><img src={Icon1}
                                    alt="gate-img1" /></figure>
                            <div className="ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                                <h5 className="pb-2">Create Account</h5>
                                <p className="p-f-s">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum
                                    corporis
                                    voluptatibus nihil? Facilis, sunt.</p>
                            </div>
                        </div>
                        <div className="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                            <figure className="d-flex align-items-center"><img src={Icon2}
                                    alt="gate-img2" /></figure>
                            <div className="ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                                <h5 className="pb-2">User Configuration</h5>
                                <p className="p-f-s">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum
                                    corporis
                                    voluptatibus nihil? Facilis, sunt.</p>
                            </div>
                        </div>
                        <div className="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                            <figure className="d-flex align-items-center"><img src={Icon3}
                                    alt="gate-img3" /></figure>
                            <div className="ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                                <h5 className="pb-2">Enjoy Full Access</h5>
                                <p className="p-f-s">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum
                                    corporis
                                    voluptatibus nihil? Facilis, sunt.</p>
                            </div>
                        </div>
                        <div className="gate-link text-lg-start text-md-start text-sm-center text-center">
                            <a className="btn-hover1" href="about.html">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home_gateway
