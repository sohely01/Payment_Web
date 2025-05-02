import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Service1 from "../../assets/images/index/lady-mobile.png";
const FeaturesDetails = () => {
    const [serviceData, setserviceData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:8989/api/v1/findonesection", {
                id: 11,
            });
            const res = response.data;

            if (res?.status === "fail") {
                alert("API failed");
                return;
            }

            // Parse sectionData if it's a string
            const sectionData =
                typeof res.data.sectionData === "string"
                    ? JSON.parse(res.data.sectionData)
                    : res.data.sectionData;

            setserviceData({ ...res.data, sectionData });
            console.log("Service Data:", res.data);
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
            <div className="d-flex gap-3">

                {Array.isArray(serviceData?.sectionData) &&
                    serviceData.sectionData.map((item, index) => (
                        <div className="offers" key={index}>
                            <h5 className="mb-2" style={{ fontSize: "18px", fontWeight: "700" }}>{item.heading}</h5>
                            <p className="p-f-s">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturesDetails
