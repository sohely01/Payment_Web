import React, { useEffect } from "react";
import Gateway from "../../assets/images/onlinepay.svg";
import Icon1 from "../../assets/images/icon/gate-icon1.png";
import Icon2 from "../../assets/images/icon/gate-icon2.png";
import Icon3 from "../../assets/images/icon/gate-icon3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";



// Icons array
const icons = [Icon1, Icon2, Icon3];

const BannerGateway = ({ loading, error, data }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return <div className="text-white text-center py-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center py-5">Error: {error}</div>;
    }

    const { heading = "Loading Heading...", description = "Loading description...", sectionData } = data || {};

    let parsedSectionData = [];

    try {
        const parsed = typeof sectionData === "string" ? JSON.parse(sectionData) : sectionData;
        parsedSectionData = Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Error parsing sectionData:", error);
        parsedSectionData = [];
    }

    return (
        <div>
            {/* Banner Section */}
            <section>
                <div className="container about-banner" data-aos="zoom-in">
                    <div className="d-flex justify-content-lg-end justify-content-md-end justify-content-ms-center justify-content-center">
                        <div className="banner-text">
                            <h3 className="text-md-start text-sm-center text-center">
                                Replacing complexity with simplicity
                            </h3>
                            <p className="text-md-start text-sm-center text-center p-f-s">
                                Streamlining processes to enhance efficiency, eliminating unnecessary steps, and providing straightforward solutions for a smoother experience
                            </p>
                            <div className="visa-btn text-sm-center text-md-start text-center">
                                <Link to='/contact'
                                    className="btn-hover1">
                                    Get The Card
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gateway Section */}
            <section className="gateway">
                <div className="container">
                    <div className="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
                        {/* Left Image */}
                        <div
                            className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center"
                            data-aos="fade-up"
                        >
                            <div className="gateway-bg-img mt-5">
                                <figure>
                                    <img src={Gateway} alt="gateway illustration" className="moving" />
                                </figure>
                            </div>
                        </div>

                        {/* Text + Steps */}
                        <div
                            className="col-lg-6 col-md-6 text-md-start text-sm-center text-center"
                            data-aos="fade-down"
                        >
                            <h1 className="lh" style={{ lineHeight: "50px" }}>{heading}</h1>
                            <h5 className="pt-lg-4 pt-md-3 pt-sm-2 pt-2 pb-2" style={{ fontSize: "18px" }}>{description}</h5>

                            {/* Step Cards */}
                            {parsedSectionData.length > 0 && parsedSectionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="gate d-flex mt-4 flex-md-row flex-sm-column flex-column align-items-center"
                                >
                                    <figure className="d-flex align-items-center">
                                        <img src={icons[index % icons.length]} alt={`icon${index}`} />
                                    </figure>
                                    <div className="ms-lg-3 ms-md-3 ms-sm-0 ms-0 mt-md-0 mt-sm-4 mt-6">
                                        <h4 className="pb-2 mt-4" style={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>{item.heading}</h4>
                                        <p className="p-f-s mt-6" style={{ fontSize: '18px' }}>{item.description}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Button */}
                            <div className="gate-link text-lg-start text-md-start text-sm-center text-center mt-5">
                                <Link to='/about'
                                    className="btn-hover1">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerGateway;
