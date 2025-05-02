import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import Hero1 from '../../assets/images/about/lady-mobile.png';
import Hero2 from '../../assets/images/icon/whitStar.png';
import { Link } from "react-router-dom";

const AboutGoals = () => {
    const [goalData, setGoalData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8989/api/v1/findonesection",
                { id: 30 }
            );
            const res = response.data;

            if (res?.status === "fail") {
                alert("API failed");
                return;
            }

            setGoalData(res.data);
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
        <div className="row">
            <div className="col-lg-6 col-md-6" data-aos="fade-up">
                <h2
                    className="text-lg-start text-md-start text-sm-center"
                    style={{ lineHeight: '51px', fontSize: "46px" }}
                >
                    {goalData?.heading}
                </h2>
                <p
                    className="text-lg-start text-md-start text-sm-center text-center mt-lg-4 mt-md-2 mt-sm-2 mt-2 pb-4"
                    style={{ fontSize: "24px" }}>
                    {goalData?.description}
                </p>
                <div className="serives-btn justify-content-md-start justify-content-ms-center justify-content-center d-flex pt-lg-4 pt-md-2 pt-sm-2 pt-2">
                    <Link to='/contact'
                        className="btn-hover1"> Get The Card </Link>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center abt" data-aos="fade-down">
                <div className="position-relative">
                    <figure className="abut-hero-img1">
                        <img src={Hero1} alt="img" />
                    </figure>

                </div>
            </div>
        </div>
    );
};

export default AboutGoals;
