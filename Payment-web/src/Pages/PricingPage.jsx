import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Pricing_Hero,
  PricingFaq
} from "../components/index.js";
import { findOneSection } from '../service/index.js';

const PricingPage = () => {


  const [dataForPricingHero, setDataForPricingHero] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForPricingFaq, setDataForPricingFaq] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const getDataForPricingHeroSection = async () => {
    setDataForPricingHero({ loading: true, error: null, data: null });

    try {
      const body = { id: "22" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForPricingHero({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForPricingHero({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForPricingHero({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };


  const getDataForPricingFaqSection = async () => {
    setDataForPricingFaq({ loading: true, error: null, data: null });

    try {
      const body = { id: "24" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForPricingFaq({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForPricingFaq({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForPricingFaq({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };




  useEffect(() => {
    getDataForPricingHeroSection();
    getDataForPricingFaqSection();
  }, []);


  return (
    <div className="bg" style={{ backgroundColor: 'black' }}>
      <Header />


      <Pricing_Hero loading={dataForPricingHero.loading}
        error={dataForPricingHero.error}
        data={dataForPricingHero.data} />


      <PricingFaq loading={dataForPricingFaq.loading}
        error={dataForPricingFaq.error}
        data={dataForPricingFaq.data} />


      <Footer />
    </div>
  )
}

export default PricingPage
