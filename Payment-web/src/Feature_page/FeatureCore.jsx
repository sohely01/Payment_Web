import React from 'react'
import Mobile from '../assets/images/feauter/mobile.png'

const FeatureCore = () => {
  return (
    <div>
               <section className="core">
            <div className="container">
                <h2 className="text-center">CORE FEATURES</h2>
                <p className="core-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui repellat,
                    consectetur adipisicing elit.blanditiis rem earum dolore corrupti vel!</p>
                <div className="row d-flex gap-md-0 gap-sm-5 gap-5">
                    <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-up">
                        <div className="core-card">
                            <h5>Secure Transactions</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non veniam reiciendis
                                molestiae.</p>
                        </div>
                        <div className="core-card">
                            <h5>Seamless Integration</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non veniam reiciendis
                                molestiae.</p>
                        </div>
                        <div className="core-card">
                            <h5>Robust Security</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non veniam reiciendis
                                molestiae.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center" data-aos="zoom-in">
                        <figure><img src={Mobile} alt="img" className="moving" /></figure>
                    </div>
                    <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-down">
                        <div className="core-card1">
                            <h5>Multiple Payment</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non veniam reiciendis
                                molestiae.</p>
                        </div>
                        <div className="core-card1">
                            <h5>Customizable Checkout</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non veniam reiciendis
                                molestiae.</p>
                        </div>
                        <div className="core-card1">
                            <h5>Reporting and Analytics</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non veniam reiciendis
                                molestiae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeatureCore
