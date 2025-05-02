import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutGoals from "./AboutGoals";

const AboutHero = ({ loading, error, data }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return <div className="text-white text-center py-5">Loading...</div>;
    }

    if (error) {
        return; // you can add an error display if you want
    }
    const { heading, description, s_image } = data || {};

    return (
        <div>
            <section>
                <div className="about-hero container">
                    <h1 className="text-center" style={{ lineHeight: '81px' }}>{heading || "loading heading"}</h1>
                    <p className="text-center about-p" style={{ fontSize: "16px" }}>{description || "loading description"}</p>
                    <div className="services  pb-lg-4 pb-md-2 pb-sm-0 pb-0 mb-lg-2 mb-md-1 mb-sm-0 mb-0">
                        <div className="container">
                            <div className="row gap-md-0 gap-sm-4 gap-4">
                                <AboutGoals />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutHero
