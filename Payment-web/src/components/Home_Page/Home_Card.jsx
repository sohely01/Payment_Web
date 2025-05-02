import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import Icon1 from "../../assets/images/icon/graphe.png";
import Icon2 from "../../assets/images/icon/doller.png";
import Icon3 from "../../assets/images/icon/arow.png";

const Home_Card = () => {
    const [titleSectionData, setTitleSectionData] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchSectionData();
    }, []);

    const fetchSectionData = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8989/api/v1/editsection"
            );
            console.log("TitleSection Data: ", res);

            const res = response.data;

            if (res?.status === "fail") {
                alert("API failed to load home content.");
            } else if (res.data?.titlesection) {
                setTitleSectionData(res.data.titlesection);
            }
        } catch (error) {
            console.error("Error fetching home content:", error);
        }
    };

    const icons = [Icon1, Icon2, Icon3];

    return (
        <div>
            <div className="finanes-card row gap-md-0 gap-sm-4 gap-4">
                {titleSectionData.map((item, index) => (
                    <div
                        key={index}
                        className={`col-lg-4 col-md-4 d-flex justify-content-center pe-lg-3 pe-md-0 pe-sm-3 pe-3 ${index >= titleSectionData.length - 3 ? "mt-5" : ""}`}
                    >
                        <div className="fin-card" data-aos="flip-up">
                            <figure>
                                <img
                                    src={icons[index % icons.length]} // rotating icons
                                    alt={`${item.heading} icon`}
                                />
                            </figure>
                            <h4>{item.heading}</h4>
                            <p className="p-f-s">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home_Card;
