import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Service1 from "../../assets/images/index/lady-mobile.png";
import { Link } from "react-router-dom";

const Home_Services = ({ loading, error, data }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return <div className="text-white text-center py-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center py-5">Error: {error}</div>;
    }

    const { heading, description } = data || {};
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
                        {/* Text Column */}
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

                        {/* Image Column */}
                        <div
                            className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center sevices_img"
                            data-aos="fade-up"
                        >
                            <div className="position-relative">
                                {/* Social Ratings */}
                                <div className="social-rating">
                                    {[
                                        {
                                            icon: "fa-youtube",
                                            name: "Youtube Premium",
                                            date: "9 June 2023",
                                            type: "debit",
                                            amount: "3.00",
                                        },
                                        {
                                            icon: "fa-facebook",
                                            name: "Facebook Ads",
                                            date: "5 June 2023",
                                            type: "credit",
                                            amount: "21.00",
                                        },
                                        {
                                            icon: "fa-pinterest-p",
                                            name: "Pinterest",
                                            date: "2 June 2023",
                                            type: "debit",
                                            amount: "14.00",
                                        },
                                        {
                                            icon: "fa-twitter",
                                            name: "Twitter",
                                            date: "1 June 2023",
                                            type: "credit",
                                            amount: "51.00",
                                        },
                                    ].map((item, index) => (
                                        <div className="d-flex" key={index}>
                                            <div className="d-flex">
                                                <span>
                                                    <i className={`fa-brands ${item.icon}`}></i>
                                                </span>
                                                <div>
                                                    <h6>{item.name}</h6>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                            <div
                                                className={`d-flex ${item.type === "credit" ? "text-green" : "text-pink"
                                                    }`}
                                            >
                                                <p>{item.type === "credit" ? "+$" : "-$"}</p>
                                                <p className="count">{item.amount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <figure>
                                    <img src={Service1} alt="Service Illustration" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home_Services;
