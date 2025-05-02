import React, { useEffect } from 'react';
import Mobile from '../../assets/images/feauter/mobile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCore = ({ loading, error, data }) => {
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
        const parsed = typeof sectionData === 'string' ? JSON.parse(sectionData) : sectionData;
        parsedSectionData = Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('Error parsing sectionData:', error);
    }

    const renderSectionData = (dataArray) => {
        if (!Array.isArray(dataArray)) return null;

        return dataArray.map((item, index) => (
            <div key={index} className={`core-card ${index < 3 ? '' : 'core-card1'}`}>
                <h5 style={{ fontWeight: '900', textAlign: "center", fontSize: '18px' }}>{item.heading}</h5>
                <p style={{ fontWeight: '500', textAlign: "center", fontSize: "15px" }}>{item.description}</p>
            </div>
        ));
    };

    return (
        <div>
            <section className="core">
                <div className="container">
                    <h1 className="text-center">{heading}</h1>
                    <p className="core-p" style={{ fontSize: '18px' }}>{description}</p>

                    <div className="row d-flex gap-md-0 gap-sm-5 gap-5">
                        {/* Left Column */}
                        <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-up">
                            {parsedSectionData.length > 0 ? renderSectionData(parsedSectionData.slice(0, 3)) : 'No data found.'}
                        </div>

                        {/* Center Image */}
                        <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center" data-aos="zoom-in">
                            <figure>
                                <img src={Mobile} alt="mobile" className="moving" />
                            </figure>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-down">
                            {parsedSectionData.length > 0 ? renderSectionData(parsedSectionData.slice(3, 6)) : 'No data found.'}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureCore;
