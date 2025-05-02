import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios"; import Pricing1 from '../../assets/images/index/pricinge.png'
import Pricing2 from '../../assets/images/icon/hero_star.png'

const Home_Pricing = () => {
    const [pricingData, setPricingData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8989/api/v1/findonesection",
                {
                    id: 15,
                }
            );
            const res = response.data;

            if (res?.status === "fail") {
                alert("API failed");
                return;
            }

            setPricingData(res.data);
            console.log("About Data:", res.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchData();
    }, []);
    return (
        <div>
            <section className="pricing pricing-b-g">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center pricing-bg" data-aos="fade-up">
                            <div>
                                <figure><img src={Pricing1} className="moving" /></figure>
                                <figure><img src={Pricing2} alt="pric-img2" /></figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-5" data-aos="fade-down">
                            <h2 className=" text-md-start text-sm-center text-center" style={{ lineHeight: "50PX" }}>{pricingData?.heading || "loading heading"}</h2>
                            <p className="text-md-start text-sm-center text-center p-md-0 p-sm-2 p-2" style={{ fontSize: '16PX' }}>{pricingData?.description || "loading description"}
                                Incidunt
                                excepturi enim vero soluta veritatis quis reprehenderit.</p>
                            <div className="pric-list">
                                <h6>Personal</h6>
                                <div className="d-flex">
                                    <div className="mt-3 me-3"><i className="fa-solid fa-check"></i></div>

                                    <div className="d-flex justify-content-between gap-1">
                                        <p className="p-f-s">Lorem ipsum dolor sit amet, consectetur adipiset quatit. Dolorem,
                                            quia?</p>
                                        <div className="d-flex pric-sup">
                                            <h2>$</h2>
                                            <h2 >1.54</h2>
                                            <p>/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pric-list second">
                                <h6>Business</h6>
                                <div className="d-flex justify-content-between">
                                    <div className="mt-3 me-3"><i className="fa-solid fa-check"></i></div>
                                    <div className="d-flex justify-content-between">
                                        <p className="p-f-s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
                                            quia?</p>
                                        <div className="d-flex pric-sup ">
                                            <h2>$</h2>
                                            <h2>4.54</h2>
                                            <p>/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-md-start text-sm-center text-center pt-lg-4 pt-md-2 pt-sm-0 pt-1">
                                <a className="btn-hover1">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Pricing
