import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  AboutHero,
  AboutFinance,
  BannerGateway,
  AboutCounter,
  AboutTesti
} from "../components/index";
import { findOneSection } from '../service/index.js';

const AboutPage = () => {
  const [dataForAboutHero, setDataForAboutHero] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForAboutFianance, setDataForAboutFianance] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const [dataForAboutGateway, setDataForAboutGateway] = useState({
    loading: false,
    error: null,
    data: null,
  });


  // About Hero

  const getDataForAboutHeroSection = async () => {
    setDataForAboutHero({ loading: true, error: null, data: null });

    try {
      const body = { id: "7" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForAboutHero({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForAboutHero({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForAboutHero({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };



  // About Fianance

  const getDataForAboutFinanaceSection = async () => {
    setDataForAboutFianance({ loading: true, error: null, data: null });

    try {
      const body = { id: "30" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForAboutFianance({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForAboutFianance({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForAboutFianance({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };


  // About Gateway

  const getDataForAboutGatewaySection = async () => {
    setDataForAboutGateway({ loading: true, error: null, data: null });

    try {
      const body = { id: "10" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForAboutGateway({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForAboutGateway({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForAboutGateway({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };

  useEffect(() => {
    getDataForAboutHeroSection();
    getDataForAboutFinanaceSection();
    getDataForAboutGatewaySection();
  }, []);



  return (
    <div className="bg" style={{ backgroundColor: 'black' }}>
      <Header />
      <AboutHero loading={dataForAboutHero.loading}
        error={dataForAboutHero.error}
        data={dataForAboutHero.data} />


      <AboutFinance loading={dataForAboutFianance.loading}
        error={dataForAboutFianance.error}
        data={dataForAboutFianance.data} />


      <BannerGateway loading={dataForAboutGateway.loading}
        error={dataForAboutGateway.error}
        data={dataForAboutGateway.data} />

      {/* <AboutCounter /> */}
      {/* <AboutTesti /> */}
      <Footer />
    </div>
  )
}


export default AboutPage
