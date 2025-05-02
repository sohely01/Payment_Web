import React, { useEffect } from "react";
import Gateway from "../../assets/images/onlinepay.svg";
import Icon1 from "../../assets/images/icon/gate-icon1.png";
import Icon2 from "../../assets/images/icon/gate-icon2.png";
import Icon3 from "../../assets/images/icon/gate-icon3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home_gateway = ({ loading, error, data }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return <div className="text-white text-center py-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center py-5">Error: {error}</div>;
    }

    const { heading, description, sectionData } = data || {};
    let parsedSectionData = [];

    try {
        parsedSectionData = typeof data?.sectionData === "string"
            ? JSON.parse(data.sectionData)
            : data?.sectionData || [];
    } catch (error) {
        console.error("Error parsing sectionData:", error);
    }
    const icons = [Icon1, Icon2, Icon3];

    return (
        <div>
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
                            <h1 className="lh" style={{ lineHeight: "50px" }}>
                                {heading || "Loading Heading..."}
                            </h1>
                            <h5 className="pt-lg-4 pt-md-3 pt-sm-2 pt-2 pb-2" style={{ fontSize: "18px" }}>
                                {description || "Loading description..."}
                            </h5>

                            {Array.isArray(parsedSectionData) &&
                                parsedSectionData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="gate d-flex mt-4 flex-md-row flex-sm-column flex-column align-items-center"
                                    >
                                        <figure className="d-flex align-items-center">
                                            <img src={icons[index % icons.length]} alt={`gateway-icon-${index}`} />
                                        </figure>
                                        <div className="ms-lg-3 ms-md-3 ms-sm-0 ms-0 mt-md-0 mt-sm-4 mt-6">
                                            <h4 className="pb-2 mt-4" style={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>{item.heading}</h4>
                                            <p className="p-f-s mt-6" style={{ fontSize: '18px' }}>{item.description}</p>
                                        </div>
                                    </div>
                                ))}

                            <div className="gate-link text-lg-start text-md-start text-sm-center text-center mt-9">
                                <Link to='/contact'
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

export default Home_gateway;
