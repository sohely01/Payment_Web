import React, { useState, useEffect } from 'react'
import Feature1 from "../../assets/images/feauter/feature-girl.png"
import Feature2 from '../../assets/images/feauter/feature-rect.png'
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";


const FeatureHero = ({ loading, error, data }) => {
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
            <section className="feature-hero" data-aos="zoom-in">
                <div className="container">
                    <h1 className="text-center" style={{ lineHeight: "50px" }}>{heading || "loading"}</h1>
                    <p className="text-center" style={{ fontSize: "18px" }}>{description || "loading"}</p>
                    <div className="position-relative">
                        <div className="featur-video">
                            <a className="video-play-button" href="#">
                                <span className="fa-solid fa-play"></span>
                            </a>

                        </div>
                        <figure className="feature-img"><img src={Feature1} alt="img" />
                        </figure>
                        <figure className="feature-img2"><img src={Feature2} alt="img" />
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeatureHero
