import React, { useEffect } from 'react';
import Service1 from '../../assets/images/feauter/lady-mobile.png';
import Service2 from '../../assets/images/icon/whitStar.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const FeatureServices = ({ loading, error, data }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return <div className="text-white text-center py-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center py-5">Error: {error}</div>;
    }

    const { heading, description, s_image } = data || {};
    let parsedSectionData = [];

    try {
        parsedSectionData = typeof data?.sectionData === "string"
            ? JSON.parse(data.sectionData)
            : data?.sectionData || [];
    } catch (error) {
        console.error("Error parsing sectionData:", error);
    }
    return (
        <div>
            <section className="services">
                <div className="container">
                    <div className="row gap-md-0 gap-sm-4 gap-4">
                        {/* Left Side Content */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-down">
                            <h1
                                className="text-lg-start text-md-start text-sm-center text-center"
                                style={{ lineHeight: "50px" }}
                            >
                                {heading || "Loading heading..."}
                            </h1>
                            <p
                                className="text-lg-start text-md-start text-sm-center text-center mt-lg-4 mt-md-2 mt-sm-2 mt-2 pb-4"
                                style={{ fontSize: "16px" }}
                            >
                                {description || "Loading description..."}
                            </p>

                            {/* Offers Section */}
                            <div className="d-flex gap-3">
                                {Array.isArray(parsedSectionData) &&
                                    parsedSectionData.map((item, index) => (
                                        <div className="offers" key={index}>
                                            <h5 className="mb-2" style={{ fontSize: "18px", fontWeight: "700" }}>{item.heading}</h5>
                                            <p className="p-f-s">{item.description}</p>
                                        </div>
                                    ))}
                            </div>


                            {/* Buttons */}
                            <div className="serives-btn d-flex justify-content-md-start justify-content-ms-center justify-content-center mt-4">
                                <Link to='/about'
                                    className="btn-hover1">
                                    Learn More
                                </Link>

                                <div className="d-flex align-items-center">
                                    <Link to='/contact'
                                        className="ps-4">
                                        Register Now
                                    </Link>
                                    <i className="fa-solid fa-greater-than ps-md-3 ps-sm-1 ps-0"></i>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Image Section */}
                        <div
                            className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center sevices_img"
                            data-aos="fade-up"
                        >
                            <div className="position-relative">
                                <div className="social-rating">
                                    {[
                                        { icon: 'youtube', title: 'Youtube Premium', date: '9 June 2023', amount: '-$3.00', color: 'text-pink' },
                                        { icon: 'facebook', title: 'Facebook Ads', date: '5 June 2023', amount: '+$21.00', color: 'text-green' },
                                        { icon: 'pinterest-p', title: 'Pinterest', date: '2 June 2023', amount: '-$14.00', color: 'text-pink' },
                                        { icon: 'twitter', title: 'Twitter', date: '1 June 2023', amount: '+$51.00', color: 'text-green' }
                                    ].map((item, index) => (
                                        <div key={index} className="d-flex">
                                            <div className="d-flex">
                                                <span><i className={`fa-brands fa-${item.icon}`}></i></span>
                                                <div>
                                                    <h6>{item.title}</h6>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                            <div className={`d-flex ${item.color}`}>
                                                <p>{item.amount.slice(0, 1)}</p>
                                                <p className="count">{item.amount.slice(1)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <figure>
                                    <img src={Service1} alt="service_img" />
                                </figure>
                                <figure>
                                    <img src={Service2} alt="service_img2" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureServices;
