import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const PricingEco = () => {
    const [pricingEco, setPricingEco] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:8989/api/v1/findonesection", {
                id: 23,
            });

            const res = response.data;

            if (res?.status === "fail") {
                alert("API failed to fetch pricing section");
                return;
            }

            let sectionData = [];

            try {
                const raw = res.data.sectionData;
                const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
                sectionData = Array.isArray(parsed) ? parsed : [];
            } catch (err) {
                console.warn("Invalid JSON in sectionData:", res.data.sectionData);
            }

            setPricingEco({ ...res.data, sectionData });
        } catch (error) {
            console.error("Error fetching pricing section data:", error);
        }
    };


    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchData();
    }, []);

    return (
        <div>
            <div className="economical">
                <h1 className="text-md-start text-sm-center text-center">

                    {pricingEco?.heading}
                </h1>
                <p
                    className="text-md-start text-sm-center text-center p-md-0 p-sm-2 p-2"
                    style={{ fontSize: "18px" }}
                >
                    {pricingEco?.description}
                </p>
            </div>

            {/* Map Pricing Plans */}
            {pricingEco?.sectionData?.length > 0 ? (
                pricingEco.sectionData.map((item, index) => (
                    <div class="pric-list">
                        <h6>Personal</h6>
                        <div class="d-flex">
                            <div class="d-flex justify-content-between gap-md-5 gap-sm-3 gap-3">
                                <div class="d-flex pric-sup align-items-center">
                                    <h2>{item.heading}</h2>
                                    <p>/month</p>
                                </div>
                                <p class="p-f-s">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-muted">No pricing data available.</p>
            )}

        </div>
    );
};

export default PricingEco;
